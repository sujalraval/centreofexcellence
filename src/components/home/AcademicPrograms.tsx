// src/components/home/AcademicPrograms.tsx

const AcademicPrograms = () => {
  const courseHighlights = [
    "Exclusive Specialization in IPR – Focus on Intellectual Property Rights (IPR), covering patents, copyrights, trademarks, and emerging legal tech.",
    "Semester-Based Structure – A well-structured curriculum ensuring progressive learning and in-depth expertise.",
    "Legal-Tech Integration – Emphasis on technology-driven legal education, including AI, blockchain, and digital rights in IPR.",
    "Experiential Learning – Hands-on experience through moot courts, internships, legal aid clinics, and research projects.",
    "Interdisciplinary Approach – Merging law, business, and technology for a comprehensive legal education.",
    "Industry & Judicial Exposure – Regular guest lectures, workshops, and mentorship from IPR professionals, corporate leaders, and legal experts.",
    "Global & National Perspectives – Comparative analysis of Indian & international IPR laws to prepare students for global careers.",
    "Career Readiness – Strong placement support, networking opportunities, and industry collaborations.",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gu-dark mb-4">
            Academic Program
          </h2>
          <h3 className="text-2xl font-semibold text-gu-primary">
            Undergraduate
          </h3>
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h4 className="text-3xl font-bold text-gu-dark mb-2">
              B. Com LLB (Hons.) - 5 Years Integrated Program
            </h4>
            <p className="text-xl text-gu-primary font-medium">
              with Specialization in Intellectual Property Rights (IPR)
            </p>
          </div>

          <div className="mt-10">
            <h5 className="text-2xl font-semibold text-gu-dark mb-6">
              Course Highlights
            </h5>
            <ul className="space-y-4">
              {courseHighlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700 text-lg">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 text-center">
            <button className="px-8 py-3 bg-gu-primary font-semibold rounded-lg hover:bg-gu-dark transition-colors shadow-md">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicPrograms;
