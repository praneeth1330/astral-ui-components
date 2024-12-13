import React, { useState } from 'react';
import { Panel } from '@cloudwick/astral-ui';
import MultiStepForm from './multiForm';


const PanelShowcase = () => {
  const [isCompactPanelVisible, setIsCompactPanelVisible] = useState(false);
  const [isExtendedPanelVisible, setIsExtendedPanelVisible] = useState(false);
  const [isCustomPanelVisible, setIsCustomPanelVisible] = useState(false);

  // Toggle Compact Panel
  const toggleCompactPanel = () => {
    setIsCompactPanelVisible(!isCompactPanelVisible);
  };

  // Toggle Extended Panel
  const toggleExtendedPanel = () => {
    setIsExtendedPanelVisible(!isExtendedPanelVisible);
  };

  // Toggle Custom Panel
  const toggleCustomPanel = () => {
    setIsCustomPanelVisible(!isCustomPanelVisible);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Panel Component Showcase</h1>

      {/* Buttons to open multiple panels */}
      <div className="space-y-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full"
          onClick={toggleCompactPanel}
        >
          Open Compact Panel
        </button>

        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 w-full"
          onClick={toggleExtendedPanel}
        >
          Open Extended Panel
        </button>

        <button
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 w-full"
          onClick={toggleCustomPanel}
        >
          Open Custom Panel
        </button>
      </div>

      {/* Compact Panel */}
      <Panel showPanel={isCompactPanelVisible} onHide={toggleCompactPanel} variant="compact">
        <Panel.Header 
          header="Compact Panel" 
          subHeader="A minimal compact design" 
          showCloseButton 
          onCloseHandler={toggleCompactPanel} 
        />
        <Panel.Body>
          <p className="p-4 text-gray-700">
            This is the content of the **Compact Panel**. It's smaller and ideal for minimal content.
          </p>
        </Panel.Body>
        <Panel.Footer>
          <div className="p-4">
            <button 
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 w-full" 
              onClick={toggleCompactPanel}
            >
              Close Panel
            </button>
          </div>
        </Panel.Footer>
      </Panel>

      {/* Extended Panel */}
      <Panel showPanel={isExtendedPanelVisible} onHide={toggleExtendedPanel} variant="extended">
        <Panel.Header 
          header="Extended Panel" 
          subHeader="A larger panel with more space" 
          showCloseButton 
          onCloseHandler={toggleExtendedPanel} 
        />
        <Panel.Body>
          <div className="p-4">
            <p className="text-gray-700 mb-4">
              The **Extended Panel** offers a larger space, which is perfect for forms, images, and detailed content.
            </p>
            <ul className="list-disc pl-8">
              <li>Point 1: Can hold larger amounts of content</li>
              <li>Point 2: Suitable for multi-step forms</li>
              <li>Point 3: Can include additional elements like images and large text</li>
            </ul>
          </div>
        </Panel.Body>
        <Panel.Footer>
          <div className="p-4 flex justify-end space-x-4">
            <button 
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600" 
              onClick={toggleExtendedPanel}
            >
              Back
            </button>
            <button 
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" 
              onClick={toggleExtendedPanel}
            >
              Close Panel
            </button>
          </div>
        </Panel.Footer>
      </Panel>

      {/* Custom Panel */}
      <Panel showPanel={isCustomPanelVisible} onHide={toggleCustomPanel} variant="extended">
        <Panel.Header 
          header="Custom Panel" 
          subHeader="Custom Design and Interactions" 
          showCloseButton 
          onCloseHandler={toggleCustomPanel} 
        />
        <Panel.Body>
          <div className="p-4">
            <p className="text-gray-700 mb-4">
              The **Custom Panel** allows you to create personalized experiences for your users. 
              Here, you can add forms, images, and more.
            </p>

            <form>
              <label className="block mb-2 font-semibold" htmlFor="username">Username</label>
              <input 
                type="text" 
                id="username" 
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Enter your username" 
              />

              <label className="block mb-2 font-semibold" htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Enter your email" 
              />

              <button 
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full" 
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </Panel.Body>
        <Panel.Footer>
          <div className="p-4 flex justify-end space-x-4">
            <button 
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" 
              onClick={toggleCustomPanel}
            >
              Close Panel
            </button>
          </div>
        </Panel.Footer>
      </Panel>
      <MultiStepForm/>


    </div>
  );
};

export default PanelShowcase;
