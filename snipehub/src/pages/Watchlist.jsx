import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiCheck, FiTrash2, FiBell } from 'react-icons/fi';
import { COLLECTIONS, getCollection } from '../data/collections';
import { useStore, useFloors } from '../store/AppStore';
import { compact, price } from '../lib/format';
import { Change, Empty, PageHeader, SearchInput, Sparkline, Verified, LivePrice } from '../ui';

export function Watchlist() {
    const { state, dispatch, toast } = useStore();
    const floors = useFloors();
    const list = state.watchlist.map(getCollection).filter(Boolean);

    return (
        <>
            <PageHeader title="Watchlist">
                <Link to="/addcollection" className="btn"><FiPlus /> Add collection</Link>
            </PageHeader>
            {list.length ? (
                <div className="watch-grid">
                    {list.map((c) => (
                        <article key={c.id} className="watch-card">
                            <Link to={`/collection/${c.id}`} className="watch-main">
                                <img src={c.avatar} alt="" width="88" height="88" loading="lazy" />
                                <div>
                                    <strong>{c.name} {c.verified && <Verified />}</strong>
                                    <span className="row-between"><span>Floor: <LivePrice value={floors[c.id]}>{price(floors[c.id])}</LivePrice></span><Change value={c.change.day} /></span>
                                    <span className="row-between muted"><span>Volume: {compact(c.volumes.day)}</span><Change value={c.volumeChange.day} /></span>
                                </div>
                            </Link>
                            <Sparkline data={c.history.slice(-8)} />
                            <div className="watch-actions">
                                <Link to={`/smartalert/${c.id}`} className="mini-btn"><FiBell /> Alert</Link>
                                <button type="button" className="mini-btn danger" onClick={() => { dispatch({ type: 'watch/toggle', id: c.id }); toast(`${c.name} removed from watchlist`); }}>
                                    <FiTrash2 /> Remove
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            ) : (
                <Empty title="Your watchlist is empty" text="Add collections to follow their floor price and volume in one place."
                    action={<Link to="/addcollection" className="btn"><FiPlus /> Add collection</Link>} />
            )}
        </>
    );
}

export function AddCollection() {
    const { state, dispatch, toast } = useStore();
    const floors = useFloors();
    const [q, setQ] = useState('');
    const list = useMemo(() => COLLECTIONS.filter((c) => c.name.toLowerCase().includes(q.trim().toLowerCase())), [q]);

    return (
        <>
            <PageHeader title="Add" accent="Collections">
                <Link to="/watchlist" className="btn btn-outline">Done</Link>
            </PageHeader>
            <div className="toolbar"><SearchInput value={q} onChange={setQ} /></div>
            {list.length ? (
                <div className="collection-grid">
                    {list.map((c) => {
                        const on = state.watchlist.includes(c.id);
                        return (
                            <button key={c.id} type="button" className={`collection-card selectable ${on ? 'selected' : ''}`} aria-pressed={on}
                                onClick={() => { dispatch({ type: 'watch/toggle', id: c.id }); toast(on ? `${c.name} removed` : `${c.name} added to watchlist`); }}>
                                <img src={c.avatar} alt="" width="88" height="88" loading="lazy" />
                                <div>
                                    <strong>{c.name} {c.verified && <Verified />}</strong>
                                    <span className="row-between"><span>Floor: <LivePrice value={floors[c.id]}>{price(floors[c.id])}</LivePrice></span><Change value={c.change.day} /></span>
                                    <span className="add-state">{on ? <><FiCheck /> In watchlist</> : <><FiPlus /> Add</>}</span>
                                </div>
                            </button>
                        );
                    })}
                </div>
            ) : <Empty title="No collections found" text="Try a different search." />}
        </>
    );
}
