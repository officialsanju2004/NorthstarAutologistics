import Navbar from "../Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";

import image2 from '../../Images/image2.jpg'
import image14 from '../../Images/image14.webp'
import heavy from '../../Images/heavy.jpg'

export default function HeavyVehicleTransport() {
     const images = [
     image2,image14
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
              Heavy Vehicle Transport
          </h1>
        
        </div>
      </div>
    </div>
    <section className="bg-[#F2E9D8] py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center mt-10">
<div>
          <h2 className="text-4xl font-bold text-[#1F3A5F] mb-6">
            Heavy Vehicle Transport
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
                     src={heavy}
                     className="rounded-xl shadow-lg w-full h-full max-h-[500px] object-cover"
                     alt="Specialized Transport"
                   />
                 </div>

        
      </div>
       <div className="container mx-auto px-6 mt-10">
          <h2 className="text-4xl font-bold text-[#1F3A5F] mb-6">
            We’re Here to Handle All Your Auto Transport Needs
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-[#1F3A5F]">
            <li>One of the most common ways to move vehicles is through open-air transport. This method typically involves loading your car onto a multi-vehicle carrier along with several others — the kind of trucks you usually see delivering cars to dealerships.</li>
            <li>While open carriers are affordable and efficient, they do leave vehicles exposed to the elements. If you’re shipping just one vehicle, it can also be done on a flatbed truck, but that usually comes with a higher price tag.</li>
            <li>Although open-air shipping is budget-friendly and widely used, some customers prefer the extra protection of enclosed transport — especially if they’re concerned about weather conditions, road debris, or simply want greater peace of mind for their vehicle.</li>
               </ul>
        </div>
    </section>
<Footer/>
    </>
  );
}
