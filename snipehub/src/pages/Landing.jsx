import React, { useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowRight, FiMenu, FiX } from 'react-icons/fi';
import { FaRedditAlien, FaTelegramPlane, FaTwitter, FaMedium, FaLinkedinIn } from 'react-icons/fa';
import { BsWallet2 } from 'react-icons/bs';
import { COLLECTIONS, getCollection } from '../data/collections';
import { useStore } from '../store/AppStore';
import { compact, price, pct, PERIODS } from '../lib/format';
import { AreaChart, Change, Toasts, useReveal } from '../ui';

const FEATURES = [
    { icon: 'ring1.png', title: 'Wallet integration', text: 'Connect all Cronos NFT supported wallets and your crypto.org wallet to view your whole NFT portfolio on one dashboard.' },
    { icon: 'ring2.png', title: 'Floor Price Alert', text: 'Set alerts on specific NFT projects and get notified when the floor price changes by a % or reaches a price you choose.' },
    { icon: 'ring3.png', title: 'Staking comparison chart', text: 'See and compare at a glance the best projects to stake with.' },
];

// Same look as the original landing "Top Collection" block (list on a soft blue panel,
// 3 columns, big image, bold name, Floor / volume lines with a divider) — but the
// Sort By and Today / 7 / 30 day buttons now actually change the list.
const TC_SORTS = [
    { key: 'volume', label: 'Sales Volume' },
    { key: 'floor', label: 'Floor Price' },
    { key: 'change', label: 'Floor Change' },
];

function LandingTopCollection() {
    const [period, setPeriod] = useState('day');
    const [sort, setSort] = useState('volume');
    const list = useMemo(() => {
        const key = { volume: (c) => c.volumes[period], floor: (c) => c.floor, change: (c) => c.change[period] }[sort];
        return [...COLLECTIONS].sort((a, b) => key(b) - key(a)).slice(0, 9);
    }, [period, sort]);

    return (
        <section id="collections" className="tc">
            <h2 className="l-title" data-reveal>Top <span className="accent">Collection</span></h2>
            <div className="tc-controls" data-reveal>
                <label className="tc-sort">
                    <span>Sort By</span>
                    <select value={sort} onChange={(e) => setSort(e.target.value)}>
                        {TC_SORTS.map((o) => <option key={o.key} value={o.key}>{o.label}</option>)}
                    </select>
                </label>
                <div className="tc-periods" role="group" aria-label="Period">
                    {PERIODS.map((p) => (
                        <button key={p.key} type="button" className={period === p.key ? 'on' : ''} aria-pressed={period === p.key} onClick={() => setPeriod(p.key)}>
                            {p.label}
                        </button>
                    ))}
                </div>
            </div>
            {/* Tablet & desktop: list with image, name, floor and volume (original desktop look) */}
            <div className="tc-grid stagger" key={`g-${period}-${sort}`}>
                {list.map((c, i) => (
                    <Link key={c.id} to={`/collection/${c.id}`} className="tc-item" style={{ '--i': i }}>
                        <img src={c.avatar} alt="" width="103" height="103" loading="lazy" />
                        <div className="tc-text">
                            <h3>{c.name}</h3>
                            <div className="tc-line">
                                <strong>Floor: {price(c.floor, { digits: c.floor >= 1000 ? 0 : 1 })}</strong>
                                <span className={c.change[period] >= 0 ? 'up' : 'down'}>{pct(c.change[period])}</span>
                            </div>
                            <div className="tc-line">
                                <span>volume: {compact(c.volumes[period])}</span>
                                <span className={c.volumeChange[period] >= 0 ? 'up' : 'down'}>{pct(c.volumeChange[period])}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            {/* Phones: 3 x 3 picture cards (original phone look) */}
            <div className="tc-tiles stagger" key={`t-${period}-${sort}`}>
                {list.map((c, i) => (
                    <Link key={c.id} to={`/collection/${c.id}`} className="tc-tile" style={{ '--i': i }}>
                        <img src={c.avatar} alt="" width="103" height="103" loading="lazy" />
                        <span className="tc-tile-name">{c.name}</span>
                        <span className={`tc-tile-change ${c.change[period] >= 0 ? 'up' : 'down'}`}>{pct(c.change[period])}</span>
                    </Link>
                ))}
            </div>
        </section>
    );
}

// Looneycorns artwork, animated: the head sways, the tongue wags and the stars twinkle.
// Built from two layers of the original picture — the picture without the tongue,
// and the tongue cut out on its own — so it stays sharp at any size.
const STARS = [[19.3, 7, 3], [93.7, 7.5, 5], [43.4, 16, 5], [40.5, 24.2, 7], [13.4, 31.1, 3], [8.3, 40.9, 2], [93.8, 40.9, 3], [2.3, 57.6, 3], [3.5, 62.1, 2], [34.6, 67.5, 5], [17.3, 75.2, 6]];

function LooneyArt() {
    return (
        <div className="looney" role="img" aria-label="Looneycorns artwork">
            <div className="looney-stage">
                <img src="/assets/images/looney-base.webp" alt="" width="523" height="412" loading="lazy" />
                {STARS.map(([x, y, sz], i) => (
                    <span key={i} className="star-dot" style={{ left: `${x}%`, top: `${y}%`, '--sz': `${Math.max(sz, 3)}px`, animationDelay: `${(i * 0.37) % 2.4}s` }} />
                ))}
                <img src="/assets/images/looney-tongue.webp" alt="" width="523" height="412" loading="lazy" className="looney-tongue" />
            </div>
        </div>
    );
}

const TRACK_TABS = ['Profile', 'Transactions', 'Financials', 'Inventory'];

function TrackingSection() {
    const [tab, setTab] = useState('Profile');
    const c = getCollection('looneycorns');
    return (
        <section id="tracking" className="l-section">
            <h2 className="l-title" data-reveal>NFT Portfolio <span className="accent">Tracking</span></h2>
            <div className="l-tabs" role="tablist" data-reveal>
                {TRACK_TABS.map((t) => (
                    <button key={t} type="button" role="tab" aria-selected={tab === t} className={tab === t ? 'on' : ''} onClick={() => setTab(t)}>{t}</button>
                ))}
            </div>
            <div className="tracking-grid">
                <div data-reveal="left">
                    <p className="muted">Art Creator</p>
                    <h3 className="tracking-name">{c.name} <img src="/assets/images/L_tick.png" alt="Verified" width="22" height="22" /></h3>
                    <div key={tab} className="tab-swap">
                    {tab === 'Profile' && <p className="tracking-text">{c.description}</p>}
                    {tab === 'Transactions' && (
                        <ul className="tx-list">
                            {c.items.slice(0, 4).map((n, i) => (
                                <li key={n.tokenId}><span>#{n.tokenId}</span><span>{['Sold', 'Listed', 'Transferred', 'Sold'][i]}</span><strong>{price(n.lastSale)}</strong></li>
                            ))}
                        </ul>
                    )}
                    {tab === 'Financials' && <AreaChart data={c.history} height={140} labels={['30d ago', 'Today']} />}
                    {tab === 'Inventory' && (
                        <div className="mini-inventory">
                            {c.items.slice(0, 6).map((n) => <img key={n.tokenId} src={n.image} alt={n.name} width="80" height="80" loading="lazy" />)}
                        </div>
                    )}
                    </div>
                    <div className="track-stats">
                        <div><strong>{compact(c.supply)}</strong><small>Items</small></div>
                        <div><strong>{compact(c.owners)}</strong><small>Owners</small></div>
                        <div><strong>{compact(c.floor)}</strong><small>Floor (CRO)</small></div>
                        <div><strong>{compact(c.volumes.month)}</strong><small>Traded (CRO)</small></div>
                    </div>
                </div>
                <div data-reveal="right"><LooneyArt /></div>
            </div>
        </section>
    );
}

export default function Landing() {
    const [menu, setMenu] = useState(false);
    const { dispatch, toast } = useStore();
    const navigate = useNavigate();
    const start = () => navigate('/');
    const connect = () => { dispatch({ type: 'wallet/connect' }); toast('Demo wallet connected'); navigate('/'); };
    const rootRef = useRef(null);
    useReveal(rootRef);
    const index = useMemo(() => Array.from({ length: 30 }, (_, i) => COLLECTIONS.reduce((s, c) => s + c.history[i] / c.history[0], 0) / COLLECTIONS.length * 100), []);

    return (
        <div className="landing" ref={rootRef}>
            <header className="l-nav">
                <Link to="/home" className="l-brand"><img src="/assets/images/SnipeHub.png" alt="SnipeHub" width="157" height="33" /></Link>
                <button type="button" className="icon-btn l-menu-btn" onClick={() => setMenu((m) => !m)} aria-label={menu ? 'Close menu' : 'Open menu'} aria-expanded={menu}>
                    {menu ? <FiX /> : <FiMenu />}
                </button>
                <nav className={`l-links ${menu ? 'open' : ''}`} aria-label="Landing">
                    <a href="#tracking" onClick={() => setMenu(false)}>Tracking</a>
                    <a href="#market" onClick={() => setMenu(false)}>Market</a>
                    <a href="#features" onClick={() => setMenu(false)}>Features</a>
                    <a href="#collections" onClick={() => setMenu(false)}>Collections</a>
                    <button type="button" className="btn btn-outline" onClick={start}>Sign Up</button>
                    <button type="button" className="btn" onClick={connect}><BsWallet2 /> Connect Wallet</button>
                </nav>
            </header>

            <section className="l-hero">
                <div className="l-hero-text hero-in">
                    <h1>NFT Portfolio</h1>
                    <p className="l-sub">Management Platform</p>
                    <ul className="checks">
                        {['View all of your NFTs in one place from all wallets', 'Custom alerts on floor prices', 'Create watchlists', 'Staking comparison charts'].map((t, i) => (
                            <li key={t} style={{ '--i': i }}><img src="/assets/images/mark.png" alt="" width="24" height="25" />{t}</li>
                        ))}
                    </ul>
                    <button type="button" className="btn btn-lg" onClick={start}>Get Started <FiArrowRight className="arrow" /></button>
                </div>
                <picture className="l-hero-art hero-art-in">
                    <source media="(max-width: 767px)" srcSet="/assets/images/smallscreenbanner.webp" />
                    <img src="/assets/images/bannerright.webp" alt="SnipeHub dashboard preview" width="900" height="740" fetchpriority="high" />
                </picture>
            </section>

            <section className="l-section supported">
                <h2 className="l-title" data-reveal>Supported <span className="accent">NFTs</span></h2>
                <div className="logos" data-reveal>
                    <img src="/assets/images/Crypto-resize.png" alt="Crypto.com" width="415" height="76" loading="lazy" />
                    <img src="/assets/images/cornos.png" alt="Cronos" width="260" height="72" loading="lazy" />
                </div>
            </section>

            <TrackingSection />

            <section id="market" className="l-section">
                <h2 className="l-title" data-reveal>Market <span className="accent">Overview</span></h2>
                <div className="card" data-reveal>
                    <div className="card-head"><h3>Cronos NFT market index</h3><Change value={((index[29] - index[0]) / index[0]) * 100} /></div>
                    <AreaChart data={index} labels={['30 days ago', 'Today']} />
                </div>
            </section>

            <section id="features" className="l-section">
                <h2 className="l-title" data-reveal>Our <span className="accent">Features</span></h2>
                <div className="features-grid">
                    <ul className="feature-list">
                        {FEATURES.map((f, i) => (
                            <li key={f.title} data-reveal="left" style={{ '--d': `${i * 120}ms` }}>
                                <img src={`/assets/images/${f.icon}`} alt="" width="72" height="72" loading="lazy" />
                                <div><h3>{f.title}</h3><p>{f.text}</p></div>
                            </li>
                        ))}
                    </ul>
                    {/* The ring artwork split into 3 layers (outer rings, petals, inner spiral) that turn in opposite directions */}
                    <div className="features-art ring-anim" aria-hidden="true" data-reveal="zoom">
                        <img src="/assets/images/bigring.webp" alt="" width="506" height="516" loading="lazy" className="ring ring-outer" />
                        <img src="/assets/images/bigring.webp" alt="" width="506" height="516" loading="lazy" className="ring ring-middle" />
                        <img src="/assets/images/bigring.webp" alt="" width="506" height="516" loading="lazy" className="ring ring-inner" />
                    </div>
                </div>
            </section>

            <LandingTopCollection />

            <section className="l-section">
                <div className="cta" data-reveal="zoom" style={{ backgroundImage: "linear-gradient(110deg, rgba(48, 56, 246, 0.94), rgba(86, 166, 251, 0.9)), url(/assets/images/rback.webp)" }}>
                    <h2>Getting started is easy</h2>
                    <p>Create your free account and connect a wallet to track your NFTs in seconds.</p>
                    <button type="button" className="btn btn-light btn-lg" onClick={start}>Get Started <FiArrowRight className="arrow" /></button>
                </div>
            </section>

            <footer className="l-footer" data-reveal>
                <img src="/assets/images/SnipeHub.png" alt="SnipeHub" width="157" height="33" loading="lazy" />
                <div className="socials">
                    {[[FaRedditAlien, 'Reddit'], [FaTelegramPlane, 'Telegram'], [FaTwitter, 'Twitter'], [FaMedium, 'Medium'], [FaLinkedinIn, 'LinkedIn']].map(([Icon, label]) => (
                        <a key={label} href="#top" aria-label={label} title={`${label} (link coming soon)`} onClick={(e) => e.preventDefault()}><Icon /></a>
                    ))}
                </div>
                <div className="l-footer-bottom">
                    <span>Copyright © {new Date().getFullYear()} Lost Toys, LLC.</span>
                    <Link to="/support">Privacy &amp; Policy</Link>
                </div>
            </footer>
            <Toasts />
        </div>
    );
}
