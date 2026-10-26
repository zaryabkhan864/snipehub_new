import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiStar, FiBell, FiArrowLeft } from 'react-icons/fi';
import { getCollection } from '../data/collections';
import { useStore, useFloors } from '../store/AppStore';
import { compact, price } from '../lib/format';
import { AreaChart, Change, Empty, PeriodTabs, SearchInput, Verified, LivePrice } from '../ui';
import NotFound from './NotFound';

const RANGES = [
    { key: 7, label: '7D' },
    { key: 14, label: '14D' },
    { key: 30, label: '30D' },
];

export default function CollectionDetail() {
    const { id } = useParams();
    const c = getCollection(id);
    const floors = useFloors();
    const { state, dispatch, toast } = useStore();
    const [range, setRange] = useState(30);
    const [q, setQ] = useState('');
    const [listedOnly, setListedOnly] = useState(false);

    const items = useMemo(() => {
        if (!c) return [];
        return c.items.filter((n) => (!listedOnly || n.listPrice) && String(n.tokenId).includes(q.trim().replace('#', '')));
    }, [c, q, listedOnly]);

    if (!c) return <NotFound />;
    const watching = state.watchlist.includes(c.id);
    const now = floors[c.id];
    const chart = [...c.history.slice(-range, -1), now];

    return (
        <>
            <Link to="/topcollections" className="back-link"><FiArrowLeft /> Top Collections</Link>

            <section className="collection-hero">
                <div className="hero-banner" style={c.banner ? { backgroundImage: `url(${c.banner})` } : undefined} />
                <div className="hero-body">
                    <img src={c.avatar} alt="" className="hero-avatar" width="96" height="96" />
                    <div className="hero-text">
                        <small className="muted">by {c.creator}</small>
                        <h1>{c.name} {c.verified && <Verified />}</h1>
                        <p>{c.description}</p>
                    </div>
                    <div className="hero-actions">
                        <button type="button" className={`btn ${watching ? 'btn-outline' : ''}`}
                            onClick={() => { dispatch({ type: 'watch/toggle', id: c.id }); toast(watching ? 'Removed from watchlist' : 'Added to watchlist'); }}>
                            <FiStar /> {watching ? 'Watching' : 'Add to watchlist'}
                        </button>
                        <Link to={`/smartalert/${c.id}`} className="btn btn-outline"><FiBell /> Set alert</Link>
                    </div>
                </div>
            </section>

            <div className="stat-grid">
                <div className="stat"><small>Floor price</small><strong><LivePrice value={now}>{price(now)}</LivePrice></strong><Change value={c.change.day} /> <span className="muted">24h</span></div>
                <div className="stat"><small>Volume (30d)</small><strong>{compact(c.volumes.month)} CRO</strong><Change value={c.volumeChange.month} /></div>
                <div className="stat"><small>Items</small><strong>{compact(c.supply)}</strong><span className="muted">{compact(c.owners)} owners</span></div>
                <div className="stat"><small>Unique owners</small><strong>{Math.round((c.owners / c.supply) * 100)}%</strong><span className="muted">of supply</span></div>
            </div>

            <section className="card">
                <div className="card-head">
                    <h2>Floor price</h2>
                    <PeriodTabs value={range} onChange={setRange} options={RANGES} />
                </div>
                <AreaChart data={chart} labels={[`${range}d ago`, 'Today']} />
            </section>

            <section className="card">
                <div className="card-head">
                    <h2>Items</h2>
                    <div className="toolbar compact">
                        <SearchInput value={q} onChange={setQ} placeholder="Token ID" inputMode="numeric" />
                        <label className="check"><input type="checkbox" checked={listedOnly} onChange={(e) => setListedOnly(e.target.checked)} /> Listed only</label>
                    </div>
                </div>
                {items.length ? (
                    <div className="nft-grid">
                        {items.map((n) => (
                            <Link key={n.tokenId} to={`/collection/${c.id}/nft/${n.tokenId}`} className="nft-card">
                                <img src={n.image} alt={n.name} loading="lazy" width="230" height="230" />
                                <div className="nft-info">
                                    <strong>#{n.tokenId}</strong>
                                    <span className="nft-meta">
                                        <span>{n.listPrice ? price(n.listPrice) : 'Not listed'}</span>
                                        <span>Rank {n.rank}</span>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : <Empty title="No items match" text="Try another token ID or turn off “Listed only”." />}
            </section>
        </>
    );
}
