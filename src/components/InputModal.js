import React from "react";

export default function InputModal({ open, onClose }) {
  if (!open) return null; // Jika modal tidak terbuka, jangan render apa pun

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
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
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
}
