import React from 'react';
import { Package, ArrowRight, Tag } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <div 
      className="glass-panel" 
      style={{ 
        padding: 20, 
        transition: 'all 0.3s ease', 
        display: 'flex', 
        flexDirection: 'column', 
        justify: 'space-between',
        height: '100%'
      }}
    >
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-mint)', background: 'rgba(52, 211, 153, 0.1)', padding: '4px 10px', borderRadius: 20 }}>
            {product.category || 'Biotech'}
          </span>
          <span style={{ color: 'var(--text-dim)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: 4 }}>
            <Tag size={12} /> ID: #{product.id}
          </span>
        </div>

        <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: 8 }}>{product.name}</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 16 }}>
          Pharma grade formulation produced under high precision laboratory environments.
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--border-light)' }}>
        <div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', display: 'block' }}>Unit Price</span>
          <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-emerald)' }}>
            ${Number(product.price).toFixed(2)}
          </span>
        </div>

        <button className="btn-secondary" style={{ padding: '8px 14px', fontSize: '0.85rem' }}>
          Details <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
