import { useState } from "react";
import { Search, Link as LinkIcon, Building2, Globe } from "lucide-react";
import { Link } from "react-router-dom";

// Define the recognition interface
interface Recognition {
  id: number;
  title: string; // Name of the recognizing institution/body
  link: string; // URL to the recognizing institution/body
  details: string; // Brief details about the recognition
}

// Dummy data for recognitions
const dummyRecognitions: Recognition[] = [
  {
    id: 1,
    title: "Gujarat University",
    link: "https://www.gujaratuniversity.ac.in",
    details:
      "Affiliated institution with recognized academic excellence in legal education programs.",
  },
  {
    id: 2,
    title: "Bar Council of India",
    link: "https://www.barCouncilofIndia.org",
    details:
      "Approved for conducting law programs as per BCI standards and regulations.",
  },
  {
    id: 3,
    title: "University Grants Commission",
    link: "https://www.ugc.ac.in",
    details:
      "Received recognition and funding for excellence in legal education and research.",
  },
  {
    id: 4,
    title: "National Assessment and Accreditation Council",
    link: "https://www.naac.ac.in",
    details:
      "Achieved A++ grade for outstanding quality in legal education and institutional performance.",
  },
  {
    id: 5,
    title: "Association of Indian Universities",
    link: "https://www.aiuweb.org",
    details:
      "Recognized for maintaining high academic standards in legal education programs.",
  },
  {
    id: 6,
    title: "National Board of Accreditation",
    link: "https://www.nba-india.org",
    details:
      "Accredited for excellence in professional legal education and curriculum design.",
  },
  {
    id: 7,
    title: "International Association of Universities",
    link: "https://www.iau-aiu.net",
    details:
      "Global recognition for quality legal education and international standards.",
  },
  {
    id: 8,
    title: "Commonwealth Association of Universities",
    link: "https://www.acu.ac.uk",
    details:
      "Acknowledged for contributing to legal education excellence in Commonwealth nations.",
  },
];

const RecognitionPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRecognitions = dummyRecognitions.filter((recognition) => {
    const matchesSearch =
      recognition.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recognition.details.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#0a0e72] mb-4">
            Recognitions & Accreditations
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Acknowledgments from esteemed institutions and bodies that validate
            our commitment to excellence in legal education and institutional
            quality.
          </p>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-[#0a0e72] mb-2">
              {dummyRecognitions.length}
            </div>
            <div className="text-gray-600">Total Recognitions</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {
                dummyRecognitions.filter((r) => r.title.includes("University"))
                  .length
              }
            </div>
            <div className="text-gray-600">University Recognitions</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {
                dummyRecognitions.filter(
                  (r) =>
                    r.title.includes("Council") || r.title.includes("Board")
                ).length
              }
            </div>
            <div className="text-gray-600">Regulatory Bodies</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {
                dummyRecognitions.filter(
                  (r) =>
                    r.title.includes("National") ||
                    r.title.includes("International")
                ).length
              }
            </div>
            <div className="text-gray-600">National/Intl Bodies</div>
          </div>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search recognitions by title or details..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a0e72] focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Recognitions List */}
        <div className="space-y-6">
          {filteredRecognitions.map((recognition) => (
            <div
              key={recognition.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Institution Info */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <Building2 className="w-8 h-8 text-[#0a0e72]" />
                        <h2 className="text-2xl font-bold text-[#0a0e72]">
                          {recognition.title}
                        </h2>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Details */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                          <LinkIcon className="w-5 h-5 text-[#0a0e72]" />
                          Recognition Details
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {recognition.details}
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-3">
                        <a
                          href={recognition.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-[#0a0e72] text-white rounded-lg hover:bg-[#080b5a] transition-colors font-medium"
                        >
                          <Globe className="w-5 h-5" />
                          Visit Institution
                        </a>

                        <button className="flex items-center gap-2 px-6 py-3 border border-[#0a0e72] text-[#0a0e72] rounded-lg hover:bg-[#0a0e72] hover:text-white transition-colors font-medium">
                          <LinkIcon className="w-5 h-5" />
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredRecognitions.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Building2 className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No recognitions found
            </h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-[#0a0e72] to-blue-700 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Maintaining Excellence</h2>
          <p className="mb-6 max-w-2xl mx-auto opacity-90">
            Our continued recognition by esteemed institutions reflects our
            unwavering commitment to quality education and academic excellence.
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-white text-[#0a0e72] rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecognitionPage;
