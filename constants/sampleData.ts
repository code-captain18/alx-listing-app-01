import { Property } from '../interfaces';

// Sample property data for development and testing
export const SAMPLE_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Cozy Downtown Apartment',
    description: 'A beautiful and modern apartment in the heart of the city with stunning views and all amenities.',
    price: 120,
    rating: 4.8,
    location: 'Downtown, New York',
    images: [
      '/assets/placeholder-property.svg',
      '/assets/placeholder-property.svg'
    ],
    amenities: ['WiFi', 'Kitchen', 'Air Conditioning', 'TV', 'Workspace'],
    host: {
      id: 'host1',
      name: 'Sarah Johnson',
      avatar: '/assets/placeholder-avatar.svg',
      isSuperhost: true
    },
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 1,
    propertyType: 'Apartment'
  },
  {
    id: '2',
    title: 'Luxury Villa with Pool',
    description: 'Spacious villa perfect for families and groups, featuring a private pool and garden.',
    price: 350,
    rating: 4.9,
    location: 'Beverly Hills, Los Angeles',
    images: [
      '/assets/placeholder-property.svg',
      '/assets/placeholder-property.svg'
    ],
    amenities: ['WiFi', 'Pool', 'Kitchen', 'Parking', 'Garden', 'Hot Tub'],
    host: {
      id: 'host2',
      name: 'Michael Chen',
      avatar: '/assets/placeholder-avatar.svg',
      isSuperhost: true
    },
    maxGuests: 8,
    bedrooms: 4,
    bathrooms: 3,
    propertyType: 'Villa'
  },
  {
    id: '3',
    title: 'Charming Studio Near Beach',
    description: 'Perfect getaway for couples, just steps away from the beach with ocean views.',
    price: 85,
    rating: 4.6,
    location: 'Santa Monica, California',
    images: [
      '/assets/placeholder-property.svg'
    ],
    amenities: ['WiFi', 'Kitchen', 'Balcony', 'TV'],
    host: {
      id: 'host3',
      name: 'Emma Rodriguez',
      avatar: '/assets/placeholder-avatar.svg',
      isSuperhost: false
    },
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    propertyType: 'Studio'
  }
];

// Sample search locations
export const POPULAR_LOCATIONS = [
  'New York, NY',
  'Los Angeles, CA',
  'San Francisco, CA',
  'Miami, FL',
  'Chicago, IL',
  'Seattle, WA',
  'Austin, TX',
  'Boston, MA'
];
