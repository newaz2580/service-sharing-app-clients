import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-t border-gray-200 dark:border-gray-700">
      <footer className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:px-10 lg:px-8 xl:px-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1" data-aos="fade-up">
            <div className="flex items-center mb-4">
              <img
                className="h-14 w-14 rounded-full shadow-lg border-2 border-blue-100 dark:border-blue-800"
                src="https://i.ibb.co/tPJs4Gv5/home-06.jpg"
                alt="Home Repair Services Logo"
              />
              <h2 className="ml-4 text-xl sm:text-2xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent font-bold abril-font">
                Home Repair Services
              </h2>
            </div>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Providing reliable home repair services with excellence and trust since 2010. Your satisfaction is our priority.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Facebook", "LinkedIn", "Instagram", "Github"].map((social, index) => (
                <div
                  key={social}
                  data-aos="zoom-in"
                  data-aos-delay={200 + index * 100}
                  className="p-2 bg-blue-50 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors duration-300 cursor-pointer"
                >
                  <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <nav className="text-gray-600 dark:text-gray-300 font-poppins" data-aos="fade-up" data-aos-delay="200">
            <h6 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 pb-2 border-b-2 border-blue-200 dark:border-blue-700 inline-block">
              Our Services
            </h6>
            <div className="space-y-2 mt-4">
              {[
                { to: "/allServices", label: "All Services" },
                { to: "/manageServices", label: "Manage Services" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Get Quote" },
              ].map((link, index) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block py-2 px-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-300 transform hover:translate-x-1 sm:hover:translate-x-2"
                  data-aos="fade-left"
                  data-aos-delay={300 + index * 100}
                >
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-blue-600 transition-colors"></span>
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Follow Us */}
          <nav className="text-gray-600 dark:text-gray-300 font-poppins" data-aos="fade-up" data-aos-delay="300">
            <h6 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 pb-2 border-b-2 border-blue-200 dark:border-blue-700 inline-block">
              Follow Us
            </h6>
            <div className="space-y-2 mt-4">
              {[
                { href: "https://web.facebook.com/shahnewaz.ahammed", label: "Facebook" },
                { href: "https://www.linkedin.com/in/mohammad-shahnowaz/", label: "LinkedIn" },
                { href: "https://www.instagram.com/blue_bird_himu/", label: "Instagram" },
                { href: "https://github.com/newaz2580", label: "GitHub" },
              ].map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center py-2 px-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-300"
                  data-aos="fade-left"
                  data-aos-delay={400 + index * 100}
                >
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:bg-green-600 transition-colors"></span>
                  {social.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Contact Info */}
          <nav className="text-gray-600 dark:text-gray-300 font-poppins" data-aos="fade-up" data-aos-delay="400">
            <h6 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 pb-2 border-b-2 border-blue-200 dark:border-blue-700 inline-block">
              Contact Info
            </h6>
            <div className="space-y-3 mt-4">
              {[
                { icon: "✉", label: "Email", info: "newaz2796@gmail.com", bg: "blue" },
                { icon: "📞", label: "Phone", info: "+8801687678113", bg: "green" },
                { icon: "🕒", label: "Hours", info: "Mon-Sun: 8AM-8PM", bg: "purple" },
              ].map((contact, index) => (
                <div
                  key={contact.label}
                  className={`flex items-start p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300 group`}
                  data-aos="fade-up"
                  data-aos-delay={500 + index * 100}
                >
                  <div className={`w-8 h-8 bg-${contact.bg}-100 dark:bg-${contact.bg}-900 rounded-full flex items-center justify-center mr-3 group-hover:bg-${contact.bg}-200 transition-colors`}>
                    <span className={`text-${contact.bg}-500 text-sm`}>{contact.icon}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700 dark:text-gray-200">{contact.label}</p>
                    <p className="text-sm">{contact.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <p className="text-gray-600 dark:text-gray-300 text-sm" data-aos="fade-right">
              Trusted by thousands of homeowners since 2010
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6" data-aos="fade-left">
              <a href="#" className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-300 transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-300 transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-300 transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="bg-blue-50 dark:bg-gray-800 border-t border-blue-100 dark:border-gray-700">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 md:px-10 lg:px-8 xl:px-16">
          <h3 className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-300 font-poppins">
            © {new Date().getFullYear()} Copyright Home Repair Services. All Rights Reserved.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
