import React from 'react';

export default function ProductCard({ name, price, image }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '12px',
      padding: '1rem',
      textAlign: 'center',
      width: '200px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    }}>
      <img src={image} alt={name} style={{ width: '100%', borderRadius: '8px' }} />
      <h3 style={{ margin: '0.5rem 0' }}>{name}</h3>
      <p style={{ color: 'green', fontWeight: 'bold' }}>{price}</p>
      <button style={{
        padding: '0.5rem 1rem',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer'
      }}>
        Add to Cart
      </button>
    </div>
  );
}
