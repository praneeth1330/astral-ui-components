import React, { useState, useEffect } from 'react';
import { Progress } from '@cloudwick/astral-ui';

const ProgressBarShowcase = () => {
  const [dynamicValue, setDynamicValue] = useState(0);

  // Simulate progress value change for the dynamic example
  useEffect(() => {
    const interval = setInterval(() => {
      setDynamicValue((prevValue) => (prevValue >= 100 ? 0 : prevValue + 10));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Progress Bar Showcase</h1>
      <div className="border p-4">

      {/* Linear Progress Examples */}
      <h2 className="text-2xl font-semibold mb-4">Linear Progress</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Basic Linear Progress</h3>
          <Progress variant="linear" value={50} />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Linear Progress with Percentage</h3>
          <Progress variant="linear" value={70} showPercentage />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Striped and Animated Linear Progress</h3>
          <Progress variant="linear" value={40} striped animate />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Linear Progress with Custom Value Position</h3>
          <Progress variant="linear" value={60} valuePosition="top" showPercentage />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Linear Progress with Custom Colors</h3>
          <Progress variant="linear" value={30} color="success" showPercentage />
          <Progress variant="linear" value={45} color="error" showPercentage />
          <Progress variant="linear" value={75} color="warning" showPercentage />
        </div>
      </div>

      {/* Circular Progress Examples */}
      <h2 className="text-2xl font-semibold mb-4 mt-10">Circular Progress</h2>

      <div className="grid grid-cols-2 gap-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Circular Progress (MD)</h3>
          <Progress variant="circular" value={25} size="md" />
        </div>

        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Circular Progress (LG)</h3>
          <Progress variant="circular" value={50} size="lg" />
        </div>

        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Circular Progress with Percentage</h3>
          <Progress variant="circular" value={75} size="lg" showPercentage />
        </div>

        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Dynamic Circular Progress</h3>
          <Progress variant="circular" value={dynamicValue} size="md" showPercentage />
        </div>
      </div>

      {/* Custom Progress Example */}
      <h2 className="text-2xl font-semibold mb-4 mt-10">Dynamic Progress</h2>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Dynamic Progress with Changing Values</h3>
        <Progress variant="linear" value={dynamicValue} showPercentage striped animate />
      </div>

      <div className="mt-10 text-center">
        <h3 className="text-lg font-semibold mb-2">Dynamic Circular Progress</h3>
        <Progress variant="circular" value={dynamicValue} size="lg" showPercentage />
      </div>
      </div>
    </div>
  );
};

export default ProgressBarShowcase;
