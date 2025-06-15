import { useNavigate } from 'react-router-dom';

const FourWheelerLoan = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Back Button - fixed bottom left, small */}
      <button onClick={() => navigate(-1)} className="fixed left-4 bottom-4 flex items-center gap-2 bg-gradient-to-r from-[#7EBE41] to-green-600 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:from-green-600 hover:to-[#7EBE41] transition-all duration-300 text-sm px-4 py-1.5 z-50">
        <span className="text-lg">←</span> Back
      </button>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-700 mb-4">Four Wheeler Loan</h1>
        <p className="text-xl text-gray-600">Drive your dream car with our comprehensive car financing solutions</p>
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
                  <h3 className="font-semibold">Up to 100% Financing</h3>
                  <p className="text-gray-600">Get funding for the entire on-road price of your car</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#7EBE41] mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Attractive Interest Rates</h3>
                  <p className="text-gray-600">Starting from 8.99% p.a. with flexible repayment options</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#7EBE41] mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Extended Loan Tenure</h3>
                  <p className="text-gray-600">Repayment tenure up to 7 years for comfortable EMIs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#7EBE41] mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Quick Processing</h3>
                  <p className="text-gray-600">Fast approval with minimal documentation requirements</p>
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
                  <p className="text-gray-600">Aadhaar Card, PAN Card, Voter ID, or Passport</p>
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
                  <p className="text-gray-600">Utility Bills, Rental Agreement, or Passport</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#7EBE41] mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Income Proof</h3>
                  <p className="text-gray-600">Salary Slips, Bank Statements, or ITR Returns</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#7EBE41] mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Vehicle Documents</h3>
                  <p className="text-gray-600">Car quotation, RC (for used cars), Insurance details</p>
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
                  <p className="text-gray-600">21-60 years old</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#7EBE41] mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Income</h3>
                  <p className="text-gray-600">Minimum ₹30,000 per month for salaried individuals</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#7EBE41] mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Employment</h3>
                  <p className="text-gray-600">Minimum 2 years of work experience</p>
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
                  <p className="text-gray-600">Minimum CIBIL score of 700</p>
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
                  <h3 className="font-semibold">Online Application</h3>
                  <p className="text-gray-600">Fill out our simple online application form with your details</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#7EBE41] text-white flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold">Document Submission</h3>
                  <p className="text-gray-600">Upload the required documents for verification</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#7EBE41] text-white flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold">Verification & Assessment</h3>
                  <p className="text-gray-600">Our team verifies your documents and assesses eligibility</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#7EBE41] text-white flex items-center justify-center flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold">Loan Approval & Disbursement</h3>
                  <p className="text-gray-600">Get your loan approved and amount disbursed to the dealer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-[#7EBE41]/10 to-green-600/10 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Drive Your Dream Car?</h2>
        <p className="text-gray-600 mb-6">Apply now and get your car loan approved quickly!</p>
        <button onClick={() => navigate('/enquire')} className="bg-gradient-to-r from-[#7EBE41] to-green-600 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:from-green-600 hover:to-[#7EBE41] transition-all duration-300">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default FourWheelerLoan; 