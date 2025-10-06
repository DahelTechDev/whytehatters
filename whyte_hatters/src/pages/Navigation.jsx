import React from "react";
import { Menu, X } from "lucide-react";
import whytehattersLogo from "../assets/whytehatter-logo1.png";

// Navigation Component
const Navigation = ({ mobileMenuOpen, onMobileMenuToggle, onNavLinkClick }) => {
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#consulting", label: "Consulting" },
    { href: "#hacker-network", label: "Hacker Network" },
    { href: "#case-studies", label: "Case Studies" },
    { href: "#resources", label: "Resources" },
    { href: "#careers", label: "Careers" },
    { href: "#contact", label: "Contact" },
  ];

  const handleLinkClick = () => {
    onNavLinkClick(); // This correctly closes the mobile menu
  };

  return (
    <nav className="fixed w-full z-50 bg-[#F7F7F5]/90 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src={whytehattersLogo}
              alt="WHYTEHATTERS Cybersecurity"
              className="h-12 w-12"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = "/fallback-logo.png";
              }}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-700 hover:text-cyan-600 transition-colors duration-200"
                onClick={handleLinkClick}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-[#F7F7F5]"
              aria-label="Hire Security Consultants"
            >
              Hire Security Consultants
            </button>
            <button
              className="px-6 py-2.5 border-2 border-cyan-500 rounded-lg font-semibold text-cyan-600 hover:bg-cyan-500/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-[#F7F7F5]"
              aria-label="Join Ethical Hackers Network"
            >
              Join Ethical Hackers
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={onMobileMenuToggle}
            className="lg:hidden p-2 rounded-lg text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F7F5] border-t border-slate-200 animate-in slide-in-from-top duration-200">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-slate-700 hover:text-cyan-600 transition-colors"
                onClick={handleLinkClick}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 space-y-3 border-t border-slate-200">
              <button className="w-full px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-400 hover:to-blue-500 transition-colors">
                Hire Security Consultants
              </button>
              <button className="w-full px-6 py-2.5 border-2 border-cyan-500 rounded-lg font-semibold text-cyan-600 hover:bg-cyan-500/10 transition-colors">
                Join Ethical Hackers
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
