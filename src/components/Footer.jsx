import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-[#222] text-white pt-12 pb-4 px-4 mt-16">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-700">
      {/* Logo & Tagline */}
      <div className="flex flex-col items-start">
        <div className="bg-[#7EBE41] rounded-full w-16 h-16 flex items-center justify-center mb-3">
          <span className="text-3xl font-bold text-white">₹</span>
        </div>
        <span className="text-2xl font-bold tracking-wide">PRAHARSHITA</span>
        <span className="text-lg text-[#7EBE41] font-semibold mb-2">Finance Pvt Ltd</span>
        <span className="text-sm text-gray-400">Your Trusted Financial Partner</span>
      </div>
      {/* Quick Links */}
      <div>
        <h3 className="font-bold text-lg mb-4 border-b border-[#7EBE41] pb-1 w-fit">Quick Links</h3>
        <ul className="space-y-2 text-gray-300">
          <li><Link to="/" className="hover:text-[#7EBE41] transition">Home</Link></li>
          <li><Link to="/loans" className="hover:text-[#7EBE41] transition">Loans Offered</Link></li>
          <li><Link to="/about" className="hover:text-[#7EBE41] transition">About Us</Link></li>
          <li><Link to="/discover" className="hover:text-[#7EBE41] transition">Discover</Link></li>
          <li><Link to="/contact" className="hover:text-[#7EBE41] transition">Contact Us</Link></li>
        </ul>
      </div>
      {/* Contact Info */}
      <div>
        <h3 className="font-bold text-lg mb-4 border-b border-[#7EBE41] pb-1 w-fit">Contact Info</h3>
        <ul className="text-gray-300 text-sm space-y-2">
          <li className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            123 Finance Street, Hyderabad, Telangana 500001
          </li>
          <li className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            7416956789
          </li>
          <li className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            info@praharshitafinance.com
          </li>
        </ul>
      </div>
      {/* About/Career */}
      <div>
        <h3 className="font-bold text-lg mb-4 border-b border-[#7EBE41] pb-1 w-fit">About</h3>
        <p className="text-gray-300 text-sm mb-2">Praharshita Finance is dedicated to providing transparent, reliable, and fast financial solutions for all your needs.</p>
        <Link to="/about" className="text-[#7EBE41] hover:underline text-sm">Learn More</Link>
      </div>
    </div>
    <div className="text-center text-xs text-gray-400 pt-4">Praharshita Finance Pvt Ltd © 2025. All Rights Reserved.</div>
  </footer>
);

export default Footer; 