import React, { useState } from 'react';
import { Pagination } from '@cloudwick/astral-ui';

const PaginationShowcase = () => {
  const [activePage, setActivePage] = useState(1);
  const [activePageBasic, setActivePageBasic] = useState(1);
  const [activePageMinimal, setActivePageMinimal] = useState(1);

  const handlePageChange = (pageNumber) => {
    console.log('Current Page:', pageNumber);
    setActivePage(pageNumber);
  };

  const handleBasicPageChange = (pageNumber) => {
    console.log('Current Page:', pageNumber);
    setActivePageBasic(pageNumber);
  };

  const handleMinimalPageChange = (pageNumber) => {
    console.log('Current Page:', pageNumber);
    setActivePageMinimal(pageNumber);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Pagination Component Showcase</h1>

      {/* Detailed Layout */}
      <div className="border border-gray-300 rounded-lg p-4 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Detailed Pagination</h2>
        <p className="mb-4">This layout displays a full list of page numbers and navigation controls.</p>
        <Pagination 
          totalPages={20} 
          activePageNo={activePage} 
          layout="detailed" 
          onPageChange={handlePageChange} 
        />
      </div>

      {/* Basic Layout */}
      <div className="border border-gray-300 rounded-lg p-4 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Pagination</h2>
        <p className="mb-4">This layout displays a simple page count with Previous and Next buttons.</p>
        <Pagination 
          totalPages={15} 
          activePageNo={activePageBasic} 
          layout="basic" 
          onPageChange={handleBasicPageChange} 
        />
      </div>

      {/* Minimal Layout */}
      <div className="border border-gray-300 rounded-lg p-4 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Minimal Pagination</h2>
        <p className="mb-4">This layout displays only the Previous and Next buttons without page numbers.</p>
        <Pagination 
          totalPages={10} 
          activePageNo={activePageMinimal} 
          layout="minimal" 
          onPageChange={handleMinimalPageChange} 
        />
      </div>

      {/* Variants Showcase */}
      <div className="border border-gray-300 rounded-lg p-4 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Pagination Variants</h2>
        <p className="mb-4">Pagination components can be displayed with "filled" or "outline" variants.</p>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Filled Variant</h3>
            <Pagination 
              totalPages={12} 
              activePageNo={5} 
              variant="filled" 
              layout="detailed" 
              onPageChange={handlePageChange} 
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Outline Variant</h3>
            <Pagination 
              totalPages={12} 
              activePageNo={5} 
              variant="outline" 
              layout="detailed" 
              onPageChange={handlePageChange} 
            />
          </div>
        </div>
      </div>

      {/* Pagination with Custom Labels */}
      <div className="border border-gray-300 rounded-lg p-4 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Custom Pagination without Labels</h2>
        <p className="mb-4">Here, the "Previous" and "Next" labels are hidden, showing only the arrows.</p>
        <Pagination 
          totalPages={8} 
          activePageNo={3} 
          showLabels={false} 
          onPageChange={handlePageChange} 
        />
      </div>
    </div>
  );
};

export default PaginationShowcase;
