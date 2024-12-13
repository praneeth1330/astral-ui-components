import React, { useState } from 'react';
import { Toast ,Button} from '@cloudwick/astral-ui';

const ToastShowcase = () => {
  const [showInfoToast, setShowInfoToast] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showWarningToast, setShowWarningToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  const triggerToast = (toastType) => {
    switch (toastType) {
      case 'info':
        setShowInfoToast(true);
        break;
      case 'success':
        setShowSuccessToast(true);
        break;
      case 'warning':
        setShowWarningToast(true);
        break;
      case 'error':
        setShowErrorToast(true);
        break;
      default:
        break;
    }
    setTimeout(() => {
      switch (toastType) {
        case 'info':
          setShowInfoToast(false);
          break;
        case 'success':
          setShowSuccessToast(false);
          break;
        case 'warning':
          setShowWarningToast(false);
          break;
        case 'error':
          setShowErrorToast(false);
          break;
        default:
          break;
      }
    }, 5000); // Toast will disappear after 5 seconds
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Toast Component Showcase</h1>

      {/* Info Toast */}
      <div className="border border-gray-300 rounded-lg p-4 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Info Toast</h2>
        <Button 
          onClick={() => triggerToast('info')} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Show Info Toast
        </Button>
        {showInfoToast && (
          <Toast 
            variant="info" 
            onClose={() => setShowInfoToast(false)} 
            autoHideDelay={5000}
          >
            This is an informational message!
          </Toast>
        )}
      </div>

      {/* Success Toast */}
      <div className="border border-gray-300 rounded-lg p-4 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Success Toast</h2>
        <Button 
          onClick={() => triggerToast('success')} 
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Show Success Toast
        </Button>
        {showSuccessToast && (
          <Toast 
            variant="success" 
            onClose={() => setShowSuccessToast(false)} 
            autoHideDelay={5000}
          >
            Your operation was successful!
          </Toast>
        )}
      </div>

      {/* Warning Toast */}
      <div className="border border-gray-300 rounded-lg p-4 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Warning Toast</h2>
        <Button 
          onClick={() => triggerToast('warning')} 
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Show Warning Toast
        </Button>
        {showWarningToast && (
          <Toast 
            variant="warning" 
            onClose={() => setShowWarningToast(false)} 
            autoHideDelay={5000}
          >
            This is a warning message. Please be careful!
          </Toast>
        )}
      </div>

      {/* Error Toast */}
      <div className="border border-gray-300 rounded-lg p-4 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Error Toast</h2>
        <Button 
          onClick={() => triggerToast('error')} 
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Show Error Toast
        </Button>
        {showErrorToast && (
          <Toast 
            variant="error" 
            onClose={() => setShowErrorToast(false)} 
            autoHideDelay={5000}
          >
            Something went wrong. Please try again later.
          </Toast>
        )}
      </div>
    </div>
  );
};

export default ToastShowcase;
