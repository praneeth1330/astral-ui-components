import React from 'react';
import { Badge } from '@cloudwick/astral-ui';

const BadgeShowcase = () => {
  const handleIconClick = () => {
    alert('Icon Clicked!');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Badge Component Showcase</h1>
      <div className="border p-4">
      
      {/* Basic Badges */}
      <h2 className="text-2xl font-semibold mb-4">Basic Badges</h2>
      <div className="flex space-x-4">
        <Badge label="Primary" color="primary" />
        <Badge label="Secondary" color="secondary" />
        <Badge label="Success" color="success" />
        <Badge label="Warning" color="warning" />
        <Badge label="Error" color="error" />
      </div>
      {/* Badge Sizes */}
      <h2 className="text-2xl font-semibold mb-4 mt-8">Badge Sizes</h2>
      <div className="flex space-x-4">
        <Badge label="Small" size="sm" color="primary" />
        <Badge label="Medium" size="md" color="primary" />
        <Badge label="Large" size="lg" color="primary" />
      </div>

      {/* Badge Variants */}
      <h2 className="text-2xl font-semibold mb-4 mt-8">Badge Variants</h2>
      <div className="flex space-x-4">
        <Badge label="Filled" variant="filled" color="primary" />
        <Badge label="Outline" variant="outline" color="primary" />
        <Badge label="Text" variant="text" color="primary" />
      </div>

      {/* Badge with Icons */}
      <h2 className="text-2xl font-semibold mb-4 mt-8">Badge with Icons</h2>
      <div className="flex space-x-4">
        <Badge label="Start Icon" icon="add-user" iconPlacement="start" color="success"  />
        <Badge label="End Icon" icon="add" iconPlacement="end" color="error" onIconClick={handleIconClick} />
      </div>

      {/* Custom Styled Badge */}
      <h2 className="text-2xl font-semibold mb-4 mt-8">Custom Styled Badge</h2>
      <div className="flex space-x-4">
        <Badge label="Custom Badge" className="bg-purple-500 text-white" />
      </div>
      </div>

    </div>
  );
};

export default BadgeShowcase;
