import React from "react";

interface InputModalProps {
  open: boolean;
  onClose: () => void;
}

const InputModal: React.FC<InputModalProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-xl p-6 w-96">
        <h2 className="text-xl text-black mb-4">Input Code</h2>
        <input
          type="text"
          placeholder="enter your code"
          className="border border-gray-300 rounded-xl p-2 w-full mb-4 text-black"
        />
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#1402FE] text-white rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
          <button
            onClick={onClose}
            className="ml-2 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputModal;
