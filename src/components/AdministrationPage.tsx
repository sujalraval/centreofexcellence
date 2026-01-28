import { Link } from "react-router-dom";
import {
  Users,
  Building,
  Shield,
  Award,
  BookOpen,
  Target,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";

const AdministrationPage = () => {
  const administrativeTeam = [
    {
      name: "Dr. Prateek Kanchan",
      designation: "Professor & Director",
      department: "School of Law",
      email: "prateek_kanchan@yahoo.com",
      phone: "+91 97249 70166",
      image: "/administration/prateekkanchan.png",
      icon: <Target className="w-8 h-8" />,
      externalLink: "https://www.gujaratuniversity.ac.in/directors",
    },
    {
      name: "Dr. Bhavesh Bharad",
      designation: "Coordinator",
      department: "Centre of Excellence",
      email: "dr.bharad@gujaratuniversity.ac.in",
      phone: "+91 97249 70166",
      image: "/director image.jpg",
      icon: <Shield className="w-8 h-8" />,
      quote:
        "The Centre of Excellence stands at the confluence of tradition and innovation. Our integrated legal education model equips students with intellectual rigor, ethical values, and global competence required in today's evolving legal ecosystem.",
      quoteAuthor: "Dr. Bhavesh Bharad, Coordinator, Centre of Excellence",
    },
  ];

  const universityLeadership = [
    {
      image: "/administration/vc image.png",
      name: "Dr Neerja A Gupta",
      title: "Vice-Chancellor",
      link: "https://www.gujaratuniversity.ac.in/vicechancellor",
    },
    {
      image: "/administration/registrarimage.png",
      name: "Dr. Piyush M Patel",
      title: "Registrar",
      link: "https://www.gujaratuniversity.ac.in/registrar",
    },
  ];

  const administrativeFunctions = [
    {
      title: "Academic Administration",
      description:
        "Curriculum development, academic policies, and program oversight",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      title: "Student Services",
      description: "Student welfare, counseling, and support services",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Quality Assurance",
      description: "Maintaining academic standards and continuous improvement",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Resource Management",
      description: "Infrastructure, facilities, and resource allocation",
      icon: <Building className="w-6 h-6" />,
    },
  ];

  const contactInfo = [
    {
      title: "Office Hours",
      value: "Monday - Friday: 9:00 AM - 5:00 PM",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      title: "Email",
      value: "admin@coesolgu.edu.in",
      icon: <Mail className="w-5 h-5" />,
    },
    {
      title: "Phone",
      value: "+91 97249 70166",
      icon: <Phone className="w-5 h-5" />,
    },
    {
      title: "Location",
      value: "Centre of Excellence, Gujarat University Campus, Ahmedabad",
      icon: <MapPin className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0a0e72]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e72] to-[#080b5a] opacity-90" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Administration
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Leadership and governance driving academic excellence at the
              Centre of Excellence
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/faculties"
                className="px-8 py-3 bg-white text-[#0a0e72] rounded-lg font-semibold hover:shadow-lg transition"
              >
                Faculty Directory
              </Link>
              <a
                href="mailto:admin@coesolgu.edu.in"
                className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#0a0e72] transition flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Administration
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* University Leadership */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              University Leadership
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect with Gujarat University's top administrative officials
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {universityLeadership.map((leader, index) => (
              <a
                key={index}
                href={leader.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition text-center border border-gray-100 hover:border-[#0a0e72]"
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover rounded-full border-2 border-gray-200"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `<div class="w-full h-full bg-[#0a0e72]/10 rounded-full flex items-center justify-center text-[#0a0e72]">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                      </div>`;
                    }}
                  />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{leader.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{leader.title}</p>
                <p className="text-[#0a0e72] text-sm font-medium">
                  View Profile
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Administrative Leadership */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Centre of Excellence Leadership
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals committed to excellence in legal education
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {administrativeTeam.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden border-4 border-[#0a0e72]">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-[#0a0e72] font-medium text-lg">
                        {member.designation}
                      </p>
                      <p className="text-gray-600">{member.department}</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-3 text-gray-600 hover:text-[#0a0e72] transition"
                      >
                        <Mail className="w-5 h-5" />
                        {member.email}
                      </a>
                      <a
                        href={`tel:${member.phone}`}
                        className="flex items-center gap-3 text-gray-600 hover:text-[#0a0e72] transition"
                      >
                        <Phone className="w-5 h-5" />
                        {member.phone}
                      </a>
                      {member.externalLink && (
                        <a
                          href={member.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-gray-600 hover:text-[#0a0e72] transition"
                        >
                          <Globe className="w-5 h-5" />
                          View Profile
                        </a>
                      )}
                    </div>

                    {member.quote && (
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100">
                        <p className="text-gray-700 italic mb-2">
                          "{member.quote}"
                        </p>
                        <p className="text-sm text-gray-600 font-medium">
                          — {member.quoteAuthor}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Administrative Functions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Administrative Functions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive administrative support ensuring smooth academic
              operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {administrativeFunctions.map((functionItem, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition text-center"
              >
                <div className="w-12 h-12 bg-[#0a0e72]/10 rounded-lg flex items-center justify-center text-[#0a0e72] mx-auto mb-4">
                  {functionItem.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {functionItem.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {functionItem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Contact Administration
              </h2>
              <p className="text-gray-600">
                Get in touch with our administrative team for any queries or
                assistance
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0a0e72]/10 rounded-lg flex items-center justify-center text-[#0a0e72] flex-shrink-0 mt-1">
                      {contact.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {contact.title}
                      </h3>
                      <p className="text-gray-600">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-gray-200 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Send us a Message
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="mailto:admin@coesolgu.edu.in"
                    className="px-6 py-3 bg-[#0a0e72] text-white rounded-lg font-medium hover:bg-[#080b5a] transition flex items-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Email Administration
                  </a>
                  <a
                    href="tel:+919724970166"
                    className="px-6 py-3 border-2 border-[#0a0e72] text-[#0a0e72] rounded-lg font-medium hover:bg-[#0a0e72] hover:text-white transition flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-[#0a0e72]">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-8">
              Quick Administrative Links
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://lms.coesolgu.edu.in"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-[#0a0e72] rounded-lg font-medium hover:shadow-lg transition"
              >
                Student Portal
              </a>
              <a
                href="https://admin.coesolgu.edu.in"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-[#0a0e72] rounded-lg font-medium hover:shadow-lg transition"
              >
                Admin Portal
              </a>
              <Link
                to="/students/support-services"
                className="px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-[#0a0e72] transition"
              >
                Student Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdministrationPage;
