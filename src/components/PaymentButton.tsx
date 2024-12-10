import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface PaymentButtonProps {
  onClick: () => void;
  isLoading?: boolean;
}

export function PaymentButton({ onClick, isLoading = false }: PaymentButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`
        mt-6 w-full px-6 py-3 rounded-lg font-semibold
        flex items-center justify-center gap-2
        transition-colors duration-200
        ${isLoading 
          ? 'bg-gray-400 cursor-not-allowed' 
          : 'bg-indigo-600 hover:bg-indigo-700 text-white'
        }
      `}
    >
      <ShoppingCart size={20} />
      {isLoading ? 'Processing...' : 'Buy Now'}
    </button>
  );
}