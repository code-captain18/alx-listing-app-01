import React from 'react';
import { CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  image, 
  price, 
  rating, 
  location,
  onClick 
}) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={onClick}
    >
      <div className="relative h-48 w-full">
        <img 
          src={image || '/assets/placeholder-property.svg'} 
          alt={title}
          className="w-full h-full object-cover"
        />
        {rating && (
          <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-sm font-semibold">
            ⭐ {rating}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 truncate">{title}</h3>
        {location && (
          <p className="text-gray-600 text-sm mb-2">{location}</p>
        )}
        {description && (
          <p className="text-gray-700 text-sm mb-3 line-clamp-2">{description}</p>
        )}
        {price && (
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900">${price}</span>
            <span className="text-sm text-gray-500">per night</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
