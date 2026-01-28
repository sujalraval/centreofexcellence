import { Link } from "react-router-dom";
import { 
  Users, 
  Target, 
  Award,
  BookOpen,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Clock
} from "lucide-react";

const CoordinatorDeskPage = () => {
  const coordinatorMessage = {
    name: "Dr. Bhavesh Bharad",
    designation: "Coordinator",
    department: "Centre of Excellence",
    message: `The Centre of Excellence stands at the confluence of tradition and innovation. Our integrated legal education model equips students with intellectual rigor, ethical values, and global competence required in today's evolving legal ecosystem.`,
    signature: "/faculty/bhavesh-bharad.jpg",
    email: "dr.bharad@gujaratuniversity.ac.in",
    phone: "+91 97249 70166"
  };

  const keyInitiatives = [
    {
      title: "Student Mentorship Program",
      description: "Personalized guidance and career counseling for all students",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Industry Connect Sessions",
      description: "Regular interactions with legal professionals and industry experts",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Research Promotion",
      description: "Encouraging student research and publication activities",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Skill Development Workshops",
      description: "Practical workshops on legal writing, drafting, and advocacy",
      icon: <Award className="w-6 h-6" />
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", time: "9:00 AM - 5:00 PM" },
    { day: "Saturday", time: "10:00 AM - 2:00 PM" },
    { day: "Sunday", time: "Closed" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0a0e72]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e72] to-[#080b5a] opacity-90" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Coordinator's Desk
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Dr. Bhavesh Bharad, Coordinator<br />
              Centre of Excellence
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/students/activities" 
                className="px-8 py-3 bg-white text-[#0a0e72] rounded-lg font-semibold hover:shadow-lg transition"
              >
                Student Activities
              </Link>
              <a 
                href="mailto:dr.bharad@gujaratuniversity.ac.in" 
                className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#0a0e72] transition flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Coordinator
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Coordinator's Message */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Message from the Coordinator</h2>
              <p className="text-gray-600">
                A word from our dedicated Program Coordinator
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gray-100">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden border-4 border-[#0a0e72]">
                    <img 
                      src={coordinatorMessage.signature} 
                      alt={coordinatorMessage.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">{coordinatorMessage.name}</h3>
                    <p className="text-[#0a0e72] font-medium text-lg">{coordinatorMessage.designation}</p>
                    <p className="text-gray-600">{coordinatorMessage.department}</p>
                  </div>
                  
                  <div className="prose max-w-none mb-8">
                    <p className="text-gray-700 leading-relaxed text-lg italic">
                      "{coordinatorMessage.message}"
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Contact Information</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 text-gray-600">
                          <Mail className="w-5 h-5 text-[#0a0e72]" />
                          <span>Email: {coordinatorMessage.email}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                          <Phone className="w-5 h-5 text-[#0a0e72]" />
                          <span>Contact: {coordinatorMessage.phone}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Documents & Reports</h4>
                      <div className="space-y-3">
                        <a 
                          href="#" 
                          className="flex items-center gap-3 text-[#0a0e72] hover:text-[#080b5a] transition font-medium"
                        >
                          <BookOpen className="w-5 h-5" />
                          Annual Reports
                        </a>
                        <a 
                          href="#" 
                          className="flex items-center gap-3 text-[#0a0e72] hover:text-[#080b5a] transition font-medium"
                        >
                          <MessageSquare className="w-5 h-5" />
                          Newsletter
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Initiatives</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Programs and activities designed to enhance student learning and development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyInitiatives.map((initiative, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition text-center">
                <div className="w-12 h-12 bg-[#0a0e72]/10 rounded-lg flex items-center justify-center text-[#0a0e72] mx-auto mb-4">
                  {initiative.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{initiative.title}</h3>
                <p className="text-gray-600 text-sm">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Office Information</h2>
              <p className="text-gray-600">
                Schedule a meeting or get in touch with the coordinator
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Office Hours</h3>
                  <div className="space-y-4">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <Clock className="w-5 h-5 text-[#0a0e72]" />
                        <div>
                          <p className="font-medium text-gray-900">{schedule.day}</p>
                          <p className="text-gray-600">{schedule.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Mail className="w-5 h-5 text-[#0a0e72]" />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <a 
                          href="mailto:coordinator@coesolgu.edu.in" 
                          className="text-gray-600 hover:text-[#0a0e72] transition"
                        >
                          coordinator@coesolgu.edu.in
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <Phone className="w-5 h-5 text-[#0a0e72]" />
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <a 
                          href="tel:+919724970166" 
                          className="text-gray-600 hover:text-[#0a0e72] transition"
                        >
                          +91 97249 70166
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-[#0a0e72] mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Location</p>
                        <p className="text-gray-600">
                          Coordinator's Office<br />
                          Centre of Excellence<br />
                          Gujarat University Campus<br />
                          Ahmedabad - 380009
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-8 border-t border-gray-200 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Schedule a Meeting</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href="mailto:coordinator@coesolgu.edu.in?subject=Meeting Request" 
                    className="px-6 py-3 bg-[#0a0e72] text-white rounded-lg font-medium hover:bg-[#080b5a] transition flex items-center gap-2"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Request Meeting
                  </a>
                  <Link 
                    to="/students/support-services" 
                    className="px-6 py-3 border-2 border-[#0a0e72] text-[#0a0e72] rounded-lg font-medium hover:bg-[#0a0e72] hover:text-white transition"
                  >
                    Student Support
                  </Link>
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
            <h2 className="text-2xl font-bold text-white mb-8">Quick Links for Students</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/faculties" 
                className="px-6 py-3 bg-white text-[#0a0e72] rounded-lg font-medium hover:shadow-lg transition"
              >
                Faculty Profiles
              </Link>
              <Link 
                to="/students/clubs" 
                className="px-6 py-3 bg-white text-[#0a0e72] rounded-lg font-medium hover:shadow-lg transition"
              >
                Student Clubs
              </Link>
              <Link 
                to="/students/committees" 
                className="px-6 py-3 bg-white text-[#0a0e72] rounded-lg font-medium hover:shadow-lg transition"
              >
                Committees
              </Link>
              <a 
                href="https://lms.coesolgu.edu.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-[#0a0e72] transition"
              >
                Learning Portal
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoordinatorDeskPage;