import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { COLLECTIONS, getCollection } from '../data/collections';
import { useStore, useFloors } from '../store/AppStore';
import { price, compact } from '../lib/format';
import { AreaChart, Change, CollectionCell, PageHeader, Sparkline, Empty } from '../ui';

const days = ['30d', '25d', '20d', '15d', '10d', '5d', 'Today'];

export default function Dashboard() {
    const { state, owned } = useStore();
    const floors = useFloors();

    const value = owned.reduce((s, n) => s + (floors[n.collectionId] || 0), 0);
    const history = useMemo(() => {
        if (!owned.length) return [];
        return Array.from({ length: 30 }, (_, i) => owned.reduce((s, n) => s + getCollection(n.collectionId).history[i], 0));
    }, [owned]);
    const histChange = history.length ? ((value - history[0]) / history[0]) * 100 : 0;

    const watch = state.watchlist.map(getCollection).filter(Boolean);
    const movers = [...COLLECTIONS].sort((a, b) => Math.abs(b.change.day) - Math.abs(a.change.day)).slice(0, 5);
    const activeAlerts = state.alerts.filter((a) => a.active).length;

    return (
        <>
            <PageHeader title="Dashboard" />

            <div className="stat-grid">
                <div className="stat"><small>Portfolio value</small><strong>{price(value, { digits: 0 })}</strong><Change value={histChange} /><span className="muted"> 30 days</span></div>
                <Link to="/nft" className="stat"><small>NFTs owned</small><strong>{owned.length}</strong><span className="muted">in {new Set(owned.map((o) => o.collectionId)).size} collections</span></Link>
                <Link to="/watchlist" className="stat"><small>Watchlist</small><strong>{watch.length}</strong><span className="muted">collections</span></Link>
                <Link to="/smartalert" className="stat"><small>Active alerts</small><strong>{activeAlerts}</strong><span className="muted">{state.alerts.length - activeAlerts} already hit</span></Link>
            </div>

            <section className="card">
                <div className="card-head"><h2>Portfolio value</h2><span className="muted">Floor value of your NFTs, last 30 days</span></div>
                {history.length ? <AreaChart data={[...history.slice(0, 29), value]} labels={days} /> : (
                    <Empty title="No NFTs to show" text="Connect your wallet to see your portfolio value." />
                )}
            </section>

            <div className="two-col">
                <section className="card">
                    <div className="card-head"><h2>Your watchlist</h2><Link to="/watchlist" className="link-btn">View all</Link></div>
                    {watch.length ? (
                        <div className="table-wrap">
                            <table className="table">
                                <thead><tr><th>Collection</th><th className="num">Floor</th><th className="num">24h</th><th className="hide-sm">7 days</th></tr></thead>
                                <tbody>
                                    {watch.slice(0, 6).map((c) => (
                                        <tr key={c.id}>
                                            <td><CollectionCell c={c} to={`/collection/${c.id}`} /></td>
                                            <td className="num">{price(floors[c.id])}</td>
                                            <td className="num"><Change value={c.change.day} /></td>
                                            <td className="hide-sm spark-cell"><Sparkline data={c.history.slice(-8)} /></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : <Empty title="Watchlist is empty" action={<Link to="/addcollection" className="btn">Add collections</Link>} />}
                </section>

                <section className="card">
                    <div className="card-head"><h2>Biggest movers today</h2><Link to="/marketoverview" className="link-btn">Market</Link></div>
                    <ul className="mover-list">
                        {movers.map((c) => (
                            <li key={c.id}>
                                <CollectionCell c={c} to={`/collection/${c.id}`} />
                                <span className="mover-right"><span>{price(floors[c.id])}</span><Change value={c.change.day} /></span>
                            </li>
                        ))}
                    </ul>
                    <p className="muted small">Volume today across all collections: {compact(COLLECTIONS.reduce((s, c) => s + c.volumes.day, 0))} CRO</p>
                </section>
            </div>
        </>
    );
}
