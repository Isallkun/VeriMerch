import React, { useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";

export default function QrScannerModal({ open, onClose }) {
  const qrCodeScannerRef = useRef(null);
  const html5QrCode = useRef(null);

  useEffect(() => {
    if (open) {
      html5QrCode.current = new Html5Qrcode("qr-reader");

      const config = {
        fps: 10,
        qrbox: 250,
      };

      html5QrCode.current
        .start(
          { facingMode: "environment" },
          config,
          (decodedText, decodedResult) => {
            console.log(`QR Code detected: ${decodedText}`);
            onClose();
          },
          (errorMessage) => {
            console.log(`QR Code no longer in front of camera. Result: ${errorMessage}`);
          }
        )
        .catch((err) => {
          console.error(`Failed to start scanning: ${err}`);
        });

      return () => {
        html5QrCode.current.stop().catch((err) => {
          console.error(`Failed to stop scanning: ${err}`);
        });
      };
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-xl p-6 w-96">
        <h2 className="text-xl text-black mb-4">Scan QR Code or Barcode</h2>
        <div id="qr-reader" className="mb-4"></div>
        <div className="flex justify-end">
          <button onClick={onClose} className="ml-2 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
