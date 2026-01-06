import React, { useState } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainMenus = [
    { name: "Home", link: "/" },
    {
      name: "The College",
      submenu: [
        "About the College",
        "Mission & Vision",
        "Coordinator’s Desk",
        "Administration",
        "Policies",
      ],
    },
    {
      name: "Academics",
      submenu: ["Programs", "Departments", "Faculty", "Academic Calendar"],
    },
    {
      name: "Student Life",
      submenu: [
        "Clubs & Societies",
        "Scholarships",
        "Student Support",
        "Committees",
      ],
    },
    { name: "Admissions", link: "/admissions" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= MAIN BAR ================= */}
        <div className="flex items-center justify-between h-24">
          {/* Logo + Title */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.svg"
              alt="Centre of Excellence Logo"
              className="h-11 w-auto"
            />
            <div>
              <h1 className="text-base font-semibold tracking-wide text-[#0a0e72]">
                Centre of Excellence
              </h1>
              <p className="text-xs text-gray-600 leading-relaxed">
                University School of Law, Gujarat University
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-10">
            {mainMenus.map((item, index) => (
              <div key={index} className="relative group">
                {item.submenu ? (
                  <button className="flex items-center gap-1 text-[15px] font-normal text-gray-800 hover:text-[#0a0e72] transition">
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <a
                    href={item.link}
                    className="text-[15px] font-normal text-gray-800 hover:text-[#0a0e72] transition"
                  >
                    {item.name}
                  </a>
                )}

                {/* Dropdown */}
                {item.submenu && (
                  <div className="absolute left-0 top-full mt-3 w-60 bg-white border border-gray-200 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                    {item.submenu.map((sub, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0a0e72]"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden lg:flex p-2 text-gray-700 hover:text-[#0a0e72] transition">
              <Search className="w-5 h-5" />
            </button>

            <a
              href="/apply"
              className="hidden lg:inline-flex px-4 py-2 rounded-md bg-[#0a0e72] text-white text-sm font-medium hover:bg-[#0a0e72]/90 transition"
            >
              Apply Now
            </a>

            {/* Mobile Menu Button */}
            <button
              className="xl:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {isMenuOpen && (
          <div className="xl:hidden border-t border-gray-200 py-4">
            <div className="space-y-3">
              {mainMenus.map((item, index) => (
                <div key={index}>
                  {item.submenu ? (
                    <details>
                      <summary className="flex justify-between items-center cursor-pointer font-medium text-gray-800">
                        {item.name}
                        <ChevronDown className="w-4 h-4" />
                      </summary>
                      <div className="mt-2 ml-4 space-y-2">
                        {item.submenu.map((sub, idx) => (
                          <a
                            key={idx}
                            href="#"
                            className="block text-sm text-gray-600 hover:text-[#0a0e72]"
                          >
                            {sub}
                          </a>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <a
                      href={item.link}
                      className="block font-medium text-gray-800"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}

              <a
                href="/apply"
                className="inline-block mt-4 px-4 py-2 rounded-md bg-[#0a0e72] text-white text-sm font-medium"
              >
                Apply Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
