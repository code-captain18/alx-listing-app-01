import React from 'react';
import { PillProps } from '../../interfaces';

const Pill: React.FC<PillProps> = ({
    label,
    isActive = false,
    onClick,
    variant = 'default',
    size = 'medium',
    icon,
    disabled = false,
    className = ''
}) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 cursor-pointer border focus:outline-none focus:ring-2 focus:ring-offset-1';

    const sizeClasses = {
        small: 'px-3 py-1 text-xs',
        medium: 'px-4 py-2 text-sm',
        large: 'px-6 py-3 text-base'
    };

    const variantClasses = {
        default: isActive
            ? 'bg-gray-900 text-white border-gray-900 hover:bg-gray-800 focus:ring-gray-500'
            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400 focus:ring-gray-300',
        outlined: isActive
            ? 'bg-red-500 text-white border-red-500 hover:bg-red-600 focus:ring-red-300'
            : 'bg-transparent text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400 focus:ring-gray-300'
    };

    const disabledClasses = disabled
        ? 'opacity-50 cursor-not-allowed hover:bg-gray-50 hover:border-gray-300'
        : '';

    const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${className}`;

    const handleClick = () => {
        if (!disabled && onClick) {
            onClick();
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (!disabled && (event.key === 'Enter' || event.key === ' ')) {
            event.preventDefault();
            if (onClick) {
                onClick();
            }
        }
    };

    return (
        <button
            type="button"
            className={combinedClasses}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            role="button"
            tabIndex={disabled ? -1 : 0}
            aria-pressed={isActive}
        >
            {icon && (
                <span className={`${label ? 'mr-2' : ''} flex-shrink-0`}>
                    {icon}
                </span>
            )}
            {label && <span>{label}</span>}
        </button>
    );
};

export default Pill;