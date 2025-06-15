import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white flex items-center justify-between p-5 shadow-xl border-b border-gray-100">
      <div className="flex items-center space-x-2">
        <Link to="/">
          <div className="w-12 h-12 bg-lime-300 flex items-center justify-center text-black font-bold rounded-full shadow-md">
            ₹
          </div>
        </Link>
        <div>
          <Link to="/" className="transition-transform duration-200 hover:scale-105 hover:text-[#7EBE41] focus:outline-none">
            <h1 className="text-3xl font-extrabold text-gray-800 tracking-wide">PRAHARSHITA</h1>
          </Link>
          <h2 className="text-2xl text-blue-900 font-semibold">Finance Pvt Ltd</h2>
        </div>
      </div>

      {/* Center: Menu */}
      <nav className="hidden md:flex space-x-2 text-lg font-bold text-gray-700">
        <Link to="/loans" className="relative px-6 py-2.5 text-white bg-[#7EBE41] rounded-md overflow-hidden group hover:bg-blue-600 transition duration-300 font-bold after:content-[''] after:block after:h-0.5 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
          <span className="relative z-10 font-semibold">Loans Offered</span>
        </Link>
        <Link to="/about" className="relative px-6 py-2.5 text-white bg-[#7EBE41] rounded-md overflow-hidden group hover:bg-blue-600 transition duration-300 font-bold after:content-[''] after:block after:h-0.5 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
          <span className="relative z-10 font-semibold">About Us</span>
        </Link>
        <Link to="/discover" className="relative px-6 py-2.5 text-white bg-[#7EBE41] rounded-md overflow-hidden group hover:bg-blue-600 transition duration-300 font-bold after:content-[''] after:block after:h-0.5 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
          <span className="relative z-10 font-semibold">Discover</span>
        </Link>
        <Link to="/contact" className="relative px-6 py-2.5 text-white bg-[#7EBE41] rounded-md overflow-hidden group hover:bg-blue-600 transition duration-300 font-bold after:content-[''] after:block after:h-0.5 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
          <span className="relative z-10 font-semibold">Contact Us</span>
        </Link>
      </nav>

      {/* Right: Enquire Now Button */}
      <div className="hidden md:block ml-4">
        <Link to="/enquire" className="px-7 py-3 bg-gradient-to-r from-[#7EBE41] to-green-600 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:from-green-600 hover:to-[#7EBE41] transition-transform transition-colors duration-150 text-lg border-2 border-white">
          Enquire Now
        </Link>
      </div>
    </header>
  );
} 