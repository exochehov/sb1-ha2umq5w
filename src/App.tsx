import React from 'react';
import { ProductCard } from './components/ProductCard';
import { testProduct } from './data/testProduct';
import { paymentService } from './services/paymentService';

function App() {
  const handleBuyNow = async () => {
    await paymentService.initiatePayment();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Test Product Page
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Sample product for Overpay.io integration testing
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <ProductCard 
            product={testProduct} 
            onBuyNow={handleBuyNow} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;