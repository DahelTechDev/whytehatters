import React, { useState, useCallback, useEffect } from "react";
import {
  Shield,
  Lock,
  Users,
  Search,
  AlertTriangle,
  Award,
  ChevronRight,
  Menu,
  X,
  CheckCircle,
  TrendingDown,
  Clock,
  Target,
} from "lucide-react";
import Navigation from "./Navigation";
import whytehattersLogo from "../assets/whytehatters-logo.png";
import DecryptedText from "../components/DecryptedText";
import LetterGlitch from "../components/LetterGlitch";

// Constants
const SERVICES = [
  {
    title: "Security Consulting & Architecture",
    description:
      "Audit your systems, design secure architectures, set up secure development practices, risk assessments.",
    icon: Shield,
  },
  {
    title: "Penetration Testing & Red Teaming",
    description:
      "Proactive attacks to find weaknesses before hackers exploit them.",
    icon: Target,
  },
  {
    title: "Incident Response & Remediation",
    description:
      "When breach/attack happens — rapid diagnosis, containment, recovery.",
    icon: AlertTriangle,
  },
  {
    title: "Vulnerability Assessments & Loophole Fixing",
    description:
      "Identify bugs, misconfigurations, supply-chain risks, and more.",
    icon: Search,
  },
  {
    title: "Ethical Hacker Network",
    description:
      "Vetted professionals who help us rapidly respond, test, and consult.",
    icon: Users,
  },
  {
    title: "Compliance & Regulatory Advisory",
    description:
      "ISO, GDPR, regional privacy laws, cyber policies & standards.",
    icon: Award,
  },
];

const CLIENT_SEGMENTS = [
  {
    title: "Governments & Public Sector",
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/07/02/00/43/bundestag-2463236_1280.jpg",
  },
  {
    title: "Medium & Large Corporations",
    imageUrl:
      "https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg",
  },
  {
    title: "Startups & SMEs",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/07/17/22/42/startup-849804_1280.jpg",
  },
  {
    title: "Financial, Healthcare, Tech",
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/03/05/16/58/hospital-4904920_1280.jpg",
  },
];

// Newsletter Signup Component
const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Subscribed:", email);
      setEmail("");
    } catch (err) {
      setError("Subscription failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-500 transition-colors">
      <h3 className="text-xl font-bold mb-4">Newsletter</h3>
      <p className="text-slate-300 mb-4">
        Get weekly security updates, case studies, and incident response tips
        delivered to your inbox.
      </p>
      <form onSubmit={handleSubmit} noValidate>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg mb-3 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
          aria-label="Email for newsletter subscription"
          disabled={isSubmitting}
        />
        {error && (
          <p className="text-red-400 text-sm mb-3" role="alert">
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-4 py-2 bg-cyan-500 rounded-lg font-semibold hover:bg-cyan-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-800"
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
    </div>
  );
};

// Main Component
export default function WhytehattersLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide the loading animation after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const handleMobileMenuToggle = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const handleNavLinkClick = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-[100] transition-opacity duration-1000">
          <LetterGlitch />
        </div>
      )}

      {/* Navigation */}
      <Navigation
        mobileMenuOpen={mobileMenuOpen}
        onMobileMenuToggle={handleMobileMenuToggle}
        onNavLinkClick={handleNavLinkClick}
      />

      {/* Main content fades in as the loader disappears */}
      <main
        className={`relative transition-opacity duration-1000 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Hero Section */}
        <section
          id="home"
          className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
          {/* The z-10 class ensures content stays above the absolute background */}
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight min-h-[250px] sm:min-h-[280px] lg:min-h-[330px]">
                  {!isLoading && (
                    <>
                      <DecryptedText
                        text="Closing Security Loopholes."
                        animateOn="view"
                        speed={50}
                        sequential={true}
                        className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                      />
                      <br />
                      <DecryptedText
                        text="Saving Millions."
                        animateOn="view"
                        speed={50}
                        sequential={true}
                      />
                      <br />
                      <DecryptedText
                        text="Empowering Africa."
                        animateOn="view"
                        speed={50}
                        sequential={true}
                      />
                    </>
                  )}
                </h1>

                <p className="text-xl text-slate-300 leading-relaxed">
                  At WHYTEHATTERS we don't just test — we partner with
                  governments, companies, startups, and ethical hackers to
                  proactively secure systems, remediate vulnerabilities, and
                  prevent financial loss from data breaches.
                </p>

                {/* Security Alert Banner */}
                <div
                  className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-lg p-6"
                  role="alert"
                  aria-labelledby="cost-heading"
                >
                  <div className="flex items-start space-x-3">
                    <AlertTriangle
                      className="text-red-400 mt-1 flex-shrink-0"
                      size={24}
                      aria-hidden="true"
                    />
                    <div>
                      <p
                        id="cost-heading"
                        className="font-semibold text-lg mb-2"
                      >
                        The Cost of Inaction:
                      </p>
                      <p className="text-slate-300">
                        Global average cost of a data breach:{" "}
                        <span className="font-bold text-red-400">
                          US$4.44 million
                        </span>
                      </p>
                      <p className="text-slate-300">
                        South Africa average:{" "}
                        <span className="font-bold text-red-400">
                          R44.1 million (~US$2.45 million)
                        </span>
                      </p>
                      <p className="text-slate-300">
                        Nigeria average:{" "}
                        <span className="font-bold text-red-400">
                          NGN375 billion (~£190 million)
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => scrollToSection("consulting")}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-bold text-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 transform hover:scale-105 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                  >
                    Book a Security Assessment
                    <ChevronRight
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </button>
                  <button
                    onClick={() => scrollToSection("hacker-network")}
                    className="px-8 py-4 border-2 border-cyan-500 rounded-lg font-bold text-lg hover:bg-cyan-500/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                  >
                    Become an Ethical Hacker Partner
                  </button>
                </div>
              </div>

              {/* Security Features Card */}
              <div className="relative">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 blur-3xl"
                  aria-hidden="true"
                ></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                  <Lock
                    className="text-cyan-400 mb-6"
                    size={64}
                    aria-hidden="true"
                  />
                  <h3 className="text-2xl font-bold mb-4">
                    Proactive Security, Proven Results
                  </h3>
                  <div className="space-y-4" role="list">
                    {[
                      "Certified ethical hackers",
                      "AI-assisted threat detection",
                      "24/7 incident response",
                      "Cross-industry expertise",
                    ].map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3"
                        role="listitem"
                      >
                        <CheckCircle
                          className="text-green-400 flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Segments */}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Who We Serve
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CLIENT_SEGMENTS.map((segment, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-colors duration-200 group"
                >
                  <img
                    src={segment.imageUrl}
                    alt={segment.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <h3 className="font-semibold text-lg p-6 text-center">
                    {segment.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="consulting"
          className="relative z-10 py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4">What We Do</h2>
              <p className="text-xl text-slate-300">
                Comprehensive security services tailored to your needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-200 group"
                  >
                    <IconComponent
                      className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-200"
                      size={40}
                      aria-hidden="true"
                    />
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-slate-300 mb-4">{service.description}</p>
                    <button className="text-cyan-400 font-semibold flex items-center hover:gap-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded">
                      Learn More <ChevronRight size={20} aria-hidden="true" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Resources Section with Newsletter */}
        <section
          id="resources"
          className="relative z-10 py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-16">
              Resources & Insights
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-500 transition-colors">
                <h3 className="text-xl font-bold mb-4">Latest Blog Posts</h3>
                <p className="text-slate-300 mb-4">
                  Stay updated with the latest security insights, breach
                  analysis, and best practices for African markets.
                </p>
                <button className="text-cyan-400 font-semibold flex items-center hover:gap-2 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded">
                  Read More <ChevronRight size={20} aria-hidden="true" />
                </button>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-500 transition-colors">
                <h3 className="text-xl font-bold mb-4">Whitepaper</h3>
                <p className="text-slate-300 mb-4">
                  "Average Hidden Costs of Data Breaches in Africa" - Download
                  our comprehensive analysis.
                </p>
                <button className="text-cyan-400 font-semibold flex items-center hover:gap-2 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded">
                  Download Now <ChevronRight size={20} aria-hidden="true" />
                </button>
              </div>

              <NewsletterSignup />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#F7F7F5] text-slate-600 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <a href="#home" className="hover:text-cyan-600">
                  <img
                    src={whytehattersLogo}
                    alt="WHYTEHATTERS"
                    className="h-30 w-30"
                  />
                </a>
              </div>
              <p>Securing Africa's digital future, one system at a time.</p>
            </div>

            <div>
              <h4 className="font-bold text-slate-800 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="hover:text-cyan-600">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#consulting" className="hover:text-cyan-600">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#hacker-network" className="hover:text-cyan-600">
                    Hacker Network
                  </a>
                </li>
                <li>
                  <a href="#case-studies" className="hover:text-cyan-600">
                    Case Studies
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-800 mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#resources" className="hover:text-cyan-600">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#careers" className="hover:text-cyan-600">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-cyan-600">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-800 mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>info@whytehatters.com</li>
                {/* <li>+234 XXX XXXX XXX</li> */}
              </ul>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-cyan-600">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-cyan-600">
                  Twitter
                </a>
                {/* <a href="#" className="hover:text-cyan-600">
                  GitHub
                </a> */}
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>© 2025 WHYTEHATTERS. All Rights Reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-cyan-600">
                Terms of Use
              </a>
              <a href="#" className="hover:text-cyan-600">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
