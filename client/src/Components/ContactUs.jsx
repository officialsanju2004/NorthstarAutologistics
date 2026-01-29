  
import { useState,useEffect } from "react";
  import { Truck, Shield, Star, Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight, ChevronRight, Users, Award, Link, MailIcon, LocateIcon } from 'lucide-react';
import { Home, Info, MessageCircle, Youtube } from 'lucide-react';
import Footer from "./Footer";
import Navbar from "../Navbar";
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
  
import image11 from '../../Images/image11.jpg'
import image8 from '../../Images/image8.jpg'

import image7 from '../../Images/image7.jpg'

import image10 from '../../Images/image10.jpg'

  export default function ContactUs() {
   
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        pickup: '',
        dropoff: '',
        message: ''
      });
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
        Navigate("/success-page")
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
  const images = [
  image8,image7,image11,image10
];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
   <Navbar/>
       <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        <ToastContainer/>
     
  {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="contact us"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"/>
   

     
 
    </div>

<section className="py-20 bg-[#F2E9D8] ">
 
 
   
        <div className="container mx-auto px-6 mt-30">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl font-bold text-[#1F3A5F] mb-6">
               Request a Free Quote
              </h2>
              <p className="text-lg font-bold text-[#1F3A5F] mb-8 leading-relaxed">
             Disclaimer         </p>
               <p className="text-lg  text-[#1F3A5F] mb-8 leading-relaxed">
         By providing my phone number to “American Auto Hauling“, I agree and acknowledge that “American Auto Hauling” may send text messages to my wireless phone number for any purpose. Message and data rates may apply. Message frequency will vary, and you will be able to opt out by replying “STOP”, assistance can be found by texting “HELP”. For more information on how your data will be handled please visit:<a href="/privacy-policy" className="text-red-700"> Privacy policy </a>              </p>
              
      

<div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 bg-gradient-to-r from-[#1F3A5F]/5 to-transparent rounded-xl border border-[#1F3A5F]/10">

  
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
        +1 (209) 395-8481
      </a>
    </div>
  </div>
  
  
</div>
<div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 bg-gradient-to-r from-[#1F3A5F]/5 to-transparent rounded-xl border border-[#1F3A5F]/10">

  
  <div className="hidden sm:block w-px h-6 bg-[#1F3A5F]/20"></div>
  
  <div className="flex items-center gap-3">
    <div className="bg-[#1F3A5F] text-white p-2 rounded-lg">
      <MapPin className="w-5 h-5" />
    </div>
    <div>
      <p className="text-xs font-medium text-gray-600">Address</p>
      <a 
        
        className="text-xl md:text-2xl font-bold text-[#1F3A5F] hover:text-[#B23A2F] transition-colors"
      >
        2027 Bright Star Pl, Stockton, CA 95209
      </a>
    </div>
  </div>
  
  
</div>
<div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 bg-gradient-to-r from-[#1F3A5F]/5 to-transparent rounded-xl border border-[#1F3A5F]/10">

  
  <div className="hidden sm:block w-px h-6 bg-[#1F3A5F]/20"></div>
  
  <div className="flex items-center gap-3">
    <div className="bg-[#1F3A5F] text-white p-2 rounded-lg">
      <MailIcon className="w-5 h-5" />
    </div>
    <div>
      <p className="text-xs font-medium text-gray-600">Email Us</p>
      <a 
        
        className="text-xl md:text-2xl font-bold text-[#1F3A5F] hover:text-[#B23A2F] transition-colors"
      >
        Northstarautologistics@gmail.com
      </a>
    </div>
  </div>
  
  
</div>


              
              <div className="space-y-6">
               
           
           
                
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
     <Footer/>
    

</>
  )
}
  
