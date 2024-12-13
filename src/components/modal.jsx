import React, { useState } from 'react';
import { Modal ,Button} from '@cloudwick/astral-ui';

const ModalShowcase = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userInput, setUserInput] = useState('');

  // Function to toggle the visibility of the modal
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  // Function to handle user input
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Modal Component Showcase</h1>

      {/* Input Field for User to Enter Text */}
      <div className="mb-4">
        <label htmlFor="userInput" className="block text-lg font-semibold mb-2">Enter Text to Display in Modal</label>
        <input
          type="text"
          id="userInput"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Type something here..."
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Button to open modal */}
      <Button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={toggleModal}

      >
        Open Modal
      </Button>

      {/* Modal Example */}
      <Modal showModal={isModalVisible} onHide={toggleModal} closeButton>
        <Modal.Header>
          <h2 className="text-xl font-semibold">User Input</h2>
        </Modal.Header>
        <Modal.Body>
          <p className="text-gray-700">
            {userInput ? userInput : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis reprehenderit dolorum aut dolore ab, voluptas nulla vero quod odio consectetur saepe sit! Sit officia minus repudiandae necessitatibus nobis facere doloremque!'}
            
          </p>
        </Modal.Body>
      </Modal>


    </div>
  );
};

export default ModalShowcase;
