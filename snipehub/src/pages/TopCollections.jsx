import React, { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiStar } from 'react-icons/fi';
import { COLLECTIONS } from '../data/collections';
import { useStore, useFloors } from '../store/AppStore';
import { compact, price, PERIODS } from '../lib/format';
import { Change, CollectionCell, PageHeader, PeriodTabs, SearchInput, Sparkline, Empty, LivePrice } from '../ui';

const SORTS = [
    { key: 'volume', label: 'Sales volume' },
    { key: 'floor', label: 'Floor price' },
    { key: 'change', label: 'Floor change' },
    { key: 'owners', label: 'Owners' },
];

export default function TopCollections() {
    const [period, setPeriod] = useState('day');
    const [sort, setSort] = useState('volume');
    const [q, setQ] = useState('');
    const floors = useFloors();
    const { state, dispatch, toast } = useStore();
    const navigate = useNavigate();

    const rows = useMemo(() => {
        const key = {
            volume: (c) => c.volumes[period],
            floor: (c) => floors[c.id],
            change: (c) => c.change[period],
            owners: (c) => c.owners,
        }[sort];
        return COLLECTIONS
            .filter((c) => c.name.toLowerCase().includes(q.trim().toLowerCase()))
            .sort((a, b) => key(b) - key(a));
    }, [period, sort, q, floors]);

    const toggleWatch = (c) => {
        const on = state.watchlist.includes(c.id);
        dispatch({ type: 'watch/toggle', id: c.id });
        toast(on ? `${c.name} removed from watchlist` : `${c.name} added to watchlist`);
    };

    return (
        <>
            <PageHeader title="Top" accent="Collections">
                <PeriodTabs value={period} onChange={setPeriod} options={PERIODS} />
            </PageHeader>

            <div className="toolbar">
                <SearchInput value={q} onChange={setQ} />
                <label className="inline-label">Sort by
                    <select value={sort} onChange={(e) => setSort(e.target.value)}>
                        {SORTS.map((s) => <option key={s.key} value={s.key}>{s.label}</option>)}
                    </select>
                </label>
            </div>

            {rows.length === 0 ? <Empty title="No collections found" text="Try a different search." /> : (
                <div className="card flush">
                    <div className="table-wrap">
                        <table className="table clickable">
                            <thead>
                                <tr>
                                    <th className="rank">#</th><th>Collection</th><th className="num">Floor</th><th className="num">Change</th>
                                    <th className="num hide-sm">Volume</th><th className="num hide-md">Owners</th><th className="hide-md">Trend</th><th aria-label="Watchlist" />
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((c, i) => (
                                    <tr key={c.id} onClick={() => navigate(`/collection/${c.id}`)}>
                                        <td className="rank">{i + 1}</td>
                                        <td><CollectionCell c={c} to={`/collection/${c.id}`} /></td>
                                        <td className="num"><LivePrice value={floors[c.id]}>{price(floors[c.id])}</LivePrice></td>
                                        <td className="num"><Change value={c.change[period]} /></td>
                                        <td className="num hide-sm">{compact(c.volumes[period])} <Change value={c.volumeChange[period]} className="block" /></td>
                                        <td className="num hide-md">{compact(c.owners)}</td>
                                        <td className="hide-md spark-cell"><Sparkline data={period === 'day' ? c.history.slice(-2) : period === 'week' ? c.history.slice(-8) : c.history} /></td>
                                        <td>
                                            <button type="button" className={`star ${state.watchlist.includes(c.id) ? 'on' : ''}`}
                                                aria-label={state.watchlist.includes(c.id) ? `Remove ${c.name} from watchlist` : `Add ${c.name} to watchlist`}
                                                onClick={(e) => { e.stopPropagation(); toggleWatch(c); }}>
                                                <FiStar />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
            <p className="muted small">Tip: tap the star to add a collection to your <Link to="/watchlist">watchlist</Link>.</p>
        </>
    );
}
