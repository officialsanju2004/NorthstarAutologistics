import { useNavigate } from 'react-router-dom';
import logo from '../../Images/logo.jpg'
export default function Footer() {
  
  const navigate=useNavigate();
  
  return (
    <footer className="bg-[#1F3A5F] text-white">
      {/* CTA SECTION */}
      <div className="px-6 md:px-20 py-14 border-b border-white/20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          Don't Know What To Start With?
        </h2>
        <p className="text-[#F2E9D8] mb-6">
          Get a Solution For All Type Shipping
        </p>

        <div className="flex gap-4">
      

          <a
            href="tel:+12093958481" 
            className="border border-white px-6 py-3 rounded-md font-semibold flex items-center gap-2"
          >
            📞 Call Us Now
          </a>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="px-6 md:px-20 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* ABOUT */}
        <div>
          {/* replace src with your logo path */}
          <img
            src={logo}
            alt="Northstar Autologstics LLC,California"
            className="w-40 mb-5 onject-cover rounded-full"
          />

          <p className="text-[#F2E9D8] leading-relaxed text-sm">
            USDOT- 4512614 <br />
            MC NUMBER- MC01786772 <br />
            <br />
            Northstar Autologstics LLC,California we pride ourselves on delivering top-tier auto
            transport services at some of the most competitive prices in the
            market.Logistic, we pride ourselves on delivering top-tier auto
            transport services at some of the most competitive prices in the
            market.
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Contact Us</h3>
          <p className="text-[#F2E9D8] leading-7 text-sm">
            Address - 2027 Bright Star Pl,Stockton, CA 95209 <br />
            <br />
            <br />
            Call Us- +1(209)395-8481 <br />
            Email Us- Info@northstarautologistics.com
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
          <ul className="space-y-3 text-[#F2E9D8] text-sm">
            <li>
              <a href="/" className="ml-2 hover:text-white">
                Home
              </a>
            </li>
          
            <li>
              <a href="/about" className="ml-2 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="ml-2 hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/contact" className="ml-2 hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      
<div className="border-t border-white/20 px-4 md:px-20 py-4
flex flex-col items-center gap-2 text-[#F2E9D8]">

  {/* LINE 1 */}
  <div className="
    flex items-center justify-center gap-1
    text-xs md:text-base
    whitespace-nowrap
    text-center
  ">
    <span>© {new Date().getFullYear()}</span>
    <span
      onClick={() => window.location.href = 'https://northstarautologistics.com'}
      className="cursor-pointer text-[#B23A2F] font-semibold"
    >
      northstarautologistics.com
    </span>
  </div>

  {/* LINE 2 */}
  <div className="
    flex items-center justify-center gap-1
    text-xs md:text-base
    text-center
  ">
    <span>Developed and Managed by</span>
    <span
      onClick={() => window.location.href = 'https://growthflowmedia.com'}
      className="cursor-pointer text-[#B23A2F] font-semibold"
    >
      GROWTH FLOW MEDIA
    </span>
  </div>

</div>
    </footer>
  );
}
