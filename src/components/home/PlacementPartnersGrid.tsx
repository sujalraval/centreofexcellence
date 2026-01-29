import { Link } from "react-router-dom";
import { ChevronRight, Briefcase, Globe } from "lucide-react";

// Define the placement partner interface
interface PlacementPartner {
  id: number;
  name: string;
  logo: string; // URL to the logo image
  url: string; // Website URL
  expertise: string; // Area of expertise
  status: 'Active' | 'Inactive' | 'Pending'; // Status of partnership
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
    brief: "Leading financial services company offering opportunities in legal compliance."
  },
  {
    id: 2,
    name: "Tata Consultancy Services",
    logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center",
    url: "https://www.tcs.com",
    expertise: "Corporate Law, IT Legal Affairs",
    status: "Active",
    brief: "Global IT consulting firm with dedicated legal department."
  },
  {
    id: 3,
    name: "Jindal Steel & Power",
    logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center",
    url: "https://www.jspl.com",
    expertise: "Industrial Law, Environmental Compliance",
    status: "Active",
    brief: "Major steel manufacturing company with extensive legal requirements."
  },
  {
    id: 4,
    name: "Phoenix Legal",
    logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center",
    url: "https://www.phoenixlegal.in",
    expertise: "Corporate Law, M&A, Disputes",
    status: "Active",
    brief: "Top-tier law firm specializing in corporate law and disputes."
  },
  {
    id: 5,
    name: "Khaitan & Co",
    logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center",
    url: "https://www.khaitanco.com",
    expertise: "Banking Law, Securities Law",
    status: "Pending",
    brief: "Premier law firm with expertise in banking and securities law."
  },
  {
    id: 6,
    name: "Amarchand Mangaldas",
    logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center",
    url: "https://www.clelegal.com",
    expertise: "Tax Law, Corporate Advisory",
    status: "Active",
    brief: "Leading firm with strong practice in tax law and advisory services."
  }
];

const PlacementPartnersGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="w-8 h-8 text-[#0a0e72]" />
            <h2 className="text-3xl font-bold text-[#0a0e72]">
              Placement Partners
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with our industry partners who provide career opportunities 
            and professional growth for our students.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {dummyPartners.slice(0, 6).map((partner) => (
            <div 
              key={partner.id} 
              className="bg-gray-50 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-gray-200">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://placehold.co/100x100/0a0e72/FFFFFF?text=${partner.name.charAt(0)}`;
                      }}
                    />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-bold text-[#0a0e72] truncate">
                      {partner.name}
                    </h3>
                    <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                      partner.status === 'Active' ? 'bg-green-100 text-green-800' :
                      partner.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {partner.status}
                    </span>
                  </div>
                  
                  <div className="mt-2 flex items-center text-sm text-gray-600">
                    <Briefcase className="w-4 h-4 mr-1" />
                    <span className="truncate">{partner.expertise}</span>
                  </div>
                  
                  <p className="text-sm text-gray-700 mt-2 line-clamp-2">
                    {partner.brief}
                  </p>
                  
                  <div className="mt-4">
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0a0e72] hover:text-[#080b5a] text-sm font-medium inline-flex items-center"
                    >
                      Visit Website
                      <Globe className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            to="/placement-partners"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0a0e72] text-white rounded-lg hover:bg-[#080b5a] transition-colors font-semibold text-lg"
          >
            View All Placement Partners
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlacementPartnersGrid;