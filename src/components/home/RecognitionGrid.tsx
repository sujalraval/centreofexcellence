import { Link } from "react-router-dom";
import { ChevronRight, Building2, Globe } from "lucide-react";

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
];

const RecognitionGrid = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Building2 className="w-8 h-8 text-[#0a0e72]" />
            <h2 className="text-3xl font-bold text-[#0a0e72]">
              Recognitions & Accreditations
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Acknowledgments from esteemed institutions and bodies that validate
            our commitment to excellence in legal education and institutional
            quality.
          </p>
        </div>

        {/* Recognitions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {dummyRecognitions.map((recognition) => (
            <div
              key={recognition.id}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-[#0a0e72]/10 flex items-center justify-center border-2 border-gray-200">
                    <Building2 className="w-8 h-8 text-[#0a0e72]" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-bold text-[#0a0e72]">
                      {recognition.title}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-700 mt-2">
                    {recognition.details}
                  </p>

                  <div className="mt-4">
                    <a
                      href={recognition.link}
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
            to="/recognitions"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0a0e72] text-white rounded-lg hover:bg-[#080b5a] transition-colors font-semibold text-lg"
          >
            View All Recognitions
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecognitionGrid;
