import React from 'react';
import { Checkbox } from '@cloudwick/astral-ui';

const CheckboxShowcase = () => {
  const handleCheckboxChange = (event) => {
    alert(`Checkbox ${event.target.id} is ${event.target.checked ? 'checked' : 'unchecked'}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Checkbox Component Showcase</h1>
      <div className="border p-4">
      
      {/* Checkbox Sizes */}
      <h2 className="text-2xl font-semibold mb-4">Checkbox Sizes</h2>
      <div className="flex space-x-4">
        <Checkbox size="sm" label="Small Checkbox" onChange={handleCheckboxChange} />
        <Checkbox size="md" label="Medium Checkbox" onChange={handleCheckboxChange} />
        <Checkbox size="lg" label="Large Checkbox" onChange={handleCheckboxChange} />
      </div>

      {/* Checkbox Variants */}
      <h2 className="text-2xl font-semibold mb-4 mt-8">Checkbox Variants</h2>
      <div className="flex space-x-4">
        <Checkbox variant="filled" label="Filled Checkbox" onChange={handleCheckboxChange} />
        <Checkbox variant="outline" label="Outline Checkbox" onChange={handleCheckboxChange} />
        <Checkbox variant="filled-circle" label="Filled Circle Checkbox" onChange={handleCheckboxChange} />
        <Checkbox variant="outline-circle" label="Outline Circle Checkbox" onChange={handleCheckboxChange} />
      </div>

      {/* Disabled Checkbox */}
      <h2 className="text-2xl font-semibold mb-4 mt-8">Disabled Checkbox</h2>
      <div className="flex space-x-4">
        <Checkbox label="Disabled Checkbox" disabled={true} />
      </div>

      {/* Checkbox with Default Checked */}
      <h2 className="text-2xl font-semibold mb-4 mt-8">Default Checked Checkbox</h2>
      <div className="flex space-x-4">
        <Checkbox label="Checked Checkbox" defaultChecked={true} onChange={handleCheckboxChange} />
      </div>

      {/* Group of Checkboxes */}
      <h2 className="text-2xl font-semibold mb-4 mt-8">Group of Checkboxes</h2>
      <div className="space-x-4 space-y-4">
        <Checkbox label="Option 1" id="option1" onChange={handleCheckboxChange} />
        <Checkbox label="Option 2" id="option2" onChange={handleCheckboxChange} />
        <Checkbox label="Option 3" id="option3" onChange={handleCheckboxChange} />
      </div>
     </div>
    </div>
  );
};

export default CheckboxShowcase;
