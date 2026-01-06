// src/components/HeroSection.jsx
import React from "react";
import { Play, ChevronRight, CheckCircle } from "lucide-react";

const HeroSection = () => {
  const features = [
    "BCI Approved Program",
    "IPR Specialization",
    "Industry Partnerships",
    "Global Curriculum",
  ];

  return (
    <section className="relative">
      {/* Solid Color Background */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "#0a0e72e6" }}
      />

      {/* Content */}
      <div className="relative min-h-[700px] flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            {/* Program Badge */}
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                <span>•</span>
                <span>Centre of Excellence</span>
                <span>•</span>
                <span>Established 2016</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              B.Com. LL.B. (Hons.)
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/85 mb-8 max-w-2xl">
              Five-year integrated program merging commerce, law, and technology
              with specialized focus on Intellectual Property Rights.
            </p>

            {/* Features */}
            <div className="mb-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-white/90"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-300" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="/admissions"
                className="inline-flex items-center gap-3 bg-white text-gu-primary px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition"
              >
                Start Application
                <ChevronRight className="w-5 h-5" />
              </a>

              <div className="flex items-center gap-4">
                <button className="flex items-center gap-3 text-white hover:text-white/80 transition">
                  <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center">
                    <Play className="w-5 h-5" />
                  </div>
                  <span>Program Video</span>
                </button>

                <a
                  href="/brochure"
                  className="text-white/80 hover:text-white underline text-sm"
                >
                  Download Brochure
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Stats */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <div className="space-y-6">
              <Stat value="25+" label="Years Legacy" />
              <Stat value="2000+" label="Students" />
              <Stat value="A++" label="NAAC Grade" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ value, label }) => (
  <div className="text-center">
    <div className="text-3xl font-bold text-white mb-1">{value}</div>
    <div className="text-white/70 text-sm">{label}</div>
  </div>
);

export default HeroSection;
