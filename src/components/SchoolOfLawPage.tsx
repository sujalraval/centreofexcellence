import { Link } from "react-router-dom";
import { useState } from "react";
import {
  BookOpen,
  Building,
  GraduationCap,
  Globe,
  Lightbulb,
  Mail,
  Users,
  Award,
  Calendar,
} from "lucide-react";

const SchoolOfLawPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    {
      value: "1977",
      label: "Established",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      value: "40+",
      label: "Years of Excellence",
      icon: <Award className="w-6 h-6" />,
    },
    {
      value: "5000+",
      label: "Alumni Network",
      icon: <Users className="w-6 h-6" />,
    },
    {
      value: "100%",
      label: "Placement Rate",
      icon: <GraduationCap className="w-6 h-6" />,
    },
  ];

  const keyFeatures = [
    {
      title: "Moot Court Excellence",
      description: "Advanced advocacy and litigation skills training",
      icon: <Globe className="w-8 h-8" />,
    },
    {
      title: "IPR Specialization",
      description: "Leading expertise in Intellectual Property Rights",
      icon: <Lightbulb className="w-8 h-8" />,
    },
    {
      title: "Industry Partnerships",
      description: "Strong connections with legal firms and organizations",
      icon: <Building className="w-8 h-8" />,
    },
    {
      title: "Research Focus",
      description: "Cutting-edge legal research and publications",
      icon: <BookOpen className="w-8 h-8" />,
    },
  ];

  const tabContent = {
    overview: (
      <div className="prose max-w-none">
        <p className="text-gray-700 mb-6 leading-relaxed">
          The School of Law, Gujarat University, established in 1977, has been a
          distinguished centre of excellence in legal education for over four
          decades. Since its inception, the School has consistently demonstrated
          a strong commitment to academic excellence, professional integrity,
          and societal responsibility, thereby contributing significantly to the
          development of the Indian legal system.
        </p>

        <p className="text-gray-700 mb-6 leading-relaxed">
          The School of Law is dedicated to nurturing competent, ethical, and
          socially conscious legal professionals. It emphasizes a balanced
          approach to legal education by integrating theoretical foundations
          with practical training. This ensures that students are not only
          well-versed in legal principles but are also equipped with the skills
          required to address real-world legal challenges.
        </p>
      </div>
    ),
    experiential: (
      <div className="prose max-w-none">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Experiential Learning
        </h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          One of the key strengths of the School is its focus on experiential
          learning. The Moot Court programmes play a vital role in enhancing
          students' advocacy, research, drafting, and analytical skills. In
          addition, educational and study visits form an integral part of the
          curriculum, providing students with firsthand exposure to the
          functioning of the legal system.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h4 className="font-semibold text-gray-900 mb-2">Court Visits</h4>
            <p className="text-gray-600 text-sm">
              Supreme Court, High Courts, and legal institutions
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h4 className="font-semibold text-gray-900 mb-2">Field Work</h4>
            <p className="text-gray-600 text-sm">
              NGO collaborations and community engagement
            </p>
          </div>
        </div>
      </div>
    ),
    infrastructure: (
      <div className="prose max-w-none">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Infrastructure & Facilities
        </h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          In terms of infrastructure, the School of Law offers a conducive and
          professional learning environment. Facilities include:
        </p>

        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li>Well-equipped computer laboratories with high-speed Wi-Fi</li>
          <li>Smart classrooms with modern teaching aids</li>
          <li>Hygienic and student-friendly amenities</li>
          <li>A team of highly qualified and experienced faculty members</li>
        </ul>
      </div>
    ),
    academics: (
      <div className="prose max-w-none">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Academic Excellence
        </h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Academically, the School of Law is recognised for its specialised
          focus on Intellectual Property Rights (IPR), which has earned it wide
          recognition. The School also offers various self-financed programmes
          in areas such as Environmental Law, Constitutional Law, and Human
          Rights.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
          <h4 className="font-bold text-gray-900 mb-3">Featured Programme</h4>
          <p className="text-gray-700">
            The five-year integrated B.Com. LL.B. (Hons.) programme is offered
            through its Centre of Excellence, attracting students from diverse
            academic backgrounds.
          </p>
        </div>
      </div>
    ),
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0a0e72]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e72] to-[#080b5a] opacity-90" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              School of Law
            </h1>
            <p className="text-xl text-white/90 mb-8">Gujarat University</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/admissions"
                className="px-8 py-3 bg-white text-[#0a0e72] rounded-lg font-semibold hover:shadow-lg transition"
              >
                Apply Now
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

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-[#0a0e72]/10 rounded-full flex items-center justify-center text-[#0a0e72] mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-[#0a0e72] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                About the School of Law
              </h2>
              <p className="text-gray-600">
                Discover our comprehensive approach to legal education
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-10 bg-gray-100 p-2 rounded-lg">
              {[
                { id: "overview", label: "Overview" },
                { id: "experiential", label: "Experiential Learning" },
                { id: "infrastructure", label: "Infrastructure" },
                { id: "academics", label: "Academics" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-[#0a0e72] text-white shadow-lg"
                      : "text-gray-600 hover:text-[#0a0e72] hover:bg-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gray-100 min-h-[400px]">
              <div className="animate-fadeIn">
                {tabContent[activeTab as keyof typeof tabContent]}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our School of Law?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Distinctive features that make us a leader in legal education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-[#0a0e72]/10 rounded-full flex items-center justify-center text-[#0a0e72] mx-auto mb-4 group-hover:bg-[#0a0e72] group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0a0e72]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Begin Your Legal Journey?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join our community of aspiring legal professionals and gain the
            skills needed to excel in today's competitive legal landscape.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/admissions"
              className="px-8 py-3 bg-white text-[#0a0e72] rounded-lg font-semibold hover:shadow-lg transition"
            >
              Start Application
            </Link>
            <a
              href="mailto:admissions@gujaratuniversity.edu.in"
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#0a0e72] transition flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact Admissions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolOfLawPage;
