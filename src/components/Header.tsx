import { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { TopBarMenuItem, MainMenuItem, SubmenuObjectItem } from "../types";

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

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid grid-cols-[auto_1fr] items-center">
            {/* LOGO */}
            <div className="row-span-2 flex items-center gap-3 py-3 pr-6">
              <img src="/logo.svg" alt="COE" className="h-24 lg:h-28 w-auto" />
              <div>
                <div className="text-[#0a0e72] font-bold text-lg">
                  Centre of Excellence
                </div>
                <div className="text-gray-600 text-sm">Gujarat University</div>
              </div>
            </div>

            {/* TOP BAR */}
            <div className="flex justify-end gap-6 text-sm py-2 border-b">
              {topBarMenus.map((menu, i) => (
                <div key={i} className="relative group">
                  <span className="flex items-center gap-1 font-medium cursor-pointer">
                    {menu.name}
                    <ChevronDown className="w-3 h-3" />
                  </span>
                  <div className="absolute right-0 top-full pt-3 hidden group-hover:block z-50">
                    <div className="bg-white border rounded-xl shadow-2xl w-64 py-2">
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

            {/* MAIN NAV */}
            <div className="flex justify-end items-center gap-10 py-4">
              <nav className="hidden xl:flex gap-8">
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
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 hidden group-hover:block z-50">
                        <div className="bg-white border rounded-xl shadow-2xl p-5">
                          {Array.isArray(item.submenu) ? (
                            <div className="min-w-[220px]">
                              {item.submenu.map((sub, i) => {
                                if (typeof sub === 'string') {
                                  return (
                                    <span
                                      key={i}
                                      className="block px-4 py-2 rounded text-gray-500 cursor-not-allowed"
                                    >
                                      {sub}
                                    </span>
                                  );
                                }
                                
                                // Type assertion - we know it's SubmenuObjectItem here
                                const subItem = sub as SubmenuObjectItem;
                                return (
                                  <Link
                                    key={i}
                                    to={subItem.link}
                                    className="block px-4 py-2 rounded hover:bg-[#0a0e72] hover:text-white"
                                  >
                                    {subItem.label}
                                  </Link>
                                );
                              })}
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
                                <div className="grid grid-cols-2 gap-x-10 min-w-[440px]">
                                  <div>
                                    {left.map((sub, i) => {
                                      if (typeof sub === 'string') {
                                        return (
                                          <span
                                            key={i}
                                            className="block px-4 py-2 rounded text-gray-500 cursor-not-allowed"
                                          >
                                            {sub}
                                          </span>
                                        );
                                      }
                                      
                                      // Type assertion - we know it's SubmenuObjectItem here
                                      const subItem = sub as SubmenuObjectItem;
                                      return (
                                        <Link
                                          key={i}
                                          to={subItem.link}
                                          className="block px-4 py-2 rounded hover:bg-[#0a0e72] hover:text-white"
                                        >
                                          {subItem.label}
                                        </Link>
                                      );
                                    })}
                                  </div>
                                  <div>
                                    {right.map((sub, i) => {
                                      if (typeof sub === 'string') {
                                        return (
                                          <span
                                            key={i}
                                            className="block px-4 py-2 rounded text-gray-500 cursor-not-allowed"
                                          >
                                            {sub}
                                          </span>
                                        );
                                      }
                                      
                                      // Type assertion - we know it's SubmenuObjectItem here
                                      const subItem = sub as SubmenuObjectItem;
                                      return (
                                        <Link
                                          key={i}
                                          to={subItem.link}
                                          className="block px-4 py-2 rounded hover:bg-[#0a0e72] hover:text-white"
                                        >
                                          {subItem.label}
                                        </Link>
                                      );
                                    })}
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
