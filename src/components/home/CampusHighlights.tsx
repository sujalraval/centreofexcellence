// src/components/CampusHighlights.jsx
import {
  Library,
  Cpu,
  Users,
  GraduationCap,
  HeartHandshake,
  Trophy,
  BookOpen,
  Wifi,
  Database,
  FileText,
  Calendar,
  Newspaper,
} from "lucide-react";

const CampusHighlights = () => {
  const facilities = [
    {
      title: "Law Library",
      description: "Comprehensive collection with digital resources",
      count: "10,000+ Books",
      icon: <Library className="w-8 h-8" />,
      image: "/campus/library.jpg",
    },
    {
      title: "Smart Classrooms",
      description: "AI-driven case analysis and virtual proceedings",
      count: "Tech-Enabled",
      icon: <Cpu className="w-8 h-8" />,
      image: "/campus/smart-classroom.jpg",
    },
    {
      title: "Moot Court Hall",
      description: "State-of-the-art courtroom simulation",
      count: "Real-world Training",
      icon: <GraduationCap className="w-8 h-8" />,
      image: "/campus/moot-court.jpg",
    },
    {
      title: "Computer Lab",
      description: "Legal research software and AI tools",
      count: "Digital Resources",
      icon: <BookOpen className="w-8 h-8" />,
      image: "/campus/computer-lab.jpg",
    },
    {
      title: "Legal Aid Clinic",
      description: "Community service and pro bono work",
      count: "Social Initiative",
      icon: <HeartHandshake className="w-8 h-8" />,
      image: "/campus/legal-aid.jpg",
    },
    {
      title: "Sports Complex",
      description: "Indoor and outdoor sports facilities",
      count: "Fitness & Team Spirit",
      icon: <Trophy className="w-8 h-8" />,
      image: "/campus/sports.jpg",
    },
    {
      title: "Hostel Facilities",
      description: "Safe and comfortable accommodation",
      count: "Modern Amenities",
      icon: <Users className="w-8 h-8" />,
      image: "/campus/hostel.png",
    },
    {
      title: "Campus Wi-Fi",
      description: "High-speed internet connectivity",
      count: "24/7 Access",
      icon: <Wifi className="w-8 h-8" />,
      image: "/campus/wifi.png",
    },
    {
      title: "LMS & SIS",
      description: "Learning Management and Student Information Systems",
      count: "Digital Platform",
      icon: <Database className="w-8 h-8" />,
      image: "/campus/computer-lab.jpg",
    },
    {
      title: "Institutional Repository",
      description: "Digital archive of research and publications",
      count: "Academic Resources",
      icon: <FileText className="w-8 h-8" />,
      image: "/campus/library.jpg",
    },
    {
      title: "Conference",
      description: "Academic conferences and symposiums",
      count: "Research Events",
      icon: <Calendar className="w-8 h-8" />,
      image: "/campus/moot-court.jpg",
    },
    {
      title: "Journal",
      description: "Academic publications and research papers",
      count: "Scholarly Works",
      icon: <Newspaper className="w-8 h-8" />,
      image: "/campus/computer-lab.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gu-dark mb-4">
            Campus Facilities & Highlights
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            World-class infrastructure designed for holistic legal education and
            practical learning.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {facilities.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Background Image on Hover */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 scale-110 group-hover:scale-100 transition-all duration-700"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10 p-6 text-center transition-colors duration-500 group-hover:text-white">
                <div className="w-16 h-16 mx-auto mb-4 bg-gu-light rounded-full flex items-center justify-center text-gu-primary group-hover:bg-white/20 group-hover:text-white transition-all">
                  {item.icon}
                </div>

                <h3 className="font-semibold mb-2">{item.title}</h3>

                <p className="text-sm mb-3 opacity-90">{item.description}</p>

                <div className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-gu-light/60 text-gu-primary group-hover:bg-white/20 group-hover:text-white transition">
                  {item.count}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusHighlights;
