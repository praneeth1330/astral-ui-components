import React, { useState } from 'react';
import { Tabs } from '@cloudwick/astral-ui';

const TabsShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabSelect = (selectedTabId) => {
    setActiveTab(selectedTabId);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Tabs Component Showcase</h1>
      <div className="border p-4">

      {/* Default Tabs */}
      <h2 className="text-2xl font-semibold mb-4">Default Tabs</h2>
      <div className="space-y-8">
        <Tabs onSelect={handleTabSelect} className="space-x-4">
          <Tabs.Tab title="Tab 1" id="tab-1">
            <p>This is the content of Tab 1.</p>
          </Tabs.Tab>
          <Tabs.Tab title="Tab 2" id="tab-2">
            <p>This is the content of Tab 2.</p>
          </Tabs.Tab>
          <Tabs.Tab title="Tab 3" id="tab-3">
            <p>This is the content of Tab 3.</p>
          </Tabs.Tab>
        </Tabs>
      </div>

      {/* Tabs with Filled Variant */}
      <h2 className="text-2xl font-semibold mb-4 mt-8">Filled Tabs</h2>
      <div className="space-y-8">
        <Tabs variant="filled" color="primary" className="space-x-4">
          <Tabs.Tab title="Overview">
            <p>Overview Content</p>
          </Tabs.Tab>
          <Tabs.Tab title="Features">
            <p>Features Content</p>
          </Tabs.Tab>
          <Tabs.Tab title="Pricing">
            <p>Pricing Content</p>
          </Tabs.Tab>
        </Tabs>
      </div>

      {/* Tabs with Icons */}
      <h2 className="text-2xl font-semibold mb-4 mt-8">Tabs with Icons</h2>
      <div className="space-y-8">
        <Tabs variant="text" className="space-x-4">
          <Tabs.Tab title="Home" icon="add">
            <p>This is the Home tab content.</p>
          </Tabs.Tab>
          <Tabs.Tab title="Settings" icon="add">
            <p>This is the Settings tab content.</p>
          </Tabs.Tab>
          <Tabs.Tab title="Profile" icon="user">
            <p>This is the Profile tab content.</p>
          </Tabs.Tab>
        </Tabs>
      </div>

      {/* Tabs with Custom Sizes */}
      <h2 className="text-2xl font-semibold mb-4 mt-8">Tabs with Custom Sizes</h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">Small Tabs</h3>
          <Tabs size="sm" className="space-x-4">
            <Tabs.Tab title="Small 1">
              <p>Small Tab 1 Content</p>
            </Tabs.Tab>
            <Tabs.Tab title="Small 2">
              <p>Small Tab 2 Content</p>
            </Tabs.Tab>
          </Tabs>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Medium Tabs</h3>
          <Tabs size="md" className="space-x-4">
            <Tabs.Tab title="Medium 1">
              <p>Medium Tab 1 Content</p>
            </Tabs.Tab>
            <Tabs.Tab title="Medium 2">
              <p>Medium Tab 2 Content</p>
            </Tabs.Tab>
          </Tabs>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Large Tabs</h3>
          <Tabs size="lg" className="space-x-4">
            <Tabs.Tab title="Large 1">
              <p>Large Tab 1 Content</p>
            </Tabs.Tab>
            <Tabs.Tab title="Large 2">
              <p>Large Tab 2 Content</p>
            </Tabs.Tab>
          </Tabs>
        </div>
      </div>

      {/* Disabled Tabs */}
      <h2 className="text-2xl font-semibold mb-4 mt-8">Disabled Tabs</h2>
      <div className="space-y-8">
        <Tabs className="space-x-4">
          <Tabs.Tab title="Enabled Tab" id="enabled-tab">
            <p>This is the Enabled Tab content.</p>
          </Tabs.Tab>
          <Tabs.Tab title="Disabled Tab" disabled id="disabled-tab">
            <p>This tab is disabled and cannot be clicked.</p>
          </Tabs.Tab>
          <Tabs.Tab title="Another Enabled Tab" id="another-enabled-tab">
            <p>This is another enabled tab content.</p>
          </Tabs.Tab>
        </Tabs>
      </div>

      {/* Controlled Tabs */}
      <h2 className="text-2xl font-semibold mb-4 mt-8">Controlled Tabs</h2>
      <div className="space-y-8">
        <Tabs activeIndex={activeTab} onSelect={handleTabSelect} className="space-x-4">
          <Tabs.Tab title="Tab A">
            <p>This is Tab A content.</p>
          </Tabs.Tab>
          <Tabs.Tab title="Tab B">
            <p>This is Tab B content.</p>
          </Tabs.Tab>
          <Tabs.Tab title="Tab C">
            <p>This is Tab C content.</p>
          </Tabs.Tab>
        </Tabs>
      </div>
    </div>
    </div>
  );
};

export default TabsShowcase;
