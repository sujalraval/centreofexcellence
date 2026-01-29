import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Download,
  ChevronLeft,
  Image,
  Map,
} from "lucide-react";

interface GeoTaggedPhoto {
  photo: string;
  coordinates: { lat: number; lng: number };
  locationName: string;
}

interface Facility {
  id: number;
  facilityName: string;
  address: string;
  email: string;
  contactNo: string;
  mainImage: string;
  brochure: string;
  briefDetails: string;
  photos: string[];
  geoTaggedPhotos: GeoTaggedPhoto[];
}

// Dummy data for demonstration
const dummyFacilities: Facility[] = [
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
      "State-of-the-art library with over 10,000 books, digital resources, and study spaces. Open 24/7 for students with quiet reading areas, computer stations, and research assistance. The library features modern cataloging systems, online databases, and dedicated research support staff to help students with their academic pursuits.",
    photos: [
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=300&fit=crop",
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
      {
        photo:
          "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&h=300&fit=crop",
        coordinates: { lat: 23.023, lng: 72.572 },
        locationName: "Reference Section",
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
      "Professional courtroom simulation facility for practical legal training. Equipped with modern audio-visual systems, witness stand, jury box, and judge's bench. Students can practice litigation skills, participate in mock trials, and develop courtroom presentation abilities in a realistic legal environment.",
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
      "Modern computer lab with 50+ high-performance workstations, legal research databases, and specialized software for law students. Features include Westlaw, LexisNexis, and other legal research platforms, along with programming tools and multimedia editing software for comprehensive digital literacy.",
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
      "Comprehensive sports facility with indoor badminton courts, table tennis, gymnasium, and outdoor cricket ground for student fitness and recreation. The complex promotes physical wellness, team building, and competitive sports participation with professional coaching and equipment maintenance services.",
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

const FacilityDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [showMap, setShowMap] = useState(false);

  // Get facility data directly without state
  const facilityId = parseInt(id || "1");
  const facility = dummyFacilities.find((f) => f.id === facilityId);

  // Initialize selected image
  const [selectedImage, setSelectedImage] = useState<string>(
    facility?.mainImage || ""
  );

  if (!facility) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🏗️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Facility Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The requested facility could not be found.
          </p>
          <Link
            to="/campus/facilities"
            className="inline-flex items-center px-6 py-3 bg-[#0a0e72] text-white rounded-lg hover:bg-[#080b5a] transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to Facilities
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            to="/campus/facilities"
            className="inline-flex items-center text-[#0a0e72] hover:text-[#080b5a] transition-colors font-medium"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to All Facilities
          </Link>
        </div>

        {/* Facility Header */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="md:flex">
            {/* Image Gallery */}
            <div className="md:w-1/2">
              <div className="relative h-80 md:h-full">
                <img
                  src={selectedImage}
                  alt={facility.facilityName}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnail Gallery */}
              <div className="p-4 flex gap-2 overflow-x-auto">
                {[facility.mainImage, ...facility.photos].map(
                  (photo, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(photo)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                        selectedImage === photo
                          ? "border-[#0a0e72]"
                          : "border-gray-300"
                      }`}
                    >
                      <img
                        src={photo}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Facility Info */}
            <div className="md:w-1/2 p-8">
              <h1 className="text-3xl font-bold text-[#0a0e72] mb-6">
                {facility.facilityName}
              </h1>

              {/* Contact Information */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-[#0a0e72] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Address
                    </h3>
                    <p className="text-gray-600">{facility.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-[#0a0e72] flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Contact
                    </h3>
                    <a
                      href={`tel:${facility.contactNo}`}
                      className="text-gray-600 hover:text-[#0a0e72] transition-colors"
                    >
                      {facility.contactNo}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-[#0a0e72] flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <a
                      href={`mailto:${facility.email}`}
                      className="text-gray-600 hover:text-[#0a0e72] transition-colors"
                    >
                      {facility.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={facility.brochure}
                  download
                  className="flex items-center gap-2 px-6 py-3 bg-[#0a0e72] text-white rounded-lg hover:bg-[#080b5a] transition-colors font-medium"
                >
                  <Download className="w-5 h-5" />
                  Download Brochure
                </a>

                <button
                  onClick={() => setShowMap(!showMap)}
                  className="flex items-center gap-2 px-6 py-3 border border-[#0a0e72] text-[#0a0e72] rounded-lg hover:bg-[#0a0e72] hover:text-white transition-colors font-medium"
                >
                  <Map className="w-5 h-5" />
                  {showMap ? "Hide Map" : "Show Location"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#0a0e72] mb-6">
            About This Facility
          </h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg">
              {facility.briefDetails}
            </p>
          </div>
        </div>

        {/* Photo Gallery with Geotags */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <Image className="w-6 h-6 text-[#0a0e72]" />
            <h2 className="text-2xl font-bold text-[#0a0e72]">Photo Gallery</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facility.geoTaggedPhotos.map((photoObj, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg"
              >
                <img
                  src={photoObj.photo}
                  alt={photoObj.locationName}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-semibold text-lg">
                    {photoObj.locationName}
                  </h3>
                  <p className="text-white/80 text-sm">
                    Lat: {photoObj.coordinates.lat.toFixed(4)}, Lng:{" "}
                    {photoObj.coordinates.lng.toFixed(4)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityDetailPage;
