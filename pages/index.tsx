import React, { useState } from "react";
import Button from "../components/common/Button";
import Pill from "../components/common/Pill";
import PropertyCard from "../components/common/PropertyCard";
import { HERO_IMAGES, FILTER_LABELS, PROPERTYLISTINGSAMPLE } from "../constants";

export default function Home() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleFilterClick = (filter: string) => {
    setActiveFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${HERO_IMAGES.HOME_BACKGROUND}')`
        }}
      >
        {/* Hero Content */}
        <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Find your favorite place here!
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 font-light leading-relaxed opacity-90">
            The best prices for over 2 million properties worldwide.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="large"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold w-full sm:w-auto"
            >
              Start Exploring
            </Button>
            <Button
              size="large"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold w-full sm:w-auto !text-white hover:!text-gray-900"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white opacity-75"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Popular Filters
              </h2>
              <p className="text-gray-600">
                Find properties that match your preferences
              </p>
            </div>

            {/* Clear All Button */}
            {activeFilters.length > 0 && (
              <Button
                variant="secondary"
                size="small"
                onClick={() => setActiveFilters([])}
                className="text-gray-600 hover:text-gray-900"
              >
                Clear All ({activeFilters.length})
              </Button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-3">
            {FILTER_LABELS.map((filter, index) => (
              <Pill
                key={index}
                label={filter}
                isActive={activeFilters.includes(filter)}
                onClick={() => handleFilterClick(filter)}
                variant="outlined"
                size="medium"
                className="transition-transform hover:scale-105"
              />
            ))}
          </div>

          {/* Active Filters Summary */}
          {activeFilters.length > 0 && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-1">
                    Active Filters ({activeFilters.length})
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {activeFilters.map((filter, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-red-100 text-red-800"
                      >
                        {filter}
                        <button
                          type="button"
                          onClick={() => handleFilterClick(filter)}
                          className="ml-1 text-red-600 hover:text-red-800 focus:outline-none"
                          aria-label={`Remove ${filter} filter`}
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
                <Button
                  size="small"
                  className="bg-red-500 hover:bg-red-600 text-white"
                >
                  Apply Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Property Listings Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Explore Amazing Places
              </h2>
              <p className="text-gray-600">
                Discover over {PROPERTYLISTINGSAMPLE.length.toLocaleString()} unique properties worldwide
              </p>
            </div>

            {/* Sort Dropdown */}
            <div className="hidden sm:flex items-center space-x-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500">
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          {/* Results Count and Filter Status */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-gray-600">
              Showing {PROPERTYLISTINGSAMPLE.length} of {PROPERTYLISTINGSAMPLE.length} properties
              {activeFilters.length > 0 && (
                <span className="ml-1">
                  • {activeFilters.length} filter{activeFilters.length !== 1 ? 's' : ''} applied
                </span>
              )}
            </p>

            {/* Mobile Sort */}
            <div className="sm:hidden">
              <select className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500">
                <option value="recommended">Sort</option>
                <option value="price-low">Price ↑</option>
                <option value="price-high">Price ↓</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {PROPERTYLISTINGSAMPLE.map((property, index) => (
              <PropertyCard
                key={index}
                property={property}
                onClick={() => {
                  console.log('Navigate to property:', property.name);
                  // Handle navigation to property details
                }}
                className="hover:shadow-xl transition-shadow duration-300"
              />
            ))}
          </div>

          {/* Load More Section */}
          <div className="text-center">
            <Button
              size="large"
              variant="secondary"
              className="px-8 py-3 border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Load More Properties
            </Button>
            <p className="text-sm text-gray-500 mt-3">
              Showing all {PROPERTYLISTINGSAMPLE.length} properties
            </p>
          </div>
        </div>
      </section>

      {/* Additional sections can go here */}
    </>
  );
}
