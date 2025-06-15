import { useNavigate } from 'react-router-dom';

const loanRoutes = {
  "Personal Loans": "personal",
  "Gold Loans": "gold",
  "Two Wheeler Loans": "two-wheeler",
  "Four Wheeler Loans": "four-wheeler",
  "Business Loans": "business",
  "Commodity Loans": "commodity"
};

function Loans() {
  const loanTypes = [
    {
      title: "Personal Loans",
      description: "Quick and easy personal loans to meet your financial needs with minimal documentation.",
      features: [
        "Loan amount up to ₹10 Lakhs",
        "Flexible repayment tenure up to 60 months",
        "Minimal documentation",
        "Quick approval process",
        "Competitive interest rates"
      ],
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    },
    {
      title: "Gold Loans",
      description: "Secure loans against your gold assets with attractive interest rates.",
      features: [
        "Loan against gold jewelry and coins",
        "Up to 75% of gold value",
        "Flexible repayment options",
        "Safe and secure storage",
        "Instant disbursement"
      ],
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    },
    {
      title: "Two Wheeler Loans",
      description: "Affordable loans for new and used two-wheelers with flexible EMIs.",
      features: [
        "Financing for new and used two-wheelers",
        "Up to 100% on-road price financing",
        "Flexible EMI options",
        "Quick processing",
        "Minimal documentation"
      ],
      icon: <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 14h10M9 14c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM19 14c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" 
          stroke="#7EBE41" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 8v3M10 9h4" stroke="#7EBE41" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    },
    {
      title: "Four Wheeler Loans",
      description: "Easy loans for new and used cars with attractive rates and fast approval.",
      features: [
        "Financing for new and used cars",
        "Up to 100% on-road price financing",
        "Flexible EMI options",
        "Quick processing",
        "Minimal documentation"
      ],
      icon: <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 11h14c.6 0 1 .4 1 1v3c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1z" 
          stroke="#7EBE41" strokeWidth="2" strokeLinecap="round"/>
        <path d="M7 15c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM21 15c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" 
          stroke="#7EBE41" strokeWidth="2"/>
        <path d="M5 11l2-4h10l2 4" stroke="#7EBE41" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    },
    {
      title: "Business Loans",
      description: "Boost your business with our specially designed loan offerings for entrepreneurs.",
      features: [
        "Working capital loans",
        "Equipment financing",
        "Business expansion loans",
        "Flexible repayment terms",
        "Collateral-free options available"
      ],
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    },
    {
      title: "Commodity Loans",
      description: "Finance solutions for agricultural and commodity-based businesses to help you grow and manage your inventory.",
      features: [
        "Loans for farmers, traders, and agri-businesses",
        "Flexible repayment options",
        "Quick disbursal and minimal paperwork",
        "Competitive interest rates",
        "Helps manage inventory and working capital"
      ],
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    }
  ];

  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Loan Products</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {loanTypes.map((loan, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col items-center p-8 hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300 group border border-gray-100"
          >
            <div className="text-[#7EBE41] mb-4 group-hover:scale-110 transition-transform drop-shadow-lg">{loan.icon}</div>
            <h2 className="text-2xl font-bold text-green-700 mb-2 text-center">{loan.title}</h2>
            <p className="text-gray-600 mb-4 text-center">{loan.description}</p>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Key Features:</h3>
            <ul className="space-y-2 mb-4">
              {loan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-gray-600 text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className="mt-auto w-full bg-gradient-to-r from-[#7EBE41] to-green-600 text-white py-2 px-4 rounded-full font-semibold shadow-lg hover:scale-105 hover:from-green-600 hover:to-[#7EBE41] transition-all duration-300"
              onClick={() => navigate(`/loans/${loanRoutes[loan.title]}`)}
            >
              Explore
            </button>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gray-50 rounded-2xl p-10 shadow-inner">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Why Choose Praharshita Finance?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-2">⚡</div>
            <h3 className="text-lg font-semibold mb-2">Quick Processing</h3>
            <p className="text-gray-600">Get your loan approved within 24 hours</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">💰</div>
            <h3 className="text-lg font-semibold mb-2">Competitive Rates</h3>
            <p className="text-gray-600">Best interest rates in the market</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🤝</div>
            <h3 className="text-lg font-semibold mb-2">Personal Support</h3>
            <p className="text-gray-600">Dedicated relationship manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loans; 