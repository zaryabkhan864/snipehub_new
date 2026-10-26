import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { TbBellRinging } from 'react-icons/tb';
import { BsCollectionFill, BsWallet2 } from 'react-icons/bs';
import { VscGraph } from 'react-icons/vsc';
import { AiTwotoneFileExclamation, AiOutlineRight } from 'react-icons/ai';
import { IoIosSettings } from 'react-icons/io';
import { BiSupport } from 'react-icons/bi';
import { FiLogOut, FiMenu, FiX, FiBell, FiImage, FiTrash2 } from 'react-icons/fi';
import { COLLECTIONS, getCollection } from '../data/collections';
import { useStore, useFloors, describeAlert } from '../store/AppStore';
import { dateTime, price } from '../lib/format';
import { SearchInput, Toasts } from '../ui';

const mainLinks = [
    { to: '/', label: 'Dashboard', icon: <FaHome />, end: true },
    { to: '/nft', label: 'My NFTs', icon: <FiImage /> },
    { to: '/smartalert', label: 'Smart Alerts', icon: <TbBellRinging /> },
    { to: '/topcollections', label: 'Top Collections', icon: <BsCollectionFill /> },
    { to: '/marketoverview', label: 'Market Overview', icon: <VscGraph /> },
    { to: '/stakingcompare', label: 'Staking Compare', icon: <AiTwotoneFileExclamation /> },
];

const bottomLinks = [
    { to: '/settings', label: 'Settings', icon: <IoIosSettings /> },
    { to: '/support', label: 'Support', icon: <BiSupport /> },
];

function SideNav({ onNavigate }) {
    const { dispatch } = useStore();
    const navigate = useNavigate();
    const logout = () => {
        dispatch({ type: 'wallet/disconnect' });
        onNavigate && onNavigate();
        navigate('/home');
    };
    return (
        <nav className="sidenav" aria-label="Main">
            <Link to="/" className="brand" onClick={onNavigate}>
                <img src="/assets/images/SnipeHub.png" alt="SnipeHub" width="157" height="33" />
            </Link>
            <div className="nav-group">
                {mainLinks.map((l) => (
                    <NavLink key={l.to} to={l.to} end={l.end} className="nav-link" onClick={onNavigate}>
                        <span className="nav-icon">{l.icon}</span>{l.label}
                    </NavLink>
                ))}
            </div>
            <hr />
            <NavLink to="/watchlist" className="nav-link watch-link" onClick={onNavigate}>
                Watchlist <AiOutlineRight className="ms-auto" />
            </NavLink>
            <div className="nav-group nav-bottom">
                {bottomLinks.map((l) => (
                    <NavLink key={l.to} to={l.to} className="nav-link" onClick={onNavigate}>
                        <span className="nav-icon">{l.icon}</span>{l.label}
                    </NavLink>
                ))}
                <button type="button" className="nav-link" onClick={logout}>
                    <span className="nav-icon"><FiLogOut /></span>Logout
                </button>
            </div>
        </nav>
    );
}

// Close a popover when clicking outside it or pressing Escape
function useDismiss(open, setOpen) {
    const ref = useRef(null);
    useEffect(() => {
        if (!open) return undefined;
        const onDown = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
        const onKey = (e) => e.key === 'Escape' && setOpen(false);
        document.addEventListener('mousedown', onDown);
        document.addEventListener('keydown', onKey);
        return () => { document.removeEventListener('mousedown', onDown); document.removeEventListener('keydown', onKey); };
    }, [open, setOpen]);
    return ref;
}

function GlobalSearch() {
    const [q, setQ] = useState('');
    const [open, setOpen] = useState(false);
    const ref = useDismiss(open, setOpen);
    const navigate = useNavigate();
    const results = q.trim()
        ? COLLECTIONS.filter((c) => `${c.name} ${c.creator}`.toLowerCase().includes(q.trim().toLowerCase())).slice(0, 6)
        : [];
    const go = (id) => { setQ(''); setOpen(false); navigate(`/collection/${id}`); };
    return (
        <div className="global-search" ref={ref}>
            <SearchInput value={q} onChange={(v) => { setQ(v); setOpen(true); }} placeholder="Search collections"
                onFocus={() => setOpen(true)}
                onKeyDown={(e) => { if (e.key === 'Enter' && results[0]) go(results[0].id); }} />
            {open && q.trim() && (
                <div className="popover search-results" role="listbox">
                    {results.length ? results.map((c) => (
                        <button key={c.id} type="button" className="result" onClick={() => go(c.id)}>
                            <img src={c.avatar} alt="" width="32" height="32" />
                            <span><strong>{c.name}</strong><small>{c.creator}</small></span>
                        </button>
                    )) : <p className="muted pad">No collection matches “{q}”.</p>}
                </div>
            )}
        </div>
    );
}

function Notifications() {
    const { state, dispatch } = useStore();
    const [open, setOpen] = useState(false);
    const ref = useDismiss(open, setOpen);
    const unread = state.notifications.filter((n) => !n.read).length;
    const toggle = () => {
        setOpen((o) => !o);
        if (!open && unread) window.setTimeout(() => dispatch({ type: 'notes/readAll' }), 1500);
    };
    return (
        <div className="relative" ref={ref}>
            <button type="button" className="icon-btn" onClick={toggle} aria-label={`Notifications${unread ? `, ${unread} unread` : ''}`} aria-expanded={open}>
                <FiBell />
                {unread > 0 && <span key={unread} className="badge pop">{unread}</span>}
            </button>
            {open && (
                <div className="popover notes">
                    <div className="popover-head">
                        <strong>Notifications</strong>
                        {state.notifications.length > 0 && (
                            <button type="button" className="link-btn" onClick={() => dispatch({ type: 'notes/clear' })}>Clear all</button>
                        )}
                    </div>
                    {state.notifications.length ? state.notifications.slice(0, 12).map((n) => {
                        const c = getCollection(n.collectionId);
                        return (
                            <Link key={n.id} to={`/collection/${n.collectionId}`} className={`note ${n.read ? '' : 'unread'}`} onClick={() => setOpen(false)}>
                                {c && <img src={c.avatar} alt="" width="36" height="36" />}
                                <span><span>{n.title}</span><small>{dateTime(n.ts)}</small></span>
                            </Link>
                        );
                    }) : <p className="muted pad">No notifications yet. Set a Smart Alert and you’ll be told here when it hits.</p>}
                </div>
            )}
        </div>
    );
}

function WalletButton() {
    const { state, dispatch, toast } = useStore();
    const connected = state.wallet.connected;
    const click = () => {
        dispatch({ type: connected ? 'wallet/disconnect' : 'wallet/connect' });
        toast(connected ? 'Wallet disconnected' : 'Demo wallet connected');
    };
    return (
        <button type="button" className={`icon-btn ${connected ? 'connected' : ''}`} onClick={click}
            title={connected ? `Connected: ${state.wallet.address} — click to disconnect` : 'Connect wallet'}
            aria-label={connected ? 'Disconnect wallet' : 'Connect wallet'}>
            <BsWallet2 />
        </button>
    );
}

function Profile() {
    const { state } = useStore();
    return (
        <Link to="/settings" className="profile" title="Profile & settings">
            <img src="/assets/images/profile_image.png" alt="" width="40" height="40" />
            <span className="profile-text">
                <strong>{state.profile.name}</strong>
                <small>ID: {state.profile.id}</small>
            </span>
        </Link>
    );
}

export function AlertsPanel({ inline = false }) {
    const { state, dispatch, toast } = useStore();
    const floors = useFloors();
    const alerts = state.alerts;
    return (
        <aside className={inline ? 'alerts-inline' : 'alerts-panel'} aria-label="Your alerts">
            <div className="panel-card">
            <div className="panel-head">
                <h2>Alerts</h2>
                <Link to="/smartalert" className="link-btn">+ New</Link>
            </div>
            {alerts.length === 0 && <p className="muted">No alerts yet. Create one from Smart Alerts.</p>}
            <ul className="alert-list">
                {alerts.map((a) => {
                    const c = getCollection(a.collectionId);
                    if (!c) return null;
                    return (
                        <li key={a.id} className={`alert-item ${a.active ? '' : 'done'}`}>
                            <Link to={`/collection/${c.id}`}><img src={c.avatar} alt="" width="40" height="40" /></Link>
                            <div className="alert-body">
                                <strong>{c.name}</strong>
                                <span>{a.type === 'price' ? `${a.direction === 'above' ? '≥' : '≤'} ${price(a.target)}` : `${a.direction === 'up' ? '+' : a.direction === 'down' ? '−' : '±'}${a.target}%`}</span>
                                <small>{a.active ? `Now ${price(floors[c.id])}` : `Hit ${dateTime(a.triggeredAt)}`}</small>
                            </div>
                            <div className="alert-actions">
                                {!a.active && (
                                    <button type="button" className="mini-btn" onClick={() => { dispatch({ type: 'alert/rearm', id: a.id, basePrice: floors[c.id] }); toast('Alert switched on again'); }}>Re-arm</button>
                                )}
                                <button type="button" className="icon-only" aria-label={`Delete alert: ${describeAlert(a)}`}
                                    onClick={() => { dispatch({ type: 'alert/remove', id: a.id }); toast('Alert deleted'); }}>
                                    <FiTrash2 />
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
            </div>
        </aside>
    );
}

export default function AppLayout() {
    const [drawer, setDrawer] = useState(false);
    const { state } = useStore();
    const location = useLocation();

    useEffect(() => { setDrawer(false); }, [location.pathname]);
    useEffect(() => {
        document.body.style.overflow = drawer ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [drawer]);

    return (
        <div className="app-shell">
            <aside className="sidebar"><SideNav /></aside>

            {/* Mobile drawer */}
            <div className={`drawer-backdrop ${drawer ? 'show' : ''}`} onClick={() => setDrawer(false)} aria-hidden="true" />
            <aside className={`drawer ${drawer ? 'open' : ''}`} aria-hidden={!drawer}>
                <button type="button" className="icon-btn drawer-close" onClick={() => setDrawer(false)} aria-label="Close menu"><FiX /></button>
                <SideNav onNavigate={() => setDrawer(false)} />
            </aside>

            <div className="main-col">
                <header className="topbar">
                    <button type="button" className="icon-btn menu-btn" onClick={() => setDrawer(true)} aria-label="Open menu" aria-expanded={drawer}><FiMenu /></button>
                    <Link to="/" className="topbar-brand"><img src="/assets/images/SnipeHub.png" alt="SnipeHub" width="120" height="25" /></Link>
                    <GlobalSearch />
                    <div className="topbar-actions">
                        <span className="demo-pill" title="Prices and collections are sample data">Demo data</span>
                        <Notifications />
                        <WalletButton />
                        <Profile />
                    </div>
                </header>

                <div className="content-row">
                    <main className="page">
                        {!state.wallet.connected && location.pathname !== '/settings' && (
                            <div className="banner-note">Your wallet is disconnected. <Link to="/nft">Connect it</Link> to see your NFTs.</div>
                        )}
                        <div key={location.pathname} className="page-enter"><Outlet /></div>
                    </main>
                    <AlertsPanel />
                </div>
            </div>
            <Toasts />
        </div>
    );
}
