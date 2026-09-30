import React, { useState, useEffect, useRef } from "react";
import {
  FiHome,
  FiUser,
  FiMail,
  FiX,
  FiMenu,
  FiLogIn,
  FiUserPlus,
  FiChevronDown,
  FiLogOut,
  FiSettings
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../Firebase/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default function Header() {
  const [activeItem, setActiveItem] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const userDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Check auth state
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      unsubscribe();
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setUserDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setUserDropdownOpen(false);
      setMobileMenuOpen(false);
      navigate('/');
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Function to get user initial
  const getUserInitial = (user) => {
    if (user?.displayName) {
      return user.displayName.charAt(0).toUpperCase();
    }
    if (user?.email) {
      return user.email.charAt(0).toUpperCase();
    }
    return 'U';
  };

  // Function to get user display name
  const getUserDisplayName = (user) => {
    if (user?.displayName) {
      return user.displayName;
    }
    if (user?.email) {
      return user.email.split('@')[0];
    }
    return 'User';
  };

  const navItems = [
    { id: "home", label: "Home", icon: <FiHome />, path: "/" },
    { id: "about", label: "About", icon: <FiUser />, path: "/about" },
    { id: "contact", label: "Contact", icon: <FiMail />, path: "/contact" },
  ];

  // Function to handle image error
  const handleImageError = (e) => {
    e.target.style.display = 'none';
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white border-b border-gray-200 shadow-md py-2"
          : "bg-white border-b border-gray-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3"> 
              <Link to={'/'}> 
                <div className="relative">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">T</span>
                  </div>               
                </div>
              </Link>
              <Link to={'/'} className="hover:opacity-80 transition-opacity">
                <h1 className="text-2xl font-bold text-black tracking-tight">
                  TagCraft
                </h1>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation - Right Side */}
          <div className="flex items-center gap-8">
            {/* Nav Items - Right Aligned */}
            <nav className="hidden lg:flex items-center space-x-0">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setActiveItem(item.label)}
                  className={`px-5 py-3 flex items-center gap-2 text-sm transition-all duration-200 ${
                    activeItem === item.label
                      ? "text-black font-semibold"
                      : "text-gray-700 hover:text-black hover:font-semibold"
                  }`}
                >
                  <span
                    className={
                      activeItem === item.label
                        ? "text-blue-600"
                        : "text-gray-500 hover:text-blue-600"
                    }
                  >
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* Desktop Auth Buttons - After Nav Items */}
            <div className="hidden lg:flex items-center gap-4">
              {loading ? (
                // Loading state
                <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
              ) : user ? (
                // User is logged in
                <div className="relative" ref={userDropdownRef}>
                  <button
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white font-semibold text-sm overflow-hidden relative">
                        {user.photoURL ? (
                          <>
                            <img 
                              src={user.photoURL} 
                              alt={user.displayName || 'User'} 
                              className="w-full h-full object-cover"
                              onError={handleImageError}
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black">
                              {getUserInitial(user)}
                            </div>
                          </>
                        ) : (
                          getUserInitial(user)
                        )}
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-medium text-black">
                          {getUserDisplayName(user)}
                        </p>
                        <p className="text-xs text-gray-500">
                          {user.email || 'Logged in'}
                        </p>
                      </div>
                    </div>
                    <FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      userDropdownOpen ? "rotate-180" : ""
                    }`} />
                  </button>

                  {/* User Dropdown Menu */}
                  <AnimatePresence>
                    {userDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden z-50"
                      >
                        <div className="p-2">
                          <div className="px-4 py-3 border-b border-gray-200 mb-2">
                            <p className="font-medium text-black">
                              {getUserDisplayName(user)}
                            </p>
                            <p className="text-sm text-gray-500 truncate">
                              {user.email}
                            </p>
                          </div>
                          
                       
                          
                        
                        <div className="flex justify-center mt-2">
  <button
    onClick={handleLogout}
    className="flex items-center gap-3 px-6 py-3 hover:bg-red-50 text-red-600 rounded-lg transition-colors duration-200"
  >
    <FiLogOut className="w-4 h-4" />
    <span className="font-medium">Logout</span>
  </button>
</div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                // User is not logged in
                <>
                  <Link to="/login">
                    <button className="px-6 py-2.5 text-gray-700 hover:text-black text-sm font-semibold rounded-lg border border-gray-300 hover:border-gray-400 transition-all duration-200 flex items-center gap-2">
                      <FiLogIn className="w-4 h-4" />
                      <span>Log in</span>
                    </button>
                  </Link>
                  
                  <Link to="/signup">
                    <button className="px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200 flex items-center gap-2 shadow-sm">
                      <FiUserPlus className="w-4 h-4" />
                      <span>Get Started</span>
                    </button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              {!loading && !user && (
                <Link to="/login" className="p-2.5 text-gray-700 hover:text-black hover:font-semibold transition-colors duration-200">
                  <FiLogIn className="w-5 h-5" />
                </Link>
              )}
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 text-gray-700 hover:text-black hover:font-semibold transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <FiX className="w-6 h-6" />
                ) : (
                  <FiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-white border-t border-gray-200"
            >
              <div className="py-4">
                {/* User Info (if logged in) */}
                {user && (
                  <div className="flex items-center gap-3 px-4 py-3 mb-4 bg-gray-50 rounded-lg mx-4">
                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-semibold overflow-hidden relative">
                      {user.photoURL ? (
                        <>
                          <img 
                            src={user.photoURL} 
                            alt={user.displayName || 'User'} 
                            className="w-full h-full object-cover"
                            onError={handleImageError}
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black">
                            {getUserInitial(user)}
                          </div>
                        </>
                      ) : (
                        getUserInitial(user)
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-black">
                        {getUserDisplayName(user)}
                      </p>
                      <p className="text-xs text-gray-500">
                        {user.email || 'Logged in'}
                      </p>
                    </div>
                  </div>
                )}

                {/* Navigation Links */}
                <div className="flex flex-col space-y-0">
                  {navItems.map((item) => (
                    <Link
                      key={item.id}
                      to={item.path}
                      onClick={() => {
                        setActiveItem(item.label);
                        setMobileMenuOpen(false);
                      }}
                      className={`px-4 py-3.5 flex items-center gap-3 text-left transition-all duration-200 ${
                        activeItem === item.label
                          ? "text-black font-semibold bg-gray-50"
                          : "text-gray-700 hover:text-black hover:font-semibold hover:bg-gray-50"
                      }`}
                    >
                      <span
                        className={
                          activeItem === item.label
                            ? "text-blue-600"
                            : "text-gray-500 hover:text-blue-600"
                        }
                      >
                        {item.icon}
                      </span>
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  ))}
                </div>

                {/* Mobile Auth Buttons */}
                <div className="mt-6 pt-5 border-t border-gray-200 px-4">
                  {user ? (
                    <div className="flex flex-col gap-3">
                      
                      <button
                        onClick={() => {
                          handleLogout();
                        }}
                        className="w-full px-4 py-3.5 bg-red-50 text-red-600 font-medium rounded-lg border border-red-200 hover:border-red-300 transition-all duration-200 flex items-center gap-3"
                      >
                        <div className="p-2 bg-red-100 rounded-lg">
                          <FiLogOut className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                          <div className="font-semibold">Logout</div>
                        </div>
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-3">
                      <Link 
                        to="/login" 
                        onClick={() => setMobileMenuOpen(false)}
                        className="block"
                      >
                        <button className="w-full px-4 py-3.5 text-gray-700 hover:text-black font-medium rounded-lg border border-gray-300 hover:border-gray-400 transition-all duration-200 flex items-center gap-3">
                          <div className="p-2 bg-gray-100 rounded-lg">
                            <FiLogIn className="w-5 h-5" />
                          </div>
                          <div className="text-left">
                            <div className="font-semibold">Sign In</div>
                          </div>
                        </button>
                      </Link>
                      
                      <Link 
                        to="/signup" 
                        onClick={() => setMobileMenuOpen(false)}
                        className="block"
                      >
                        <button className="w-full px-4 py-3.5 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-all duration-200 flex items-center gap-3">
                          <div className="p-2 bg-gray-800 rounded-lg">
                            <FiUserPlus className="w-5 h-5" />
                          </div>
                          <div className="text-left">
                            <div className="font-semibold">Get Started</div>
                          </div>
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}