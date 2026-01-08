import { useState } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { TopBarMenuItem, MainMenuItem } from "../types";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* ---------- TOP BAR MENUS ---------- */
  const topBarMenus: TopBarMenuItem[] = [
    {
      name: "Portals",
      submenu: [
        { name: "Student Portal", url: "https://lms.coesolgu.edu.in" },
        { name: "LMS", url: "https://lms.coesolgu.edu.in/" },
        {
          name: "Admission Portal",
          url: "https://www.gujaratuniversity.ac.in/admissions",
        },
        { name: "Research Repository", url: "https://ir.coesolgu.edu.ins" },
        { name: "Feedback Portal", url: "#" },
        { name: "e-Notice Board", url: "#" },
      ],
    },
    {
      name: "Quality",
      submenu: [
        { name: "IQAC", url: "#" },
        { name: "NAAC", url: "#" },
        { name: "NIRF", url: "#" },
        { name: "GSIRF", url: "#" },
        { name: "ISO Certification", url: "#" },
        { name: "Audit Reports", url: "#" },
        { name: "Quality Policies", url: "#" },
        { name: "Feedback Reports", url: "#" },
        { name: "KPI Dashboard", url: "#" },
      ],
    },
    {
      name: "Research Journal",
      submenu: [
        { name: "Research Policy", url: "#" },
        { name: "Publications & Journals", url: "#" },
        { name: "Patents & Projects", url: "#" },
        { name: "Collaborations & MoUs", url: "#" },
        { name: "Global Outreach", url: "#" },
        { name: "Community Outreach & Extension", url: "#" },
      ],
    },

    /* ✅ NEW COMMUNITY MENU */
    {
      name: "Community",
      submenu: [
        { name: "NCC", url: "#" },
        { name: "NSS", url: "#" },
        {
          name: "Women Development Cell",
          url: "https://wdc.gujaratuniversity.ac.in/",
        },
        {
          name: "EOC",
          url: "https://www.gujaratuniversity.ac.in/eoc",
        },
        {
          name: "Innovation",
          url: "https://gusec.edu.in/",
        },
      ],
    },

    {
      name: "Mobile App",
      submenu: [
        { name: "Download Android App", url: "#" },
        { name: "Download iOS App", url: "#" },
      ],
    },
    {
      name: "Login",
      submenu: [
        { name: "Student Login", url: "https://lms.coesolgu.edu.in" },
        { name: "Faculty Login", url: "https://admin.coesolgu.edu.in" },
        {
          name: "Admin / Dashboard Login",
          url: "https://admin.coesolgu.edu.in",
        },
      ],
    },
  ];

  /* ---------- MAIN MENUS ---------- */
  const mainMenus: MainMenuItem[] = [
    { name: "Home", link: "/" },

    {
      name: "About",
      column: true,
      submenu: {
        col1: [
          "About COE",
          "School of Law",
          "Gujarat University",
          "Mission, Vision & Core Values",
          "Administration",
          "Governance (Affiliation, Recognition, Accreditation, Ranking, Rating)",
        ],
        col2: [
          "Co-ordinator Desk",
          "Legacy & Heritage",
          "Annual Reports",
          "News Letter",
          "Institutional Distinctiveness",
          "Policies & Procedures",
        ],
      },
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
        <div className="max-w-[1600px] mx-auto px-6 py-2 flex justify-end gap-6">
          {topBarMenus.map((menu, i) => (
            <div key={i} className="relative group">
              <span className="flex items-center gap-1 text-gray-700 hover:text-[#0a0e72] cursor-pointer font-medium">
                {menu.name}
                <ChevronDown className="w-3 h-3" />
              </span>

              <div className="absolute right-0 top-full pt-2 hidden group-hover:block z-[70]">
                <div className="bg-white border rounded-lg shadow-xl w-64">
                  {menu.submenu.map((sub, idx) => (
                    <a
                      key={idx}
                      href={sub.url}
                      className="block px-4 py-2 text-sm hover:bg-[#0a0e72] hover:text-white"
                    >
                      {sub.name}
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
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="COE" className="h-16" />
              <div className="hidden md:block">
                <h1 className="text-lg font-semibold text-[#0a0e72]">
                  Centre of Excellence
                </h1>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden xl:flex gap-10">
              {mainMenus.map((item, index) => (
                <div key={index} className="relative group">
                  <span className="flex items-center gap-1 font-semibold hover:text-[#0a0e72] cursor-pointer">
                    {item.name}
                    {item.submenu && <ChevronDown className="w-4 h-4" />}
                  </span>

                  {item.submenu && (
                    <div className="absolute left-0 top-full pt-2 hidden group-hover:block z-[60]">
                      <div
                        className={`bg-gray-50 border rounded-lg shadow-xl p-3 ${
                          item.column
                            ? "grid grid-cols-2 gap-x-6 w-[540px]"
                            : "w-60"
                        }`}
                      >
                        {item.column ? (
                          <>
                            <div>
                              {(item.submenu as { col1: string[]; col2: string[] }).col1.map((sub: string, idx: number) => (
                                <a
                                  key={idx}
                                  href="#"
                                  className="block px-4 py-2 text-sm hover:bg-[#0a0e72] hover:text-white rounded"
                                >
                                  {sub}
                                </a>
                              ))}
                            </div>
                            <div>
                              {(item.submenu as { col1: string[]; col2: string[] }).col2.map((sub: string, idx: number) => (
                                <a
                                  key={idx}
                                  href="#"
                                  className="block px-4 py-2 text-sm hover:bg-[#0a0e72] hover:text-white rounded"
                                >
                                  {sub}
                                </a>
                              ))}
                            </div>
                          </>
                        ) : (
                          (Array.isArray(item.submenu) ? item.submenu : []).map((sub: string, idx: number) => (
                            <a
                              key={idx}
                              href="#"
                              className="block px-4 py-2 text-sm hover:bg-[#0a0e72] hover:text-white rounded"
                            >
                              {sub}
                            </a>
                          ))
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right */}
            <div className="flex items-center gap-4">
              <Search className="hidden lg:block w-5 h-5 cursor-pointer" />
              <a
                href="/apply"
                className="hidden lg:inline-flex px-4 py-2 bg-[#0a0e72] text-white rounded-md hover:bg-[#070b5a]"
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
