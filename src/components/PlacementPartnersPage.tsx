import { useState } from "react";
import {
  Search,
  Globe,
  Briefcase,
  CheckCircle,
  XCircle,
  Clock,
  Building2,
} from "lucide-react";
import { Link } from "react-router-dom";

// Define the placement partner interface
interface PlacementPartner {
  id: number;
  name: string;
  logo: string; // URL to the logo image
  url: string; // Website URL
  expertise: string; // Area of expertise
  status: "Active" | "Inactive" | "Pending"; // Status of partnership
  brief: string; // Brief description
}

// Dummy data for placement partners
const dummyPartners: PlacementPartner[] = [
  {
    id: 1,
    name: "IIFL Home Finance Ltd",
    logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center",
    url: "https://www.iifl.com",
    expertise: "Financial Services, Legal Compliance",
    status: "Active",
    brief:
      "Leading financial services company offering opportunities in legal compliance and regulatory affairs for law graduates.",
  },
  {
    id: 2,
    name: "Tata Consultancy Services",
    logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center",
    url: "https://www.tcs.com",
    expertise: "Corporate Law, IT Legal Affairs",
    status: "Active",
    brief:
      "Global IT consulting firm with dedicated legal department for corporate law and intellectual property matters.",
  },
  {
    id: 3,
    name: "Jindal Steel & Power",
    logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center",
    url: "https://www.jspl.com",
    expertise: "Industrial Law, Environmental Compliance",
    status: "Active",
    brief:
      "Major steel manufacturing company with extensive legal requirements in industrial and environmental law.",
  },
  {
    id: 4,
    name: "Phoenix Legal",
    logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center",
    url: "https://www.phoenixlegal.in",
    expertise: "Corporate Law, M&A, Disputes",
    status: "Active",
    brief:
      "Top-tier law firm specializing in corporate law, mergers & acquisitions, and commercial disputes.",
  },
  {
    id: 5,
    name: "Khaitan & Co",
    logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center",
    url: "https://www.khaitanco.com",
    expertise: "Banking Law, Securities Law, Litigation",
    status: "Active",
    brief:
      "Premier law firm with expertise in banking, securities, and high-stakes litigation matters.",
  },
  {
    id: 6,
    name: "Amarchand Mangaldas",
    logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center",
    url: "https://www.clelegal.com",
    expertise: "Tax Law, Corporate Advisory",
    status: "Pending",
    brief:
      "Leading law firm with strong practice in tax law and corporate advisory services.",
  },
  {
    id: 7,
    name: "S&R Associates",
    logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center",
    url: "https://www.srasoc.com",
    expertise: "Project Finance, Infrastructure Law",
    status: "Active",
    brief:
      "Specialized law firm focusing on project finance and infrastructure development legal matters.",
  },
  {
    id: 8,
    name: "J Sagar Associates",
    logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center",
    url: "https://www.jsa.in",
    expertise: "Intellectual Property, Competition Law",
    status: "Inactive",
    brief:
      "Established firm with strong IP and competition law practices, previously active partner.",
  },
];

const PlacementPartnersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const statusColors = {
    Active: "bg-green-100 text-green-800",
    Inactive: "bg-red-100 text-red-800",
    Pending: "bg-yellow-100 text-yellow-800",
  };

  const statusIcons = {
    Active: <CheckCircle className="w-4 h-4" />,
    Inactive: <XCircle className="w-4 h-4" />,
    Pending: <Clock className="w-4 h-4" />,
  };

  const filteredPartners = dummyPartners.filter((partner) => {
    const matchesSearch =
      partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partner.expertise.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partner.brief.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      selectedStatus === "all" || partner.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#0a0e72] mb-4">
            Placement Partners
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our esteemed industry partners who provide career opportunities for
            our students. These organizations collaborate with us to offer
            internships, training, and placement opportunities.
          </p>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-[#0a0e72] mb-2">
              {dummyPartners.length}
            </div>
            <div className="text-gray-600">Total Partners</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {dummyPartners.filter((p) => p.status === "Active").length}
            </div>
            <div className="text-gray-600">Active Partners</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">
              {dummyPartners.filter((p) => p.status === "Pending").length}
            </div>
            <div className="text-gray-600">Pending Partners</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">
              {dummyPartners.filter((p) => p.status === "Inactive").length}
            </div>
            <div className="text-gray-600">Inactive Partners</div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search partners by name, expertise, or details..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a0e72] focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <select
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a0e72] focus:border-transparent"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="all">All Statuses</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPartners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              {/* Partner Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-gray-200">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://placehold.co/100x100/0a0e72/FFFFFF?text=${partner.name.charAt(
                            0
                          )}`;
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold text-[#0a0e72] truncate">
                        {partner.name}
                      </h3>
                      <span
                        className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                          statusColors[partner.status]
                        }`}
                      >
                        {statusIcons[partner.status]}
                        {partner.status}
                      </span>
                    </div>

                    <div className="mt-2 flex items-center text-sm text-gray-600">
                      <Briefcase className="w-4 h-4 mr-1" />
                      <span className="truncate">{partner.expertise}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Partner Details */}
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#0a0e72]" />
                    About
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {partner.brief}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#0a0e72] text-white rounded-lg hover:bg-[#080b5a] transition-colors text-sm font-medium"
                  >
                    <Globe className="w-4 h-4" />
                    Visit Website
                  </a>

                  <button className="flex items-center gap-2 px-4 py-2 border border-[#0a0e72] text-[#0a0e72] rounded-lg hover:bg-[#0a0e72] hover:text-white transition-colors text-sm font-medium">
                    <Briefcase className="w-4 h-4" />
                    View Opportunities
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredPartners.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Building2 className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No placement partners found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-[#0a0e72] to-blue-700 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Interested in Partnering with Us?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto opacity-90">
            Connect with us to explore placement opportunities for our talented
            students and contribute to their professional growth.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-[#0a0e72] rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlacementPartnersPage;
