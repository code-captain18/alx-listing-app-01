import React from 'react';
import { ButtonProps } from '../../interfaces/index';

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  disabled = false,
  onClick,
  className = '',
  type = 'button'
}) => {
  const baseClasses = 'font-medium rounded-lg focus:ring-4 focus:outline-none transition-colors duration-200';
  
  const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
    primary: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 disabled:bg-blue-400',
    secondary: 'text-blue-700 bg-white border border-blue-700 hover:bg-blue-50 focus:ring-blue-300 disabled:text-blue-400 disabled:border-blue-400',
    danger: 'text-white bg-red-600 hover:bg-red-700 focus:ring-red-300 disabled:bg-red-400',
    success: 'text-white bg-green-600 hover:bg-green-700 focus:ring-green-300 disabled:bg-green-400'
  };

  const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
    small: 'px-3 py-2 text-xs',
    medium: 'px-5 py-2.5 text-sm',
    large: 'px-6 py-3 text-base'
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
