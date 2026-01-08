// src/components/QuickInfoPanel.jsx
import { BadgeItem } from "../../types";

const badges: BadgeItem[] = [
  {
    logo: "/gujaratuniversity.png",
    title: "Gujarat University",
  },
  {
    logo: "/naac_A++.png",
    title: "NAAC A+",
  },
  {
    logo: "/National_Institutional_Ranking_Framework_logo.png",
    title: "NIRF Rank",
  },
  {
    logo: "/bci-logo.svg",
    title: "BCI Approved",
  },
  {
    logo: "/UGC_India_Logo.png",
    title: "UGC Recognized",
  },
];

const QuickInfoPanel = () => {
  return (
    // ⬇️ Reduced overlap for breathing space
    <section className="relative -mt-24 z-20">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden pt-2">
          {/* Divider */}
          {/* <div className="h-px bg-gray-200 mx-10" /> */}

          {/* 🔹 BOTTOM: RECOGNITIONS */}
          <div className="px-8 py-12">
            <h2 className="text-2xl font-bold text-center text-gu-dark mb-12">
              Recognitions & Accreditations
            </h2>

            <div className="flex justify-center gap-12 flex-wrap">
              {badges.map((badge, index) => (
                <div key={index} className="text-center max-w-[170px]">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gu-light p-3 flex items-center justify-center mb-4 hover:scale-105 transition-transform duration-300">
                    <img
                      src={badge.logo}
                      alt={badge.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <h3 className="text-lg font-semibold text-gu-dark">
                    {badge.title}
                  </h3>
                  {badge.description && <p className="text-sm text-gray-600">{badge.description}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickInfoPanel;
