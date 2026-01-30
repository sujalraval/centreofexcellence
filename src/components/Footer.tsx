import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#F9FAFB] border-t">
      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* LEFT – Identity / Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <img src="/logo.svg" alt="COE Logo" className="h-14" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Centre of Excellence
                </h3>
                <p className="text-sm text-gray-500">
                  University School of Law
                </p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed max-w-md">
              A premier institution for integrated legal education with
              specialization in Intellectual Property Rights, recognized by the
              Bar Council of India.
            </p>

            {/* Social */}
            <div className="flex gap-4 pt-2">
              {[Facebook, Linkedin, Instagram, Youtube, Twitter].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-gray-500 hover:text-gray-900 transition"
                  >
                    <Icon size={20} />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* CENTER – Navigation */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-10">
            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 tracking-wide mb-5">
                QUICK LINKS
              </h4>
              <ul className="space-y-3 text-sm text-gray-600">
                {["Academics", "Placements", "IQAC", "Library", "Alumni"].map(
                  (item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 hover:text-gray-900 transition group"
                      >
                        {item}
                        <ArrowRight
                          size={14}
                          className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition"
                        />
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Portals */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 tracking-wide mb-5">
                WEB PORTALS
              </h4>
              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  "Student Portal",
                  "LMS",
                  "Faculty Portal",
                  "Admin Portal",
                  "Online Admission",
                  "E-Library",
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 hover:text-gray-900 transition group"
                    >
                      {item}
                      <ArrowRight
                        size={14}
                        className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT – Trust / Contact */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-sm font-semibold text-gray-900 tracking-wide">
              CONTACT
            </h4>

            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex gap-3">
                <MapPin size={18} />
                <p>
                  Gujarat University Campus <br />
                  Ahmedabad – 380009
                </p>
              </div>

              <div className="flex gap-3 hover:text-gray-900 transition">
                <Phone size={18} />
                <span>+91 97249 70166</span>
              </div>

              <div className="flex gap-3 hover:text-gray-900 transition break-all">
                <Mail size={18} />
                <span>centreofexcellencegu@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          {/* Left */}
          <span>
            © {new Date().getFullYear()} Centre of Excellence, Gujarat
            University
          </span>

          {/* Right – Visitor */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs border rounded-full bg-gray-50 shadow-sm">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
            Visitors: 12,458
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
