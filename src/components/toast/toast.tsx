import React from 'react';
import { ToastProps } from './toast.type';
import '../../app/globals.css';

const variantClasses = {
  success: 'bg-green-500 text-white',
  danger: 'bg-red-500 text-white',
  information: 'bg-blue-500 text-white',
  warning: 'bg-yellow-500 text-black',
};

const sizeClasses = {
  small: 'text-sm p-2',
  medium: 'text-base p-4',
  large: 'text-lg p-6',
};

const typeIcons = {
  information: '🛈', 
  notification: '🔔', 
  success: '✅', 
  danger: '⚠️', 
  eror: '❌',
};

const Toast: React.FC<ToastProps> = ({ message, variant, size, type, icon }) => {
  return (
    <div className={`flex items-center gap-2 ${variantClasses[variant]} ${sizeClasses[size]} rounded-md`}>
      <span>{icon || typeIcons[type]}</span>
      <p>{message}</p>
    </div>
  );
};

export default Toast;
