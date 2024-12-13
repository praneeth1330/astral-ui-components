import React, { useState } from 'react';
import { Panel, TextField, Button, Select } from '@cloudwick/astral-ui';

const MultiStepForm = () => {
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    address: '',
    country: null,
    gender: null,
    interests: []
  });

  const [errors, setErrors] = useState({
    username: false,
    email: false,
    password: false,
    address: false,
    country: false,
    gender: false,
    interests: false
  });

  // Step fields for validation
  const stepFields = [
    ['username', 'email'],  // Step 1 fields
    ['password'],           // Step 2 fields
    ['address', 'country'], // Step 3 fields
    ['gender', 'interests'] // Step 4 fields
  ];

  const steps = [
    {
      title: 'Step 1: Personal Info',
      content: (
        <>
          <TextField
            label="Username"
            value={formData.username}
            onChange={(e) => handleChange('username', e.target.value)}
            placeholder="Enter your username"
            error={errors.username}
            helperText={errors.username && "Username is required"}
          />

          <TextField
            label="Email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="Enter your email"
            error={errors.email}
            helperText={errors.email && "Email is required"}
          />
        </>
      )
    },
    {
      title: 'Step 2: Security Info',
      content: (
        <>
          <TextField
            label="Password"
            type="password"
            value={formData.password}
            onChange={(e) => handleChange('password', e.target.value)}
            placeholder="Enter your password"
            error={errors.password}
            helperText={errors.password && "Password is required"}
          />
        </>
      )
    },
    {
      title: 'Step 3: Address Details',
      content: (
        <>
          <TextField
            label="Address"
            value={formData.address}
            onChange={(e) => handleChange('address', e.target.value)}
            placeholder="Enter your address"
            error={errors.address}
            helperText={errors.address && "Address is required"}
          />

          <Select
            label="Country"
            value={formData.country}
            onChange={(option) => handleChange('country', option)}
            options={[
              { value: 'usa', label: 'United States' },
              { value: 'canada', label: 'Canada' },
              { value: 'uk', label: 'United Kingdom' },
              { value: 'india', label: 'India' },
              { value: 'australia', label: 'Australia' }
            ]}
            placeholder="Select your country"
            error={errors.country}
            helperText={errors.country && "Country is required"}
          />
        </>
      )
    },
    {
      title: 'Step 4: Additional Info',
      content: (
        <>
          <Select
            label="Gender"
            value={formData.gender}
            onChange={(option) => handleChange('gender', option)}
            options={[
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
              { value: 'other', label: 'Other' }
            ]}
            placeholder="Select your gender"
            error={errors.gender}
            helperText={errors.gender && "Gender is required"}
          />

          <Select
            label="Interests"
            value={formData.interests}
            onChange={(options) => handleChange('interests', options)}
            options={[
              { value: 'coding', label: 'Coding' },
              { value: 'design', label: 'Design' },
              { value: 'music', label: 'Music' },
              { value: 'travel', label: 'Travel' },
              { value: 'fitness', label: 'Fitness' }
            ]}
            multiSelect
            placeholder="Select your interests"
            error={errors.interests}
            helperText={errors.interests && "At least one interest is required"}
          />
        </>
      )
    }
  ];

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: false });
  };

  const togglePanel = () => {
    setIsPanelVisible(!isPanelVisible);
  };

  const handleNextStep = () => {
    if (validateStep()) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  function handleFormSubmit() {
    alert('Form submitted successfully!');
    console.log('Form Data:', formData);
    setIsPanelVisible(false);
    setCurrentStep(0);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      username: '',
      email: '',
      password: '',
      address: '',
      country: null,
      gender: null,
      interests: []
    });
    setErrors({
      username: false,
      email: false,
      password: false,
      address: false,
      country: false,
      gender: false,
      interests: false
    });
  };

  const validateStep = () => {
    const currentFields = stepFields[currentStep];
    const newErrors = { ...errors };
    let isValid = true;

    currentFields.forEach((field) => {
      if (!formData[field] || (Array.isArray(formData[field]) && formData[field].length === 0)) {
        newErrors[field] = true;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Multi-Step Form with Panel</h1>

      <button 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={togglePanel}
      >
        Start Multi-Step Form
      </button>

      <Panel showPanel={isPanelVisible} onHide={togglePanel}>
        <Panel.Header 
          header={steps[currentStep].title} 
          subHeader={`Step ${currentStep + 1} of ${steps.length}`} 
          showCloseButton 
          onCloseHandler={togglePanel} 
        />
        <Panel.Body>
          <div className="p-4 space-y-4">
            {steps[currentStep].content}
          </div>
        </Panel.Body>
        <Panel.Footer>
          <div className="p-4 flex justify-between">
            {currentStep > 0 && <Button onClick={handlePreviousStep}>Back</Button>}
            {currentStep < steps.length - 1 && <Button onClick={handleNextStep}>Next</Button>}
            {currentStep === steps.length - 1 && <Button onClick={handleFormSubmit}>Submit</Button>}
          </div>
        </Panel.Footer>
      </Panel>
    </div>
  );
};

export default MultiStepForm;
