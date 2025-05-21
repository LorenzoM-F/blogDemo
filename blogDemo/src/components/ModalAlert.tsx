import React from "react";

interface ModalAlertProps {
  message: string;
  onClose: () => void;
}

const ModalAlert: React.FC<ModalAlertProps> = ({ message, onClose }) => {
  return (
    <>
      {/* Overlay with blur */}
      <div
        className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50"
        onClick={onClose} // Close if clicking outside the box
      >
        {/* Alert box */}
        <div
          className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          <p className="text-gray-800 text-center mb-4">{message}</p>
          <button
            onClick={onClose}
            className="block mx-auto px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 transition"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default ModalAlert;
