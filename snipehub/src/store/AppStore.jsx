import React, { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useRef } from 'react';
import { COLLECTIONS, DEMO_OWNED, getCollection } from '../data/collections';
import { price as fmtPrice } from '../lib/format';

// One place for everything the app remembers: wallet, watchlist, alerts and notifications.
// It is saved in the browser (localStorage), so a refresh keeps the user's work.
// Floor prices move a little every few seconds to simulate a live market, and every
// active alert is checked against the new prices — a hit creates a notification.

const STORAGE_KEY = 'snipehub:v1';
const uid = () => Math.random().toString(36).slice(2, 10);

const initialFloors = () => Object.fromEntries(COLLECTIONS.map((c) => [c.id, c.floor]));

const seedState = () => {
    const now = Date.now();
    return {
        wallet: { connected: true, address: '0x7a3f…c91e' },
        profile: { name: "Anddy's Makeover", id: '1234567' },
        watchlist: ['looneycorns', 'night-unicorns', 'rare-land', 'tiger-tribe'],
        alerts: [
            { id: uid(), collectionId: 'looneycorns', type: 'price', direction: 'above', target: 430, basePrice: 412.5, createdAt: now - 3600e3, active: true, triggeredAt: null },
            { id: uid(), collectionId: 'tiger-tribe', type: 'percent', direction: 'either', target: 5, basePrice: 189.9, createdAt: now - 7200e3, active: true, triggeredAt: null },
            { id: uid(), collectionId: 'zebra-squad', type: 'price', direction: 'below', target: 270, basePrice: 280, createdAt: now - 86400e3, active: false, triggeredAt: now - 5400e3 },
        ],
        notifications: [
            { id: uid(), collectionId: 'zebra-squad', title: 'Zebra Squad floor dropped below 270 CRO', ts: now - 5400e3, read: false },
        ],
        settings: { liveUpdates: true },
    };
};

function load() {
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (raw) return { ...seedState(), ...JSON.parse(raw) };
    } catch (e) { /* storage blocked or corrupt — start fresh */ }
    return seedState();
}

function alertHit(alert, current) {
    if (alert.type === 'price') {
        if (alert.direction === 'above') return current >= alert.target;
        if (alert.direction === 'below') return current <= alert.target;
        return false;
    }
    const change = ((current - alert.basePrice) / alert.basePrice) * 100;
    if (alert.direction === 'up') return change >= alert.target;
    if (alert.direction === 'down') return change <= -alert.target;
    return Math.abs(change) >= alert.target;
}

export function describeAlert(a) {
    const c = getCollection(a.collectionId);
    const name = c ? c.name : a.collectionId;
    if (a.type === 'price') return `${name} floor ${a.direction === 'above' ? 'rises above' : 'drops below'} ${fmtPrice(a.target)}`;
    const dir = a.direction === 'up' ? 'rises' : a.direction === 'down' ? 'drops' : 'moves';
    return `${name} floor ${dir} ${a.target}%`;
}

function reducer(state, action) {
    switch (action.type) {
        case 'wallet/connect':
            return { ...state, wallet: { connected: true, address: '0x7a3f…c91e' } };
        case 'wallet/disconnect':
            return { ...state, wallet: { connected: false, address: null } };
        case 'profile/update':
            return { ...state, profile: { ...state.profile, ...action.patch } };
        case 'settings/update':
            return { ...state, settings: { ...state.settings, ...action.patch } };
        case 'watch/toggle': {
            const has = state.watchlist.includes(action.id);
            return { ...state, watchlist: has ? state.watchlist.filter((x) => x !== action.id) : [...state.watchlist, action.id] };
        }
        case 'alert/add':
            return { ...state, alerts: [{ ...action.alert, id: uid(), createdAt: Date.now(), active: true, triggeredAt: null }, ...state.alerts] };
        case 'alert/remove':
            return { ...state, alerts: state.alerts.filter((a) => a.id !== action.id) };
        case 'alert/rearm':
            return { ...state, alerts: state.alerts.map((a) => (a.id === action.id ? { ...a, active: true, triggeredAt: null, basePrice: action.basePrice } : a)) };
        case 'tick': {
            const { floors } = action;
            const fired = [];
            const alerts = state.alerts.map((a) => {
                if (!a.active || floors[a.collectionId] == null) return a;
                if (!alertHit(a, floors[a.collectionId])) return a;
                fired.push(a);
                return { ...a, active: false, triggeredAt: Date.now() };
            });
            if (!fired.length) return state;
            const notes = fired.map((a) => ({ id: uid(), collectionId: a.collectionId, title: `Alert hit: ${describeAlert(a)} (now ${fmtPrice(floors[a.collectionId])})`, ts: Date.now(), read: false }));
            return { ...state, alerts, notifications: [...notes, ...state.notifications].slice(0, 50) };
        }
        case 'notes/readAll':
            return { ...state, notifications: state.notifications.map((n) => ({ ...n, read: true })) };
        case 'notes/clear':
            return { ...state, notifications: [] };
        case 'reset':
            return seedState();
        default:
            return state;
    }
}

const StoreContext = createContext(null);
const FloorContext = createContext(null);
const ToastContext = createContext(null);

export function AppStoreProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, undefined, load);
    const [floors, setFloors] = React.useState(initialFloors);
    const floorsRef = useRef(floors);
    const [toasts, setToasts] = React.useState([]);
    const prevNotes = useRef(state.notifications.length ? state.notifications[0].id : null);

    // Persist
    useEffect(() => {
        try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
    }, [state]);

    const toast = useCallback((text, kind = 'info') => {
        const id = uid();
        setToasts((t) => [...t, { id, text, kind }]);
        window.setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 4000);
    }, []);

    // Live market simulation
    useEffect(() => {
        if (!state.settings.liveUpdates) return undefined;
        const timer = window.setInterval(() => {
            const prev = floorsRef.current;
            const next = { ...prev };
            COLLECTIONS.forEach((c) => {
                if (Math.random() < 0.5) return;
                const drift = (Math.random() - 0.48) * 0.03;
                next[c.id] = Math.max(1, Math.round(prev[c.id] * (1 + drift) * 100) / 100);
            });
            floorsRef.current = next;
            setFloors(next);
            dispatch({ type: 'tick', floors: next });
        }, 5000);
        return () => window.clearInterval(timer);
    }, [state.settings.liveUpdates]);

    // Toast for newly fired alerts
    useEffect(() => {
        const first = state.notifications[0];
        if (first && first.id !== prevNotes.current && !first.read && first.title.startsWith('Alert hit')) {
            toast(first.title, 'alert');
        }
        prevNotes.current = first ? first.id : null;
    }, [state.notifications, toast]);

    const owned = useMemo(
        () => (state.wallet.connected
            ? DEMO_OWNED.map(([cid, idx]) => {
                const c = getCollection(cid);
                const item = c && c.items[idx % c.items.length];
                return item ? { ...item, collectionId: cid, collectionName: c.name } : null;
            }).filter(Boolean)
            : []),
        [state.wallet.connected]
    );

    const api = useMemo(() => ({ state, dispatch, owned, toast }), [state, owned, toast]);

    return (
        <StoreContext.Provider value={api}>
            <FloorContext.Provider value={floors}>
                <ToastContext.Provider value={toasts}>{children}</ToastContext.Provider>
            </FloorContext.Provider>
        </StoreContext.Provider>
    );
}

export const useStore = () => useContext(StoreContext);
export const useFloors = () => useContext(FloorContext);
export const useToasts = () => useContext(ToastContext);

// Current floor and change since the start of the session
export function useFloor(id) {
    const floors = useFloors();
    const c = getCollection(id);
    const now = floors[id] ?? (c && c.floor);
    return { now, base: c ? c.floor : now };
}
