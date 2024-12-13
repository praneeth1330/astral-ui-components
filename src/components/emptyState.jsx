import React from 'react';
import { EmptyState,Button } from '@cloudwick/astral-ui';

const EmptyStateShowcase = () => {
  const handleActionClick = (action) => {
    alert(`${action} clicked!`);
  };

  return (
    <div className="w-full text-center">
      <h1 className="text-3xl font-bold text-center my-6">Empty State Component Showcase</h1>
      
      {/* Default Empty State */}
      <div className=' border p-4 mt-8'>
      <h2 className="text-2xl font-semibold mb-4">Default Empty State</h2>
      <EmptyState imageVariant="empty-data" imageAltText="No Data Available">
        <EmptyState.Content title="No Data Available">
          <p>We couldn't find any data to display. Please check your filters or try again later.</p>
        </EmptyState.Content>
      </EmptyState>
      </div>

      {/* Empty State with CTA */}
      <div className=' border p-4 mt-8'>

      <h2 className="text-2xl font-semibold mb-4 mt-8">Empty State with Call-to-Action</h2>
      <EmptyState imageVariant="file-upload" imageAltText="File Upload">
        <EmptyState.Content title="No Files Uploaded">
          <p>Upload your files to get started with the process.</p>
        </EmptyState.Content>
        <EmptyState.CTA>
          <Button onClick={() => handleActionClick('Upload Files')}>Upload Files</Button>
        </EmptyState.CTA>
      </EmptyState>
      </div>

      {/* Empty State with Multiple CTAs */}
      <div className=' border p-4 mt-8'>

      <h2 className="text-2xl font-semibold mb-4 mt-8">Empty State with Multiple CTAs</h2>
      <EmptyState imageVariant="no-connection" imageAltText="No Connection">
        <EmptyState.Content title="No Internet Connection">
          <p>Check your internet connection and try again.</p>
        </EmptyState.Content>
        <EmptyState.CTA>
          <Button onClick={() => handleActionClick('Retry')}>Retry</Button>
          <Button onClick={() => handleActionClick('Go to Help')} variant="outline">Go to Help</Button>
        </EmptyState.CTA>
        
      </EmptyState>
      </div>

      {/* Custom Styled Empty State */}
      <div className=' border p-4 mt-8'>

      <h2 className="text-2xl font-semibold mb-4 mt-8">Custom Styled Empty State</h2>
      <EmptyState 
        imageVariant="analytics" 
        imageAltText="Analytics Overview" 
        className="bg-gray-100 p-6 rounded-md shadow-md"
      >
        <EmptyState.Content title="No Analytics Data Available">
          <p>It looks like no analytics data is available for your selected date range.</p>
        </EmptyState.Content>
        <EmptyState.CTA>
          <Button onClick={() => handleActionClick('Update Filters')}>Update Filters</Button>
        </EmptyState.CTA>
      </EmptyState>
      </div>
    </div>
  );
};

export default EmptyStateShowcase;
