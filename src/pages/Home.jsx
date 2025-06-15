import { useEffect } from 'react';

function Home({ splashVisible = false, onReady }) {
  useEffect(() => {
    if (onReady) onReady();
  }, [onReady]);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center min-h-[400px] md:min-h-[500px] bg-center bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,34,34,0.5),rgba(126,190,65,0.7)), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent z-0" />
        <div className="relative z-10 text-center px-4 py-20 md:py-32">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            Welcome to Praharshita Finance
          </h2>
          <div className="inline-block bg-white/80 text-[#7EBE41] font-bold px-6 py-2 rounded-full shadow mb-4 text-base md:text-lg">
            Trusted by 10,000+ customers
          </div>
          <p className="text-lg md:text-2xl text-white max-w-2xl mx-auto mb-8 drop-shadow">
            Empowering Growth, Enabling Dreams. Fast, transparent, and flexible finance for all your needs.
          </p>
          {/* Hide arrow if splashVisible is true */}
          {!splashVisible && (
            <div className="mt-12 flex justify-center">
              <span className="animate-bounce text-white text-3xl">⌄</span>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us / Pillars */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        <div className="bg-white/80 rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <div className="text-[#7EBE41] mb-2">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h4 className="font-bold text-lg mb-1">Trust & Transparency</h4>
          <p className="text-gray-600 text-sm">Clear terms, no hidden fees, and honest service.</p>
        </div>
        <div className="bg-white/80 rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <div className="text-[#7EBE41] mb-2">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h4 className="font-bold text-lg mb-1">Fast Approvals</h4>
          <p className="text-gray-600 text-sm">Quick loan processing and instant disbursal.</p>
        </div>
        <div className="bg-white/80 rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <div className="text-[#7EBE41] mb-2">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </div>
          <h4 className="font-bold text-lg mb-1">Flexible Solutions</h4>
          <p className="text-gray-600 text-sm">Personalized loans for every need.</p>
        </div>
        <div className="bg-white/80 rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <div className="text-[#7EBE41] mb-2">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
          </div>
          <h4 className="font-bold text-lg mb-1">Customer First</h4>
          <p className="text-gray-600 text-sm">Dedicated support and guidance at every step.</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        <div className="bg-white rounded-2xl shadow p-8">
          <div className="text-3xl font-bold text-[#7EBE41] mb-2">₹50 Cr+</div>
          <div className="text-gray-700 font-semibold">Disbursed</div>
        </div>
        <div className="bg-white rounded-2xl shadow p-8">
          <div className="text-3xl font-bold text-[#7EBE41] mb-2">10,000+</div>
          <div className="text-gray-700 font-semibold">Happy Customers</div>
        </div>
        <div className="bg-white rounded-2xl shadow p-8">
          <div className="text-3xl font-bold text-[#7EBE41] mb-2">10+</div>
          <div className="text-gray-700 font-semibold">Years in Business</div>
        </div>
        <div className="bg-white rounded-2xl shadow p-8">
          <div className="text-3xl font-bold text-[#7EBE41] mb-2">5</div>
          <div className="text-gray-700 font-semibold">Branches</div>
        </div>
      </section>

      {/* Body with gradient */}
      <main className="flex-1 bg-gradient-to-r from-green-50 to-white p-9 text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-8 uppercase tracking-wide">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First row */}
          <div className="bg-white/90 shadow-xl p-8 rounded-2xl flex flex-col items-center hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300 group backdrop-blur">
            <div className="text-[#7EBE41] mb-3 group-hover:scale-110 transition-transform">
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="9" className="fill-[#7EBE41]/10"/>
                <path d="M7 14h10M9 14c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM19 14c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" 
                  stroke="#7EBE41" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 8v3M10 9h4" stroke="#7EBE41" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h4 className="text-xl font-bold text-green-700 mb-2">Two Wheeler Loans</h4>
            <p className="text-gray-600">Affordable loans for new and used two-wheelers with flexible EMIs.</p>
          </div>
          <div className="bg-white/90 shadow-xl p-8 rounded-2xl flex flex-col items-center hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300 group backdrop-blur">
            <div className="text-[#7EBE41] mb-3 group-hover:scale-110 transition-transform">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-green-700 mb-2">Gold Loans</h4>
            <p className="text-gray-600">Secure loans against your gold assets with attractive interest rates.</p>
          </div>
          <div className="bg-white/90 shadow-xl p-8 rounded-2xl flex flex-col items-center hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300 group backdrop-blur">
            <div className="text-[#7EBE41] mb-3 group-hover:scale-110 transition-transform">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-green-700 mb-2">Business Loans</h4>
            <p className="text-gray-600">Boost your business with our specially designed loan offerings for entrepreneurs.</p>
          </div>
          {/* Second row */}
          <div className="bg-white/90 shadow-xl p-8 rounded-2xl flex flex-col items-center hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300 group backdrop-blur">
            <div className="text-[#7EBE41] mb-3 group-hover:scale-110 transition-transform">
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 11h14c.6 0 1 .4 1 1v3c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1z" 
                  stroke="#7EBE41" strokeWidth="2" strokeLinecap="round"/>
                <path d="M7 15c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM21 15c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" 
                  stroke="#7EBE41" strokeWidth="2"/>
                <path d="M5 11l2-4h10l2 4" stroke="#7EBE41" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h4 className="text-xl font-bold text-green-700 mb-2">Four Wheeler Loans</h4>
            <p className="text-gray-600">Easy loans for new and used cars with attractive rates and fast approval.</p>
          </div>
          <div className="bg-white/90 shadow-xl p-8 rounded-2xl flex flex-col items-center hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300 group backdrop-blur">
            <div className="text-[#7EBE41] mb-3 group-hover:scale-110 transition-transform">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-green-700 mb-2">Commodity Loans</h4>
            <p className="text-gray-600">Finance solutions for agricultural and commodity-based businesses to help you grow and manage your inventory.</p>
          </div>
          <div className="bg-white/90 shadow-xl p-8 rounded-2xl flex flex-col items-center hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300 group backdrop-blur">
            <div className="text-[#7EBE41] mb-3 group-hover:scale-110 transition-transform">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-green-700 mb-2">Personal Loans</h4>
            <p className="text-gray-600">Quick and easy personal loans to meet your financial needs with minimal documentation.</p>
          </div>
        </div>
      </main>

      {/* Testimonials Section */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">What Our Customers Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#7EBE41] flex items-center justify-center text-white text-2xl font-bold mb-3">A</div>
            <p className="text-gray-700 italic mb-2">"Praharshita Finance made my business expansion possible. The process was smooth and transparent!"</p>
            <span className="font-semibold text-gray-900">Anil Kumar</span>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#7EBE41] flex items-center justify-center text-white text-2xl font-bold mb-3">S</div>
            <p className="text-gray-700 italic mb-2">"I got my gold loan approved in just a few hours. Highly recommended for quick finance!"</p>
            <span className="font-semibold text-gray-900">Sravani Reddy</span>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#7EBE41] flex items-center justify-center text-white text-2xl font-bold mb-3">M</div>
            <p className="text-gray-700 italic mb-2">"Excellent customer support and flexible repayment options. Thank you, Praharshita!"</p>
            <span className="font-semibold text-gray-900">Mahesh Gupta</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home; 