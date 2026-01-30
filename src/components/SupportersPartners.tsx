import React from "react";


interface PartnerLogo {
  id: number;
  src: string;
  alt: string;
}

const SupportersPartners: React.FC = () => {
  // Example logo array with placeholder image URLs
  const partnerLogos: PartnerLogo[] = [
    { id: 1, src: "/partners/logo-1.png", alt: "Partner 1" },
    { id: 2, src: "/partners/logo-2.png", alt: "Partner 2" },
    { id: 3, src: "/partners/logo-3.png", alt: "Partner 3" },
    { id: 4, src: "/partners/logo-4.png", alt: "Partner 4" },
    { id: 5, src: "/partners/logo-5.png", alt: "Partner 5" },
    { id: 6, src: "/partners/logo-6.png", alt: "Partner 6" },
    { id: 7, src: "/partners/logo-7.png", alt: "Partner 7" },
    { id: 8, src: "/partners/logo-8.png", alt: "Partner 8" },
    { id: 9, src: "/partners/logo-9.png", alt: "Partner 9" },
    { id: 10, src: "/partners/logo-10.png", alt: "Partner 10" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">
            SUPPORTERS & PARTNERS
          </h2>
          <div className="mt-3 flex justify-center">
            <div className="w-20 h-1 bg-orange-500 rounded-full"></div>
          </div>
        </div>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10 gap-6">
          {partnerLogos.map((logo) => (
            <div
              key={logo.id}
              className="flex items-center justify-center p-8 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer transform hover:scale-105"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-24 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://placehold.co/150x80/0a0e72/FFFFFF?text=Partner+${logo.id}`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportersPartners;
