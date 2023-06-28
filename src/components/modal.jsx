import React, { useState, useEffect, useRef } from "react";

export const Modal = ({ show, onClose, children }) => {
  const [isOpen, setIsOpen] = useState(show);
  const modalRef = useRef(null);

  const handleClose = () => {
    setIsOpen(false);
    onClose && onClose();
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleClose();
    }
  };

  useEffect(() => {
    setIsOpen(show);
  }, [show]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center lg:justify-end lg:items-baseline  bottom-[200px] lg:bottom-0 lg:top-[90px] z-20  maxWidthSection overflow-hidden">
          <div
            className="fixed inset-0 bg-gray-900 opacity-50"
            onClick={handleClose}
          ></div>
          <div
            ref={modalRef}
            className="z-20 overflow-y-auto max-h-full lg:mx-36 xl:mx-0"
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};
