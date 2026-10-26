import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore, useFloors } from '../store/AppStore';
import { price } from '../lib/format';
import { Empty, PageHeader, SearchInput } from '../ui';

const SORTS = [
    { key: 'value', label: 'Floor value (high → low)' },
    { key: 'value-asc', label: 'Floor value (low → high)' },
    { key: 'rank', label: 'Rarity rank' },
    { key: 'name', label: 'Name (A → Z)' },
];

export default function MyNfts() {
    const { state, owned, dispatch, toast } = useStore();
    const floors = useFloors();
    const [q, setQ] = useState('');
    const [sort, setSort] = useState('value');
    const [collection, setCollection] = useState('all');

    const collections = useMemo(() => [...new Map(owned.map((o) => [o.collectionId, o.collectionName])).entries()], [owned]);

    const list = useMemo(() => {
        let l = owned.filter((n) => (collection === 'all' || n.collectionId === collection)
            && n.name.toLowerCase().includes(q.trim().toLowerCase()));
        const val = (n) => floors[n.collectionId] || 0;
        if (sort === 'value') l = [...l].sort((a, b) => val(b) - val(a));
        if (sort === 'value-asc') l = [...l].sort((a, b) => val(a) - val(b));
        if (sort === 'rank') l = [...l].sort((a, b) => a.rank - b.rank);
        if (sort === 'name') l = [...l].sort((a, b) => a.name.localeCompare(b.name));
        return l;
    }, [owned, q, sort, collection, floors]);

    if (!state.wallet.connected) {
        return (
            <>
                <PageHeader title="My" accent="NFTs" />
                <Empty title="Connect your wallet" text="Connect a Cronos wallet to see all of your NFTs in one place."
                    action={<button type="button" className="btn" onClick={() => { dispatch({ type: 'wallet/connect' }); toast('Demo wallet connected'); }}>Connect demo wallet</button>} />
            </>
        );
    }

    const total = owned.reduce((s, n) => s + (floors[n.collectionId] || 0), 0);

    return (
        <>
            <PageHeader title="My" accent="NFTs">
                <span className="muted">{owned.length} NFTs · {price(total, { digits: 0 })}</span>
            </PageHeader>

            <div className="toolbar">
                <SearchInput value={q} onChange={setQ} placeholder="Search your NFTs" />
                <select value={collection} onChange={(e) => setCollection(e.target.value)} aria-label="Filter by collection">
                    <option value="all">All collections</option>
                    {collections.map(([id, name]) => <option key={id} value={id}>{name}</option>)}
                </select>
                <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort NFTs">
                    {SORTS.map((s) => <option key={s.key} value={s.key}>{s.label}</option>)}
                </select>
            </div>

            {list.length ? (
                <div className="nft-grid">
                    {list.map((n) => (
                        <Link key={`${n.collectionId}-${n.tokenId}`} to={`/collection/${n.collectionId}/nft/${n.tokenId}`} className="nft-card">
                            <img src={n.image} alt={n.name} loading="lazy" width="230" height="230" />
                            <div className="nft-info">
                                <small>{n.collectionName}</small>
                                <strong>#{n.tokenId}</strong>
                                <span className="nft-meta"><span>Floor {price(floors[n.collectionId])}</span><span>Rank {n.rank}</span></span>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : <Empty title="Nothing found" text="Try a different search or filter." />}
        </>
    );
}
