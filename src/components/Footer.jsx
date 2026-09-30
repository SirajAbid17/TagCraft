import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiYoutube,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
  FiChevronRight,
} from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";

export default function Footer() {
  const year = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Resources",
      links: [
        { label: "Help Center", href: "#" },
        { label: "Community", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Privacy Policy", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FiFacebook />, label: "Facebook", href: "https://www.facebook.com/siraj.abbasi.7106" },
    { icon: <FiTwitter />, label: "Twitter", href: "#" },
    { icon: <FiInstagram />, label: "Instagram", href: "https://www.instagram.com/siraj_abid17/" },
    { icon: <FiLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/sirajabid17/" },
    { icon: <FiGithub />, label: "GitHub", href: "https://github.com/SirajAbid17" },
  ];

  return (
    <footer className="bg-white border-t border-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= TOP SECTION ================= */}
        <div className="py-10 sm:py-12 lg:py-14">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-10">
            
            {/* Brand Section */}
            <div className="text-center sm:text-left flex-1">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center font-bold text-xl">
                    T
                  </div>
                  <h2 className="text-2xl font-bold">TagCraft</h2>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm sm:text-base max-w-md mx-auto sm:mx-0 leading-relaxed">
                Generate perfect hashtags instantly with AI-powered technology.
                Boost your content visibility across all platforms.
              </p>
            </div>

          
          
            <div className="w-full sm:w-auto">
              <div className="text-center sm:text-left">
                <h3 className="font-bold text-lg mb-4">Connect</h3>
                <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                  {socialLinks.map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      aria-label={item.label}
                      className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center
                      text-gray-600 hover:text-black hover:bg-gray-100 transition-all duration-200"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      
     
        <div className="py-6 border-t border-gray-300">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-sm text-center sm:text-left order-2 sm:order-1">
              © {year} TagCraft. All rights reserved.
            </p>

            <div className="flex gap-6 order-1 sm:order-2">
              <a href="#" className="text-gray-600 hover:text-black text-sm transition-colors duration-200">
                Terms
              </a>
              <a href="#" className="text-gray-600 hover:text-black text-sm transition-colors duration-200">
                Privacy
              </a>
              <a href="#" className="text-gray-600 hover:text-black text-sm transition-colors duration-200">
                Cookies
              </a>
            </div>

            <p className="text-gray-600 text-sm flex items-center gap-1 order-3">
              Made with <AiOutlineHeart className="text-red-500" /> by Siraj | Saif
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}


function ContactItem({ icon, title, value }) {
  return (
    <div className="flex items-center gap-4 justify-center md:justify-start">
      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg border border-gray-300 flex items-center justify-center text-gray-600">
        {icon}
      </div>
      <div className="text-center md:text-left">
        <p className="text-xs text-gray-500 mb-1">{title}</p>
        <p className="font-medium text-sm sm:text-base">{value}</p>
      </div>
    </div>
  );
}