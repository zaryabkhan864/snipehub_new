// Demo market data for SnipeHub.
// Everything is generated from fixed seeds, so numbers stay the same on every reload
// and every page (the old app had 12 identical "Looneycorns" cards per page, and the
// phone and desktop versions of a page showed different data).
// To connect a real API later, replace `COLLECTIONS` with data from the API — the
// pages only use the fields documented below.

const img = (name) => `/assets/images/${name}`;

// Small deterministic random generator (mulberry32)
function rng(seed) {
    let a = seed >>> 0;
    return () => {
        a |= 0; a = (a + 0x6d2b79f5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

// 30 daily floor prices ending at `floor`
function history(seed, floor, trend) {
    const r = rng(seed);
    const pts = [floor];
    for (let i = 1; i < 30; i++) {
        const prev = pts[0];
        const change = (r() - 0.5) * 0.09 - trend * 0.012;
        pts.unshift(Math.max(prev * (1 + change), floor * 0.25));
    }
    return pts.map((v) => Math.round(v * 100) / 100);
}

const TRAIT_TYPES = {
    Background: ['Heaven', 'Nebula', 'Jungle', 'Ocean', 'Desert', 'Neon City'],
    Horn: ['Golden', 'Crystal', 'Rainbow', 'Broken', 'Diamond'],
    Eyes: ['Laser', 'Sleepy', 'Shades', 'Wink', 'Starry'],
    Outfit: ['Space Suit', 'Hoodie', 'Tuxedo', 'Pirate Coat', 'Jersey'],
    Mouth: ['Grin', 'Tongue Out', 'Smirk', 'Gold Tooth'],
};

const ART = [
    'rcartoon1.webp', 'rcartoon2.webp', 'rcartoon3.webp', 'rcartoon4.webp', 'rcartoon5.webp', 'rcartoon6.webp',
    'rcartoon7.webp', 'rcartoon8.webp', 'rcartoon9.webp', 'rcartoon10.webp', 'rcartoon11.webp', 'rcartoon12.webp',
];

const BASE = [
    { id: 'looneycorns', name: 'Looneycorns', creator: 'Lost Toys', avatar: 'rcartoon1.webp', floor: 412.5, volume: 38200, items: 2200, owners: 1040, trend: 1, verified: true,
        description: 'Looneycorns is the first of 5 unique toys from the Lost Toy collection. Each toy represents a childhood favourite that has been lost over time and needs a new home.' },
    { id: 'zebra-squad', name: 'Zebra Squad', creator: 'Stripe Labs', avatar: 'rcartoon10.webp', floor: 268.0, volume: 29100, items: 5000, owners: 2310, trend: 0.6, verified: true,
        description: 'Five thousand zebras, each with hand-drawn stripes and a personality to match.' },
    { id: 'tiger-tribe', name: 'Tiger Tribe', creator: 'Jungle Club', avatar: 'rcartoon12.webp', floor: 189.9, volume: 21450, items: 3333, owners: 1580, trend: -0.4, verified: true,
        description: 'A tribe of fearless tigers guarding the Cronos jungle. Holders get access to tribe events.' },
    { id: 'night-unicorns', name: 'Night Unicorns', creator: 'Moonlight', avatar: 'rcartoon2.webp', floor: 520.0, volume: 17890, items: 1111, owners: 702, trend: 1.2, verified: true,
        description: 'Rare unicorns that only come out after midnight. A small, high-value collection.' },
    { id: 'disco-dalmatians', name: 'Disco Dalmatians', creator: 'Groove Studio', avatar: 'rcartoon11.webp', floor: 96.3, volume: 15600, items: 8888, owners: 3920, trend: -1, verified: false,
        description: 'Spotted, funky and always ready to dance. A community-first collection.' },
    { id: 'space-tigers', name: 'Space Tigers', creator: 'Orbit Art', avatar: 'rcartoon4.webp', floor: 154.2, volume: 13980, items: 4444, owners: 2015, trend: 0.3, verified: true,
        description: 'Astronaut tigers exploring the metaverse, one planet at a time.' },
    { id: 'pirate-horses', name: 'Pirate Horses', creator: 'Sea Dogs', avatar: 'rcartoon6.webp', floor: 77.7, volume: 11240, items: 6000, owners: 2840, trend: -0.7, verified: false,
        description: 'Horses that sail the seven seas looking for treasure — and the floor.' },
    { id: 'pink-dreamers', name: 'Pink Dreamers', creator: 'Cotton Candy', avatar: 'rcartoon9.webp', floor: 61.4, volume: 9870, items: 7777, owners: 3300, trend: 0.9, verified: false,
        description: 'Soft colours and big dreams. Every Dreamer comes with a unique story.' },
    { id: 'hip-hop-hippos', name: 'Hip Hop Hippos', creator: 'Beat Makers', avatar: 'rcartoon7.webp', floor: 45.0, volume: 8420, items: 9999, owners: 4120, trend: -0.2, verified: false,
        description: 'Hippos with headphones and attitude. Each one drops a different beat.' },
    { id: 'crowned-tigers', name: 'Crowned Tigers', creator: 'Royal Mint', avatar: 'rcartoon5.webp', floor: 342.8, volume: 7650, items: 1500, owners: 910, trend: 0.5, verified: true,
        description: 'Tigers of royal blood. Only 1,500 crowns were ever made.' },
    { id: 'goggle-gang', name: 'Goggle Gang', creator: 'Lab Rats', avatar: 'rcartoon3.webp', floor: 38.6, volume: 5310, items: 10000, owners: 4870, trend: -1.3, verified: false,
        description: 'Eccentric inventors who never take their goggles off.' },
    { id: 'rare-land', name: 'Rare Land', creator: 'Rare Land Studio', avatar: 'inventoryroundimage.webp', banner: 'inventorybigimage.webp', floor: 128.0, volume: 4890, items: 3000, owners: 1720, trend: 0.8, verified: true,
        description: 'Welcome to Rare Land. Rare Land NFTs are the gateway to unlock our music game with 100+ songs and battles.' },
];

function buildItems(c, seed) {
    const r = rng(seed * 7 + 3);
    const count = 24;
    return Array.from({ length: count }, (_, i) => {
        const tokenId = Math.floor(r() * c.items) + 1;
        const traits = Object.entries(TRAIT_TYPES).map(([type, values]) => {
            const value = values[Math.floor(r() * values.length)];
            return { type, value, rarity: Math.round((3 + r() * 27) * 10) / 10 };
        });
        const rank = Math.floor(r() * c.items) + 1;
        const listed = r() > 0.45;
        return {
            tokenId,
            name: `${c.name} #${tokenId}`,
            image: img(ART[(seed + i) % ART.length]),
            rank,
            traits,
            lastSale: Math.round(c.floor * (0.9 + r() * 0.8) * 100) / 100,
            listPrice: listed ? Math.round(c.floor * (1 + r() * 0.6) * 100) / 100 : null,
        };
    }).filter((it, i, arr) => arr.findIndex((x) => x.tokenId === it.tokenId) === i);
}

export const COLLECTIONS = BASE.map((c, i) => {
    const seed = 101 + i * 37;
    const prices = history(seed, c.floor, c.trend);
    const vr = rng(seed + 9);
    const pct = (a, b) => Math.round(((a - b) / b) * 10000) / 100;
    const volumes = {
        day: c.volume,
        week: Math.round(c.volume * (5 + vr() * 3)),
        month: Math.round(c.volume * (18 + vr() * 12)),
    };
    return {
        ...c,
        avatar: img(c.avatar),
        banner: c.banner ? img(c.banner) : null,
        history: prices,
        change: {
            day: pct(prices[29], prices[28]),
            week: pct(prices[29], prices[22]),
            month: pct(prices[29], prices[0]),
        },
        volumes,
        volumeChange: {
            day: Math.round((vr() - 0.4) * 9000) / 100,
            week: Math.round((vr() - 0.4) * 7000) / 100,
            month: Math.round((vr() - 0.4) * 5000) / 100,
        },
        items: buildItems(c, i + 1),
        supply: c.items,
    };
});

export const getCollection = (id) => COLLECTIONS.find((c) => c.id === id);

// NFTs owned by the demo wallet: [collectionId, index into that collection's items]
export const DEMO_OWNED = [
    ['looneycorns', 0], ['looneycorns', 3], ['zebra-squad', 1], ['tiger-tribe', 2], ['night-unicorns', 0],
    ['rare-land', 4], ['crowned-tigers', 1], ['pink-dreamers', 5], ['space-tigers', 2],
];

export const TRAIT_NAMES = Object.keys(TRAIT_TYPES);
