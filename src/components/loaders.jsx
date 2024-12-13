import React from 'react';
import { Loader } from '@cloudwick/astral-ui';
const LoaderShowcase = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Loader Component Showcase</h1>
      
      <div className="border p-4">
      {/* Loader Sizes */}
      
      <h2 className="text-2xl font-semibold mb-4">Loader Sizes</h2>
      <div className="flex space-x-8">
        <div className="text-center">
          <Loader size="sm" />
          <p className="mt-2">Small</p>
        </div>
        <div className="text-center">
          <Loader size="md" />
          <p className="mt-2">Medium</p>
        </div>
        <div className="text-center">
          <Loader size="lg" />
          <p className="mt-2">Large</p>
        </div>
      </div>

      {/* Loader Variants */}
      <h2 className="text-2xl font-semibold mb-4 mt-8">Loader Variants</h2>
      <div className="flex space-x-8">
        <div className="text-center">
          <Loader variant="filled" />
          <p className="mt-2">Filled</p>
        </div>
        <div className="text-center">
          <Loader variant="stroked" />
          <p className="mt-2">Stroked</p>
        </div>
        
      </div>

      {/* Loader with Labels */}
      <h2 className="text-2xl font-semibold mb-4 mt-8">Loader with Labels</h2>
      <div className="flex space-x-8">
        <div className="text-center">
          <Loader size="sm" label="Loading..." />
        </div>
        <div className="text-center">
          <Loader size="md" label="Processing..." />
        </div>
        <div className="text-center">
          <Loader size="lg" label="Fetching Data..." />
        </div>
      </div>

      {/* Custom Styled Loader */}
      <h2 className="text-2xl font-semibold mb-4 mt-8">Custom Styled Loader</h2>
      <div className="flex space-x-8">
        <div className="text-center">
          <Loader size="md" className="text-red-500" label="Loading Red" />
        </div>
        <div className="text-center">
          <Loader size="md" className="text-green-500" label="Loading Green" />
        </div>
        <div className="text-center">
          <Loader size="md" className="text-blue-500" label="Loading Blue" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default LoaderShowcase;