import Navbar from "../Navbar";
import Footer from "./Footer";


import { useEffect, useState } from "react";

import image9 from '../../Images/image9.jpg'
import bike1 from '../../Images/bike1.jpg'

import bike2 from '../../Images/bike2.jpg'

export default function BikeAtvTransport() {
    const images = [
  image9,bike1,bike2
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
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Open Trailer Vehicle Transport"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
             BIKE / ATV / RTV Transport
          </h1>
         
        </div>
      </div>
    </div>
    <section className="bg-[#F2E9D8] py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center mt-10">
   
               <div>
          <h2 className="text-4xl font-bold text-[#1F3A5F] mb-6">
            BIKE / ATV / RTV Transport
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-[#1F3A5F]">
            <li>Multi-Platform Transport Trucks – Ready for All Vehicle Types</li>
            <li>24/7 Customer Support – We’re Always Available for You</li>
            <li>Pay Only for What You Need – No Extra or Unused Charges</li>
            <li>No Hidden Fees – 100% Transparent Pricing</li>
            <li>Licensed, Bonded & Insured – Total Peace of Mind</li>
            <li>Timely & Reliable Service – We Deliver on Schedule, Always</li>
          </ul>
        </div>
        <div className="h-full flex items-center">
                   <img
                     src={image9}
                     className="rounded-xl shadow-lg w-full h-full max-h-[500px] object-cover"
                     alt="Specialized Transport"
                   />
                 </div>
                     
      </div>

        <div className="container mx-auto px-6 mt-10">
          <h2 className="text-4xl font-bold text-[#1F3A5F] mb-6">
            YOUR AUTO TRANSPORT NEEDS ARE AT THE HEART OF OUR BUSINESS
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-[#1F3A5F]">
            <li>With Aero Auto-Hauling, you save time, money, and effort. No more spending on fuel, oil changes, tire rotations, or the hidden costs of long-distance driving.</li>
            <li>Whether it’s a car or a bike, we provide nationwide, door-to-door transport, so you don’t have to make any extra arrangements. Our process is simple, efficient, and cost-effective, making it the smartest choice for vehicle shipping.</li>
            <li>Let us handle the journey—you just enjoy the peace of mind.</li>
               </ul>
        </div>
    </section>
    <Footer/>
    </>
  );
}