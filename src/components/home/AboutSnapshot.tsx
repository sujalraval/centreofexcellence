// src/components/AboutSnapshot.jsx
import React from "react";
import { Target, Eye } from "lucide-react";

const AboutSnapshot = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* ================= HEADER ================= */}
        <div className="max-w-3xl mb-12 text-center mx-auto">
          <h2 className="text-3xl font-semibold text-gu-dark mb-3">
            About the Centre of Excellence
          </h2>
          <p className="text-gray-500">
            University School of Law, Gujarat University
          </p>
        </div>

        {/* ================= ABOUT CONTENT ================= */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="border border-gray-200 rounded-lg overflow-hidden flex items-center justify-center w-11/12 mx-auto">
            <img
              src="/aboutcoe.png"
              alt="Centre of Excellence, Gujarat University"
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-gray-700 leading-relaxed text-justify mb-6">
              Established in 2016, the Centre of Excellence (Five-Year
              Integrated B.Com. LL.B. (Hons.)) was envisioned to bring a
              paradigm shift in legal education in India. The Centre integrates
              legal studies with business and interdisciplinary learning,
              aligned with international academic standards.
            </p>

            <p className="text-gray-700 leading-relaxed text-justify">
              With a strong emphasis on ethics, professionalism, innovation, and
              holistic development, the Centre has consistently produced
              graduates who have excelled as legal professionals, scholars, and
              policymakers across diverse domains.
            </p>
          </div>
        </div>

        {/* ================= MISSION & VISION ================= */}
        <div className="grid md:grid-cols-2 gap-10 mt-16">
          <div className="border-l-4 border-gu-primary pl-6">
            <div className="flex items-center gap-3 mb-3">
              <Target className="w-5 h-5 text-gu-primary" />
              <h3 className="text-lg font-semibold text-gu-dark">Mission</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed text-justify">
              To deliver comprehensive legal education that fosters academic
              excellence, ethical leadership, and interdisciplinary
              understanding, preparing students to meet contemporary global
              challenges.
            </p>
          </div>

          <div className="border-l-4 border-gu-primary pl-6">
            <div className="flex items-center gap-3 mb-3">
              <Eye className="w-5 h-5 text-gu-primary" />
              <h3 className="text-lg font-semibold text-gu-dark">Vision</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed text-justify">
              To nurture an inclusive academic environment that shapes
              responsible leaders committed to justice, equity, and positive
              societal transformation.
            </p>
          </div>
        </div>

        {/* ================= PRINCIPAL MESSAGE ================= */}
        <div className="mt-20 bg-gray-50 border border-gray-200 rounded-xl p-10">
          <div className="grid md:grid-cols-[160px_1fr] gap-8 items-start">
            {/* Image */}
            <div className="w-40 h-40 rounded-full overflow-hidden border border-gray-300 mx-auto">
              <img
                src="/director image.jpg"
                alt="Dr. Bhavesh Bharad, Coordinator"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-xl font-semibold text-gu-dark mb-4">
                Coordinator’s Message
              </h3>

              <p className="text-gray-700 italic leading-relaxed text-justify mb-6">
                “The Centre of Excellence stands at the confluence of tradition
                and innovation. Our integrated legal education model equips
                students with intellectual rigor, ethical values, and global
                competence required in today’s evolving legal ecosystem.”
              </p>

              <div>
                <h4 className="font-semibold text-gu-dark">
                  Dr. Bhavesh Bharad
                </h4>
                <p className="text-sm text-gray-500">
                  Coordinator, Centre of Excellence
                </p>

                <a
                  href="/principal-message"
                  className="inline-block mt-3 text-sm text-gu-primary underline"
                >
                  Read full message →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnapshot;
