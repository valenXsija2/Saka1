import React from 'react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'Rounded' | 'Simple';
  size: 'Small' | 'Medium' | 'Large';
  content: string;  
}

const sizeClasses = {
  Small: 'w-1/4',
  Medium: 'w-1/2',
  Large: 'w-3/4',
};

const typeClasses = {
  Rounded: 'rounded-lg',
  Simple: '',
};

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, type, size, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className={`bg-white p-5 ${sizeClasses[size]} ${typeClasses[type]} relative text-black`}>
        <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>
          &times;
        </button>
        <div>{content}</div>
      </div>
    </div>
  );
};
