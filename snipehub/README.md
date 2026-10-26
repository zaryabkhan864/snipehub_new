# SnipeHub

NFT portfolio management for Cronos: see all your NFTs in one place, set floor price alerts,
keep a watchlist and compare staking rewards.

## Run it

```bash
npm install
npm start        # http://localhost:3000
npm run build    # production build in /build
```

`/home` is the public landing page; `/` is the app dashboard.

## What works

| Page | URL | Features |
|---|---|---|
| Landing | `/home` | Get Started, Sign Up, Connect Wallet, portfolio tabs, market chart, top collections |
| Dashboard | `/` | Portfolio value + 30-day chart, watchlist, biggest movers |
| My NFTs | `/nft` | Search, filter by collection, sort; connect/disconnect wallet |
| Top Collections | `/topcollections` | Today / 7 days / 30 days, sort, search, star to watch |
| Collection | `/collection/:id` | Stats, floor chart (7/14/30 days), items with search and “listed only”, watch, set alert |
| NFT | `/collection/:id/nft/:tokenId` | Prices, rarity rank, traits |
| Smart Alerts | `/smartalert` → `/smartalert/:id` | Target price (above/below) or % move (up/down/either), validation, delete, re-arm |
| Watchlist | `/watchlist`, `/addcollection` | Add / remove collections |
| Market Overview | `/marketoverview` | Market index, volume, gainers/losers, volume share |
| Staking Compare | `/stakingcompare` | Sort, max lock filter, estimated yearly reward |
| Settings | `/settings` | Display name, wallet, live prices on/off, reset demo data |
| Support | `/support` | FAQ, contact by email |

Old URLs (`/smartalert2-4`, `/topcollection2`, `/inventory`, `/setting`, `/watch2`) redirect to the new pages.

## Data

Market data is **demo data** generated in `src/data/collections.js` (fixed seeds, so it is the same on
every load). Floor prices move every few seconds (`src/store/AppStore.jsx`) and every active alert is
checked on each move — a hit shows a toast and a notification under the bell.

Watchlist, alerts, notifications and settings are saved in the browser (`localStorage`).

To use a real API later, replace `COLLECTIONS` in `src/data/collections.js` and the price simulation in
`AppStore.jsx`; the pages only read the fields documented there.

## Structure

```
src/
  App.js              routes (each page is lazy-loaded)
  styles.css          all styles (no Bootstrap)
  store/AppStore.jsx  wallet, watchlist, alerts, notifications, live prices
  data/               demo collections and staking pools
  layout/AppLayout.jsx sidebar, top bar, mobile menu, alerts panel
  pages/              one file per page
  ui/                 small shared components (charts, tabs, search, toasts)
```
