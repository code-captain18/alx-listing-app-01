// API Configuration
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';

// UI Text Constants
export const UI_TEXT = {
  APP_NAME: 'ALX Listing App',
  TAGLINE: 'Find your perfect stay',
  BUTTONS: {
    BOOK_NOW: 'Book Now',
    VIEW_DETAILS: 'View Details',
    SEARCH: 'Search',
    FILTER: 'Filter',
    RESET: 'Reset',
    LOAD_MORE: 'Load More'
  },
  LABELS: {
    LOCATION: 'Location',
    CHECK_IN: 'Check-in',
    CHECK_OUT: 'Check-out',
    GUESTS: 'Guests',
    PRICE: 'Price',
    RATING: 'Rating',
    AMENITIES: 'Amenities'
  },
  MESSAGES: {
    NO_RESULTS: 'No properties found matching your criteria',
    LOADING: 'Loading...',
    ERROR: 'Something went wrong. Please try again.',
    SUCCESS: 'Success!'
  }
};

// Property Types
export const PROPERTY_TYPES = [
  'Apartment',
  'House',
  'Villa',
  'Condo',
  'Townhouse',
  'Loft',
  'Studio',
  'Cabin',
  'Hotel',
  'Resort'
];

// Popular Amenities
export const AMENITIES = [
  'WiFi',
  'Kitchen',
  'Washing Machine',
  'Air Conditioning',
  'Heating',
  'Pool',
  'Gym',
  'Parking',
  'Balcony',
  'Garden',
  'Hot Tub',
  'Fireplace',
  'TV',
  'Workspace'
];

// Price Ranges for Filtering
export const PRICE_RANGES = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $100', min: 50, max: 100 },
  { label: '$100 - $200', min: 100, max: 200 },
  { label: '$200 - $500', min: 200, max: 500 },
  { label: 'Over $500', min: 500, max: Infinity }
];

// Default Search Configuration
export const DEFAULT_SEARCH = {
  RESULTS_PER_PAGE: 12,
  MAX_GUESTS: 16,
  MIN_RATING: 0,
  MAX_RATING: 5
};

// Image Placeholders
export const PLACEHOLDER_IMAGES = {
  PROPERTY: '/assets/placeholder-property.jpg',
  AVATAR: '/assets/placeholder-avatar.jpg',
  NO_IMAGE: '/assets/no-image.svg'
};

// Route Constants
export const ROUTES = {
  HOME: '/',
  PROPERTIES: '/properties',
  PROPERTY_DETAILS: '/properties',
  SEARCH: '/search',
  PROFILE: '/profile',
  BOOKINGS: '/bookings'
};
