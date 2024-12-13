import React, { useState } from "react";
import { ADPIcon, Toggle } from "@cloudwick/astral-ui";
import { Link } from "react-router-dom";

export const Navbar = ({ onToggleChange }) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const closePanel = () => {
    setIsPanelOpen(false);
  };

  const handleToggleChange = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);
    onToggleChange(newDarkModeState); // Notify the parent component (App) of the change
  };

  return (
    <div className="relative bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">V3-Playground</h1>
        <div className="flex items-center space-x-4">
          <Toggle 
            toggled={isDarkMode}
            onChange={handleToggleChange}
            toggledIcon="circle"
            untoggledIcon="circle-outline"
            label={isDarkMode ? <spam className="text-white">Dark Mode</spam> : <span className="text-blue-500">Light Mode</span>}
          />
          {/* <button
            onClick={togglePanel}
            className="p-2 rounded-md bg-gray-700 hover:bg-gray-600 focus:outline-none"
          >
            <ADPIcon icon="v-menu" />
          </button> */}
        </div>
      </div>

      {/* <Panel showPanel={isPanelOpen} variant="compact" className="bg-white" >
        <Panel.Header
          header="Navigation Menu"
          showCloseButton
          onCloseHandler={closePanel}
        />
        <Panel.Body>
          <ul className="space-y-4 p-4">
            <li>
              <Link
                to="/accordion"
                className="block text-gray-800 hover:text-blue-600"
              >
                Accordion
              </Link>
            </li>
            <li>
              <Link
                to="/avatar"
                className="block text-gray-800 hover:text-blue-600"
              >
                Avatar
              </Link>
            </li>
            <li>
              <Link
                to="/empty"
                className="block text-gray-800 hover:text-blue-600"
              >
                Empty State
              </Link>
            </li>
            <li>
              <Link
                to="/common"
                className="block text-gray-800 hover:text-blue-600"
              >
                Common components 
              </Link>
            </li>
          </ul>
        </Panel.Body>

        <Panel.Footer>
          <div className="p-4">
            <button
              onClick={closePanel}
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Close Menu
            </button>
          </div>
        </Panel.Footer>
      </Panel> */}
      <ul className="flex  items-center justify-center text-white space-x-4">
            <li>
              <Link
                to="/"
                className="block  hover:text-blue-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/accordion"
                className="block  hover:text-blue-600"
              >
                Accordion
              </Link>
            </li>
            {/* <li>
              <Link
                to="/avatar"
                className="block  hover:text-blue-600"
              >
                Avatar
              </Link>
            </li> */}
            <li>
              <Link
                to="/empty"
                className="block  hover:text-blue-600"
              >
                Empty State
              </Link>
            </li>
            <li>
              <Link
                to="/common"
                className="block  hover:text-blue-600"
              >
                Common components 
              </Link>
            </li>
          </ul>
    </div>
  );
};

export default Navbar;
