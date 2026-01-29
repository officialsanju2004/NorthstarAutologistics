
import { Wallet, BadgeCheck, Eye, Goal } from "lucide-react";
import { Truck, Shield, Star, Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight, ChevronRight, Users, Award, Link,Car,Route,Wrench,Calendar,Trophy,ShieldCheck,HardHat,Tag } from 'lucide-react';
import { Home, Info, MessageCircle, Youtube } from 'lucide-react';
import Footer from "./Footer";
import Navbar from "../Navbar";
import image7 from '../../Images/image7.jpg';
const About = () => {

  return (
    <>
    <Navbar/>
    <section className="bg-[#F2E9D8] py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center mt-20">
       
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1F3A5F] mb-6">
            Driven To Deliver – Northstar Autologstics LLC You Can Rely On
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            We are a professional and expert freight logistics provider dedicated
            to delivering seamless, safe, and timely transportation solutions.
            With years of industry experience, skilled teams, and modern
            equipment, we handle every shipment with utmost care and precision.
            Whether it’s auto logistics, heavy vehicles, or specialized freight,
            our commitment is to provide reliable services that meet your
            business needs.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Certified Company",
              "Satisfied Guaranteed",
              "Affordable",
              "Excellence Support",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="text-[#1F3A5F]" />
                <span className="text-gray-800 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
 <img
          src={image7}
          className="rounded-xl shadow-lg"
          alt="Flatbed Trailer"
        />
      </div>
    </section>
   {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Core Values
        </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
            {
              title: "Affordable",
               icon:<Trophy className="w-8 h-8" />,
              desc:
                "We offer premium auto transport services at the most affordable prices, with zero hidden charges",
            },
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
       <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          

          <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8">
        {[
            {
              title: "Our Mission",
               icon:<Goal className="w-8 h-8" />,
              desc:
                "Our mission is to provide reliable, efficient, and affordable freight logistics solutions that exceed customer expectations. We strive toensure safe and timely delivery of every shipment by leveraging skilled professionals, cutting-edge technology, and transparent communication. Our goal is to build long-term partnerships by consistently delivering excellence and making logistics hassle-free for businesses and individuals alike.",
            },
            {
              title: "Our Vision",
               icon:<Eye className="w-8 h-8" />,
              desc:"Our vision is to become the leading freight logistics provider known for innovation, reliability, and customer-centric solutions. We aim to revolutionize the transportation industry by integrating advanced technology, sustainable practices, and expert teams to deliver unmatched service quality. Our goal is to empower businesses with seamless logistics that drive growth, efficiency, and trust worldwide ",
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
    
    <Footer/>
    </>
  );
};
export default About;
