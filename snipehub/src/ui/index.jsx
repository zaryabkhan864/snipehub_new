import React, { useEffect, useId, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiX, FiBell, FiCheckCircle } from 'react-icons/fi';
import { pct } from '../lib/format';
import { useToasts } from '../store/AppStore';

export const Change = ({ value, className = '' }) => (
    <span className={`change ${value > 0 ? 'up' : value < 0 ? 'down' : ''} ${className}`}>{pct(value)}</span>
);

export const Verified = () => (
    <img src="/assets/images/L_tick.png" alt="Verified" title="Verified collection" width="16" height="16" className="verified" />
);

export function PeriodTabs({ value, onChange, options }) {
    return (
        <div className="tabs" role="tablist">
            {options.map((o) => (
                <button key={o.key} type="button" role="tab" aria-selected={value === o.key}
                    className={value === o.key ? 'tab active' : 'tab'} onClick={() => onChange(o.key)}>
                    {o.label}
                </button>
            ))}
        </div>
    );
}

export function SearchInput({ value, onChange, placeholder = 'Search collections', className = '', ...rest }) {
    return (
        <label className={`search ${className}`}>
            <FiSearch aria-hidden="true" />
            <input type="search" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} aria-label={placeholder} {...rest} />
            {value && (
                <button type="button" className="search-clear" onClick={() => onChange('')} aria-label="Clear search"><FiX /></button>
            )}
        </label>
    );
}

export const PageHeader = ({ title, accent, children }) => (
    <div className="page-header">
        <h1>{title}{accent && <span className="accent"> {accent}</span>}</h1>
        {children && <div className="page-actions">{children}</div>}
    </div>
);

export const Empty = ({ title, text, action }) => (
    <div className="empty">
        <img src="/assets/images/rcartoon5.webp" alt="" width="96" height="96" />
        <h3>{title}</h3>
        {text && <p>{text}</p>}
        {action}
    </div>
);

// Simple responsive SVG line/area chart
export function AreaChart({ data, height = 180, labels, className = '' }) {
    const id = useId().replace(/:/g, '');
    if (!data || data.length < 2) return null;
    const w = 600;
    const h = height;
    const pad = 6;
    const min = Math.min(...data);
    const max = Math.max(...data);
    const span = max - min || 1;
    const x = (i) => pad + (i * (w - pad * 2)) / (data.length - 1);
    const y = (v) => pad + (1 - (v - min) / span) * (h - pad * 2);
    const line = data.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
    const area = `${line} L${x(data.length - 1)},${h} L${x(0)},${h} Z`;
    const up = data[data.length - 1] >= data[0];
    return (
        <div className={`chart ${className}`}>
            <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" role="img" aria-label="Price history chart">
                <defs>
                    <linearGradient id={`g${id}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={up ? '#3038F6' : '#E5484D'} stopOpacity="0.25" />
                        <stop offset="100%" stopColor={up ? '#3038F6' : '#E5484D'} stopOpacity="0" />
                    </linearGradient>
                </defs>
                <path d={area} fill={`url(#g${id})`} className="chart-area" />
                <path d={line} fill="none" stroke={up ? '#3038F6' : '#E5484D'} strokeWidth="2.5" vectorEffect="non-scaling-stroke" strokeLinejoin="round" pathLength="1" className="chart-line" />
            </svg>
            {labels && (
                <div className="chart-labels">{labels.map((l) => <span key={l}>{l}</span>)}</div>
            )}
        </div>
    );
}

export const Sparkline = ({ data }) => <AreaChart data={data} height={40} className="spark" />;

export function CollectionCell({ c, to }) {
    const inner = (
        <>
            <img src={c.avatar} alt="" width="44" height="44" className="avatar" loading="lazy" />
            <span className="cell-name">{c.name}{c.verified && <Verified />}</span>
        </>
    );
    return to ? <Link to={to} className="collection-cell">{inner}</Link> : <span className="collection-cell">{inner}</span>;
}

export function Toasts() {
    const toasts = useToasts();
    return (
        <div className="toasts" aria-live="polite">
            {toasts.map((t) => (
                <div key={t.id} className={`toast ${t.kind}`}>
                    {t.kind === 'alert' ? <FiBell /> : <FiCheckCircle />}
                    <span>{t.text}</span>
                </div>
            ))}
        </div>
    );
}

// Shows a price and briefly flashes green / red when it goes up / down (live market feel)
export function LivePrice({ value, children }) {
    const prev = useRef(value);
    const [dir, setDir] = useState('');
    useEffect(() => {
        if (prev.current === value) return undefined;
        setDir(value > prev.current ? 'flash-up' : 'flash-down');
        prev.current = value;
        const t = window.setTimeout(() => setDir(''), 1100);
        return () => window.clearTimeout(t);
    }, [value]);
    return <span className={`live ${dir}`}>{children}</span>;
}

// Adds the class "in" to every [data-reveal] element inside `ref` when it scrolls into view.
// Works for elements added later too (tabs, filters).
export function useReveal(ref) {
    useEffect(() => {
        const root = ref.current;
        if (!root) return undefined;
        const show = (el) => el.classList.add('in');
        if (!('IntersectionObserver' in window)) {
            root.querySelectorAll('[data-reveal]').forEach(show);
            return undefined;
        }
        const io = new IntersectionObserver((entries) => {
            entries.forEach((e) => { if (e.isIntersecting) { show(e.target); io.unobserve(e.target); } });
        }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
        const watch = () => root.querySelectorAll('[data-reveal]:not(.in)').forEach((el) => io.observe(el));
        watch();
        const mo = new MutationObserver(watch);
        mo.observe(root, { childList: true, subtree: true });
        return () => { io.disconnect(); mo.disconnect(); };
    }, [ref]);
}
