import { useState } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { TopBarMenuItem, MainMenuItem } from "../types";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<number | null>(null);

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
        { name: "Research Repository", url: "#" },
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
      ],
    },
    {
      name: "Community",
      submenu: [
        { name: "NCC", url: "#" },
        { name: "NSS", url: "#" },
        { name: "Women Development Cell", url: "#" },
        { name: "EOC", url: "#" },
        { name: "Innovation", url: "#" },
      ],
    },
    {
      name: "Login",
      submenu: [
        { name: "Student Login", url: "#" },
        { name: "Faculty Login", url: "#" },
        { name: "Admin Login", url: "#" },
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
          { label: "About COE", link: "/about-coe" },
          { label: "School of Law", link: "/school-of-law" },
          { label: "Gujarat University", link: "/gujarat-university" },
          { label: "Mission, Vision & Core Values", link: "/mission-vision" },
          { label: "Administration", link: "/administration" },
        ],
        col2: [
          { label: "Co-ordinator Desk", link: "/coordinator-desk" },
          { label: "Legacy & Heritage", link: "/legacy-heritage" },
          { label: "Annual Reports", link: "/annual-reports" },
          { label: "News Letter", link: "/news-letter" },
        ],
      },
    },

    {
      name: "Academics",
      submenu: [
        { label: "B.Com. LL.B. (Hons.)", link: "#" },
        { label: "Academic Calendar", link: "#" },
        { label: "Faculty Profiles", link: "/faculties" },
        { label: "Curriculum Design", link: "#" },
      ],
    },

    { name: "Faculties", link: "/faculties" },

    {
      name: "Students",
      submenu: [
        { label: "Clubs", link: "/students/clubs" },
        { label: "Committees", link: "/students/committees" },
        { label: "Activities", link: "/students/activities" },
        { label: "Awards & Achievements", link: "/students/awards" },
        {
          label: "Student Support Services",
          link: "/students/support-services",
        },
      ],
    },

    {
      name: "Admissions",
      submenu: [
        { label: "Admission Overview", link: "#" },
        { label: "Application Procedure", link: "#" },
        { label: "Fee Structure", link: "#" },
        { label: "Prospectus", link: "#" },
      ],
    },
  ];

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="hidden lg:block bg-gray-100 border-b text-sm z-[60]">
        <div className="max-w-[1600px] mx-auto px-6 py-2 flex justify-end gap-6">
          {topBarMenus.map((menu, i) => (
            <div key={i} className="relative group">
              <span className="flex items-center gap-1 cursor-pointer font-medium">
                {menu.name}
                <ChevronDown className="w-3 h-3" />
              </span>

              <div className="absolute right-0 top-full pt-2 hidden group-hover:block">
                <div className="bg-white border rounded-lg shadow-xl w-64">
                  {menu.submenu.map((sub, idx) => (
                    <a
                      key={idx}
                      href={sub.url}
                      className="block px-4 py-2 hover:bg-[#0a0e72] hover:text-white whitespace-nowrap"
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

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-6">
          <div className="flex justify-between items-center h-14 lg:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="COE" className="h-9 lg:h-14" />
              <h1 className="hidden md:block font-semibold text-[#0a0e72]">
                Centre of Excellence
              </h1>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex gap-10">
              {mainMenus.map((item, index) => (
                <div key={index} className="relative group">
                  {item.link ? (
                    <Link to={item.link} className="font-semibold">
                      {item.name}
                    </Link>
                  ) : (
                    <span className="font-semibold cursor-pointer flex items-center gap-1">
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  )}

                  {item.submenu && (
                    <div className="absolute left-0 top-full pt-2 hidden group-hover:block">
                      <div className="bg-gray-50 border rounded-lg shadow-xl p-4 min-w-[520px]">
                        {Array.isArray(item.submenu) ? (
                          item.submenu.map((sub, i) =>
                            typeof sub === "string" ? (
                              <div
                                key={i}
                                className="px-4 py-2 rounded hover:bg-[#0a0e72] hover:text-white whitespace-nowrap"
                              >
                                {sub}
                              </div>
                            ) : (
                              <Link
                                key={i}
                                to={sub.link}
                                className="block px-4 py-2 rounded hover:bg-[#0a0e72] hover:text-white whitespace-nowrap"
                              >
                                {sub.label}
                              </Link>
                            )
                          )
                        ) : (
                          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                            {item.submenu.col1?.map((item, i) =>
                              typeof item === "string" ? (
                                <div
                                  key={`col1-${i}`}
                                  className="px-3 py-2 rounded hover:bg-[#0a0e72] hover:text-white whitespace-nowrap text-sm cursor-pointer"
                                >
                                  {item}
                                </div>
                              ) : (
                                <Link
                                  key={`col1-${i}`}
                                  to={item.link}
                                  className="block px-3 py-2 rounded hover:bg-[#0a0e72] hover:text-white whitespace-nowrap text-sm"
                                >
                                  {item.label}
                                </Link>
                              )
                            )}
                            {item.submenu.col2?.map((item, i) =>
                              typeof item === "string" ? (
                                <div
                                  key={`col2-${i}`}
                                  className="px-3 py-2 rounded hover:bg-[#0a0e72] hover:text-white whitespace-nowrap text-sm cursor-pointer"
                                >
                                  {item}
                                </div>
                              ) : (
                                <Link
                                  key={`col2-${i}`}
                                  to={item.link}
                                  className="block px-3 py-2 rounded hover:bg-[#0a0e72] hover:text-white whitespace-nowrap text-sm"
                                >
                                  {item.label}
                                </Link>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right */}
            <div className="flex items-center gap-4">
              <Search className="hidden lg:block w-5 h-5" />
              <a
                href="/apply"
                className="hidden lg:inline-flex px-4 py-2 bg-[#0a0e72] text-white rounded-md"
              >
                Apply Now
              </a>
              <button className="xl:hidden" onClick={() => setIsMenuOpen(true)}>
                <Menu />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
