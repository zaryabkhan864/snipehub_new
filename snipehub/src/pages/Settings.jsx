import React, { useState } from 'react';
import { useStore } from '../store/AppStore';
import { PageHeader } from '../ui';

export default function Settings() {
    const { state, dispatch, toast } = useStore();
    const [name, setName] = useState(state.profile.name);

    const saveProfile = (e) => {
        e.preventDefault();
        if (!name.trim()) return;
        dispatch({ type: 'profile/update', patch: { name: name.trim() } });
        toast('Profile saved');
    };

    return (
        <>
            <PageHeader title="Settings" />

            <section className="card narrow-card">
                <h2>Profile</h2>
                <form onSubmit={saveProfile} className="form-row">
                    <label className="field grow">
                        <span>Display name</span>
                        <input value={name} onChange={(e) => setName(e.target.value)} maxLength={40} />
                    </label>
                    <button type="submit" className="btn">Save</button>
                </form>
                <p className="muted small">User ID: {state.profile.id}</p>
            </section>

            <section className="card narrow-card">
                <h2>Wallet</h2>
                <div className="row-between">
                    <span>{state.wallet.connected ? <>Connected: <code>{state.wallet.address}</code></> : 'No wallet connected'}</span>
                    <button type="button" className={`btn ${state.wallet.connected ? 'btn-outline' : ''}`}
                        onClick={() => { dispatch({ type: state.wallet.connected ? 'wallet/disconnect' : 'wallet/connect' }); toast(state.wallet.connected ? 'Wallet disconnected' : 'Demo wallet connected'); }}>
                        {state.wallet.connected ? 'Disconnect' : 'Connect demo wallet'}
                    </button>
                </div>
            </section>

            <section className="card narrow-card">
                <h2>Live prices</h2>
                <label className="switch-row">
                    <span>
                        <strong>Update prices automatically</strong>
                        <small className="muted">Floor prices refresh every few seconds and your alerts are checked each time.</small>
                    </span>
                    <input type="checkbox" className="switch" checked={state.settings.liveUpdates}
                        onChange={(e) => dispatch({ type: 'settings/update', patch: { liveUpdates: e.target.checked } })} />
                </label>
            </section>

            <section className="card narrow-card">
                <h2>Reset</h2>
                <p className="muted">Restore the demo watchlist, alerts and notifications. This clears everything you changed.</p>
                <button type="button" className="btn btn-danger" onClick={() => {
                    if (window.confirm('Reset all SnipeHub demo data on this device?')) { dispatch({ type: 'reset' }); setName("Anddy's Makeover"); toast('Demo data reset'); }
                }}>Reset demo data</button>
            </section>
        </>
    );
}
