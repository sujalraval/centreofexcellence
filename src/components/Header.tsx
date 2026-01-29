import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
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
        { name: "IQAC", url: "https://iqac.gujaratuniversity.ac.in" },
        { name: "NAAC", url: "https://iqac.gujaratuniversity.ac.in/naac" },
        { name: "ARIIA", url: "https://iqac.gujaratuniversity.ac.in/Ariia" },
        { name: "NIRF", url: "https://iqac.gujaratuniversity.ac.in/nirf" },
        { name: "GSIRF", url: "https://iqac.gujaratuniversity.ac.in/gsirf" },
        { name: "ISO Certification", url: "https://iqac.gujaratuniversity.ac.in/iso" },
        { name: "Audit Reports", url: "https://iqac.gujaratuniversity.ac.in/audit" },
        { name: "Certificate", url: "https://iqac.gujaratuniversity.ac.in/certificate" },
      ],
    },
    {
      name: "Community",
      submenu: [
        { name: "NCC", url: "https://www.gujaratuniversity.ac.in/ncc" },
        { name: "NSS", url: "https://www.gujaratuniversity.ac.in/nss" },
        { name: "Women Development Cell", url: "https://wdc.gujaratuniversity.ac.in/" },
        { name: "EOC", url: "https://www.gujaratuniversity.ac.in/eoc" },
      ],
    },
    {
      name: "Cell",
      submenu: [
        { name: "Innovation", url: "https://gusec.edu.in/" },
        { name: "Publication Cell", url: "https://www.gujaratuniversity.ac.in/publicationcell" },
        { name: "RTI Cell", url: "https://www.gujaratuniversity.ac.in/rticell" },
        { name: "Placement Cell", url: "http://gupc.gujaratuniversity.ac.in/" },
        { name: "SC/ST Cell", url: "http://sctcomplaint.gujaratuniversity.ac.in/" },
        { name: "Anti Ragging Cell", url: "https://www.gujaratuniversity.ac.in/antiragging" },
      ],
    },
    {
      name: "Login",
      submenu: [
        { name: "Student Login", url: "https://lms.coesolgu.edu.in" },
        { name: "Faculty Login", url: "https://admin.coesolgu.edu.in" },
        { name: "Admin Login", url: "https://admin.coesolgu.edu.in" },
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
          { label: "Moto", link: "/moto" },
          { label: "News Letter", link: "https://www.coesolgu.edu.in/news-letter" },
        ],
      },
    },
    {
      name: "Academics",
      submenu: [
        { label: "B.Com. LL.B. (Hons.)", link: "/academics/bcom-llb" },
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
      <div className="hidden lg:block bg-gray-100 border-b text-sm">
        <div className="max-w-[1600px] mx-auto px-6 py-2 flex justify-end gap-6">
          {topBarMenus.map((menu, i) => (
            <div key={i} className="relative group">
              <span className="flex items-center gap-1 cursor-pointer font-medium">
                {menu.name}
                <ChevronDown className="w-3 h-3" />
              </span>

              <div className="absolute right-0 top-full pt-3 hidden group-hover:block z-[60]">
                <div className="bg-white border rounded-xl shadow-2xl w-64 py-2">
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
                    <span className="flex items-center gap-1 font-semibold cursor-pointer">
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  )}

                  {item.submenu && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full pt-2 hidden group-hover:block">
                      <div className="bg-white border rounded-lg shadow-xl p-4 w-max max-w-[90vw] overflow-x-hidden">
                        {Array.isArray(item.submenu) ? (
                          item.submenu.map((sub, i) => {
                            // Type guard to ensure sub is a SubmenuObjectItem
                            if (
                              typeof sub === "object" &&
                              sub !== null &&
                              "link" in sub &&
                              "label" in sub
                            ) {
                              const submenuItem = sub as {
                                label: string;
                                link: string;
                              };
                              return (
                                <Link
                                  key={i}
                                  to={submenuItem.link}
                                  className="block px-4 py-2 rounded hover:bg-[#0a0e72] hover:text-white whitespace-nowrap"
                                >
                                  {submenuItem.label}
                                </Link>
                              );
                            }
                            return null;
                          })
                        ) : (
                          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                            {[...item.submenu.col1, ...item.submenu.col2].map(
                              (sub, i) => {
                                // Type guard to ensure sub is a SubmenuObjectItem
                                if (
                                  typeof sub === "object" &&
                                  sub !== null &&
                                  "link" in sub &&
                                  "label" in sub
                                ) {
                                  const submenuItem = sub as {
                                    label: string;
                                    link: string;
                                  };
                                  return (
                                    <Link
                                      key={i}
                                      to={submenuItem.link}
                                      className="block px-4 py-2 rounded hover:bg-[#0a0e72] hover:text-white whitespace-nowrap"
                                    >
                                      {submenuItem.label}
                                    </Link>
                                  );
                                }
                                return null;
                              }
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
                            activeMobileMenu === index ? null : index
                          )
                        }
                      >
                        {menu.name}
                        <ChevronDown
                          className={`w-4 h-4 transition ${
                            activeMobileMenu === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {activeMobileMenu === index && (
                        <div className="ml-3 space-y-2">
                          {(Array.isArray(menu.submenu)
                            ? menu.submenu
                            : [...menu.submenu.col1, ...menu.submenu.col2]
                          ).map((sub, i) => {
                            if (
                              typeof sub === "object" &&
                              sub !== null &&
                              "link" in sub &&
                              "label" in sub
                            ) {
                              const submenuItem = sub as {
                                label: string;
                                link: string;
                              };
                              return (
                                <Link
                                  key={i}
                                  to={submenuItem.link}
                                  onClick={() => setIsMenuOpen(false)}
                                  className="block text-sm text-gray-700"
                                >
                                  {submenuItem.label}
                                </Link>
                              );
                            }
                            return null;
                          })}
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
