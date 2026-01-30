import React from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  Target,
  Building2,
  ChevronRight,
} from "lucide-react";

// Dummy data for featured MOUs (showing only top 3-4 on home page)
const featuredMouData = [
  {
    id: 1,
    organisationLogo:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
    organisationName: "Gujarat National Law University",
    organisationUrl: "https://www.gnlu.ac.in",
    date: "2024-01-15",
    briefDescription: "Collaboration in legal education and research programs",
    mouObjective:
      "To establish academic partnership for joint research initiatives, faculty exchange programs, and student internship opportunities in the field of law and legal studies.",
  },
  {
    id: 2,
    organisationLogo:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center",
    organisationName: "Ahmedabad Management Association",
    organisationUrl: "https://www.ahmedabadmanagement.org",
    date: "2024-02-20",
    briefDescription: "Industry-academia collaboration for legal consultancy",
    mouObjective:
      "To facilitate knowledge transfer between industry and academia through joint workshops, seminars, and practical training programs for law students in corporate legal practices.",
  },
  {
    id: 3,
    organisationLogo:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=100&h=100&fit=crop&crop=center",
    organisationName: "State Legal Services Authority",
    organisationUrl: "https://legalgujarat.gov.in",
    date: "2024-03-10",
    briefDescription: "Public service legal aid and pro bono initiatives",
    mouObjective:
      "To collaborate on legal aid services, pro bono work, and community legal awareness programs for underprivileged sections of society.",
  },
];

const MouSection: React.FC = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a0e72] mb-4">
            Memorandum of Understanding
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Strategic partnerships that enhance educational excellence and
            provide valuable opportunities for our students and faculty.
          </p>
        </div>

        {/* Featured MOUs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredMouData.map((mou) => (
            <div
              key={mou.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              {/* Logo Section */}
              <div className="p-6 pb-4 border-b border-gray-100">
                <a
                  href={mou.organisationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block group"
                >
                  <img
                    src={mou.organisationLogo}
                    alt={mou.organisationName}
                    className="w-20 h-20 object-cover rounded-lg border border-gray-200 group-hover:opacity-90 transition-opacity"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://placehold.co/80x80/0a0e72/FFFFFF?text=${encodeURIComponent(
                        mou.organisationName.charAt(0),
                      )}`;
                    }}
                  />
                </a>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {mou.organisationName}
                </h3>

                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{formatDate(mou.date)}</span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {mou.briefDescription}
                </p>

                <div className="flex items-start mb-4">
                  <Target className="w-4 h-4 text-[#0a0e72] mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-sm text-gray-700">{mou.mouObjective}</p>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <a
                    href={mou.organisationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-[#0a0e72] hover:text-blue-800 font-medium"
                  >
                    <Building2 className="w-4 h-4 mr-1" />
                    Visit Organization
                  </a>
                  <Link
                    to="/mou-agreements"
                    className="text-sm text-gray-500 hover:text-[#0a0e72] font-medium"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center center">
          <Link
            to="/mou-agreements"
            className="inline-flex items-center px-6 py-3 bg-[#0a0e72] text-white font-medium rounded-lg hover:bg-blue-800 transition-colors duration-300"
          >
            View All MOU Agreements
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>

        {/* View All Button (Duplicate for mobile view) */}
        <div className="mt-12 text-center md:hidden">
          <Link
            to="/mou-agreements"
            className="inline-flex items-center px-6 py-3 bg-[#0a0e72] text-white font-medium rounded-lg hover:bg-blue-800 transition-colors duration-300"
          >
            View All MOU Agreements
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MouSection;
