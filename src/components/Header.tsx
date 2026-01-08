import { useState } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* ---------- TOP BAR MENUS ---------- */
  const topBarMenus = [
    {
      name: "Portals",
      submenu: [
        "Student Portal",
        "LMS",
        "Admission Portal",
        "Alumni Portal",
        "Research Repository",
        "Feedback Portal",
        "ERP Dashboard",
        "e-Notice Board",
      ],
    },
    {
      name: "Info",
      submenu: [
        "Maps & Directions",
        "Directory",
        "Contact Us",
        "Downloadable Forms",
        "Holidays",
        "Jobs",
        "Tenders",
        "RTI",
        "Roster Policy",
        "Accessibility & Privacy",
        "Website Updates",
        "Feedback Form",
      ],
    },
    {
      name: "News",
      submenu: [
        "News & Announcements",
        "Events Calendar",
        "Event Reports",
        "College Magazines",
        "Newsletters",
        "Gallery",
        "Press Releases",
        "Media Coverage",
      ],
    },
    {
      name: "Quality",
      submenu: [
        "IQAC",
        "NAAC",
        "NIRF",
        "GSIRF",
        "ISO Certification",
        "Audit Reports",
        "Quality Policies",
        "Feedback Reports",
        "KPI Dashboard",
      ],
    },
    {
      name: "Facilities",
      submenu: [
        "Campus Overview",
        "Library",
        "Computer Centre",
        "Language Laboratory",
        "Science Laboratories",
        "Auditorium",
        "Sports & Gymnasium",
        "Girls Hostel",
        "Canteen",
        "Health Centre",
        "Green Campus",
        "Wi-Fi",
        "Innovation Cell",
        "R&D Cell",
        "Accessibility Resources",
      ],
    },
    {
      name: "Research",
      submenu: [
        "Research Policy",
        "Publications & Journals",
        "Patents & Projects",
        "Collaborations & MoUs",
        "Global Outreach",
        "Social Entrepreneurship",
        "Community Outreach & Extension",
      ],
    },

    /* ---------- MOBILE APP ---------- */
    {
      name: "Mobile App",
      submenu: ["Download Android App", "Download iOS App"],
    },

    /* ---------- LOGIN ---------- */
    {
      name: "Login",
      submenu: ["Student Login", "Faculty Login", "Admin / Dashboard Login"],
    },
  ];

  /* ---------- MAIN HEADER MENUS (UNCHANGED) ---------- */
  const mainMenus = [
    { name: "Home", link: "/" },
    {
      name: "About",
      column: true,
      submenu: [
        "About COE",
        "School of Law",
        "Gujarat University",
        "Mission, Vision & Core Values",
        "Motto & Crest",
        "Administration",
        "Governance",
        "Co-ordinator Desk",
        "Legacy & Heritage",
        "Annual Reports",
        "News Letter",
        "Institutional Distinctiveness",
        "Policies & Procedures",
      ],
    },
    {
      name: "Academics",
      submenu: [
        "Courses Offered",
        "Academic Calendar",
        "Curriculum Design",
        "Teaching-Learning Innovations",
        "Faculty Profiles",
        "LMS",
        "Institutional Repository",
        "Feedback & Analysis",
      ],
    },
    {
      name: "Students",
      submenu: [
        "Clubs",
        "Co-Curricular Activities",
        "Committees",
        "Activities",
        "Awards",
        "Student Support Services",
        "College Handbook",
        "Parents’ Corner",
        "Student Feedback",
        "Surveys & Polls",
      ],
    },
    {
      name: "Outreach",
      submenu: [
        "NSS",
        "NCC",
        "UBA",
        "Community Outreach",
        "Social Entrepreneurship",
        "Capacity Building Workshops",
        "Gender Equity",
        "Environment Awareness",
        "SDG Mapping",
      ],
    },
    {
      name: "Admissions",
      submenu: [
        "Admission Overview",
        "Bulletin of Information",
        "Distribution of Seats",
        "Application Procedure",
        "Admission Process",
        "Fee Structure",
        "Cut-off Lists",
        "Admission Data",
        "Prospectus",
        "Orientation Programme",
        "Online Admission Portal",
      ],
    },
  ];

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="hidden lg:block bg-gray-100 border-b text-sm relative z-[60]">
        <div className="max-w-[1600px] mx-auto px-6 h-10 flex items-center justify-end gap-6">
          {topBarMenus.map((menu, i) => (
            <div key={i} className="relative group">
              <span className="flex items-center gap-1 text-gray-700 hover:text-[#0a0e72] cursor-pointer font-medium">
                {menu.name}
                <ChevronDown className="w-3 h-3" />
              </span>

              <div className="absolute right-0 top-full pt-2 hidden group-hover:block z-[70]">
                <div className="bg-white border rounded-lg shadow-xl w-64 max-h-[70vh] overflow-y-auto">
                  {menu.submenu.map((sub, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0a0e72] hover:text-white"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MAIN HEADER ================= */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="COE" className="h-12" />
              <div className="hidden md:block">
                <h1 className="text-sm font-semibold text-[#0a0e72]">
                  Centre of Excellence
                </h1>
                <p className="text-xs text-gray-600">
                  School of Law, Gujarat University
                </p>
              </div>
            </div>

            <nav className="hidden xl:flex items-center gap-10">
              {mainMenus.map((item, index) => (
                <div key={index} className="relative group">
                  <span className="flex items-center gap-1 font-semibold text-gray-800 hover:text-[#0a0e72] cursor-pointer">
                    {item.name}
                    {item.submenu && <ChevronDown className="w-4 h-4" />}
                  </span>

                  {item.submenu && (
                    <div className="absolute left-0 top-full pt-2 hidden group-hover:block z-[60]">
                      <div
                        className={`bg-gray-50 border rounded-lg shadow-xl p-3 ${
                          item.column
                            ? "grid grid-cols-2 gap-x-6 w-[480px]"
                            : "w-60"
                        }`}
                      >
                        {item.submenu.map((sub, idx) => (
                          <a
                            key={idx}
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0a0e72] hover:text-white rounded"
                          >
                            {sub}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Search className="hidden lg:block w-5 h-5 cursor-pointer" />
              <a
                href="/apply"
                className="hidden lg:inline-flex px-4 py-2 text-sm bg-[#0a0e72] text-white rounded-md hover:bg-[#070b5a]"
              >
                Apply Now
              </a>
              <button
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
