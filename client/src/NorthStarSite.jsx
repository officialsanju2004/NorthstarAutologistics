
import { Truck, Shield, Star, Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight, ChevronRight, Users, Award, Link,Car,Route,Wrench,Calendar,Trophy,ShieldCheck,HardHat,Tag } from 'lucide-react';
import { Home, Info, MessageCircle, Youtube } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaBuilding, FaChartLine, FaShieldAlt, FaSmile, FaClock, FaCloudscale } from 'react-icons/fa';
import axios from 'axios';
import logo from '../Images/logo.jpg'
import image5 from '../Images/image5.jpg'
import image6 from '../Images/image6.jpg'

import image7 from '../Images/image7.jpg'
import image8 from '../Images/image8.jpg'
import image9 from '../Images/image9.jpg'
import image10 from '../Images/image10.jpg'
import image11 from '../Images/image11.jpg'
import enclosed from '../Images/enclosed.jpg'
 import atv from '../Images/Atv.jpg'
import heavy from '../Images/heavy.jpg'


import image4 from '../Images/image4.jpg'
import image2 from '../Images/image2.jpg'

import { toast, ToastContainer } from 'react-toastify';

import { 
 
 
  Menu, 
  X,
  ChevronLeft,
 
} from 'lucide-react';
import Navbar from './Navbar';
import image1 from '../Images/image1.jpg'
import Footer from './Components/Footer';
import { useNavigate } from 'react-router-dom';

// Color Palette
const colors = {
  navy: '#1F3A5F',
  red: '#B23A2F',
  cream: '#F2E9D8',
  white: '#FFFFFF',
};

export default function AutoTransportWebsite() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    pickup: '',
    dropoff: '',
    message: ''
  });
  const [scrolled, setScrolled] = useState(false);
  const navigate=useNavigate();
   // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const statsRef = useRef(null);

  let [enquiryList, setEnquiryList] = useState([]);
      const handleSubmit = (e) => {
    e.preventDefault();
    if(!formData.email.endsWith("@gmail.com")){
      toast.error("incorrect email!!");
      return;
    }   
    axios
      .post("https://northstar-autologistics123.vercel.app/web/api/enquiry/enquiry-insert", formData)
      .then((res) => {
        toast.success("Message Sent!!!");
        setFormData({ name: '',
        email: '',
        subject: '',
        pickup: '',
        dropoff: '',
        message: '' });
        navigate("/success-page")
      }).catch((err)=>{
        toast.error("Failed to send message");
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    {
      title: "Open Trailers",
      description: "Open trailer transport offers cost-effective shipping with high efficiency.Perfect for standard cars and bikes ensuring timely delivery with reliable handing across all distances.",
      link:"/OpenTrailers",
      image: image4
    },
    {
      title: "Enclosed Trailers",
      description: "Enclosed Trailers provide maximum protection for your vehicle from weather and road debris.Ideal for luxury,classic,or exotic cars,ensuring safe,secure,and damage-free transport every time.",
      link:"/EnclosedTrailerTransport",
      image: enclosed
    },
    {
      title: "Flatbed Trailers",
      description: "Flatbed trailers handle oversized and heavy vehicles with ease,offering versatile and secure transport solutions.Perfect for trucks,construction equipment,and non-standard loads across long distances safely.",
       link:"/FlatbedTrailer",
      image: image7
    },
    {
      title: "Bike/RTV/ATV Shipping",
      description: "Specialized shipping for bikes, RTVs, and ATVs with secure loading and handling.Fast,reliable transport ensuring your ride reaches safely,whether across cities or states.  ",
     link:"/BikeAtvRtvTransport",
      image: atv
    },
    {
      title: "Boat Shipping",
      description: "Safe and reliable boat shipping with expert handling and secure transport.We ensure timely delivery of your boat,protecting it from damage during transit,anywhere across coastal or inland routes.",
      link:"/BoatShipping",
      image: image11
    },
    {
      title: "Heavy Vehicles",
      description: "Expert transport solutions for heavy vehicles like trucks and machinery.Our Specialized trailers and trained-crew ensure safe,on-time delivery,handling weight and size challenges effortlessly.",
       link:"/HeavyVehicleTransport",
      image:heavy
    }
  ];

  const features = [
    { icon: <Truck className="w-8 h-8" />, title: "Trusted Carriers", desc: "We partner only with licensed,verified,and highly rated carriers.Your vehicle is handled by professionals who prioritize safety and care." },
    { icon: <Shield className="w-8 h-8" />, title: "Hassle-Free", desc: "No pressure,no hidden fees,and no unnecessary complications.We keep the process simple,transparent and stress-free.Just Straightforward service from pick up to delivery." },
    { icon: <Clock className="w-8 h-8" />, title: "On-Time Delivery", desc: "We respect your time and stick to committed schedules.Your vehicle reaches its destination safely and right on time.Reliable delivery without excuses or delays." },
    { icon: <Users className="w-8 h-8" />, title: "Real Relationships", desc: "We believe in honest communication and long term trust.Our team stays connected with you at every step.Because real service starts with real relationships." },
  ];

  const steps = [
    { number: "01", title: "Request Quote", desc: "Fill out our simple form for a free, no-obligation quote" },
    { number: "02", title: "Get Scheduled", desc: "We match you with the perfect carrier and schedule pickup" },
    { number: "03", title: "Track Shipment", desc: "Monitor your vehicle's journey with real-time updates" },
    { number: "04", title: "Delivery", desc: "Your vehicle arrives safely at its destination" },
  ];
   // Auto-slide effect for mobile carousel
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % services.length);
      }, 4000);
      return () => clearInterval(interval);
    }, []);


  // Animated counters
  const Counter = ({ end, duration = 2000, label }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            let start = 0;
            const increment = end / (duration / 16);
            const timer = setInterval(() => {
              start += increment;
              if (start > end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, 16);
            return () => clearInterval(timer);
          }
        },
        { threshold: 0.5 }
      );

      if (countRef.current) observer.observe(countRef.current);
      return () => observer.disconnect();
    }, [end, duration]);

    return (
      <div className="text-center " ref={countRef}>
        <div className="text-5xl md:text-6xl font-bold text-[#1F3A5F] mb-2">
          {count.toLocaleString()}+
        </div>
        <div className="text-lg text-[#1F3A5F]">{label}</div>
      </div>
    );
  };
    // Number counting animation
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const element = entry.target;
              const target = parseInt(element.getAttribute('data-target'));
              const duration = 2000;
              const start = 0;
              const increment = target / (duration / 16);
              let current = start;
              
              const updateCount = () => {
                current += increment;
                if (current < target) {
                  element.textContent = Math.floor(current);
                  requestAnimationFrame(updateCount);
                } else {
                  element.textContent = target;
                }
              };
              updateCount();
            }
          });
        },
        { threshold: 0.5 }
      );
  
      const statElements = document.querySelectorAll('.stat-number');
      statElements.forEach((el) => observer.observe(el));
  
      return () => observer.disconnect();
    }, []);
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
    };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F2E9D8] via-white to-[#F2E9D8]/50">
      <ToastContainer/>
         <style jsx>{`
    @keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #F2E9D8;
}

::-webkit-scrollbar-thumb {
  background: #1F3A5F;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #B23A2F;
}
      `}</style>
     {/* Navigation */}
     <Navbar/>
   <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={image1}
          alt="Luxury Home Interior"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-overlay filter blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500 rounded-full mix-blend-overlay filter blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-start">
          {/* Main Heading with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Reliable and Budget Auto Transport<span className="text-primary-600"> Service Across The Country</span><br />
             
                Dream Home
            </h1>
                
            <button  onClick={()=>{window.location.href="/contact"}} className='pointer-cursor py-3 px-6 border text-white rounded-xl hover:scale-105'>Get a Quote</button>
                  
          </motion.div>

       

        

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute  left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center">
              <span className="text-gray-300 text-sm mb-2">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
              >
                <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gradient Overlay Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
    </section>


      {/* Quote Form Section */}
      <section className="py-20 bg-[#F2E9D8]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl font-bold text-[#1F3A5F] mb-6">
                Car Transport isn't Just Our Business <br/><span className="text-[#B23A2F]">-It's Our Passion. </span>
              </h2>
              <p className="text-lg font-bold text-[#1F3A5F] mb-8 leading-relaxed">
              At Northstar Autologstics LLC,California , we pride ourselves on delivering top-tier auto transport services at some of the most competitive prices in the market.
              </p>
               <p className="text-lg  text-[#1F3A5F] mb-8 leading-relaxed">
             Let’s be real — the industry is flooded with brokers. So, what makes us different? Simple:<span className='font-bold'> we actually care.</span> We don’t see you as just another number. We’re in it for the long haul — building real relationships, offering genuine support, and making sure your experience is stress-free from start to finish.
              </p>
               <p className="text-lg  text-[#1F3A5F] mb-8 leading-relaxed">
            We work only with<span className='font-bold'>the most trusted and reliable carriers</span>  to ensure your vehicle gets where it needs to go, safely and on time. Whether you have a simple question or need help with a complex shipping need, we’re here for it — no pressure, no hidden fees.
              </p>
              <p className="text-lg  text-[#1F3A5F] mb-8 leading-relaxed">
        When you choose Northstar Autologstics LLC,California, you’re choosing <span className='font-bold'>affordable, dependable, and hassle-free auto transport</span> you can count on.           </p>
              <p className="text-lg  text-[#1F3A5F] mb-8 leading-relaxed">
         So, what are you waiting for?
Let’s get your vehicle moving — the right way.      </p>
<hr className='text-white mb-8'/>
<div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 bg-gradient-to-r from-[#1F3A5F]/5 to-transparent rounded-xl border border-[#1F3A5F]/10">
  <div className="flex items-center gap-2">
    <Phone className="w-6 h-6 text-[#1F3A5F]" />
    <span className="text-sm font-semibold text-[#1F3A5F]"><a href="tel:+12093958481" className='cursor-pointer'>Click to Book Now</a></span>
  </div>
  
  <div className="hidden sm:block w-px h-6 bg-[#1F3A5F]/20"></div>
  
  <div className="flex items-center gap-3">
    <div className="bg-[#1F3A5F] text-white p-2 rounded-lg">
      <Phone className="w-5 h-5" />
    </div>
    <div>
      <p className="text-xs font-medium text-gray-600">Call us 24/7</p>
      <a 
        href="tel:+12093958481" 
        className="text-xl md:text-2xl font-bold text-[#1F3A5F] hover:text-[#B23A2F] transition-colors"
      >
        +1 (209)395-8481
      </a>
    </div>
  </div>
</div>

              
        
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:shadow-3xl transition-shadow duration-500">
                <h2 className="text-3xl font-bold text-[#1F3A5F]  mb-8 text-center">
              Request A Free Quote
            </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#1F3A5F] mb-2">
                      Your name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1F3A5F] focus:ring-2 focus:ring-[#1F3A5F]/20 transition-all duration-300 outline-none"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1F3A5F] mb-2">
                      Your email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1F3A5F] focus:ring-2 focus:ring-[#1F3A5F]/20 transition-all duration-300 outline-none"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1F3A5F] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1F3A5F] focus:ring-2 focus:ring-[#1F3A5F]/20 transition-all duration-300 outline-none"
                    placeholder="Vehicle Transport Inquiry"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#1F3A5F] mb-2">
                      Pick Up Location *
                    </label>
                    <input
                      type="text"
                      name="pickup"
                      value={formData.pickup}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1F3A5F] focus:ring-2 focus:ring-[#1F3A5F]/20 transition-all duration-300 outline-none"
                      placeholder="City, State"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1F3A5F] mb-2">
                      Drop Off Location *
                    </label>
                    <input
                      type="text"
                      name="dropoff"
                      value={formData.dropoff}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1F3A5F] focus:ring-2 focus:ring-[#1F3A5F]/20 transition-all duration-300 outline-none"
                      placeholder="City, State"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1F3A5F] mb-2">
                    Your message (optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1F3A5F] focus:ring-2 focus:ring-[#1F3A5F]/20 transition-all duration-300 outline-none min-h-[120px] resize-none"
                    placeholder="Tell us about your vehicle and any special requirements..."
                  ></textarea>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="policy"
                    className="mt-1 w-5 h-5 text-[#B23A2F] focus:ring-[#B23A2F]"
                    required
                  />
                  <label htmlFor="policy" className="text-gray-600 text-sm">
                    By providing your details you agree to receive transactional SMS according to our{' '}
                    <a href="/privacy-policy" className="text-[#B23A2F] font-semibold hover:underline">Privacy Policy</a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#1F3A5F] text-white rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 shadow-lg"
                >
                  Get Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F3A5F] mb-4">
              What Makes Us <span className="text-[#B23A2F]">Different</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't see you as just another number. We're committed to providing exceptional service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-[#F2E9D8]/50 p-8 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-[#1F3A5F]/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#1F3A5F] to-[#B23A2F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1F3A5F] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Mobile Carousel Section */}
      <section id="services" className="py-16" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F3A5F] mb-4">
             SERVICES <span className="text-[#B23A2F]">WE PROVIDE</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
             Insert a meaningfull line to evaluate the headline
            </p>
          </div>
          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {services.map((service, index) => (
                  <div key={index}  onClick={()=>{window.location.href=service.link}}className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover-card">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                         
                          <h3 onClick={()=>{window.location.href=service.link}} className="text-xl font-bold" style={{ color: '#1e3a8a' }}>{service.title}</h3>
                        </div>
                        <p  onClick={()=>{window.location.href=service.link}} style={{ color: '#4b5563' }}>{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Controls */}
            <button 
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-lg"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
            >
              <ChevronLeft className="w-6 h-6" style={{ color: '#1e40af' }} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-lg"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
            >
              <ChevronRight className="w-6 h-6" style={{ color: '#1e40af' }} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? '' : 'opacity-50'}`}
                  style={{ 
                    backgroundColor: currentSlide === index ? '#2563eb' : '#d1d5db'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} onClick={()=>{window.location.href=service.link}}className="bg-white rounded-xl shadow-lg overflow-hidden hover-card">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{service.icon}</span>
                    <h3 onClick={()=>{window.location.href=service.link}} className="text-xl font-bold" style={{ color: '#1e3a8a' }}>{service.title}</h3>
                  </div>
                  <p onClick={()=>{window.location.href=service.link}} style={{ color: '#4b5563' }}>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

   {/* Quote Form Section */}
<section className="py-16 md:py-20 bg-[#F2E9D8]">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
      {/* Left Content with Image */}
      <div className="lg:col-span-5 flex flex-col">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 flex-grow flex flex-col">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mb-4 md:mb-6">
            Request A <span className="text-[#B23A2F]">Free Quote</span>
          </h2>
          
          <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed">
            When you choose <span className="font-bold text-[#1F3A5F]">Northstar Autologistics LLC, California</span>, you're choosing 
            reliable, dependable, and hassle-free auto transport you can count on.
          </p>
          
         
          {/* Image that extends to match form height */}
          <div className="relative h-48 md:h-64 lg:h-full min-h-[200px] rounded-xl overflow-hidden mt-4">
            <img
              src={image1}
              alt="Auto Transport Services"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F3A5F]/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Nationwide Coverage</h3>
                <p className="text-sm md:text-base opacity-90">Serving all 48 continental states with reliable transport</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form - Takes remaining 7 columns */}
      <div className="lg:col-span-7">
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 lg:p-10 h-full transform hover:shadow-3xl transition-shadow duration-500">
          <h2 className="text-3xl font-bold text-[#1F3A5F]  mb-8 text-center">
              Request A Free Quote
            </h2>
          
                 <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#1F3A5F] mb-2">
                      Your name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1F3A5F] focus:ring-2 focus:ring-[#1F3A5F]/20 transition-all duration-300 outline-none"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1F3A5F] mb-2">
                      Your email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1F3A5F] focus:ring-2 focus:ring-[#1F3A5F]/20 transition-all duration-300 outline-none"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1F3A5F] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1F3A5F] focus:ring-2 focus:ring-[#1F3A5F]/20 transition-all duration-300 outline-none"
                    placeholder="Vehicle Transport Inquiry"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#1F3A5F] mb-2">
                      Pick Up Location *
                    </label>
                    <input
                      type="text"
                      name="pickup"
                      value={formData.pickup}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1F3A5F] focus:ring-2 focus:ring-[#1F3A5F]/20 transition-all duration-300 outline-none"
                      placeholder="City, State"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1F3A5F] mb-2">
                      Drop Off Location *
                    </label>
                    <input
                      type="text"
                      name="dropoff"
                      value={formData.dropoff}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1F3A5F] focus:ring-2 focus:ring-[#1F3A5F]/20 transition-all duration-300 outline-none"
                      placeholder="City, State"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1F3A5F] mb-2">
                    Your message (optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1F3A5F] focus:ring-2 focus:ring-[#1F3A5F]/20 transition-all duration-300 outline-none min-h-[120px] resize-none"
                    placeholder="Tell us about your vehicle and any special requirements..."
                  ></textarea>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="policy"
                    className="mt-1 w-5 h-5 text-[#B23A2F] focus:ring-[#B23A2F]"
                    required
                  />
                  <label htmlFor="policy" className="text-gray-600 text-sm">
                    By providing your details you agree to receive transactional SMS according to our{' '}
                    <a href="/privacy-policy" className="text-[#B23A2F] font-semibold hover:underline">Privacy Policy</a>
                  </label>
                </div>

                <button
                  type="submit"
                
                  className="w-full py-4 bg-[#1F3A5F] text-white rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 shadow-lg"
                >
                  Get Free Quote
                </button>
              </form>
      
        </div>
      </div>
    </div>
  </div>
</section>

      
   <div className="bg-[#F2E9D8] text-[#1F3A5F]">
     

     
         {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Us
        </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
            
            {
              title: "On Time Shipping",
               icon:<Clock className="w-8 h-8" />,
              desc:
                "We value your time — guaranteed on-time pickup and delivery, every single time, without excuses",
            },
            {
              title: "Licensed And Insured",
               icon:<ShieldCheck className="w-8 h-8" />,
              desc:
                "Fully licensed and insured for your complete peace of mind — your vehicle is protected every mile of the journey.",
            },
            {
              title: "Quick Response",
               icon:<MessageCircle className="w-8 h-8" />,
              desc:
                "Speedy support is our standard — quick answers, instant updates, and zero delays in communication.",
            },
            {
              title: "Trained Workers",
               icon:<HardHat className="w-8 h-8" />,
              desc:
                "Skilled professionals who know the ins and outs of vehicle logistics, ensuring safe and timely transport every time",
            },
            
          ].map((item, index) => (
              <div 
                key={index}
                className="group bg-[#F2E9D8]/50 p-8 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-[#1F3A5F]/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#1F3A5F] to-[#B23A2F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1F3A5F] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
       {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-center text-sm font-semibold text-[#B23A2F] mb-2">
          Understanding Our Pricing
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Transparent Auto Transport Pricing
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-12 text-[#1F3A5F]/80">
          We believe in complete pricing transparency. Here are the key factors
          that influence your shipping quote:
        </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
            {
              title: "Vehicle Specifications",
               icon:<Car className="w-8 h-8" />,
              desc:
                "The size, weight, and type of your vehicle affect shipping costs. Larger vehicles like SUVs or trucks may require special equipment or handling. We provide competitive rates for all vehicle types.",
            },
           
            {
              title: "Distance & Route",
              icon:<Route className="w-8 h-8" />,
              desc:
                "Longer distances have a higher total cost but lower per-mile rates. Popular routes often offer better pricing due to carrier availability. We optimize routes for cost-effectiveness.",
            },
            {
              title: "Vehicle Condition",
              icon:<Wrench className="w-8 h-8" />,
              desc:"Non-running vehicles require special equipment for loading and unloading, which affects the price. Our team has extensive experience handling both operable and inoperable vehicles safely.",
            },
            {
              title: "Seasonal Timing",
              icon:<Calendar className="w-8 h-8" />,
              desc:
                "Transport costs can vary by season. Summer months and snowbird routes typically see higher demand. Book in advance for the best rates and availability.",
            },
            
          ].map((item, index) => (
              <div 
                key={index}
                className="group bg-[#F2E9D8]/50 p-8 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-[#1F3A5F]/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#1F3A5F] to-[#B23A2F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1F3A5F] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


            <section className="py-20 ">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
            <Counter end={3} label="Years in Business" className="!text-[#1F3A5F]" />
            <Counter end={53520} label="Happy Clients" className="text-[#1F3A5F]"  />
            <Counter end={563} label="Daily Project Completed" className="text-[#1F3A5F]"  />
            <Counter end={173} label="Trained Staff" className="text-[#1F3A5F]" />
          </div>
        </div>
      </section>
   
    </div>


 
 

<Footer/>

    </div>
  );
}
