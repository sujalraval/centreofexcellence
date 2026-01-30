import { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { TopBarMenuItem, MainMenuItem } from "../types";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<number | null>(null);
  const [activeTopBarMenu, setActiveTopBarMenu] = useState<number | null>(null);

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
        {
          name: "ISO Certification",
          url: "https://iqac.gujaratuniversity.ac.in/iso",
        },
        {
          name: "Audit Reports",
          url: "https://iqac.gujaratuniversity.ac.in/audit",
        },
        {
          name: "Certificate",
          url: "https://iqac.gujaratuniversity.ac.in/certificate",
        },
      ],
    },
    {
      name: "Community",
      submenu: [
        { name: "NCC", url: "https://www.gujaratuniversity.ac.in/ncc" },
        { name: "NSS", url: "https://www.gujaratuniversity.ac.in/nss" },
        {
          name: "Women Development Cell",
          url: "https://wdc.gujaratuniversity.ac.in/",
        },
        { name: "EOC", url: "https://www.gujaratuniversity.ac.in/eoc" },
      ],
    },
    {
      name: "Cell",
      submenu: [
        { name: "Innovation", url: "https://gusec.edu.in/" },
        {
          name: "Publication Cell",
          url: "https://www.gujaratuniversity.ac.in/publicationcell",
        },
        {
          name: "RTI Cell",
          url: "https://www.gujaratuniversity.ac.in/rticell",
        },
        { name: "Placement Cell", url: "http://gupc.gujaratuniversity.ac.in/" },
        {
          name: "SC/ST Cell",
          url: "http://sctcomplaint.gujaratuniversity.ac.in/",
        },
        {
          name: "Anti Ragging Cell",
          url: "https://www.gujaratuniversity.ac.in/antiragging",
        },
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
          {
            label: "News Letter",
            link: "https://www.coesolgu.edu.in/news-letter",
          },
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

  // Close mobile menu when clicking outside
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setActiveMobileMenu(null);
    setActiveTopBarMenu(null);
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
          {/* DESKTOP HEADER */}
          <div className="hidden lg:grid grid-cols-[auto_1fr] items-center">
            {/* LOGO */}
            <div className="row-span-2 flex items-center gap-3 py-3 pr-6">
              <img src="/logo.svg" alt="COE" className="h-20 sm:h-24 lg:h-28 w-auto" />
              <div>
                <div className="text-[#0a0e72] font-bold text-base sm:text-lg lg:text-xl">
                  Centre of Excellence
                </div>
                <div className="text-gray-600 text-xs sm:text-sm">Gujarat University</div>
              </div>
            </div>

            {/* TOP BAR */}
            <div className="flex justify-end gap-4 sm:gap-6 text-xs sm:text-sm py-2 border-b">
              {topBarMenus.map((menu, i) => (
                <div key={i} className="relative group">
                  <span className="flex items-center gap-1 font-medium cursor-pointer hover:text-[#0a0e72] transition-colors">
                    {menu.name}
                    <ChevronDown className="w-3 h-3" />
                  </span>
                  <div className="absolute right-0 top-full pt-2 hidden group-hover:block z-50">
                    <div className="bg-white border rounded-lg shadow-xl w-48 sm:w-64 py-2">
                      {menu.submenu.map((sub, idx) => (
                        <a
                          key={idx}
                          href={sub.url}
                          className="block px-4 py-2 text-sm hover:bg-[#0a0e72] hover:text-white transition-colors"
                          target={sub.url.startsWith('http') ? "_blank" : "_self"}
                          rel={sub.url.startsWith('http') ? "noopener noreferrer" : ""}
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* MAIN NAV */}
            <div className="flex justify-end items-center gap-6 sm:gap-8 lg:gap-10 py-4">
              <nav className="hidden xl:flex gap-6 lg:gap-8">
                {mainMenus.map((item, index) => (
                  <div key={index} className="relative group">
                    {item.link ? (
                      <Link 
                        to={item.link} 
                        className="font-semibold hover:text-[#0a0e72] transition-colors"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span className="flex items-center gap-1 font-semibold cursor-pointer hover:text-[#0a0e72] transition-colors">
                        {item.name}
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    )}

                    {item.submenu && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 hidden group-hover:block z-50">
                        <div className="bg-white border rounded-xl shadow-2xl p-4 sm:p-5">
                          {Array.isArray(item.submenu) ? (
                            <div className="min-w-[200px] sm:min-w-[220px]">
                              {item.submenu.map((sub, i) => (
                                typeof sub === 'string' ? (
                                  <span
                                    key={i}
                                    className="block px-4 py-2 rounded text-gray-500 text-sm"
                                  >
                                    {sub}
                                  </span>
                                ) : (
                                  <Link
                                    key={i}
                                    to={sub.link}
                                    className="block px-4 py-2 rounded hover:bg-[#0a0e72] hover:text-white transition-colors text-sm"
                                  >
                                    {sub.label}
                                  </Link>
                                )
                              ))}
                            </div>
                          ) : (
                            (() => {
                              const all = [
                                ...item.submenu.col1,
                                ...item.submenu.col2,
                              ];
                              const left = all.slice(0, 4);
                              const right = all.slice(4);

                              return (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-10 min-w-[300px] sm:min-w-[440px]">
                                  <div>
                                    {left.map((sub, i) => (
                                      typeof sub === 'string' ? (
                                        <span
                                          key={i}
                                          className="block px-4 py-2 rounded text-gray-500 text-sm"
                                        >
                                          {sub}
                                        </span>
                                      ) : (
                                        <Link
                                          key={i}
                                          to={sub.link}
                                          className="block px-4 py-2 rounded hover:bg-[#0a0e72] hover:text-white transition-colors text-sm"
                                        >
                                          {sub.label}
                                        </Link>
                                      )
                                    ))}
                                  </div>
                                  <div>
                                    {right.map((sub, i) => (
                                      typeof sub === 'string' ? (
                                        <span
                                          key={i}
                                          className="block px-4 py-2 rounded text-gray-500 text-sm"
                                        >
                                          {sub}
                                        </span>
                                      ) : (
                                        <Link
                                          key={i}
                                          to={sub.link}
                                          className="block px-4 py-2 rounded hover:bg-[#0a0e72] hover:text-white transition-colors text-sm"
                                        >
                                          {sub.label}
                                        </Link>
                                      )
                                    ))}
                                  </div>
                                </div>
                              );
                            })()
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              <a
                href="/apply"
                className="hidden sm:inline-flex px-3 py-2 sm:px-4 sm:py-2 bg-[#0a0e72] text-white rounded-md hover:bg-[#080b5a] transition-colors text-sm sm:text-base"
              >
                Apply Now
              </a>

              <button 
                className="xl:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          {/* MOBILE HEADER */}
          <div className="lg:hidden flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="COE" className="h-16 w-auto" />
              <div>
                <div className="text-[#0a0e72] font-bold text-base">Centre of Excellence</div>
                <div className="text-gray-600 text-xs">Gujarat University</div>
              </div>
            </div>
            
            <button 
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* MOBILE MENU DRAWER */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
              onClick={closeMobileMenu}
            />
            
            {/* Drawer */}
            <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-xl lg:hidden transform transition-transform duration-300 ease-in-out">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                  <h2 className="text-lg font-semibold text-[#0a0e72]">Menu</h2>
                  <button 
                    className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                    onClick={closeMobileMenu}
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Menu Content */}
                <div className="flex-1 overflow-y-auto">
                  <div className="p-4">
                    {/* Top Bar Menus - Mobile */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Quick Links</h3>
                      <div className="space-y-1">
                        {topBarMenus.map((menu, i) => (
                          <div key={i}>
                            <button
                              className="w-full flex items-center justify-between p-3 text-left rounded-lg hover:bg-gray-50 transition-colors"
                              onClick={() => setActiveTopBarMenu(activeTopBarMenu === i ? null : i)}
                            >
                              <span className="font-medium">{menu.name}</span>
                              <ChevronDown 
                                className={`w-4 h-4 transition-transform ${activeTopBarMenu === i ? 'rotate-180' : ''}`} 
                              />
                            </button>
                            {activeTopBarMenu === i && (
                              <div className="ml-4 mt-1 space-y-1">
                                {menu.submenu.map((sub, idx) => (
                                  <a
                                    key={idx}
                                    href={sub.url}
                                    className="block p-2 text-sm text-gray-600 hover:text-[#0a0e72] hover:bg-gray-50 rounded transition-colors"
                                    target={sub.url.startsWith('http') ? "_blank" : "_self"}
                                    rel={sub.url.startsWith('http') ? "noopener noreferrer" : ""}
                                    onClick={closeMobileMenu}
                                  >
                                    {sub.name}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Main Navigation - Mobile */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Navigation</h3>
                      <nav className="space-y-1">
                        {mainMenus.map((item, index) => (
                          <div key={index}>
                            {item.link ? (
                              <Link
                                to={item.link}
                                className="block p-3 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                                onClick={closeMobileMenu}
                              >
                                {item.name}
                              </Link>
                            ) : (
                              <>
                                <button
                                  className="w-full flex items-center justify-between p-3 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                                  onClick={() => setActiveMobileMenu(activeMobileMenu === index ? null : index)}
                                >
                                  {item.name}
                                  <ChevronRight 
                                    className={`w-4 h-4 transition-transform ${activeMobileMenu === index ? 'rotate-90' : ''}`} 
                                  />
                                </button>
                                {activeMobileMenu === index && item.submenu && (
                                  <div className="ml-4 mt-1 space-y-1">
                                    {Array.isArray(item.submenu) ? (
                                      item.submenu.map((sub, i) => (
                                        typeof sub === 'string' ? (
                                          <span
                                            key={i}
                                            className="block p-2 text-sm text-gray-500"
                                          >
                                            {sub}
                                          </span>
                                        ) : (
                                          <Link
                                            key={i}
                                            to={sub.link}
                                            className="block p-2 text-sm text-gray-600 hover:text-[#0a0e72] hover:bg-gray-50 rounded transition-colors"
                                            onClick={closeMobileMenu}
                                          >
                                            {sub.label}
                                          </Link>
                                        )
                                      ))
                                    ) : (
                                      [...item.submenu.col1, ...item.submenu.col2].map((sub, i) => (
                                        typeof sub === 'string' ? (
                                          <span
                                            key={i}
                                            className="block p-2 text-sm text-gray-500"
                                          >
                                            {sub}
                                          </span>
                                        ) : (
                                          <Link
                                            key={i}
                                            to={sub.link}
                                            className="block p-2 text-sm text-gray-600 hover:text-[#0a0e72] hover:bg-gray-50 rounded transition-colors"
                                            onClick={closeMobileMenu}
                                          >
                                            {sub.label}
                                          </Link>
                                        )
                                      ))
                                    )}
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                        ))}
                      </nav>
                    </div>

                    {/* Apply Button - Mobile */}
                    <div className="pt-4 border-t">
                      <a
                        href="/apply"
                        className="block w-full text-center px-4 py-3 bg-[#0a0e72] text-white rounded-lg hover:bg-[#080b5a] transition-colors font-medium"
                        onClick={closeMobileMenu}
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
};

export default Header;
