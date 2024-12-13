import React from 'react';
import { ADPIcon,CTAGroup } from '@cloudwick/astral-ui';



const CTAGroupShowcase = () => {
  const handleClick = (label) => {
    alert(`${label} clicked!`);
  };

  const ctaList = [
    { label: 'Home', icon: <ADPIcon icon="approve" />, callback: () => handleClick('Home') },
    { label: 'Search', icon: <ADPIcon icon="apps" />, callback: () => handleClick('Search') },
    { label: 'Notifications', icon: <ADPIcon icon="attachment" />, callback: () => handleClick('Notifications') },
    { label: 'Settings', icon: <ADPIcon icon="api" />, callback: () => handleClick('Settings') },
    { label: 'Profile', icon: <ADPIcon icon="app" />, callback: () => handleClick('Profile') },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">CTA Group Component Showcase</h1>
      <div className='border p-4'>
      
      {/* Default CTA Group */}
      <h2 className="text-2xl font-semibold mb-4">Default CTA Group</h2>
      <CTAGroup ctaList={ctaList} />

      {/* Shrinked CTA Group */}
      <h2 className="text-2xl font-semibold mb-4 mt-8">Shrinked CTA Group</h2>
      <CTAGroup ctaList={ctaList} shrink={true} />

      {/* CTA Group with Labels */}
      <h2 className="text-2xl font-semibold mb-4 mt-8">CTA Group with Labels</h2>
      <CTAGroup ctaList={ctaList} showLabels />

      {/* CTA Group with Dropdown (Threshold: 3) */}
      <h2 className="text-2xl font-semibold mb-4 mt-8">CTA Group with Dropdown</h2>
      <CTAGroup ctaList={ctaList} threshold={3} />

      {/* Custom Styled CTA Group */}
      <h2 className="text-2xl font-semibold mb-4 mt-8">Custom Styled CTA Group</h2>
      <CTAGroup 
        ctaList={ctaList} 
        className="bg-gray-100 p-4 rounded-md shadow-md" 

      />
      </div>
    </div>
  );
};

export default CTAGroupShowcase;
