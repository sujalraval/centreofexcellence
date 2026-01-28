import { Link } from "react-router-dom";
import { Globe, Target, Heart, Mail } from "lucide-react";

const AboutCOEPage = () => {
  const missionVisionValues = [
    {
      title: "Mission",
      content:
        "To deliver comprehensive legal education that fosters academic excellence, ethical leadership, and interdisciplinary understanding, preparing students to meet contemporary global challenges.",
      icon: <Target className="w-8 h-8" />,
    },
    {
      title: "Vision",
      content:
        "To nurture an inclusive academic environment that shapes responsible leaders committed to justice, equity, and positive societal transformation.",
      icon: <Globe className="w-8 h-8" />,
    },
    {
      title: "Motto",
      content: "Justice, Knowledge, and Leadership for Society",
      icon: <Heart className="w-8 h-8" />,
    },
  ];

  const coreValues = [
    {
      title: "Academic Excellence",
      description:
        "Commitment to rigorous scholarship, critical inquiry, and continuous learning",
    },
    {
      title: "Ethics and Integrity",
      description:
        "Upholding the highest standards of professional and moral conduct",
    },
    {
      title: "Interdisciplinary Learning",
      description:
        "Integrating law with commerce, business, and social sciences",
    },
    {
      title: "Innovation and Research",
      description:
        "Encouraging creativity, legal research, and problem-solving approaches",
    },
    {
      title: "Social Responsibility",
      description:
        "Promoting justice, equity, inclusivity, and community engagement",
    },
    {
      title: "Global Perspective",
      description:
        "Preparing students for legal practice in an interconnected world",
    },
  ];

  const stats = [
    { value: "2016", label: "Established" },
    { value: "5-Year", label: "Program Duration" },
    { value: "B.Com. LL.B.", label: "Integrated Degree" },
    { value: "Hons.", label: "Honours Programme" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0a0e72]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e72] to-[#080b5a] opacity-90" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Centre of Excellence
            </h1>
            <p className="text-2xl text-white/90 mb-2 font-medium">
              Five-Year Integrated B.Com. LL.B. (Hons.)
            </p>
            <p className="text-xl text-white/80 mb-8">
              University School of Law, Gujarat University
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/school-of-law"
                className="px-8 py-3 bg-white text-[#0a0e72] rounded-lg font-semibold hover:shadow-lg transition"
              >
                Explore Our Programs
              </Link>
              <Link
                to="/faculties"
                className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#0a0e72] transition"
              >
                Meet Our Faculty
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                About the Centre of Excellence
              </h2>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gray-100">
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Established in 2016, the Centre of Excellence (Five-Year
                  Integrated B.Com. LL.B. (Hons.)) was conceived with the
                  objective of ushering in a transformative approach to legal
                  education in India. The Centre offers a unique and rigorous
                  academic framework that seamlessly integrates legal studies
                  with commerce, business knowledge, and interdisciplinary
                  perspectives, in alignment with international academic and
                  professional standards.
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  The programme is designed to equip students with a strong
                  foundation in law while fostering an in-depth understanding of
                  business, governance, and socio-economic systems. With a
                  sustained focus on ethics, professionalism, innovation,
                  research, and holistic development, the Centre emphasizes
                  experiential learning through moot courts, internships,
                  research projects, fieldwork, and industry interaction.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100 mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Our Impact
                  </h3>
                  <p className="text-gray-700">
                    Over the years, the Centre of Excellence has built a strong
                    reputation for academic rigor and excellence. Its graduates
                    have distinguished themselves as legal professionals,
                    scholars, corporate advisors, academicians, policymakers,
                    and social leaders, contributing meaningfully across diverse
                    sectors at national and global levels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Motto */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Foundation
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guided by our commitment to excellence in legal education and
              social responsibility
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {missionVisionValues.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition text-center"
              >
                <div className="w-16 h-16 bg-[#0a0e72]/10 rounded-lg flex items-center justify-center text-[#0a0e72] mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The fundamental principles that guide our educational philosophy
              and practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition border border-gray-100"
              >
                <h3 className="font-bold text-gray-900 mb-3 text-lg">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div className="text-2xl font-bold text-[#0a0e72] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0a0e72]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Our Legacy of Excellence
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Become part of our distinguished community and shape the future of
            legal education and practice.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/admissions"
              className="px-8 py-3 bg-white text-[#0a0e72] rounded-lg font-semibold hover:shadow-lg transition"
            >
              Start Your Journey
            </Link>
            <a
              href="mailto:centreofexcellencegu@gmail.com"
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#0a0e72] transition flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutCOEPage;
