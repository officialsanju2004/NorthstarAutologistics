import Navbar from "../Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import image11 from '../../Images/image11.jpg'
import boat1 from '../../Images/boat1.jpg'
import boat2 from '../../Images/boat2.jpg'

export default function BoatShipping() {
     const images = [
   image11,boat1,boat2
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
             Boat Shipping
          </h1>
         
        </div>
      </div>
    </div>
    <section className="bg-[#F2E9D8] py-16 ">
       
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center mt-10">
 <div>
          <h2 className="text-4xl font-bold text-[#1F3A5F] mb-6">
            Boat Shipping
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-[#1F3A5F]">
            <li>Transport Trucks with Multiple Platforms Accessible</li>
            <li>Customer Service Around-the-Clock for All Your Questions</li>
            <li>Pay Only for the Services That You Require</li>
            <li>No Unexpected Fees</li>
            <li>We Are Licensed, Bonded, And Insured</li>
            <li>Exceptional Services, Always Provided on Schedule</li>
          </ul>
        </div>
        <div className="h-full flex items-center">
                   <img
                     src={image11}
                     className="rounded-xl shadow-lg w-full h-full max-h-[500px] object-cover"
                     alt="Specialized Transport"
                   />
                 </div>

       
      </div>
       <div className="container mx-auto px-6 mt-10">
          <h2 className="text-4xl font-bold text-[#1F3A5F] mb-6">
            YOUR BOAT TRANSPORT NEEDS ARE AT THE HEART OF OUR BUSINESS
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-[#1F3A5F]">
            <li>Moving and need your boat transported? We’ve got you covered.
At Aero Auto Transport, we understand how stressful it can be to find a boat shipping company you can trust. That’s why our mission is simple — to give you a smooth, secure, and stress-free transport experience.</li>
            <li>Unlike others, we truly care about your concerns. Our team is dedicated to ensuring your boat arrives safely and on time, and our client reviews speak for themselves.</li>
            <li>With a well-equipped fleet and experienced crew, we can haul your boat anywhere across the country — with complete care and confidence.</li>
               </ul>
        </div>
    </section>
    <Footer/>
    </>
  );
}
