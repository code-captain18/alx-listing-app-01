import { PropertyProps } from "@/interfaces/index";
import BookingSection from "./BookingSection";
import { useRef } from "react";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
    // Refs for scrolling to sections
    const descriptionRef = useRef<HTMLDivElement>(null);
    const offersRef = useRef<HTMLDivElement>(null);
    const reviewsRef = useRef<HTMLDivElement>(null);
    const hostRef = useRef<HTMLDivElement>(null);

    const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
        ref.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    };
    return (
        <div className="container mx-auto p-6">
            {/* Header */}
            <h1 className="text-4xl font-bold">{property.name}</h1>
            <div className="flex items-center space-x-2 mt-2">
                <span className="text-yellow-500">{property.rating} stars</span>
                <span>{property.address.city}, {property.address.country}</span>
            </div>

            {/* Image Grid */}
            <div className="mt-4">
                {/* Mobile Layout - Single column */}
                <div className="block md:hidden space-y-4">
                    <img
                        src={property.images[0]}
                        alt={`${property.name} - Main Image`}
                        className="w-full h-64 object-cover rounded-lg"
                    />
                    {property.images[1] && (
                        <img
                            src={property.images[1]}
                            alt={`${property.name} - Image 2`}
                            className="w-full h-48 object-cover rounded-lg"
                        />
                    )}
                    {property.images[2] && (
                        <img
                            src={property.images[2]}
                            alt={`${property.name} - Image 3`}
                            className="w-full h-48 object-cover rounded-lg"
                        />
                    )}
                    {property.images[3] && (
                        <img
                            src={property.images[3]}
                            alt={`${property.name} - Image 4`}
                            className="w-full h-48 object-cover rounded-lg"
                        />
                    )}
                </div>

                {/* Tablet Layout - 2x2 grid */}
                <div className="hidden md:block lg:hidden">
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 h-96">
                        <img
                            src={property.images[0]}
                            alt={`${property.name} - Main Image`}
                            className="w-full h-full object-cover rounded-lg"
                        />
                        {property.images[1] && (
                            <img
                                src={property.images[1]}
                                alt={`${property.name} - Image 2`}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        )}
                        {property.images[2] && (
                            <img
                                src={property.images[2]}
                                alt={`${property.name} - Image 3`}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        )}
                        {property.images[3] && (
                            <img
                                src={property.images[3]}
                                alt={`${property.name} - Image 4`}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        )}
                    </div>
                </div>

                {/* Desktop Layout - Custom grid with featured image */}
                <div className="hidden lg:block">
                    <div className="grid grid-cols-4 grid-rows-2 gap-4 h-96">
                        {/* Main featured image - spans 2 columns and 2 rows */}
                        <img
                            src={property.images[0]}
                            alt={`${property.name} - Main Image`}
                            className="col-span-2 row-span-2 w-full h-full object-cover rounded-lg"
                        />

                        {/* Second image - spans 2 columns and 1 row */}
                        {property.images[1] && (
                            <img
                                src={property.images[1]}
                                alt={`${property.name} - Image 2`}
                                className="col-span-2 row-span-1 w-full h-full object-cover rounded-lg"
                            />
                        )}

                        {/* Third image - spans 1 column and 1 row */}
                        {property.images[2] && (
                            <img
                                src={property.images[2]}
                                alt={`${property.name} - Image 3`}
                                className="col-span-1 row-span-1 w-full h-full object-cover rounded-lg"
                            />
                        )}

                        {/* Fourth image - spans 1 column and 1 row */}
                        {property.images[3] && (
                            <img
                                src={property.images[3]}
                                alt={`${property.name} - Image 4`}
                                className="col-span-1 row-span-1 w-full h-full object-cover rounded-lg"
                            />
                        )}

                        {/* Placeholder for missing images if needed */}
                        {property.images.length < 4 &&
                            Array.from({ length: 4 - property.images.length }).map((_, index) => (
                                <div
                                    key={`placeholder-${index}`}
                                    className="bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 col-span-1 row-span-1"
                                >
                                    No Image
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* Property Info and Details */}
            <div className="flex flex-col lg:flex-row gap-8 mt-8">
                {/* Left Column - Property Details */}
                <div className="flex-1">
                    {/* Navigation Tabs */}
                    <div className="border-b border-gray-200 mb-8">
                        <nav className="flex space-x-8">
                            <button
                                onClick={() => scrollToSection(descriptionRef)}
                                className="py-3 px-1 border-b-2 border-teal-500 text-teal-600 font-medium text-sm"
                            >
                                Description
                            </button>
                            <button
                                onClick={() => scrollToSection(offersRef)}
                                className="py-3 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm transition-colors"
                            >
                                What we offer
                            </button>
                            <button
                                onClick={() => scrollToSection(reviewsRef)}
                                className="py-3 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm transition-colors"
                            >
                                Reviews
                            </button>
                            <button
                                onClick={() => scrollToSection(hostRef)}
                                className="py-3 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm transition-colors"
                            >
                                About host
                            </button>
                            <div className="ml-auto text-sm text-gray-500 py-3">
                                Published July 01, 2024
                            </div>
                        </nav>
                    </div>

                    {/* Property Basics */}
                    <div className="flex items-center space-x-6 text-gray-600 mb-6">
                        <div className="flex items-center space-x-2">
                            <span>🏠</span>
                            <span>{property.offers.bed} Bedrooms</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span>🚿</span>
                            <span>{property.offers.shower} Bathroom</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span>👥</span>
                            <span>{property.offers.occupants} guests</span>
                        </div>
                    </div>

                    {/* Description */}
                    <div ref={descriptionRef} className="mb-8 scroll-mt-24">
                        <h2 className="text-2xl font-semibold mb-4">Description</h2>
                        <p className="text-gray-700 leading-relaxed">{property.description}</p>
                        <button className="text-teal-600 hover:text-teal-800 mt-2">Read more →</button>
                    </div>

                    {/* What this place offers */}
                    <div ref={offersRef} className="mb-8 scroll-mt-24">
                        <h2 className="text-2xl font-semibold mb-4">What this place offers</h2>
                        <p className="text-gray-600 mb-4">Each home is fully equipped to meet your needs, with ample space and privacy.</p>

                        <div className="grid grid-cols-2 gap-4">
                            {property.category.map((amenity, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <span className="text-gray-600">🏔️</span>
                                    <span className="text-gray-700">{amenity}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Reviews Section */}
                    <div ref={reviewsRef} className="mb-8 scroll-mt-24">
                        <div className="flex items-center space-x-3 mb-6">
                            <span className="text-2xl">⭐</span>
                            <span className="text-2xl font-semibold">{property.rating}</span>
                            <span className="text-gray-600">( 345 reviews )</span>
                        </div>

                        {/* Sample Reviews */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <div className="flex items-center space-x-3 mb-2">
                                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                                        K
                                    </div>
                                    <div>
                                        <div className="font-medium">Kerry</div>
                                        <div className="text-sm text-gray-600">3 years on ALX</div>
                                    </div>
                                </div>
                                <div className="text-sm text-gray-600 mb-2">March 2024 • Family trip</div>
                                <p className="text-gray-700 text-sm">
                                    I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are.
                                    This is a wonderful remote spot that is simply breathtaking.
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center space-x-3 mb-2">
                                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                                        P
                                    </div>
                                    <div>
                                        <div className="font-medium">Pooja</div>
                                        <div className="text-sm text-gray-600">1 years on ALX</div>
                                    </div>
                                </div>
                                <div className="text-sm text-gray-600 mb-2">March 2024 • Family trip</div>
                                <p className="text-gray-700 text-sm">
                                    We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a
                                    fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* About Host Section */}
                    <div ref={hostRef} className="scroll-mt-24">
                        <h2 className="text-2xl font-semibold mb-6">About host</h2>

                        {/* Host Profile */}
                        <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg mb-6">
                            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                AH
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-900 mb-1">Alex Henderson</h3>
                                <p className="text-gray-600 mb-2">Superhost • Joined in 2018</p>
                                <div className="flex items-center space-x-4 text-sm text-gray-600">
                                    <span>⭐ 4.9 rating</span>
                                    <span>📝 127 reviews</span>
                                    <span>✅ Identity verified</span>
                                </div>
                            </div>
                            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                                Contact Host
                            </button>
                        </div>

                        {/* Host Details */}
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-2">About Alex</h4>
                                <p className="text-gray-700 leading-relaxed">
                                    I'm a passionate host who loves sharing beautiful spaces with travelers from around the world.
                                    I've been hosting for over 6 years and take pride in providing exceptional experiences for my guests.
                                    When I'm not hosting, I enjoy photography, hiking, and exploring local cuisine.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
                                <p className="text-gray-700">English, Spanish, French</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-gray-900 mb-2">Response rate</h4>
                                <p className="text-gray-700">100% within an hour</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Booking Section */}
                <div className="lg:w-96">
                    <BookingSection price={property.price} />
                </div>
            </div>
        </div>
    );
};

export default PropertyDetail;