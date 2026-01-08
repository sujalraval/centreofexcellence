// src/components/Footer.jsx
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Admissions", url: "/admissions" },
    { name: "Academics", url: "/academics" },
    { name: "Research", url: "/research" },
    { name: "Placements", url: "/placements" },
    { name: "IQAC", url: "/iqac" },
    { name: "Library", url: "/library" },
    { name: "Hostel", url: "/hostel" },
    { name: "Alumni", url: "/alumni" },
  ];

  const policies = [
    { name: "Privacy Policy", url: "/privacy" },
    { name: "Refund Policy", url: "/accessibility" },
    { name: "Terms & Conditions", url: "/terms" },
    { name: "Disclaimer", url: "/rti" },
    { name: "Grievance Redressal", url: "/grievance" },
  ];

  const portals = [
    { name: "Student Portal (SIS)", url: "https://lms.coesolgu.edu.in/" },
    { name: "Learning Management System", url: "https://lms.coesolgu.edu.in/" },
    { name: "Faculty Portal", url: "https://admin.coesolgu.edu.in/" },
    { name: "Admin Portal", url: "https://admin.coesolgu.edu.in/" },
    { name: "Online Admission", url: "https://gcas.gujgov.edu.in/" },
    { name: "E-Library", url: "https://Library.coesolgu.edu.in/" },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, url: "#", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, url: "#", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, url: "#", label: "LinkedIn" },
    { icon: <Instagram className="w-5 h-5" />, url: "#", label: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, url: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-gu-[#0a0e72e6] font-semibold text-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-3">
                <div className="w-8 h-8 bg-gu-primary rounded">
                  <img
                    src="/logo.svg"
                    alt="Centre of Excellence Logo"
                    className="h-11 w-auto"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Centre of Excellence</h3>
                <p className="text-sm text-[#0a0e72e6]">
                  University School of Law
                </p>
              </div>
            </div>

            <p className="text-[#0a0e72e6] mb-6 font- text-justify">
              Premier institution for integrated legal education with
              specialization in Intellectual Property Rights, recognized by Bar
              Council of India.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.label}
                  className="w-10 h-10 bg-[#0a0e72e6] rounded-full flex items-center justify-center hover:underline transition"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-[#0a0e72e6] hover:underline transition flex items-center"
                  >
                    <span className="w-2 h-2 bg-gu-[#0a0e72e6] rounded-full mr-3"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies & Portals */}
          <div>
            <h4 className="text-lg font-bold mb-6">Policies & Portals</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold mb-3 text-[#0a0e72e6]">
                  Policies
                </h5>
                <ul className="space-y-2">
                  {policies.map((policy, index) => (
                    <li key={index}>
                      <a
                        href={policy.url}
                        className="text-[#0a0e72e6] hover:text-[#0a0e72e6] hover:underline text-sm"
                      >
                        {policy.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-3 text-[#0a0e72e6]">
                  Web Portals
                </h5>
                <ul className="space-y-2">
                  {portals.map((portal, index) => (
                    <li key={index}>
                      <a
                        href={portal.url}
                        className="text-[#0a0e72e6] hover:text-[#0a0e72e6] hover:underline text-sm"
                      >
                        {portal.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-gu-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[#0a0e72e6] text-justify">
                    Centre of Excellence
                    <br />
                    University School of Law
                    <br />
                    Gujarat University Campus
                    <br />
                    Ahmedabad - 380009, Gujarat
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="w-5 h-5 text-gu-primary mr-3" />
                <a
                  href="tel:+917926123456"
                  className="text-[#0a0e72e6] hover:text-[#0a0e72e6] hover:underline"
                >
                  +91 97249 70166
                </a>
              </div>

              <div className="flex items-center">
                <Mail className="w-5 h-5 text-gu-primary mr-3" />
                <a
                  href="mailto:centreofexcellencegu@gmail.com"
                  className="text-[#0a0e72e6] hover:text-[#0a0e72e6] hover:underline"
                >
                  centreofexcellencegu@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-[#0a0e72e6] text-sm">
                © {new Date().getFullYear()} Centre of Excellence, Gujarat
                University. All rights reserved.
              </span>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center text-sm text-[#0a0e72e6]">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Visitors: 12,458
              </div>

              <div className="flex space-x-4"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
