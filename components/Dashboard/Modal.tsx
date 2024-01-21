"use client";
import { useEffect } from "react";

const Modal: React.FC<any> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      if (isOpen && e.target.classList.contains("modal-overlay")) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center modal-overlay bg-black bg-opacity-50 rounded-md">
          <div className="bg-white rounded-md shadow-lg max-w-[670px] w-full">
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
