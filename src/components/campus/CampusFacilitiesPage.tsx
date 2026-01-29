import { useState } from "react";
import { Search } from "lucide-react";
import FacilityCard from "./FacilityCard";

// Dummy data for campus facilities
const dummyFacilities = [
  {
    id: 1,
    facilityName: "Central Library",
    address: "Academic Block A, 3rd Floor, Gujarat University Campus",
    email: "library@coesolgu.edu.in",
    contactNo: "+91 97249 70166",
    mainImage:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=600&fit=crop",
    brochure: "/brochures/library.pdf",
    briefDetails:
      "State-of-the-art library with over 10,000 books, digital resources, and study spaces. Open 24/7 for students with quiet reading areas, computer stations, and research assistance.",
    photos: [
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&h=300&fit=crop",
    ],
    geoTaggedPhotos: [
      {
        photo:
          "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=300&fit=crop",
        coordinates: { lat: 23.0225, lng: 72.5714 },
        locationName: "Main Entrance",
      },
      {
        photo:
          "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
        coordinates: { lat: 23.0228, lng: 72.5717 },
        locationName: "Reading Hall",
      },
    ],
  },
  {
    id: 2,
    facilityName: "Moot Court Hall",
    address: "Law Building, Ground Floor, Gujarat University Campus",
    email: "mootcourt@coesolgu.edu.in",
    contactNo: "+91 97249 70167",
    mainImage:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
    brochure: "/brochures/mootcourt.pdf",
    briefDetails:
      "Professional courtroom simulation facility for practical legal training. Equipped with modern audio-visual systems, witness stand, jury box, and judge's bench.",
    photos: [
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1589391886260-f45057fae8f8?w=400&h=300&fit=crop",
    ],
    geoTaggedPhotos: [
      {
        photo:
          "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
        coordinates: { lat: 23.023, lng: 72.572 },
        locationName: "Courtroom",
      },
    ],
  },
  {
    id: 3,
    facilityName: "Computer Laboratory",
    address: "Science Block, 2nd Floor, Gujarat University Campus",
    email: "complab@coesolgu.edu.in",
    contactNo: "+91 97249 70168",
    mainImage:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
    brochure: "/brochures/computerlab.pdf",
    briefDetails:
      "Modern computer lab with 50+ high-performance workstations, legal research databases, and specialized software for law students.",
    photos: [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1555421689-3f034debb7a6?w=400&h=300&fit=crop",
    ],
    geoTaggedPhotos: [
      {
        photo:
          "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
        coordinates: { lat: 23.0235, lng: 72.5725 },
        locationName: "Main Lab",
      },
    ],
  },
  {
    id: 4,
    facilityName: "Sports Complex",
    address: "Campus Sports Area, Behind Main Building",
    email: "sports@coesolgu.edu.in",
    contactNo: "+91 97249 70169",
    mainImage:
      "https://images.unsplash.com/photo-1540457036597-440d87a1a29d?w=800&h=600&fit=crop",
    brochure: "/brochures/sports.pdf",
    briefDetails:
      "Comprehensive sports facility with indoor badminton courts, table tennis, gymnasium, and outdoor cricket ground for student fitness and recreation.",
    photos: [
      "https://images.unsplash.com/photo-1540457036597-440d87a1a29d?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=300&fit=crop",
    ],
    geoTaggedPhotos: [
      {
        photo:
          "https://images.unsplash.com/photo-1540457036597-440d87a1a29d?w=400&h=300&fit=crop",
        coordinates: { lat: 23.024, lng: 72.573 },
        locationName: "Main Complex",
      },
    ],
  },
];

const CampusFacilitiesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredFacilities = dummyFacilities.filter((facility) => {
    const matchesSearch =
      facility.facilityName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      facility.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      (selectedCategory === "academic" &&
        ["Central Library", "Moot Court Hall", "Computer Laboratory"].includes(
          facility.facilityName
        )) ||
      (selectedCategory === "sports" &&
        facility.facilityName === "Sports Complex");
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#0a0e72] mb-4">
            Campus Facilities
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore our world-class infrastructure designed to support academic
            excellence, practical learning, and holistic student development.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search facilities..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a0e72] focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <select
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a0e72] focus:border-transparent"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="academic">Academic</option>
                <option value="sports">Sports</option>
              </select>
            </div>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFacilities.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>

        {filteredFacilities.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg
                className="w-16 h-16 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No facilities found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CampusFacilitiesPage;
