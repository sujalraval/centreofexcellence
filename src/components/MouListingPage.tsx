// src/components/MouListingPage.tsx
import { useState } from "react";

interface MouAgreement {
  id: number;
  logoUrl: string;
  organisationName: string;
  logoLink: string;
  date: string;
  briefAbout: string;
  mouObjective: string;
}

const MouListingPage = () => {
  const mous: MouAgreement[] = [
    {
      id: 1,
      logoUrl: "https://placehold.co/150x80?text=Legal+Corp",
      organisationName: "Global Legal Corporation",
      logoLink: "https://globallegalcorp.com",
      date: "15 Mar 2024",
      briefAbout: "A leading international law firm specializing in corporate law, intellectual property rights, and dispute resolution services.",
      mouObjective: "To establish collaborative framework for student internships, faculty exchanges, and joint research initiatives in legal studies."
    },
    {
      id: 2,
      logoUrl: "https://placehold.co/150x80?text=Tech+Univ",
      organisationName: "International Institute of Technology",
      logoLink: "https://techuniversity.edu",
      date: "20 Feb 2024",
      briefAbout: "A prestigious technology university known for innovation in legal technology and artificial intelligence applications in law.",
      mouObjective: "To promote academic collaboration, joint conferences, and development of legal tech curriculum for modern legal practice."
    },
    {
      id: 3,
      logoUrl: "https://placehold.co/150x80?text=Bar+Assoc",
      organisationName: "State Bar Association",
      logoLink: "https://statebar.org",
      date: "05 Jan 2024",
      briefAbout: "The premier professional body representing legal practitioners and promoting legal ethics and professional development.",
      mouObjective: "To facilitate continuing legal education programs, professional development workshops, and ethical practice initiatives."
    },
    {
      id: 4,
      logoUrl: "https://placehold.co/150x80?text=Intl+Court",
      organisationName: "International Arbitration Center",
      logoLink: "https://intlarbitration.org",
      date: "10 Dec 2023",
      briefAbout: "A globally recognized center for alternative dispute resolution and international arbitration services.",
      mouObjective: "To develop specialized training programs in international arbitration and mediation for law students and professionals."
    },
    {
      id: 5,
      logoUrl: "https://placehold.co/150x80?text=Research+Inst",
      organisationName: "Legal Research Foundation",
      logoLink: "https://legalresearch.org",
      date: "22 Nov 2023",
      briefAbout: "A non-profit organization dedicated to advancing legal research and publishing scholarly works in jurisprudence.",
      mouObjective: "To collaborate on research projects, publish joint papers, and organize academic symposiums on contemporary legal issues."
    },
    {
      id: 6,
      logoUrl: "https://placehold.co/150x80?text=Govt+Dept",
      organisationName: "Ministry of Justice",
      logoLink: "https://justice.gov.in",
      date: "30 Oct 2023",
      briefAbout: "The government department responsible for legal affairs, judicial administration, and legal policy formulation.",
      mouObjective: "To provide expert consultation on legal policy matters and offer student placement opportunities in government legal services."
    }
  ];

  const [selectedMou, setSelectedMou] = useState<MouAgreement | null>(null);

  const handleMouClick = (mou: MouAgreement) => {
    setSelectedMou(mou);
  };

  const closeModal = () => {
    setSelectedMou(null);
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gu-dark mb-12">
            Memorandums of Understanding
          </h1>
          
          <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
            Our strategic partnerships and collaborations that enhance educational opportunities, 
            research initiatives, and professional development for our students and faculty.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mous.map((mou) => (
              <div 
                key={mou.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => handleMouClick(mou)}
              >
                <div className="p-6">
                  <a 
                    href={mou.logoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block mb-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src={mou.logoUrl}
                      alt={mou.organisationName}
                      className="h-20 w-auto mx-auto object-contain"
                    />
                  </a>
                  
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-gu-dark text-center">
                      {mou.organisationName}
                    </h3>
                    <p className="text-sm text-gray-600 text-center mt-1">{mou.date}</p>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{mou.briefAbout}</p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm font-semibold text-gu-primary">MOU Objective:</p>
                    <p className="text-sm text-gray-600 truncate">{mou.mouObjective}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for detailed MOU view */}
      {selectedMou && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <a 
                    href={selectedMou.logoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mb-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src={selectedMou.logoUrl}
                      alt={selectedMou.organisationName}
                      className="h-24 w-auto object-contain"
                    />
                  </a>
                  <h2 className="text-2xl font-bold text-gu-dark">{selectedMou.organisationName}</h2>
                  <p className="text-gray-600">{selectedMou.date}</p>
                </div>
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gu-dark mb-2">About the Organisation</h3>
                  <p className="text-gray-600">{selectedMou.briefAbout}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gu-dark mb-2">MOU Objective</h3>
                  <p className="text-gray-600">{selectedMou.mouObjective}</p>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <a
                    href={selectedMou.logoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gu-primary text-white rounded-lg hover:bg-[#080b5a] transition-colors"
                  >
                    Visit Organization Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MouListingPage;