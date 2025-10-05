import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyPage() {
    const router = useRouter();
    const { id } = router.query;
    const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

    if (!property) return (
        <div className="container mx-auto p-6 text-center">
            <h1 className="text-2xl font-bold mb-4">Property not found</h1>
            <button 
                onClick={() => router.push('/')}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
                ← Back to Home
            </button>
        </div>
    );

    return (
        <div>
            {/* Back Button */}
            <div className="container mx-auto p-6">
                <button 
                    onClick={() => router.back()}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>Back</span>
                </button>
            </div>
            
            <PropertyDetail property={property} />
        </div>
    );
}