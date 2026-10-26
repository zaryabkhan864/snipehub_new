export const CURRENCY = 'CRO';

export function price(v, opts = {}) {
    if (v == null || Number.isNaN(v)) return '—';
    const digits = opts.digits ?? (v >= 1000 ? 0 : 2);
    return `${v.toLocaleString('en-US', { minimumFractionDigits: digits, maximumFractionDigits: digits })} ${opts.noUnit ? '' : CURRENCY}`.trim();
}

export function compact(v) {
    if (v == null) return '—';
    return new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 }).format(v);
}

export function pct(v) {
    if (v == null || Number.isNaN(v)) return '—';
    const sign = v > 0 ? '+' : '';
    return `${sign}${v.toFixed(2)}%`;
}

export function dateTime(ts) {
    const d = new Date(ts);
    const now = new Date();
    const time = d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    if (d.toDateString() === now.toDateString()) return `Today at ${time}`;
    return `${d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}, ${time}`;
}

export const PERIODS = [
    { key: 'day', label: 'Today' },
    { key: 'week', label: 'Last 7 Days' },
    { key: 'month', label: 'Last 30 Days' },
];
