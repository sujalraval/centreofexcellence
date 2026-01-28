import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Building, 
  Award, 
  Globe,
  Shield,
  Target,
  Library
} from "lucide-react";

const GujaratUniversityPage = () => {
  const universityStats = [
    { value: "1949", label: "Established", icon: <Award className="w-6 h-6" /> },
    { value: "75+", label: "Years of Excellence", icon: <Target className="w-6 h-6" /> },
    { value: "100+", label: "Affiliated Colleges", icon: <Building className="w-6 h-6" /> },
    { value: "Multiple", label: "Research Centres", icon: <Library className="w-6 h-6" /> }
  ];

  const faculties = [
    {
      title: "Arts & Humanities",
      description: "Languages, literature, history, and cultural studies",
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      title: "Commerce & Management",
      description: "Business studies, economics, and management education",
      icon: <Building className="w-8 h-8" />
    },
    {
      title: "Science & Technology",
      description: "Natural sciences, mathematics, and technological innovation",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Law & Social Sciences",
      description: "Legal education and social science research",
      icon: <Globe className="w-8 h-8" />
    }
  ];

  const achievements = [
    {
      title: "NAAC Accreditation",
      description: "University with A++ grade recognition",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "NIRF Ranking",
      description: "Consistently ranked among top universities",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Research Excellence",
      description: "Leading research initiatives and publications",
      icon: <Library className="w-6 h-6" />
    },
    {
      title: "International Recognition",
      description: "Global partnerships and collaborations",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0a0e72]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e72] to-[#080b5a] opacity-90" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Gujarat University
            </h1>
            <p className="text-xl text-white/90 mb-8">
              One of the premier public universities in Gujarat and a distinguished centre of higher education in India
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://www.gujaratuniversity.ac.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white text-[#0a0e72] rounded-lg font-semibold hover:shadow-lg transition"
              >
                Official Website
              </a>
              <Link 
                to="/about-coe" 
                className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#0a0e72] transition"
              >
                About Our School
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* University Stats */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {universityStats.map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#0a0e72]/10 rounded-full flex items-center justify-center text-[#0a0e72] mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-[#0a0e72] mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About University */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About Gujarat University</h2>
              <p className="text-gray-600">
                Established in 1949 under the Gujarat University Act by the Government of Gujarat
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gray-100">
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Gujarat University, established in 1949 under the Gujarat University Act by the Government of Gujarat, is one of the premier public universities in the state and a distinguished centre of higher education in India. Located in Ahmedabad, the University has played a pivotal role in shaping academic, cultural, and intellectual growth for over seven decades.
                </p>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The University was founded with the vision of promoting excellence in teaching, research, and community engagement, while upholding values of inclusivity, innovation, and social responsibility. Over the years, Gujarat University has emerged as a multidisciplinary institution offering a diverse range of undergraduate, postgraduate, doctoral, diploma, and certificate programmes across arts, commerce, science, law, education, medicine, management, and technology.
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">Academic Excellence</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Gujarat University is known for its robust academic framework, supported by highly qualified faculty, modern infrastructure, and a strong emphasis on research and innovation. The University actively promotes interdisciplinary learning, industry collaboration, skill development, and entrepreneurship to prepare students for global challenges.
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">Institutional Network</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The University has a vast network of affiliated colleges, postgraduate departments, research centres, and constituent institutions, making it one of the largest universities in the region. It fosters academic excellence through continuous curriculum upgradation, outcome-based education, and the adoption of digital and innovative teaching-learning practices.
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">Research & Innovation</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Research and innovation form the cornerstone of Gujarat University's academic philosophy. The University houses multiple Centres of Excellence, specialised research institutes, incubation centres, and innovation hubs, encouraging faculty and students to engage in cutting-edge research, startups, and societal problem-solving initiatives.
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">Holistic Development</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Committed to holistic development, Gujarat University also emphasizes sports, culture, social outreach, and extension activities, promoting values of leadership, ethics, and civic responsibility among students. The University maintains strong engagement with the community through outreach programmes, legal aid clinics, environmental initiatives, and public awareness campaigns.
                </p>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100 mt-8">
                  <h4 className="font-bold text-gray-900 mb-3">Our Vision</h4>
                  <p className="text-gray-700">
                    With a legacy of academic distinction and a forward-looking approach, Gujarat University continues to evolve as a globally relevant, socially responsible, and student-centric institution, contributing significantly to nation-building and knowledge creation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculties */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Faculties</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Diverse academic departments offering comprehensive education across disciplines
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {faculties.map((faculty, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition text-center">
                <div className="w-12 h-12 bg-[#0a0e72]/10 rounded-lg flex items-center justify-center text-[#0a0e72] mx-auto mb-4">
                  {faculty.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{faculty.title}</h3>
                <p className="text-gray-600 text-sm">{faculty.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">University Achievements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Recognitions and milestones that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition text-center">
                <div className="w-12 h-12 bg-[#0a0e72]/10 rounded-lg flex items-center justify-center text-[#0a0e72] mx-auto mb-4">
                  {achievement.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COE Connection */}
      <section className="py-20 bg-[#0a0e72]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Centre of Excellence Partnership</h2>
            <p className="text-white/90 mb-8">
              As part of Gujarat University, the Centre of Excellence represents our commitment 
              to specialized legal education and research. Together, we strive to produce 
              competent legal professionals who serve society with integrity and excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/school-of-law" 
                className="px-8 py-3 bg-white text-[#0a0e72] rounded-lg font-semibold hover:shadow-lg transition"
              >
                Explore Our Law Programs
              </Link>
              <a 
                href="https://www.gujaratuniversity.ac.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#0a0e72] transition"
              >
                Visit GU Official Site
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GujaratUniversityPage;