import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AppStoreProvider } from './store/AppStore';
import AppLayout from './layout/AppLayout';
import './styles.css';

// Each page is its own small chunk, downloaded only when opened.
const Landing = lazy(() => import('./pages/Landing'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const MyNfts = lazy(() => import('./pages/MyNfts'));
const TopCollections = lazy(() => import('./pages/TopCollections'));
const CollectionDetail = lazy(() => import('./pages/CollectionDetail'));
const NftDetail = lazy(() => import('./pages/NftDetail'));
const SmartAlertSelect = lazy(() => import('./pages/SmartAlerts').then((m) => ({ default: m.SmartAlertSelect })));
const SmartAlertSetup = lazy(() => import('./pages/SmartAlerts').then((m) => ({ default: m.SmartAlertSetup })));
const Watchlist = lazy(() => import('./pages/Watchlist').then((m) => ({ default: m.Watchlist })));
const AddCollection = lazy(() => import('./pages/Watchlist').then((m) => ({ default: m.AddCollection })));
const MarketOverview = lazy(() => import('./pages/MarketOverview'));
const StakingCompare = lazy(() => import('./pages/StakingCompare'));
const Settings = lazy(() => import('./pages/Settings'));
const Support = lazy(() => import('./pages/Support'));
const NotFound = lazy(() => import('./pages/NotFound'));

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
    return null;
}

const Loader = () => <div className="loader" role="status" aria-label="Loading"><span /></div>;

export default function App() {
    return (
        <AppStoreProvider>
            <BrowserRouter>
                <ScrollToTop />
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route path="/home" element={<Landing />} />
                        <Route element={<AppLayout />}>
                            <Route index element={<Dashboard />} />
                            <Route path="nft" element={<MyNfts />} />
                            <Route path="topcollections" element={<TopCollections />} />
                            <Route path="collection/:id" element={<CollectionDetail />} />
                            <Route path="collection/:id/nft/:tokenId" element={<NftDetail />} />
                            <Route path="smartalert" element={<SmartAlertSelect />} />
                            <Route path="smartalert/:id" element={<SmartAlertSetup />} />
                            <Route path="watchlist" element={<Watchlist />} />
                            <Route path="addcollection" element={<AddCollection />} />
                            <Route path="marketoverview" element={<MarketOverview />} />
                            <Route path="stakingcompare" element={<StakingCompare />} />
                            <Route path="settings" element={<Settings />} />
                            <Route path="support" element={<Support />} />

                            {/* Old URLs from the first version keep working */}
                            <Route path="smartalert2" element={<Navigate to="/smartalert" replace />} />
                            <Route path="smartalert3" element={<Navigate to="/smartalert" replace />} />
                            <Route path="smartalert4" element={<Navigate to="/smartalert" replace />} />
                            <Route path="topcollection2" element={<Navigate to="/topcollections" replace />} />
                            <Route path="inventory" element={<Navigate to="/collection/rare-land" replace />} />
                            <Route path="setting" element={<Navigate to="/settings" replace />} />
                            <Route path="watch2" element={<Navigate to="/support" replace />} />

                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </AppStoreProvider>
    );
}
