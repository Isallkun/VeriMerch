import React, { useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";

interface QrScannerModalProps {
  open: boolean;
  onClose: () => void;
}

const QrScannerModal: React.FC<QrScannerModalProps> = ({ open, onClose }) => {
  const qrCodeScannerRef = useRef<HTMLDivElement | null>(null);
  const html5QrCode = useRef<Html5Qrcode | null>(null);

  useEffect(() => {
    if (open) {
      html5QrCode.current = new Html5Qrcode("qr-reader");

      const config = {
        fps: 10,
        qrbox: 250,
      };

      html5QrCode.current.start(
        { facingMode: "environment" },
        config,
        (decodedText) => {
          console.log(`Code matched = ${decodedText}`);
          onClose();
        },
        (errorMessage) => {
          console.log(`Error = ${errorMessage}`);
        }
      );

      return () => {
        if (html5QrCode.current) {
          html5QrCode.current.stop().catch((err) => console.error(err));
        }
      };
    }
  }, [open, onClose]);

  return open ? (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-xl p-6 w-96">
        <div id="qr-reader" ref={qrCodeScannerRef}></div>
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  ) : null;
};

export default QrScannerModal;
