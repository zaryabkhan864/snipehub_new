import React, { useMemo, useState } from 'react';
import { COLLECTIONS } from '../data/collections';
import { useFloors } from '../store/AppStore';
import { compact, price, PERIODS } from '../lib/format';
import { AreaChart, Change, CollectionCell, PageHeader, PeriodTabs } from '../ui';

export default function MarketOverview() {
    const [period, setPeriod] = useState('week');
    const floors = useFloors();

    // Market index = average of every collection's floor, normalised to 100 thirty days ago
    const index = useMemo(() => Array.from({ length: 30 }, (_, i) => {
        const avg = COLLECTIONS.reduce((s, c) => s + c.history[i] / c.history[0], 0) / COLLECTIONS.length;
        return Math.round(avg * 10000) / 100;
    }), []);
    const span = period === 'day' ? 2 : period === 'week' ? 8 : 30;
    const series = index.slice(-span);
    const indexChange = ((series[series.length - 1] - series[0]) / series[0]) * 100;

    const totalVolume = COLLECTIONS.reduce((s, c) => s + c.volumes[period], 0);
    const totalCap = COLLECTIONS.reduce((s, c) => s + floors[c.id] * c.supply, 0);
    const owners = COLLECTIONS.reduce((s, c) => s + c.owners, 0);
    const sorted = [...COLLECTIONS].sort((a, b) => b.change[period] - a.change[period]);
    const gainers = sorted.slice(0, 5);
    const losers = sorted.slice(-5).reverse();
    const share = [...COLLECTIONS].sort((a, b) => b.volumes[period] - a.volumes[period]).slice(0, 6);

    return (
        <>
            <PageHeader title="Market" accent="Overview">
                <PeriodTabs value={period} onChange={setPeriod} options={PERIODS} />
            </PageHeader>

            <div className="stat-grid">
                <div className="stat"><small>Market index</small><strong>{series[series.length - 1].toFixed(1)}</strong><Change value={indexChange} /></div>
                <div className="stat"><small>Trading volume</small><strong>{compact(totalVolume)} CRO</strong><span className="muted">{PERIODS.find((p) => p.key === period).label.toLowerCase()}</span></div>
                <div className="stat"><small>Market cap (floor × supply)</small><strong>{compact(totalCap)} CRO</strong></div>
                <div className="stat"><small>Holders</small><strong>{compact(owners)}</strong><span className="muted">across {COLLECTIONS.length} collections</span></div>
            </div>

            <section className="card">
                <div className="card-head"><h2>Market index</h2><span className="muted">Average floor of all tracked collections (30 days ago = 100)</span></div>
                <AreaChart data={series} labels={[period === 'day' ? 'Yesterday' : `${span - 1}d ago`, 'Today']} />
            </section>

            <div className="two-col">
                <section className="card">
                    <div className="card-head"><h2>Top gainers</h2></div>
                    <ul className="mover-list">
                        {gainers.map((c) => (
                            <li key={c.id}><CollectionCell c={c} to={`/collection/${c.id}`} /><span className="mover-right"><span>{price(floors[c.id])}</span><Change value={c.change[period]} /></span></li>
                        ))}
                    </ul>
                </section>
                <section className="card">
                    <div className="card-head"><h2>Top losers</h2></div>
                    <ul className="mover-list">
                        {losers.map((c) => (
                            <li key={c.id}><CollectionCell c={c} to={`/collection/${c.id}`} /><span className="mover-right"><span>{price(floors[c.id])}</span><Change value={c.change[period]} /></span></li>
                        ))}
                    </ul>
                </section>
            </div>

            <section className="card">
                <div className="card-head"><h2>Volume share</h2><span className="muted">Top 6 collections</span></div>
                <div className="bars">
                    {share.map((c) => {
                        const p = (c.volumes[period] / totalVolume) * 100;
                        return (
                            <div key={c.id} className="bar-row">
                                <span className="bar-label">{c.name}</span>
                                <span className="bar-track"><span className="bar-fill" style={{ width: `${p}%` }} /></span>
                                <span className="bar-value">{p.toFixed(1)}%</span>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
}
