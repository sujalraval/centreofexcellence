import { useState } from "react";
import {
  BookOpen,
  Building,
  FileText,
  Clock,
  Scale,
  Eye,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ChevronUp,
  Award,
  Target,
  Zap,
  Globe,
  Users,
  TrendingUp,
  Shield,
  GraduationCap,
  Gavel,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const BComLLBPage = () => {
  const [activeTab, setActiveTab] = useState("core");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggle = (id: string) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  const curriculumTabs = [
    { id: "core", label: "Core Law Subjects", icon: Gavel },
    { id: "commerce", label: "Commerce & Management", icon: TrendingUp },
    { id: "ipr", label: "IPR Specialization", icon: Shield },
    { id: "skills", label: "Clinical Courses", icon: GraduationCap },
  ];

  const subjects: Record<string, string[]> = {
    core: [
      "Law of Contract",
      "Law of Tort",
      "Constitutional Law I & II",
      "Administrative Law",
      "Civil Procedure Code",
      "Criminal Law",
      "Family Law",
      "Labour Law",
      "Company Law",
      "Jurisprudence",
      "Public International Law",
      "Environmental Law",
      "Human Rights Law",
      "Alternate Dispute Resolution",
      "Taxation Law",
    ],
    commerce: [
      "Financial Accounting",
      "Corporate Accounting",
      "Management Accounting",
      "Cost Accounting",
      "Auditing",
      "Principles of Management",
      "Micro & Macro Economics",
      "Statistics",
      "Secretarial Practice",
    ],
    ipr: [
      "IPR & Cyber Law",
      "Patent Law",
      "Copyright Law",
      "Trademark & GI Law",
      "Technology Transfer",
      "Biodiversity & IPR",
      "Farmers & Breeders Rights",
    ],
    skills: [
      "Legal Writing",
      "Drafting & Pleading",
      "Advanced Drafting",
      "Moot Court & Internship",
      "Legal Aid",
      "Professional Ethics",
      "Computer Applications",
      "Dissertation & Viva",
    ],
  };

  const outcomes = [
    {
      id: "po1",
      title: "Legal Knowledge Mastery",
      desc: "Strong understanding of legal principles and procedures.",
    },
    {
      id: "po2",
      title: "Professional Skills",
      desc: "Drafting, advocacy, legal writing, and argumentation.",
    },
    {
      id: "po3",
      title: "Interdisciplinary Thinking",
      desc: "Integration of commerce, management, and law.",
    },
    {
      id: "po4",
      title: "Ethical Responsibility",
      desc: "High professional and ethical standards.",
    },
    {
      id: "po5",
      title: "Career Readiness",
      desc: "Prepared for litigation, judiciary, corporate roles.",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Final Year Student",
      quote:
        "The integration of law and commerce gave me confidence and real-world clarity.",
    },
    {
      name: "Rajesh Patel",
      role: "Alumni, Advocate",
      quote: "Excellent academic structure with strong courtroom exposure.",
    },
    {
      name: "Neha Desai",
      role: "Recent Graduate",
      quote:
        "IPR specialization helped me enter legal-tech and research roles.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-gray-800">
      {/* HERO */}
      <section className="bg-gradient-to-r from-[#0a0e72] to-blue-900 text-white rounded-2xl p-12 text-center mb-20">
        <BookOpen size={56} className="mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          B.Com. LL.B. (Hons.)
        </h1>
        <p className="text-lg mb-6">Five-Year Integrated Programme</p>

        <div className="flex flex-wrap justify-center gap-6 text-sm opacity-90">
          <span className="flex items-center gap-2">
            <Clock size={18} /> 5 Years • 10 Semesters
          </span>
          <span className="flex items-center gap-2">
            <Building size={18} /> Gujarat University
          </span>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-8 py-3 bg-white text-[#0a0e72] font-semibold rounded-lg">
            Apply Now
          </button>
          <button className="px-8 py-3 border border-white rounded-lg">
            Download Brochure
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#0a0e72]">
          About the Programme
        </h2>
        <p className="max-w-4xl mx-auto text-lg text-center">
          The B.Com LL.B (Hons.) programme integrates legal education with
          commerce and management, creating professionals equipped for
          litigation, corporate law, judiciary, and public policy.
        </p>
      </section>

      {/* HIGHLIGHTS */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#0a0e72]">
          Programme Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: "IPR Specialization" },
            { icon: Zap, title: "Legal-Tech Exposure" },
            { icon: Gavel, title: "Moot Courts & Internships" },
            { icon: Globe, title: "Global Perspective" },
            { icon: Users, title: "Industry Mentorship" },
            { icon: TrendingUp, title: "Commerce Integration" },
            { icon: Target, title: "Career Focused" },
            { icon: Clock, title: "Semester System" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition"
              >
                <Icon size={36} className="mx-auto mb-4 text-[#0a0e72]" />
                <h3 className="font-semibold">{item.title}</h3>
              </div>
            );
          })}
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#0a0e72]">
          Curriculum
        </h2>

        <div className="flex justify-center flex-wrap gap-3 mb-8">
          {curriculumTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg flex items-center gap-2 text-sm font-medium ${
                  activeTab === tab.id
                    ? "bg-[#0a0e72] text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {subjects[activeTab].map((subject, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-sm transition"
            >
              {subject}
            </div>
          ))}
        </div>
      </section>

      {/* LEARNING OUTCOMES */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#0a0e72]">
          Learning Outcomes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {outcomes.map((o) => (
            <div
              key={o.id}
              className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition cursor-pointer"
              onClick={() => toggle(o.id)}
            >
              <h3 className="font-semibold mb-2">{o.title}</h3>
              <p className="text-sm text-gray-600">{o.desc}</p>
              <div className="mt-2 flex justify-center">
                {expanded[o.id] ? <ChevronUp /> : <ChevronDown />}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ADMISSIONS */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#0a0e72]">
          Admissions
        </h2>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold mb-4">
            Eligibility & Fee Structure
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Begin your journey towards a rewarding career in law and commerce
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-[#0a0e72]">
              Eligibility
            </h3>
            <h4 className="text-xl font-semibold mb-4">
              Admission Requirements
            </h4>

            <div className="space-y-4">
              <div>
                <div className="font-semibold text-lg">
                  10+2 (Higher Secondary)
                </div>
                <p className="text-gray-600">
                  From any recognized board in any stream
                </p>
              </div>

              <div>
                <div className="font-semibold text-lg">
                  Merit-Based Admission
                </div>
                <p className="text-gray-600">
                  Based on merit and university norms
                </p>
              </div>

              <div>
                <div className="font-semibold text-lg">Programme Start</div>
                <p className="text-gray-600">August 2025 onwards</p>
              </div>

              <div>
                <div className="font-semibold text-lg">Seats</div>
                <p className="text-gray-600">
                  120+ Seats including EWS quota as per norms
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-[#0a0e72]">
              Fee Structure
            </h3>
            <p className="text-center text-gray-600 mb-6">
              Per Semester Breakdown
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-4">
                  1. First Semester
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Tuition Fees</span>
                    <span className="font-medium">₹ 37,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Caution Money (Refundable)</span>
                    <span className="font-medium">₹ 10,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>University Enrolment</span>
                    <span className="font-medium">₹ 125</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-200 font-bold text-lg">
                    <span>Total (Semester 1)</span>
                    <span>₹ 47,625</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4">
                  2-10. Subsequent Semesters
                </h4>
                <div className="flex justify-between font-medium">
                  <span>Tuition Fees per Semester</span>
                  <span>₹ 37,500</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#0a0e72]">
          Career Opportunities
        </h2>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold mb-4">Your Future Awaits</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Graduates of this programme are prepared for diverse and rewarding
            careers in law, business, and public service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: Gavel,
              title: "Advocates & Legal Practitioners",
              desc: "Practice law in courts across India after bar registration",
            },
            {
              icon: Scale,
              title: "Judicial Services",
              desc: "Prepare for and join state judicial services and civil services",
            },
            {
              icon: TrendingUp,
              title: "Corporate Legal Advisors",
              desc: "Work as in-house counsel for corporations and MNCs",
            },
            {
              icon: Shield,
              title: "IPR Consultants",
              desc: "Specialize in intellectual property rights and legal-tech consulting",
            },
            {
              icon: FileText,
              title: "Legal Journalists & Analysts",
              desc: "Pursue careers in legal journalism, policy analysis, and think tanks",
            },
            {
              icon: GraduationCap,
              title: "Academicians & Researchers",
              desc: "Contribute to legal education and research at prestigious institutions",
            },
          ].map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
              >
                <div className="flex items-start gap-3">
                  <Icon className="text-[#0a0e72] mt-1" size={22} />
                  <div>
                    <h3 className="font-semibold mb-2">{c.title}</h3>
                    <p className="text-sm text-gray-600">{c.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PROGRAMME OUTCOMES */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#0a0e72]">
          Programme Outcomes
        </h2>

        <div className="bg-white border border-gray-200 rounded-xl p-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="text-2xl font-bold text-[#0a0e72] mr-4">1</span>
              <p>
                Comprehensive knowledge of legal principles, procedures, and
                justice systems
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-2xl font-bold text-[#0a0e72] mr-4">2</span>
              <p>
                Professional skills in legal writing, drafting, advocacy, and
                argumentation
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-2xl font-bold text-[#0a0e72] mr-4">3</span>
              <p>
                Integration of commerce, economics, and management with legal
                analysis
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-2xl font-bold text-[#0a0e72] mr-4">4</span>
              <p>
                Ethical standards and professional responsibility in legal
                practice
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-2xl font-bold text-[#0a0e72] mr-4">5</span>
              <p>
                Specialized expertise in IPR, Cyber Law, Environmental Law, and
                Human Rights
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gray-50 rounded-xl p-10 mb-20">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#0a0e72]">
          Student Testimonials
        </h2>

        <div className="max-w-3xl mx-auto text-center">
          <p className="italic text-lg mb-4">
            “{testimonials[currentSlide].quote}”
          </p>
          <div className="font-semibold">{testimonials[currentSlide].name}</div>
          <div className="text-sm text-gray-600">
            {testimonials[currentSlide].role}
          </div>

          <div className="flex justify-center gap-3 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 rounded-full ${
                  i === currentSlide ? "bg-[#0a0e72]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS OPEN */}
      <section className="bg-gradient-to-r from-[#0a0e72] to-blue-900 text-white rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Applications Open</h2>

        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Begin Your Legal Journey Today. Join the exclusive B.Com. LL.B.
          (Hons.) programme and become part of a legacy of legal excellence.
          Admissions for August 2025 batch are now open.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <button className="px-8 py-3 bg-white text-[#0a0e72] font-semibold rounded-lg hover:bg-gray-100 transition">
            <span className="flex items-center gap-2">
              <FileText size={18} />
              Apply Now
            </span>
          </button>
          <button className="px-8 py-3 border border-white rounded-lg hover:bg-white hover:text-[#0a0e72] transition">
            <span className="flex items-center gap-2">
              <FileText size={18} />
              Download Brochure
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-10">
          <div>
            <Mail size={24} className="mx-auto mb-2" />
            <h3 className="font-semibold mb-2">Contact Info</h3>
            <p>admissions@sol.edu</p>
          </div>
          <div>
            <Phone size={24} className="mx-auto mb-2" />
            <h3 className="font-semibold mb-2">Phone</h3>
            <p>+91 79-XXXX-XXXX</p>
          </div>
          <div>
            <MapPin size={24} className="mx-auto mb-2" />
            <h3 className="font-semibold mb-2">Location</h3>
            <p>Gujarat, India</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div>
            <div className="text-2xl font-bold">5 Years</div>
            <div className="text-sm">Duration</div>
          </div>
          <div>
            <div className="text-2xl font-bold">Full-Time</div>
            <div className="text-sm">Mode</div>
          </div>
          <div>
            <div className="text-2xl font-bold">English</div>
            <div className="text-sm">Medium</div>
          </div>
          <div>
            <div className="text-2xl font-bold">On Campus</div>
            <div className="text-sm">Campus</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BComLLBPage;
