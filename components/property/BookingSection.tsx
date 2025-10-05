import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const nights = 7; // Default to 7 nights
    const serviceFee = 35;
    const weeklyDiscount = -88;

    return (
        <div className="bg-white p-6 shadow-lg rounded-2xl border border-gray-200 sticky top-6">
            {/* Published date */}
            <div className="text-right text-sm text-gray-500 mb-4">
                Published July 01, 2024
            </div>

            {/* Price */}
            <div className="text-3xl font-bold mb-6">
                ${price.toLocaleString()} <span className="text-lg font-normal text-gray-600">/ night</span>
            </div>

            {/* Check-in/Check-out */}
            <div className="grid grid-cols-1 gap-4 mb-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Check in</label>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="DD/MM/YY"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                        />
                        <div className="absolute right-3 top-3">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Check out</label>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="DD/MM/YY"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                        />
                        <div className="absolute right-3 top-3">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Price Breakdown */}
            <div className="space-y-3 mb-6 pt-4 border-t border-gray-200">
                <div className="flex justify-between">
                    <span className="text-gray-700">${price} x {nights} nights</span>
                    <span className="font-medium">${(price * nights).toLocaleString()}</span>
                </div>

                <div className="flex justify-between">
                    <span className="text-gray-700">Weekly discounts</span>
                    <span className="font-medium text-green-600">{weeklyDiscount}</span>
                </div>

                <div className="flex justify-between">
                    <span className="text-gray-700">Service fee</span>
                    <span className="font-medium">${serviceFee}</span>
                </div>
            </div>

            {/* Total */}
            <div className="flex justify-between items-center mb-6 pt-4 border-t border-gray-200">
                <span className="text-lg font-semibold">Total payment</span>
                <span className="text-lg font-bold text-teal-600">
                    ${(price * nights + weeklyDiscount + serviceFee).toLocaleString()}
                </span>
            </div>

            {/* Reserve Button */}
            <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200">
                Reserve now
            </button>
        </div>
    );
};

export default BookingSection;