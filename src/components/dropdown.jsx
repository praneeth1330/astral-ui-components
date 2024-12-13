import React from 'react';
import { Dropdown } from '@cloudwick/astral-ui';

const DropdownShowcase = () => {
  const handleClick = (label) => {
    alert(`${label} clicked!`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Dropdown Component Showcase</h1>
      
      {/* Default Dropdown */}
      <div className="border p-4">
      <div className="flex items-center justify-between">

     <div>
      <h2 className="text-2xl font-semibold mb-4">Default Dropdown</h2>
      <Dropdown ctaContent="Open Menu">
        <Dropdown.Item onClickHandler={() => handleClick('Option 1')}>Option 1</Dropdown.Item>
        <Dropdown.Item onClickHandler={() => handleClick('Option 2')}>Option 2</Dropdown.Item>
        <Dropdown.Item onClickHandler={() => handleClick('Option 3')}>Option 3</Dropdown.Item>
      </Dropdown>
      </div>

      {/* Dropdown with Header */}
      <div className="">
      <h2 className="text-2xl font-semibold mb-4">Dropdown with Header</h2>
      <Dropdown ctaContent="More Options" header="Actions">
        <Dropdown.Item onClickHandler={() => handleClick('Download')}>Download</Dropdown.Item>
        <Dropdown.Item onClickHandler={() => handleClick('Share')}>Share</Dropdown.Item>
        <Dropdown.Item onClickHandler={() => handleClick('Delete')}>Delete</Dropdown.Item>
      </Dropdown>
      </div>
      </div>

      {/* Custom Styled Dropdown */}
      <div className=" flex items-center justify-between mt-8">
<div className="">
      <h2 className="text-2xl font-semibold mb-4 ">Custom Styled Dropdown</h2>
      <Dropdown 
        ctaContent="Custom Menu" 
        className="bg-gray-100 p-4 rounded-md shadow-md" 
      >
        <Dropdown.Item onClickHandler={() => handleClick('Custom Option 1')}>Custom Option 1</Dropdown.Item>
        <Dropdown.Item onClickHandler={() => handleClick('Custom Option 2')}>Custom Option 2</Dropdown.Item>
        <Dropdown.Item onClickHandler={() => handleClick('Custom Option 3')}>Custom Option 3</Dropdown.Item>
      </Dropdown>
      </div>
      {/* Large Dropdown */}
      <div className="">
      <h2 className="text-2xl font-semibold mb-4">Large Dropdown</h2>
      <Dropdown ctaContent="Large Menu" size="lg">
        <Dropdown.Item onClickHandler={() => handleClick('Large Option 1')}>Large Option 1</Dropdown.Item>
        <Dropdown.Item onClickHandler={() => handleClick('Large Option 2')}>Large Option 2</Dropdown.Item>
        <Dropdown.Item onClickHandler={() => handleClick('Large Option 3')}>Large Option 3</Dropdown.Item>
        <Dropdown.Item onClickHandler={() => handleClick('Large Option 4')}>Large Option 4</Dropdown.Item>
        <Dropdown.Item onClickHandler={() => handleClick('Large Option 5')}>Large Option 5</Dropdown.Item>
      </Dropdown>
      </div>
      </div>
      </div>


    </div>
  );
};

export default DropdownShowcase;
