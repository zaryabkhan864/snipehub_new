import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiArrowLeft, FiBell } from 'react-icons/fi';
import { getCollection } from '../data/collections';
import { useFloors, useStore } from '../store/AppStore';
import { price } from '../lib/format';
import { Verified } from '../ui';
import NotFound from './NotFound';

export default function NftDetail() {
    const { id, tokenId } = useParams();
    const c = getCollection(id);
    const floors = useFloors();
    const { owned } = useStore();
    const n = c && c.items.find((x) => String(x.tokenId) === tokenId);
    if (!c || !n) return <NotFound />;
    const mine = owned.some((o) => o.collectionId === c.id && o.tokenId === n.tokenId);
    const floor = floors[c.id];
    const avgSale = c.history.slice(-7).reduce((s, v) => s + v, 0) / 7;

    return (
        <>
            <Link to={`/collection/${c.id}`} className="back-link"><FiArrowLeft /> {c.name}</Link>
            <section className="card nft-detail">
                <img src={n.image} alt={n.name} className="nft-big" width="460" height="460" />
                <div className="nft-side">
                    <Link to={`/collection/${c.id}`} className="eyebrow">{c.name} {c.verified && <Verified />}</Link>
                    <h1>#{n.tokenId}</h1>
                    {mine && <span className="pill">You own this</span>}
                    <div className="mini-stats">
                        <div><small>Floor price</small><strong>{price(floor)}</strong></div>
                        <div><small>Listing price</small><strong>{n.listPrice ? price(n.listPrice) : 'Not listed'}</strong></div>
                        <div><small>Rarity rank</small><strong>{n.rank} / {c.supply.toLocaleString()}</strong></div>
                        <div><small>Last sale</small><strong>{price(n.lastSale)}</strong></div>
                        <div><small>Avg. sale (7d)</small><strong>{price(avgSale)}</strong></div>
                        <div><small>vs. floor</small><strong>{n.listPrice ? `${(((n.listPrice - floor) / floor) * 100).toFixed(0)}%` : '—'}</strong></div>
                    </div>
                    <Link to={`/smartalert/${c.id}`} className="btn"><FiBell /> Alert me on {c.name} floor</Link>
                </div>
            </section>

            <section className="card">
                <div className="card-head"><h2>Traits</h2></div>
                <div className="trait-grid">
                    {n.traits.map((t) => (
                        <div key={t.type} className="trait">
                            <small>{t.type}</small>
                            <strong>{t.value}</strong>
                            <span>{t.rarity}% have this trait</span>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
