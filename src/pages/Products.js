import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ textAlign: 'center' }}>Loading products...</p>;

  return (
    <main style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Product Listing</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1.5rem',
        justifyItems: 'center',
      }}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            name={product.title}
            price={`$${product.price}`}
            image={product.image}
          />
        ))}
      </div>
    </main>
  );
}
