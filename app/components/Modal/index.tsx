import React from "react";

interface ModalProps {
  name: string;
  desc: string;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ name, desc, closeModal }) => {
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex justify-center items-center w-full">
        <div className="bg-white p-4 rounded-lg shadow-lg relative">
          <button
            onClick={closeModal}
            className="absolute top-0 right-0 m-2 text-gray-600"
          >
            X
          </button>
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="mb-4">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
