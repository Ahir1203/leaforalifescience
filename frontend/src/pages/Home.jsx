import React, { useEffect, useState } from 'react';
import { Leaf, Database, Layers, Shield, ArrowUpRight, CheckCircle2, RefreshCw } from 'lucide-react';
import { checkHealth, getProducts } from '../services/api';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [healthData, setHealthData] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [healthRes, productsRes] = await Promise.allSettled([
        checkHealth(),
        getProducts()
      ]);

      if (healthRes.status === 'fulfilled') {
        setHealthData(healthRes.value);
      }
      if (productsRes.status === 'fulfilled' && productsRes.value?.data) {
        setProducts(productsRes.value.data);
      }
    } catch (err) {
      setError('Unable to communicate with Express backend server');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      {/* Hero Section */}
      <section className="glass-panel" style={{ padding: '48px 36px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 720 }}>
          <div className="status-pill" style={{ marginBottom: 16 }}>
            <Leaf size={14} /> Full-Stack Architecture Ready
          </div>
          
          <h1 style={{ fontSize: '2.8rem', lineHeight: 1.2, marginBottom: 16 }}>
            Next Generation <br />
            <span className="gradient-text">Life Science Solutions</span>
          </h1>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: 28, lineHeight: 1.7 }}>
            Built with React (Vite), Express.js Node API, and MySQL connection pooling. Scalable, modular, and performance optimized architecture.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#architecture" className="btn-primary">
              View Architecture <ArrowUpRight size={18} />
            </a>
            <button onClick={fetchData} className="btn-secondary">
              <RefreshCw size={16} className={loading ? 'spin' : ''} /> Test API Connection
            </button>
          </div>
        </div>
      </section>

      {/* Full-Stack Status & Diagnostics */}
      <section>
        <h2 style={{ fontSize: '1.5rem', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
          <Database size={22} color="#10b981" /> System Diagnostics & Health Check
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          <div className="glass-panel" style={{ padding: 24 }}>
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 8 }}>FRONTEND FRAMEWORK</h4>
            <div style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', display: 'flex', alignItems: 'center', gap: 8 }}>
              <CheckCircle2 color="#10b981" size={20} /> React 18 + Vite
            </div>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', marginTop: 8 }}>Running on Port 5173 with proxy configuration.</p>
          </div>

          <div className="glass-panel" style={{ padding: 24 }}>
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 8 }}>BACKEND REST API</h4>
            <div style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', display: 'flex', alignItems: 'center', gap: 8 }}>
              {healthData?.success ? <CheckCircle2 color="#10b981" size={20} /> : <Shield color="#f43f5e" size={20} />}
              Express.js ({healthData?.environment || 'dev'})
            </div>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', marginTop: 8 }}>
              Status: {healthData?.message || 'Connecting to backend http://localhost:5000...'}
            </p>
          </div>

          <div className="glass-panel" style={{ padding: 24 }}>
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 8 }}>DATABASE DRIVER</h4>
            <div style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', display: 'flex', alignItems: 'center', gap: 8 }}>
              <Database color="#06b6d4" size={20} /> MySQL2 Pool
            </div>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', marginTop: 8 }}>
              DB Status: {healthData?.services?.database || 'Configured via .env'}
            </p>
          </div>
        </div>
      </section>

      {/* Sample Products from MySQL API */}
      <section id="architecture">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <div>
            <h2 style={{ fontSize: '1.5rem' }}>Life Science Sample Products</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Fetched dynamically from Express controller & MySQL model</p>
          </div>
        </div>

        {loading ? (
          <div className="glass-panel" style={{ padding: 40, textAlign: 'center', color: 'var(--text-muted)' }}>
            Loading products from Express API...
          </div>
        ) : products.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        ) : (
          <div className="glass-panel" style={{ padding: 30, textAlign: 'center', color: 'var(--text-muted)' }}>
            No products returned. Backend connection active.
          </div>
        )}
      </section>
    </div>
  );
}
