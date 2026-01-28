import Navbar from "../Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import image7 from '../../Images/image7.jpg'
import image15 from '../../Images/image15.jpg'

export default function FlatbedTrailer() {
     const images = [
    image7,image15
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
            Flatbed Trailer
          </h1>
         
        </div>
      </div>
    </div>
    <section className="bg-[#F2E9D8] py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center mt-10">

        <div>
          <h2 className="text-4xl font-bold text-[#1F3A5F] mb-6">
            Flatbed Trailer
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-[#1F3A5F]">
            <li>Multi-Level Transport Trucks – Ready for Any Vehicle Type</li>
            <li>24/7 Customer Support – We’re Always Here to Help</li>
            <li>Only Pay for What You Use – No Extra Costs</li>
            <li>No Hidden Fees – 100% Transparent Pricing</li>
            <li>Licensed, Bonded & Insured – Your Vehicle is in Safe Hands</li>
            <li>On-Time, Every Time – Reliable Service You Can Count On</li>
          </ul>
        </div>
         <div className="h-full flex items-center">
                    <img
                      src={image7}
                      className="rounded-xl shadow-lg w-full h-full max-h-[500px] object-cover"
                      alt="Specialized Transport"
                    />
                  </div>

      </div>
      <div className="container mx-auto px-6 mt-10">
          <h2 className="text-4xl font-bold text-[#1F3A5F] mb-6">
            We’re Focused on Fulfilling All Your Auto Transport Needs
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-[#1F3A5F]">
            <li>While flatbed trailers can technically transport standard vehicles, they’re typically reserved for special cases. Vehicles that are oversized — too tall, long, or wide for standard open or enclosed carriers — require flatbed auto transport.</li>
            <li>This service is ideal for transporting specialized or commercial vehicles that don’t fit conventional transport methods. Most requests for flatbed shipping come from businesses with unique vehicle transport needs.</li>
           
               </ul>
        </div>
      
       
    </section>
    <Footer/>
     </>
  );
}