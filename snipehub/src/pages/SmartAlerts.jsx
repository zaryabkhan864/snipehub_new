import React, { useMemo, useState } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { FiArrowLeft, FiMinus, FiPlus } from 'react-icons/fi';
import { COLLECTIONS, getCollection } from '../data/collections';
import { useStore, useFloors, describeAlert } from '../store/AppStore';
import { price } from '../lib/format';
import { Change, Empty, PageHeader, SearchInput, Verified } from '../ui';
import NotFound from './NotFound';
import { AlertsPanel } from '../layout/AppLayout';

// Step 1 — pick a collection (old /smartalert)
export function SmartAlertSelect() {
    const [q, setQ] = useState('');
    const floors = useFloors();
    const { state } = useStore();
    const list = useMemo(() => COLLECTIONS.filter((c) => c.name.toLowerCase().includes(q.trim().toLowerCase())), [q]);
    const counts = state.alerts.reduce((m, a) => ({ ...m, [a.collectionId]: (m[a.collectionId] || 0) + (a.active ? 1 : 0) }), {});

    return (
        <>
            <PageHeader title="Select NFT" accent="Collection" />
            <p className="lead">Choose a collection to get notified when its floor price changes.</p>
            <AlertsPanel inline />
            <div className="toolbar"><SearchInput value={q} onChange={setQ} /></div>
            {list.length ? (
                <div className="collection-grid">
                    {list.map((c) => (
                        <Link key={c.id} to={`/smartalert/${c.id}`} className="collection-card">
                            <img src={c.avatar} alt="" width="88" height="88" loading="lazy" />
                            <div>
                                <strong>{c.name} {c.verified && <Verified />}</strong>
                                <span className="row-between"><span>Floor: {price(floors[c.id])}</span><Change value={c.change.day} /></span>
                                <span className="muted small">{counts[c.id] ? `${counts[c.id]} active alert${counts[c.id] > 1 ? 's' : ''}` : 'No alerts yet'}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : <Empty title="No collections found" text="Try a different search." />}
        </>
    );
}

// Steps 2 & 3 — choose alert type, then set the value (old /smartalert2, 3 and 4)
export function SmartAlertSetup() {
    const { id } = useParams();
    const c = getCollection(id);
    const [params, setParams] = useSearchParams();
    const type = params.get('type');
    const floors = useFloors();
    const { dispatch, toast, state } = useStore();
    const navigate = useNavigate();
    const now = c ? floors[c.id] : 0;

    const [target, setTarget] = useState(() => (c ? Math.round(floors[c.id] * 1.05) : 0));
    const [direction, setDirection] = useState('above');
    const [percent, setPercent] = useState(5);
    const [pDirection, setPDirection] = useState('either');
    const [error, setError] = useState('');

    if (!c) return <NotFound />;
    const existing = state.alerts.filter((a) => a.collectionId === c.id && a.active);

    const save = (e) => {
        e.preventDefault();
        let alert;
        if (type === 'price') {
            const t = Number(target);
            if (!t || t <= 0) return setError('Enter a price greater than 0.');
            if (direction === 'above' && t <= now) return setError(`For “rises above”, the target must be higher than today’s floor (${price(now)}).`);
            if (direction === 'below' && t >= now) return setError(`For “drops below”, the target must be lower than today’s floor (${price(now)}).`);
            alert = { collectionId: c.id, type: 'price', direction, target: t, basePrice: now };
        } else {
            const p = Number(percent);
            if (!p || p <= 0 || p > 100) return setError('Enter a percentage between 1 and 100.');
            alert = { collectionId: c.id, type: 'percent', direction: pDirection, target: p, basePrice: now };
        }
        dispatch({ type: 'alert/add', alert });
        toast(`Alert created: ${describeAlert(alert)}`);
        navigate('/smartalert');
        return undefined;
    };

    return (
        <>
            <Link to={type ? `/smartalert/${c.id}` : '/smartalert'} className="back-link"><FiArrowLeft /> {type ? 'Alert type' : 'All collections'}</Link>
            <section className="card alert-setup">
                <img src={c.avatar} alt="" width="72" height="72" className="avatar-lg" />
                {!type && (
                    <>
                        <h1>{c.name} Floor Price Alert</h1>
                        <p className="muted">Get notified when this collection’s floor price reaches a price you choose, or moves by a percentage. Current floor: <strong>{price(now)}</strong></p>
                        <div className="stack">
                            <button type="button" className="btn btn-lg" onClick={() => setParams({ type: 'price' })}>Set Target Floor Price</button>
                            <button type="button" className="btn btn-lg" onClick={() => setParams({ type: 'percent' })}>Set Target Floor % movement</button>
                        </div>
                    </>
                )}

                {type === 'price' && (
                    <form onSubmit={save} className="alert-form" noValidate>
                        <h1>Set Target Price Alert</h1>
                        <p className="muted">{c.name} · current floor <strong>{price(now)}</strong></p>
                        <div className="segmented" role="radiogroup" aria-label="Direction">
                            {[['above', 'Rises above'], ['below', 'Drops below']].map(([k, l]) => (
                                <button key={k} type="button" role="radio" aria-checked={direction === k} className={direction === k ? 'on' : ''}
                                    onClick={() => { setDirection(k); setTarget(Math.round(now * (k === 'above' ? 1.05 : 0.95))); setError(''); }}>{l}</button>
                            ))}
                        </div>
                        <label className="field">
                            <span>Floor price (CRO)</span>
                            <input type="number" min="0" step="0.01" value={target} onChange={(e) => { setTarget(e.target.value); setError(''); }} inputMode="decimal" />
                        </label>
                        {error && <p className="error" role="alert">{error}</p>}
                        <button type="submit" className="btn btn-lg">Set Target Floor Price</button>
                    </form>
                )}

                {type === 'percent' && (
                    <form onSubmit={save} className="alert-form" noValidate>
                        <h1>Set Floor Price % Movement Alert</h1>
                        <p className="muted">{c.name} · current floor <strong>{price(now)}</strong></p>
                        <div className="segmented" role="radiogroup" aria-label="Direction">
                            {[['up', 'Goes up'], ['down', 'Goes down'], ['either', 'Either way']].map(([k, l]) => (
                                <button key={k} type="button" role="radio" aria-checked={pDirection === k} className={pDirection === k ? 'on' : ''} onClick={() => setPDirection(k)}>{l}</button>
                            ))}
                        </div>
                        <div className="stepper" aria-label="Percentage">
                            <button type="button" aria-label="Decrease" onClick={() => { setPercent((p) => Math.max(1, Number(p) - 1)); setError(''); }}><FiMinus /></button>
                            <label><input type="number" min="1" max="100" value={percent} onChange={(e) => { setPercent(e.target.value); setError(''); }} inputMode="numeric" /><span>%</span></label>
                            <button type="button" aria-label="Increase" onClick={() => { setPercent((p) => Math.min(100, Number(p) + 1)); setError(''); }}><FiPlus /></button>
                        </div>
                        <p className="muted small">
                            Triggers when the floor reaches{' '}
                            {pDirection !== 'down' && <strong>{price(now * (1 + Number(percent || 0) / 100))}</strong>}
                            {pDirection === 'either' && ' or '}
                            {pDirection !== 'up' && <strong>{price(now * (1 - Number(percent || 0) / 100))}</strong>}
                        </p>
                        {error && <p className="error" role="alert">{error}</p>}
                        <button type="submit" className="btn btn-lg">Set Alert</button>
                    </form>
                )}

                {existing.length > 0 && (
                    <div className="existing">
                        <h2>Active alerts for {c.name}</h2>
                        <ul>{existing.map((a) => <li key={a.id}>{describeAlert(a)}</li>)}</ul>
                    </div>
                )}
            </section>
        </>
    );
}
