import React, { useMemo, useState } from 'react';
import { STAKING } from '../data/staking';
import { getCollection } from '../data/collections';
import { useFloors } from '../store/AppStore';
import { compact, price } from '../lib/format';
import { CollectionCell, PageHeader } from '../ui';

const COLS = [
    { key: 'apr', label: 'APR' },
    { key: 'lock', label: 'Lock period' },
    { key: 'tvl', label: 'Total staked' },
];

export default function StakingCompare() {
    const [sort, setSort] = useState('apr');
    const [maxLock, setMaxLock] = useState(90);
    const [nfts, setNfts] = useState(1);
    const floors = useFloors();

    const rows = useMemo(() => STAKING
        .filter((s) => s.lock <= maxLock)
        .map((s) => ({ ...s, c: getCollection(s.collectionId) }))
        .sort((a, b) => (sort === 'lock' ? a.lock - b.lock : b[sort] - a[sort])), [sort, maxLock]);
    const best = Math.max(...STAKING.map((s) => s.apr));

    return (
        <>
            <PageHeader title="Staking" accent="Compare" />
            <p className="lead">See at a glance which projects pay the most for staking your NFTs, and how long your NFT stays locked.</p>

            <div className="toolbar">
                <label className="inline-label">Sort by
                    <select value={sort} onChange={(e) => setSort(e.target.value)}>
                        {COLS.map((c) => <option key={c.key} value={c.key}>{c.label}</option>)}
                    </select>
                </label>
                <label className="inline-label">Max lock
                    <select value={maxLock} onChange={(e) => setMaxLock(Number(e.target.value))}>
                        {[7, 14, 30, 60, 90].map((d) => <option key={d} value={d}>{d} days</option>)}
                    </select>
                </label>
                <label className="inline-label">NFTs to stake
                    <input type="number" min="1" max="100" value={nfts} onChange={(e) => setNfts(Math.max(1, Math.min(100, Number(e.target.value) || 1)))} className="narrow" />
                </label>
            </div>

            <div className="card flush">
                <div className="table-wrap">
                    <table className="table">
                        <thead>
                            <tr><th>Collection</th><th className="hide-sm">Pool</th><th className="num">APR</th><th className="num">Lock</th><th className="num hide-sm">Total staked</th><th className="num">Est. yearly reward</th><th className="hide-md">Risk</th></tr>
                        </thead>
                        <tbody>
                            {rows.map((r) => (
                                <tr key={r.pool}>
                                    <td><CollectionCell c={r.c} to={`/collection/${r.c.id}`} /></td>
                                    <td className="hide-sm">{r.pool}<br /><small className="muted">Paid in {r.reward}</small></td>
                                    <td className="num">
                                        <span className="apr-bar"><span style={{ width: `${(r.apr / best) * 100}%` }} /></span>
                                        <strong>{r.apr.toFixed(1)}%</strong>
                                    </td>
                                    <td className="num">{r.lock} days</td>
                                    <td className="num hide-sm">{compact(r.tvl)} CRO</td>
                                    <td className="num">{price(floors[r.c.id] * nfts * (r.apr / 100), { digits: 0 })}</td>
                                    <td className="hide-md"><span className={`risk ${r.risk.toLowerCase()}`}>{r.risk}</span></td>
                                </tr>
                            ))}
                            {rows.length === 0 && <tr><td colSpan="7" className="muted center">No pools with a lock period this short.</td></tr>}
                        </tbody>
                    </table>
                </div>
            </div>
            <p className="muted small">Estimated reward = floor price × number of NFTs × APR. Demo figures — always check the project’s own staking page before you stake.</p>
        </>
    );
}
