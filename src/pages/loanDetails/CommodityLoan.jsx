import { useNavigate } from 'react-router-dom';

const CommodityLoan = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Back Button - fixed bottom left, small */}
      <button onClick={() => navigate(-1)} className="fixed left-4 bottom-4 flex items-center gap-2 bg-gradient-to-r from-[#7EBE41] to-green-600 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:from-green-600 hover:to-[#7EBE41] transition-all duration-300 text-sm px-4 py-1.5 z-50">
        <span className="text-lg">←</span> Back
      </button>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-700 mb-4">Commodity Loan</h1>
        <p className="text-xl text-gray-600">Specialized financing solutions for agricultural and commodity businesses</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Left Column */}
        <div className="space-y-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Loan Features</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-[#7EBE41] mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Flexible Loan Amount</h3>
                  <p className="text-gray-600">Up to 75% of commodity value</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#7EBE41] mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Competitive Interest Rates</h3>
                  <p className="text-gray-600">Starting from 11.99% p.a. with seasonal adjustments</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#7EBE41] mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Seasonal Repayment</h3>
                  <p className="text-gray-600">Aligned with harvest cycles and market conditions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#7EBE41] mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Warehouse Support</h3>
                  <p className="text-gray-600">Access to certified storage facilities</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Required Documents</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-[#7EBE41] mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Business Documents</h3>
                  <p className="text-gray-600">Trade License, GST Registration, Business PAN</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#7EBE41] mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Commodity Documents</h3>
                  <p className="text-gray-600">Warehouse Receipts, Quality Certificates</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#7EBE41] mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Financial Documents</h3>
                  <p className="text-gray-600">Bank Statements, ITR Returns, Trading History</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#7EBE41] mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">KYC Documents</h3>
                  <p className="text-gray-600">Aadhaar, PAN, Address Proof</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Eligibility Criteria</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-[#7EBE41] mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Business Experience</h3>
                  <p className="text-gray-600">Minimum 3 years in commodity trading/farming</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#7EBE41] mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Annual Turnover</h3>
                  <p className="text-gray-600">Minimum ₹50 lakhs per annum</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#7EBE41] mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Credit Score</h3>
                  <p className="text-gray-600">Minimum CIBIL score of 650</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#7EBE41] mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Commodity Quality</h3>
                  <p className="text-gray-600">Must meet quality standards and certifications</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Loan Process</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#7EBE41] text-white flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold">Application</h3>
                  <p className="text-gray-600">Submit application with commodity details</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#7EBE41] text-white flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold">Commodity Assessment</h3>
                  <p className="text-gray-600">Quality check and market value assessment</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#7EBE41] text-white flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold">Documentation</h3>
                  <p className="text-gray-600">Complete documentation and verification</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#7EBE41] text-white flex items-center justify-center flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold">Loan Disbursement</h3>
                  <p className="text-gray-600">Quick transfer to your business account</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-[#7EBE41]/10 to-green-600/10 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Need Financing for Your Commodities?</h2>
        <p className="text-gray-600 mb-6">Get quick commodity loans with flexible repayment options!</p>
        <button onClick={() => navigate('/enquire')} className="bg-gradient-to-r from-[#7EBE41] to-green-600 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:from-green-600 hover:to-[#7EBE41] transition-all duration-300">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default CommodityLoan; 