import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Star } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-8 text-center space-y-12">
      {/* Hero Section */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to our E-Shop!
        </h1>
        <p className="text-lg text-gray-600">
          Discover top deals, premium products, and fast delivery.
        </p>
        <div className="space-x-4">
          <Button size="lg" className="rounded-2xl shadow" variant="default">
            <ShoppingBag className="mr-2 h-5 w-5" />
            Start Shopping
          </Button>
          <Button size="lg" className="rounded-2xl" variant="outline">
            <Star className="mr-2 h-5 w-5" />
            View Bestsellers
          </Button>
        </div>
      </section>

      {/* Featured Section (Placeholder) */}
      <section className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Featured Category {item}
            </h3>
            <p className="text-gray-500">
              Explore the best products in this category.
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
