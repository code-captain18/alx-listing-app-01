// Card component props
export interface CardProps {
  title: string;
  description?: string;
  image?: string;
  price?: number;
  rating?: number;
  location?: string;
  onClick?: () => void;
}

// Button component props
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

// Property listing interface (for Airbnb-like listings)
export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  location: string;
  images: string[];
  amenities: string[];
  host: {
    id: string;
    name: string;
    avatar: string;
    isSuperhost: boolean;
  };
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  propertyType: string;
}

// Filter options interface
export interface FilterOptions {
  priceRange?: {
    min: number;
    max: number;
  };
  propertyType?: string[];
  amenities?: string[];
  rating?: number;
  location?: string;
}

// Search parameters interface
export interface SearchParams {
  location?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  filters?: FilterOptions;
}
