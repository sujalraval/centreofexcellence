import { MapPin, Phone, Mail, Download } from "lucide-react";
import { Link } from "react-router-dom";

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

interface FacilityCardProps {
  facility: Facility;
}

const FacilityCard = ({ facility }: FacilityCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
      {/* Facility Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={facility.mainImage}
          alt={facility.facilityName}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <h3 className="text-xl font-bold text-white">
            {facility.facilityName}
          </h3>
        </div>
      </div>

      {/* Facility Details */}
      <div className="p-6">
        {/* Contact Information */}
        <div className="space-y-3 mb-4">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#0a0e72] flex-shrink-0 mt-0.5" />
            <p className="text-gray-600 text-sm">{facility.address}</p>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-[#0a0e72] flex-shrink-0" />
            <a
              href={`tel:${facility.contactNo}`}
              className="text-gray-600 hover:text-[#0a0e72] transition-colors"
            >
              {facility.contactNo}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-[#0a0e72] flex-shrink-0" />
            <a
              href={`mailto:${facility.email}`}
              className="text-gray-600 hover:text-[#0a0e72] transition-colors"
            >
              {facility.email}
            </a>
          </div>
        </div>

        {/* Brief Description */}
        <p className="text-gray-700 mb-6 line-clamp-3">
          {facility.briefDetails}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <Link
            to={`/campus/facilities/${facility.id}`}
            className="flex-1 text-center px-4 py-2 bg-[#0a0e72] text-white rounded-lg hover:bg-[#080b5a] transition-colors font-medium"
          >
            View Details
          </Link>

          <a
            href={facility.brochure}
            download
            className="flex items-center justify-center gap-2 px-4 py-2 border border-[#0a0e72] text-[#0a0e72] rounded-lg hover:bg-[#0a0e72] hover:text-white transition-colors font-medium"
          >
            <Download className="w-4 h-4" />
            Brochure
          </a>
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;
