import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import { Search, Filter, Package } from 'lucide-react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((res) => {
        if (res?.data) setProducts(res.data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
      <div>
        <h1 style={{ fontSize: '2.2rem', marginBottom: 8 }}>Product Catalog</h1>
        <p style={{ color: 'var(--text-muted)' }}>Browse pharmaceutical grade formulas and life science extracts.</p>
      </div>

      {/* Filter and Search Bar */}
      <div className="glass-panel" style={{ padding: 16, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 240, display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(0,0,0,0.2)', padding: '8px 14px', borderRadius: 8, border: '1px solid var(--border-light)' }}>
          <Search size={18} color="var(--text-dim)" />
          <input 
            type="text" 
            placeholder="Search products by name or category..." 
            value={search} 
            onChange={(e) => setSearch(e.target.value)}
            style={{ background: 'transparent', border: 'none', color: '#fff', outline: 'none', width: '100%', fontFamily: 'inherit' }}
          />
        </div>
      </div>

      {/* Grid */}
      {loading ? (
        <div className="glass-panel" style={{ padding: 40, textAlign: 'center', color: 'var(--text-muted)' }}>
          Fetching catalog...
        </div>
      ) : filteredProducts.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="glass-panel" style={{ padding: 40, textAlign: 'center', color: 'var(--text-muted)' }}>
          No products match your search query.
        </div>
      )}
    </div>
  );
}
