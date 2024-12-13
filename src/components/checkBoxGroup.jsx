import React, { useState } from 'react';
import { CheckboxGroup } from '@cloudwick/astral-ui';

const CheckboxGroupShowcase = () => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleGroupChange = (newSelectedValues) => {
    setSelectedValues(newSelectedValues);
    alert(`Selected values: ${newSelectedValues.join(', ')}`);
  };

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 4', value: 'option4', disabled: true },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Checkbox Group Component Showcase</h1>
      <div className="border p-4">
      
      {/* Checkbox Group Sizes */}
      <div className='flex items-center justify-between'>
      <div className=" space-x-3">
      <h2 className="text-2xl font-semibold mb-4">Checkbox Group Sizes</h2>
        <CheckboxGroup size="sm" options={options} onChange={handleGroupChange} />
        <CheckboxGroup size="md" options={options} onChange={handleGroupChange} />
        <CheckboxGroup size="lg" options={options} onChange={handleGroupChange} />
      </div>

      {/* Disabled Checkbox Group */}
      <div className=" ">
      <h2 className="text-2xl font-semibold mb-4 ">Disabled Checkbox Group</h2>
        <CheckboxGroup options={options} disabled={true} />
      </div>
      </div>

      {/* Checkbox Group with Pre-selected Values */}
      <div className="flex items-center justify-between">
      <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4 ">Pre-selected Checkbox Group</h2>
        <CheckboxGroup options={options} selectedValues={["option1", "option3"]} onChange={handleGroupChange} />
      </div>

      {/* Checkbox Group with Custom Classes */}
      <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4 mt-10">Custom Styled Checkbox Group</h2>
        <CheckboxGroup 
          options={options} 
          onChange={handleGroupChange} 
          className="bg-gray-100 p-4 rounded-md shadow-md" 
        />
      </div>
      </div>
      </div>
    </div>
  );
};

export default CheckboxGroupShowcase;