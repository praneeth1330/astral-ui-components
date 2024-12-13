import React from 'react';
import { Button } from '@cloudwick/astral-ui';

const ButtonShowcase = () => {
  const handleClick = (message) => {
    alert(message);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Button Component Showcase</h1>
      <div className='border p-4'>
      
      {/* Button Sizes */}
      <h2 className="text-2xl font-semibold mb-4">Button Sizes</h2>
      <div className="flex space-x-4">
        <Button size="xs" onClick={() => handleClick('XS Button Clicked')}>XS</Button>
        <Button size="sm" onClick={() => handleClick('SM Button Clicked')}>SM</Button>
        <Button size="md" onClick={() => handleClick('MD Button Clicked')}>MD</Button>
        <Button size="lg" onClick={() => handleClick('LG Button Clicked')}>LG</Button>
        <Button size="xl" onClick={() => handleClick('XL Button Clicked')}>XL</Button>
      </div>

      {/* Button Variants */}
      <h2 className="text-2xl font-semibold mb-4 mt-8">Button Variants</h2>
      <div className="flex space-x-4">
        <Button variant="filled" color="primary" onClick={() => handleClick('Filled Primary Button Clicked')}>Filled</Button>
        <Button variant="outline" color="secondary" onClick={() => handleClick('Outline Secondary Button Clicked')}>Outline</Button>
        <Button variant="shade" color="success" onClick={() => handleClick('Shade Success Button Clicked')}>Shade</Button>
        <Button variant="text" color='secondary' onClick={() => handleClick('Text Warning Button Clicked')}>Text</Button>
      </div>

      {/* Button Colors */}
      <h2 className="text-2xl font-semibold mb-4 mt-8">Button Colors</h2>
      <div className="flex space-x-4">
        <Button color="primary" onClick={() => handleClick('Primary Button Clicked')}>Primary</Button>
        <Button color="secondary" onClick={() => handleClick('Secondary Button Clicked')}>Secondary</Button>
        <Button color="success" onClick={() => handleClick('Success Button Clicked')}>Success</Button>
        <Button color="warning" onClick={() => handleClick('Warning Button Clicked')}>Warning</Button>
        <Button color="error" onClick={() => handleClick('Error Button Clicked')}>Error</Button>
      </div>

      {/* Buttons with Icons */}
      <h2 className="text-2xl font-semibold mb-4 mt-8">Buttons with Icons</h2>
      <div className="flex space-x-4">
        <Button icon="add" iconPlacement="start" onClick={() => handleClick('Start Icon Button Clicked')}>Start Icon</Button>
        <Button icon="add" iconPlacement="end" onClick={() => handleClick('End Icon Button Clicked')}>End Icon</Button>
      </div>

      {/* Loading Buttons */}
      <h2 className="text-2xl font-semibold mb-4 mt-8">Loading State</h2>
      <div className="flex space-x-4">
        <Button loading={true} size="md" >Loading...</Button>
      </div>

      {/* Disabled Buttons */}
      <h2 className="text-2xl font-semibold mb-4 mt-8">Disabled Buttons</h2>
      <div className="flex space-x-4">
        <Button disabled={true} color="primary">Disabled</Button>
        <Button disabled={true} color="error">Disabled</Button>
      </div>
      </div>

    </div>
  );
};

export default ButtonShowcase;
