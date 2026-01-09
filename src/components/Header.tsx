import { useState } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { TopBarMenuItem, MainMenuItem } from "../types";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<number | null>(null);
  const [showQuickAccess, setShowQuickAccess] = useState(false);

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
          "About COE",
          "School of Law",
          "Gujarat University",
          "Mission, Vision & Core Values",
          "Administration",
        ],
        col2: [
          "Co-ordinator Desk",
          "Legacy & Heritage",
          "Annual Reports",
          "News Letter",
        ],
      },
    },

    {
      name: "Academics",
      submenu: [
        "Courses Offered",
        "Academic Calendar",
        "Faculty Profiles",
        "Curriculum Design",
      ],
    },

    {
      name: "Faculties",
      link: "/faculties",
    },

    {
      name: "Students",
      submenu: ["Clubs", "Activities", "Awards", "Student Support Services"],
    },

    {
      name: "Admissions",
      submenu: [
        "Admission Overview",
        "Application Procedure",
        "Fee Structure",
        "Prospectus",
      ],
    },
  ];

  return (
    <>
      {/* ================= TOP BAR (DESKTOP ONLY) ================= */}
      <div className="hidden lg:block bg-gray-100 border-b text-sm relative z-[60]">
        <div className="max-w-[1600px] mx-auto px-6 py-2 flex justify-end gap-6">
          {topBarMenus.map((menu, i) => (
            <div key={i} className="relative group">
              <span className="flex items-center gap-1 cursor-pointer font-medium">
                {menu.name}
                <ChevronDown className="w-3 h-3" />
              </span>

              <div className="absolute right-0 top-full pt-2 hidden group-hover:block z-[70]">
                <div className="bg-white border rounded-lg shadow-xl w-64">
                  {menu.submenu.map((sub, idx) => (
                    <a
                      key={idx}
                      href={sub.url}
                      className="block px-4 py-2 hover:bg-[#0a0e72] hover:text-white"
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
        <div className="max-w-[1600px] mx-auto px-4 lg:px-6">
          <div className="flex justify-between items-center h-14 lg:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src="/logo.svg"
                alt="COE"
                className="h-9 lg:h-14 w-auto object-contain"
              />
              <h1 className="hidden md:block font-semibold text-[#0a0e72]">
                Centre of Excellence
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex gap-10">
              {mainMenus.map((item, index) => (
                <div key={index} className="relative group">
                  {item.link ? (
                    <Link
                      to={item.link}
                      className="flex items-center gap-1 font-semibold"
                    >
                      {item.name}
                      {item.submenu && <ChevronDown className="w-4 h-4" />}
                    </Link>
                  ) : (
                    <span className="flex items-center gap-1 font-semibold cursor-pointer">
                      {item.name}
                      {item.submenu && <ChevronDown className="w-4 h-4" />}
                    </span>
                  )}

                  {item.submenu && (
                    <div className="absolute left-0 top-full pt-2 hidden group-hover:block z-[60]">
                      <div
                        className={`bg-gray-50 border rounded-lg shadow-xl p-3 ${
                          item.column
                            ? "grid grid-cols-2 gap-x-6 w-[520px]"
                            : "w-60"
                        }`}
                      >
                        {item.column ? (
                          <>
                            <div>
                              {(
                                item.submenu as {
                                  col1: string[];
                                  col2: string[];
                                }
                              ).col1.map((sub: string, i: number) => (
                                <a
                                  key={i}
                                  href="#"
                                  className="block px-4 py-2 hover:bg-[#0a0e72] hover:text-white rounded"
                                >
                                  {sub}
                                </a>
                              ))}
                            </div>
                            <div>
                              {(
                                item.submenu as {
                                  col1: string[];
                                  col2: string[];
                                }
                              ).col2.map((sub: string, i: number) => (
                                <a
                                  key={i}
                                  href="#"
                                  className="block px-4 py-2 hover:bg-[#0a0e72] hover:text-white rounded"
                                >
                                  {sub}
                                </a>
                              ))}
                            </div>
                          </>
                        ) : (
                          (item.submenu as string[]).map(
                            (sub: string, i: number) => (
                              <a
                                key={i}
                                href="#"
                                className="block px-4 py-2 hover:bg-[#0a0e72] hover:text-white rounded"
                              >
                                {sub}
                              </a>
                            )
                          )
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
                className="hidden lg:inline-flex px-4 py-2 bg-[#0a0e72] text-white rounded-md"
              >
                Apply Now
              </a>
              <button
                className="xl:hidden p-2"
                onClick={() => setIsMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[80] bg-white xl:hidden overflow-y-auto">
          <div className="p-4 space-y-4">
            {/* Header */}
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-[#0a0e72]">Menu</span>
              <button onClick={() => setIsMenuOpen(false)}>
                <X />
              </button>
            </div>

            {/* Quick Access (Collapsed) */}
            <div className="border-b">
              <button
                onClick={() => setShowQuickAccess(!showQuickAccess)}
                className="w-full flex justify-between items-center py-3 font-medium"
              >
                Quick Access
                <ChevronDown
                  className={`w-4 h-4 transition ${
                    showQuickAccess ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showQuickAccess && (
                <div className="pb-3 space-y-4">
                  {topBarMenus.map((menu, i) => (
                    <div key={i}>
                      <p className="text-sm font-semibold text-gray-700">
                        {menu.name}
                      </p>
                      <div className="pl-4 mt-1 space-y-1">
                        {menu.submenu.map((sub, idx) => (
                          <a
                            key={idx}
                            href={sub.url}
                            className="block text-sm text-gray-600"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Main Menu */}
            {mainMenus.map((item, index) => (
              <div key={index} className="border-b">
                <div>
                  {item.link && !item.submenu ? (
                    <Link
                      to={item.link}
                      className="w-full flex justify-between py-3 text-[15px] font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                      {item.submenu && <ChevronDown className="w-4 h-4" />}
                    </Link>
                  ) : (
                    <div>
                      <button
                        className="w-full flex justify-between py-3 text-[15px] font-medium"
                        onClick={() =>
                          setActiveMobileMenu(
                            activeMobileMenu === index ? null : index
                          )
                        }
                      >
                        {item.name}
                        {item.submenu && <ChevronDown className="w-4 h-4" />}
                      </button>

                      {item.submenu && activeMobileMenu === index && (
                        <div className="pl-4 pb-3 space-y-2">
                          {item.column ? (
                            <>
                              {(
                                item.submenu as {
                                  col1: string[];
                                  col2: string[];
                                }
                              ).col1.map((s: string, i: number) => (
                                <a key={i} href="#" className="block text-sm">
                                  {s}
                                </a>
                              ))}
                              {(
                                item.submenu as {
                                  col1: string[];
                                  col2: string[];
                                }
                              ).col2.map((s: string, i: number) => (
                                <a key={i} href="#" className="block text-sm">
                                  {s}
                                </a>
                              ))}
                            </>
                          ) : (
                            (item.submenu as string[]).map((s, i) => (
                              <a key={i} href="#" className="block text-sm">
                                {s}
                              </a>
                            ))
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="pt-4">
              <a
                href="/apply"
                className="block text-center bg-[#0a0e72] text-white py-3 rounded-md"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
