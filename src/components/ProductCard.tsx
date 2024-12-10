import React, { useState } from 'react';
import { Product } from '../types/product';
import { PaymentButton } from './PaymentButton';

interface ProductCardProps {
  product: Product;
  onBuyNow: () => Promise<void>;
}

export function ProductCard({ product, onBuyNow }: ProductCardProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    setIsLoading(true);
    try {
      await onBuyNow();
    } catch (error) {
      console.error('Payment failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="md:flex-shrink-0">
        <img
          className="h-64 w-full object-cover"
          src={product.imageUrl}
          alt={product.name}
        />
      </div>
      <div className="p-8">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
            <p className="mt-2 text-xl font-semibold text-indigo-600">
              ${product.price.toFixed(2)}
            </p>
          </div>
        </div>
        
        <p className="mt-4 text-gray-600">
          {product.description}
        </p>
        
        <PaymentButton 
          onClick={handlePayment}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}