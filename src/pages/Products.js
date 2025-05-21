import React from 'react';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: '$99.99',
    image: 'https://via.placeholder.com/300x200?text=Headphones',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: '$149.99',
    image: 'https://via.placeholder.com/300x200?text=Smart+Watch',
  },
  {
    id: 3,
    name: 'Gaming Mouse',
    price: '$39.99',
    image: 'https://via.placeholder.com/300x200?text=Mouse',
  },
];

export default function Products() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Our Products</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-700">
              {product.name}
            </h2>
            <p className="text-gray-500 mb-4">{product.price}</p>
            <Button className="w-full">Add to Cart</Button>
          </div>
        ))}
      </div>
    </main>
  );
}
