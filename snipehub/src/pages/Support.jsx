import React, { useState } from 'react';
import { PageHeader } from '../ui';

const FAQ = [
    ['How do I add my NFTs?', 'Connect your wallet with the wallet button at the top. SnipeHub reads the NFTs in that wallet and shows them under My NFTs.'],
    ['How do Smart Alerts work?', 'Pick a collection, then choose a target floor price or a % movement. When the floor reaches it you get a notification (the bell at the top) and the alert is marked as hit. Use “Re-arm” to switch it on again.'],
    ['What is the watchlist?', 'A list of collections you want to follow without owning them. Add them from Top Collections (the star) or with “Add collection”.'],
    ['Where do the prices come from?', 'This version uses demo market data that updates every few seconds, so every feature can be tried without a real wallet.'],
    ['Is my data saved?', 'Your watchlist, alerts and settings are saved in this browser. Clearing the browser data or using “Reset demo data” in Settings removes them.'],
];

export default function Support() {
    const [form, setForm] = useState({ email: '', message: '' });
    const valid = /\S+@\S+\.\S+/.test(form.email) && form.message.trim().length > 4;
    const send = (e) => {
        e.preventDefault();
        if (!valid) return;
        const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.email}`);
        window.location.href = `mailto:support@snipehub.app?subject=${encodeURIComponent('SnipeHub support')}&body=${body}`;
    };

    return (
        <>
            <PageHeader title="Support" />
            <section className="card">
                <h2>Frequently asked questions</h2>
                <div className="faq">
                    {FAQ.map(([q, a]) => (
                        <details key={q}>
                            <summary>{q}</summary>
                            <p>{a}</p>
                        </details>
                    ))}
                </div>
            </section>
            <section className="card narrow-card">
                <h2>Contact us</h2>
                <form onSubmit={send} className="stack-form" noValidate>
                    <label className="field"><span>Your email</span>
                        <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} autoComplete="email" required />
                    </label>
                    <label className="field"><span>Message</span>
                        <textarea rows="5" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                    </label>
                    <button type="submit" className="btn" disabled={!valid}>Open email to send</button>
                    <p className="muted small">This opens your email app with the message filled in.</p>
                </form>
            </section>
        </>
    );
}
