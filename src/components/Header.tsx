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

            {/* Right */}
            <div className="flex items-center gap-4">
              <Search className="hidden lg:block w-5 h-5" />
              <button className="xl:hidden" onClick={() => setIsMenuOpen(true)}>
                <Menu />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-black/40 xl:hidden">
          <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-xl p-4 overflow-y-auto">
            <div className="flex justify-end mb-4">
              <button onClick={() => setIsMenuOpen(false)}>
                <X />
              </button>
            </div>

            <nav className="space-y-4">
              {mainMenus.map((menu, index) => (
                <div key={index}>
                  {menu.submenu ? (
                    <>
                      <button
                        className="flex w-full justify-between font-semibold py-2"
                        onClick={() =>
                          setActiveMobileMenu(
                            activeMobileMenu === index ? null : index,
                          )
                        }
                      >
                        {menu.name}
                        <ChevronDown
                          className={`w-4 h-4 ${
                            activeMobileMenu === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {activeMobileMenu === index && (
                        <div className="ml-3 space-y-2">
                          {(Array.isArray(menu.submenu)
                            ? menu.submenu
                            : [...menu.submenu.col1, ...menu.submenu.col2]
                          ).map((sub, i) =>
                            typeof sub === "object" && sub.link ? (
                              <Link
                                key={i}
                                to={sub.link}
                                onClick={() => setIsMenuOpen(false)}
                                className="block text-sm text-gray-700"
                              >
                                {sub.label}
                              </Link>
                            ) : null,
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    menu.link && (
                      <Link
                        to={menu.link}
                        onClick={() => setIsMenuOpen(false)}
                        className="block font-semibold py-2"
                      >
                        {menu.name}
                      </Link>
                    )
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
