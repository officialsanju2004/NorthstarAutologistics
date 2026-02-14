// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaUser, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../Images/logo.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
const Bike=location.pathname==="/BikeAtvRtvTransport" 
      const Boat=location.pathname==="/BoatShipping" 
      const Enclose=location.pathname==="/EnclosedTrailerTransport" 
      const Open=location.pathname==="/OpenTrailers" 
      const heavy=location.pathname==="/HeavyVehicleTransport" 
      const flat=location.pathname==="/FlatbedTrailer" 


      const contact=location.pathname==="/contact" 
      const PrivacyPolicy=location.pathname==="/privacy-policy" 


      
  const navItems = [
   
    { name: 'About Us', path: '/about' },
     { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/termsAndConditions' },
    
    { name: 'Contact Us', path: '/contact' },
   
  ];

  const serviceItems = [
    { name: 'Open Trailers', path: '/OpenTrailers' },
    { name: 'Enclosed Trailer Transport', path: '/EnclosedTrailerTransport' },
    { name: 'Flatbed Trailers Transport', path: '/FlatbedTrailer' },
    { name: 'BIKE/ATV/RTV Transport', path: '/BikeAtvRtvTransport' },
    { name: 'Boat Shipping', path: '/BoatShipping' },
    { name: 'Heavy Vehicles', path: '/HeavyVehicleTransport' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine navbar styles based on scroll and current page
  const getNavbarStyles = () => {
    if (isScrolled) {
      return {
        background: 'bg-[#1F3A5F]',
        textColor: 'text-white',
        shadow: 'shadow-lg'
      };
    }
    
    if (isHome) {
      return {
        background: 'bg-transparent',
        textColor: 'text-white',
        shadow: ''
      };
    }
    if (flat) {
      return {
        background: 'bg-transparent',
        textColor: 'text-white',
        shadow: ''
      };
    }
    if (Open) {
      return {
        background: 'bg-transparent',
        textColor: 'text-white',
        shadow: ''
      };
    }
    
    if (contact) {
      return {
        background: 'bg-transparent',
        textColor: 'text-white',
        shadow: ''
      };
    }
    if (PrivacyPolicy) {
      return {
        background: 'bg-transparent',
        textColor: 'text-white',
        shadow: ''
      };
    }
    if (Bike) {
      return {
        background: 'bg-transparent',
        textColor: 'text-white',
        shadow: ''
      };
    }
    if (Enclose) {
      return {
        background: 'bg-transparent',
        textColor: 'text-white',
        shadow: ''
      };
    }
    if (Boat) {
      return {
        background: 'bg-transparent',
        textColor: 'text-white',
        shadow: ''
      };
    }
    if (heavy) {
      return {
        background: 'bg-transparent',
        textColor: 'text-white',
        shadow: ''
      };
    }
    
    return {
      background: 'bg-white',
      textColor: 'text-gray-700',
      shadow: 'shadow-lg'
    };
  };

  const styles = getNavbarStyles();

  // Handle service selection
  const handleServiceSelect = (path) => {
    navigate(path);
    setIsServicesOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${styles.background} ${styles.shadow}`}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            
            {/* Logo and Brand */}
            <Link to="/" className="flex items-center space-x-3 md:space-x-4">
              <div className="flex items-center">
                <img
                  src={logo}
                  alt="Northstar Autologistics"
                  className="object-cover h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full border-2 border-white"
                />
              </div>
                 
              <span className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold ${styles.textColor}`}>
                Northstar Autologistics
                <span className="block text-sm sm:text-base md:text-lg text-primary-400 font-normal">
                  LLC, California
                </span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-7">
                   <Link
                  
                  to="/"
                  className={`font-medium transition-colors hover:text-primary-400 ${
                    location.pathname === "/"
                      ? 'text-primary-400'
                      : styles.textColor
                  }`}
                >
                 Home
                </Link>
                  {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`flex items-center font-medium transition-colors hover:text-primary-400 ${
                    serviceItems.some(item => location.pathname === item.path)
                      ? 'text-primary-400'
                      : styles.textColor
                  }`}
                >
                  Services
                  <FaChevronDown className={`ml-2 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl overflow-hidden"
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      {serviceItems.map((service) => (
                        <button
                          key={service.name}
                          onClick={() => handleServiceSelect(service.path)}
                          className="block w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-primary-600 transition-colors text-gray-700 font-medium"
                        >
                          {service.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium transition-colors hover:text-primary-400 ${
                    location.pathname === item.path
                      ? 'text-primary-400'
                      : styles.textColor
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
            
              
              {/* Contact Button */}
              <Link
                to="/contact"
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isScrolled || !isHome
                    ? 'bg-primary-500 text-white hover:bg-primary-600'
                    : 'bg-white text-[#1F3A5F] hover:bg-gray-100'
                } hover:scale-105 shadow-lg hover:shadow-xl`}
              >
                Get A Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <FaTimes className={`text-2xl ${styles.textColor}`} />
              ) : (
                <FaBars className={`text-2xl ${styles.textColor}`} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-20 md:top-24 z-40 lg:hidden"
          >
            <div className="bg-white shadow-lg">
              <div className="px-4 py-6 space-y-2">
                <Link
                  
                  to="/"
                 className="block py-3 px-4 rounded-lg hover:bg-gray-50 hover:text-primary-600 font-medium text-gray-700"
                    onClick={() => setIsMenuOpen(false)}
                >
                 Home
                </Link>
                   {/* Mobile Services Dropdown */}
                <div className="py-3 px-4">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center justify-between w-full font-medium text-gray-700 hover:text-primary-600"
                  >
                    <span>Services</span>
                    <FaChevronDown className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pt-2 space-y-2">
                          {serviceItems.map((service) => (
                            <button
                              key={service.name}
                              onClick={() => handleServiceSelect(service.path)}
                              className="block w-full text-left py-2 px-4 rounded-lg hover:bg-gray-50 hover:text-primary-600 text-gray-600 font-medium"
                            >
                              {service.name}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block py-3 px-4 rounded-lg hover:bg-gray-50 hover:text-primary-600 font-medium text-gray-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
             
                
                {/* Mobile Contact Section */}
                <div className="pt-4 border-t space-y-4">
                  <Link
                    to="/contact"
                    className="block bg-primary-600 text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-primary-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get A Quote
                  </Link>
                  <div className="flex flex-col space-y-3 text-gray-600">
                    <a
                      href="tel:+12093958481" 
                      className="flex items-center space-x-3 hover:text-primary-600"
                    >
                      <FaPhone />
                      <span>+1 (209) 395-8481</span>
                    </a>
                    <a
                      href="mailto:Info@northstarautologistics.com"
                      className="flex items-center space-x-3 hover:text-primary-600"
                    >
                      <FaEnvelope />
                      <span>Info@northstarautologistics.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
