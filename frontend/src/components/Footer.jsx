import React from 'react';
import { Heart, ShieldCheck, Cpu } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="glass-panel" style={{ borderRadius: 0, marginTop: 40, borderBottom: 'none', borderLeft: 'none', borderRight: 'none' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 20px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} <strong>Leafora Life Science</strong>. React + Node.js + Express + MySQL Full-Stack Architecture.
        </p>

        <div style={{ display: 'flex', gap: 16, color: 'var(--text-dim)', fontSize: '0.85rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <ShieldCheck size={16} color="#10b981" /> Express REST API
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Cpu size={16} color="#06b6d4" /> MySQL Pool
          </span>
        </div>
      </div>
    </footer>
  );
}
