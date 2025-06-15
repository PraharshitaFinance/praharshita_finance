import { useNavigate } from 'react-router-dom';

const GoldLoan = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Back Button - fixed bottom left, small */}
      <button onClick={() => navigate(-1)} className="fixed left-4 bottom-4 flex items-center gap-2 bg-gradient-to-r from-[#7EBE41] to-green-600 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:from-green-600 hover:to-[#7EBE41] transition-all duration-300 text-sm px-4 py-1.5 z-50">
        <span className="text-lg">←</span> Back
      </button>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-700 mb-4">Gold Loan</h1>
        <p className="text-xl text-gray-600">Get instant loans against your gold with attractive interest rates</p>
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
                  <h3 className="font-semibold">High Value Loans</h3>
                  <p className="text-gray-600">Up to 75% of your gold's market value</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#7EBE41] mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Low Interest Rates</h3>
                  <p className="text-gray-600">Starting from 7.50% p.a. with flexible terms</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#7EBE41] mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Instant Disbursement</h3>
                  <p className="text-gray-600">Get your loan amount within 30 minutes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#7EBE41] mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Secure Storage</h3>
                  <p className="text-gray-600">Fully insured storage in bank-grade vaults</p>
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
                  <h3 className="font-semibold">Identity Proof</h3>
                  <p className="text-gray-600">Aadhaar Card, PAN Card, or Voter ID</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#7EBE41] mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Address Proof</h3>
                  <p className="text-gray-600">Recent Utility Bills or Rental Agreement</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#7EBE41] mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Gold Documents</h3>
                  <p className="text-gray-600">Purchase receipts or valuation certificates (if available)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#7EBE41] mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Photographs</h3>
                  <p className="text-gray-600">Recent passport-size photographs</p>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Age</h3>
                  <p className="text-gray-600">18 years and above</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#7EBE41] mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Gold Quality</h3>
                  <p className="text-gray-600">18-24 carat gold jewelry or coins</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#7EBE41] mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Ownership</h3>
                  <p className="text-gray-600">Clear ownership of gold assets</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#7EBE41] mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Residency</h3>
                  <p className="text-gray-600">Indian resident with valid address proof</p>
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
                  <h3 className="font-semibold">Visit Branch</h3>
                  <p className="text-gray-600">Visit our nearest branch with your gold and documents</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#7EBE41] text-white flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold">Gold Assessment</h3>
                  <p className="text-gray-600">Expert evaluation of your gold's purity and value</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#7EBE41] text-white flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold">Documentation</h3>
                  <p className="text-gray-600">Complete simple documentation process</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#7EBE41] text-white flex items-center justify-center flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold">Instant Disbursement</h3>
                  <p className="text-gray-600">Get your loan amount immediately</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-[#7EBE41]/10 to-green-600/10 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Need Quick Funds?</h2>
        <p className="text-gray-600 mb-6">Get an instant gold loan with minimal documentation!</p>
        <button onClick={() => navigate('/enquire')} className="bg-gradient-to-r from-[#7EBE41] to-green-600 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:from-green-600 hover:to-[#7EBE41] transition-all duration-300">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default GoldLoan; 