import { useState } from "react";
import {
  Search,
  Calendar,
  Target,
  Building2,
  Link as LinkIcon,
} from "lucide-react";

// Dummy data for MOU agreements
const dummyMouData = [
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
    category: "Academic",
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
    category: "Industry",
  },
  {
    id: 3,
    organisationLogo:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=100&h=100&fit=crop&crop=center",
    organisationName: "Intellectual Property Office Gujarat",
    organisationUrl: "https://www.ipogujarat.gov.in",
    date: "2024-03-10",
    briefDescription: "IPR awareness and training partnership",
    mouObjective:
      "To promote intellectual property rights awareness among students and faculty through specialized training programs, certification courses, and research collaboration in IPR domain.",
    category: "Government",
  },
  {
    id: 4,
    organisationLogo:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=100&h=100&fit=crop&crop=center",
    organisationName: "Supreme Court Legal Services Committee",
    organisationUrl: "https://legalaidscindia.org",
    date: "2024-04-05",
    briefDescription: "Pro bono legal services and clinical education",
    mouObjective:
      "To provide practical legal experience to students through pro bono services, legal aid clinics, and court observation programs under the supervision of experienced advocates.",
    category: "Legal Services",
  },
  {
    id: 5,
    organisationLogo:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=100&h=100&fit=crop&crop=center",
    organisationName: "International Bar Association",
    organisationUrl: "https://www.ibanet.org",
    date: "2024-05-12",
    briefDescription: "International legal education exchange program",
    mouObjective:
      "To establish international exposure opportunities for students and faculty through exchange programs, international conferences, and collaborative research in comparative law studies.",
    category: "International",
  },
  {
    id: 6,
    organisationLogo:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop&crop=center",
    organisationName: "Gujarat High Court Bar Association",
    organisationUrl: "https://gujarathighcourt.nic.in",
    date: "2024-06-18",
    briefDescription: "Court practice and advocacy training",
    mouObjective:
      "To enhance practical legal skills of students through moot court competitions, court visits, and mentorship programs with senior advocates practicing in Gujarat High Court.",
    category: "Judiciary",
  },
];

const MouListingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all",
    "Academic",
    "Industry",
    "Government",
    "Legal Services",
    "International",
    "Judiciary",
  ];

  const filteredMous = dummyMouData.filter((mou) => {
    const matchesSearch =
      mou.organisationName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mou.briefDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mou.mouObjective.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || mou.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#0a0e72] mb-4">
            Memorandum of Understanding
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore our strategic partnerships and collaborations that enhance
            educational excellence and provide valuable opportunities for our
            students and faculty.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search organisations or objectives..."
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
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* MOU Listings */}
        <div className="space-y-6">
          {filteredMous.map((mou) => (
            <div
              key={mou.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Organisation Logo */}
                  <div className="flex-shrink-0">
                    <a
                      href={mou.organisationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-gray-200 group-hover:border-[#0a0e72] transition-colors">
                        <img
                          src={mou.organisationLogo}
                          alt={mou.organisationName}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex items-center justify-center mt-2 text-[#0a0e72] group-hover:text-[#080b5a] transition-colors">
                        <LinkIcon className="w-4 h-4 mr-1" />
                        <span className="text-sm font-medium">
                          Visit Website
                        </span>
                      </div>
                    </a>
                  </div>

                  {/* MOU Details */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <h2 className="text-2xl font-bold text-[#0a0e72]">
                        {mou.organisationName}
                      </h2>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-5 h-5" />
                        <span className="font-medium">
                          {formatDate(mou.date)}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Brief Description */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                          <Building2 className="w-5 h-5 text-[#0a0e72]" />
                          About the Organisation
                        </h3>
                        <p className="text-gray-700">{mou.briefDescription}</p>
                      </div>

                      {/* MOU Objective */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                          <Target className="w-5 h-5 text-[#0a0e72]" />
                          MOU Objective
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {mou.mouObjective}
                        </p>
                      </div>

                      {/* Category Tag */}
                      <div>
                        <span className="inline-block px-3 py-1 bg-[#0a0e72]/10 text-[#0a0e72] rounded-full text-sm font-medium">
                          {mou.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredMous.length === 0 && (
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No MOU agreements found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Statistics Section */}
        <div className="mt-12 bg-white rounded-xl shadow-sm p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#0a0e72] mb-6">
              Our Partnership Network
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0a0e72] mb-2">
                  {dummyMouData.length}
                </div>
                <div className="text-gray-600">Active Partnerships</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0a0e72] mb-2">
                  {new Set(dummyMouData.map((mou) => mou.category)).size}
                </div>
                <div className="text-gray-600">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0a0e72] mb-2">
                  {
                    dummyMouData.filter((mou) => mou.category === "Academic")
                      .length
                  }
                </div>
                <div className="text-gray-600">Academic Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0a0e72] mb-2">
                  {Math.round(
                    dummyMouData.reduce((acc, mou) => {
                      const years =
                        (new Date().getTime() - new Date(mou.date).getTime()) /
                        (1000 * 3600 * 24 * 365);
                      return acc + years;
                    }, 0) / dummyMouData.length
                  )}
                </div>
                <div className="text-gray-600">
                  Avg. Partnership Age (Years)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MouListingPage;
