import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

export default function NotFound() {
    return (
        <section className="not-found">
            <img src="/assets/images/SnipeHub.png" alt="SnipeHub" width="157" height="33" />
            <img src="/assets/images/rcartoon5.webp" alt="" width="160" height="160" className="nf-art" />
            <h1>404 · Page not found</h1>
            <p className="muted">The page you are looking for doesn’t exist or has moved.</p>
            <Link to="/" className="btn">Go to Home <FiArrowRight /></Link>
        </section>
    );
}
