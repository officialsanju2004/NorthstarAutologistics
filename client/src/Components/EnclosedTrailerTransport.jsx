import Navbar from "../Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import image8 from '../../Images/image8.jpg'
import car1 from '../../Images/car1.png'
import car2 from '../../Images/car2.jpg'
import enclosed from '../../Images/enclosed.jpg'

export default function EnclosedTrailerTransport() {
     const images = [
   image8,car1,car2
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
            Enclosed Trailer Transport
          </h1>
        
        </div>
      </div>
    </div>
    <section className="bg-[#F2E9D8] py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center mt-10">
        <div>
          <h2 className="text-4xl font-bold text-[#1F3A5F] mb-6">
            Enclosed Trailer Transport
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-[#1F3A5F]">
            <li>Multi-Platform Transport Trucks, Always Ready</li>
            <li>24/7 Customer Support – We’re Just a Call Away</li>
            <li>Pay Only for What You Need – No Extra Charges</li>
            <li>Transparent Pricing – No Hidden Surprises</li>
            <li>Fully Licensed, Bonded & Insured for Your Protection</li>
            <li>Reliable & Timely Service – We Deliver as Promised</li>
          </ul>
        </div>
        <div className="h-full flex items-center">
                   <img
                     src={enclosed}
                     className="rounded-xl shadow-lg w-full h-full max-h-[500px] object-cover"
                     alt="Specialized Transport"
                   />
                 </div>

       

      </div>
    </section>
     <div className="container mx-auto px-6 mt-10">
          <h2 className="text-4xl font-bold text-[#1F3A5F] mb-6">
           We Specialize in Fulfilling All Your Auto Transport Needs
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-[#1F3A5F]">
            <li>When it comes to maximum protection, enclosed auto transport is the top choice. It keeps your vehicle safe from harsh weather, road debris, and unwanted attention during transit.</li>
            <li>There are two types of enclosed transport: soft-sided and hard-sided. While both offer protection, we recommend hard-sided enclosed carriers for the highest level of safety and peace of mind.</li>
            <li>This method shields your vehicle completely — rain, snow, dust, or rocks won’t stand a chance. Plus, it adds privacy by keeping your vehicle out of sight during the journey.

</li>
  <li>If you’re transporting a high-value car or just want total protection, hard-sided enclosed transport is the way to go.

</li>
               </ul>
        </div>
    <Footer/>
    </>
  );
}
