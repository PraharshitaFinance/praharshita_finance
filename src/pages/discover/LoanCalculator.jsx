import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const minAmount = 10000;
const maxAmount = 200000;
const minInterest = 5;
const maxInterest = 32;
const minTenure = 1;
const maxTenure = 7;

function getEMI(principal, rate, years) {
  const n = years * 12;
  const r = rate / 12 / 100;
  if (principal > 0 && r > 0 && n > 0) {
    return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  }
  return 0;
}

export default function LoanCalculator() {
  const [amount, setAmount] = useState(50000);
  const [interest, setInterest] = useState(10);
  const [tenure, setTenure] = useState(3);
  const navigate = useNavigate();

  const emi = getEMI(amount, interest, tenure);
  const totalPayable = emi * tenure * 12;
  const interestPayable = totalPayable - amount;
  const percentPrincipal = (amount / totalPayable) * 100;
  const percentInterest = 100 - percentPrincipal;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-green-700 mb-2 text-center flex items-center justify-center gap-2">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
        Loan Calculator
      </h1>
      <p className="text-gray-600 text-center mb-8">Our user-friendly calculator will help determine your monthly EMIs and plan your budget at your convenience.</p>
      <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 mb-8 border border-[#e0f2d8] flex flex-col md:flex-row gap-8 items-start">
        {/* Steps */}
        <div className="flex-1 min-w-0">
          {/* Step 1 */}
          <div className="mb-8">
            <div className="font-bold text-gray-800 mb-2">STEP 01</div>
            <label className="block text-lg font-semibold mb-1">Required loan amount</label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min={minAmount}
                max={maxAmount}
                step={1000}
                value={amount}
                onChange={e => setAmount(Number(e.target.value))}
                className="w-full accent-[#7EBE41]"
              />
              <input
                type="number"
                min={minAmount}
                max={maxAmount}
                step={1000}
                value={amount}
                onChange={e => setAmount(Number(e.target.value))}
                className="w-28 border-2 border-gray-200 rounded-lg px-3 py-2 text-right focus:ring-2 focus:ring-[#7EBE41] focus:border-[#7EBE41]"
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Min ₹{minAmount.toLocaleString()}</span>
              <span>Max ₹{maxAmount.toLocaleString()}</span>
            </div>
          </div>
          {/* Step 2 */}
          <div className="mb-8">
            <div className="font-bold text-gray-800 mb-2">STEP 02</div>
            <label className="block text-lg font-semibold mb-1">Interest rate</label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min={minInterest}
                max={maxInterest}
                step={0.1}
                value={interest}
                onChange={e => setInterest(Number(e.target.value))}
                className="w-full accent-[#7EBE41]"
              />
              <input
                type="number"
                min={minInterest}
                max={maxInterest}
                step={0.1}
                value={interest}
                onChange={e => setInterest(Number(e.target.value))}
                className="w-20 border-2 border-gray-200 rounded-lg px-3 py-2 text-right focus:ring-2 focus:ring-[#7EBE41] focus:border-[#7EBE41]"
              />
              <span className="text-gray-700 font-semibold">%</span>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Min {minInterest}%</span>
              <span>Max {maxInterest}%</span>
            </div>
          </div>
          {/* Step 3 */}
          <div className="mb-8">
            <div className="font-bold text-gray-800 mb-2">STEP 03</div>
            <label className="block text-lg font-semibold mb-1">Tenure up to</label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min={minTenure}
                max={maxTenure}
                step={1}
                value={tenure}
                onChange={e => setTenure(Number(e.target.value))}
                className="w-full accent-[#7EBE41]"
              />
              <input
                type="number"
                min={minTenure}
                max={maxTenure}
                step={1}
                value={tenure}
                onChange={e => setTenure(Number(e.target.value))}
                className="w-20 border-2 border-gray-200 rounded-lg px-3 py-2 text-right focus:ring-2 focus:ring-[#7EBE41] focus:border-[#7EBE41]"
              />
              <span className="text-gray-700 font-semibold">years</span>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Min {minTenure} year</span>
              <span>Max {maxTenure} years</span>
            </div>
          </div>
        </div>
        {/* Summary */}
        <div className="w-full md:w-80 flex-shrink-0 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border border-[#e0f2d8]">
          <div className="mb-4">
            <svg width="100" height="100" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="#f3f3f3" />
              <circle
                cx="50" cy="50" r="40"
                fill="none"
                stroke="#7EBE41"
                strokeWidth="8"
                strokeDasharray={`${percentPrincipal} ${percentInterest}`}
                strokeDashoffset="25"
                transform="rotate(-90 50 50)"
              />
              <text x="50" y="55" textAnchor="middle" fontSize="22" fill="#7EBE41" fontWeight="bold">₹</text>
            </svg>
          </div>
          <div className="text-lg font-bold text-gray-800 mb-2">Loan Summary</div>
          <div className="flex flex-col gap-1 w-full text-sm mb-2">
            <div className="flex justify-between"><span className="text-gray-600">Loan Amount</span><span className="font-semibold">₹{amount.toLocaleString()}</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Interest Payable</span><span className="font-semibold">₹{interestPayable.toLocaleString(undefined, {maximumFractionDigits:0})}</span></div>
          </div>
          <div className="border-t border-gray-200 w-full my-2"></div>
          <div className="text-center text-gray-700 font-semibold">Monthly EMI</div>
          <div className="text-2xl font-bold text-green-700 mb-2">₹ {emi ? emi.toLocaleString(undefined, {maximumFractionDigits:0}) : 0}</div>
        </div>
      </div>
      {/* Back Button - bottom left of content, small */}
      <div className="pt-4 flex justify-start">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 bg-gradient-to-r from-[#7EBE41] to-green-600 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:from-green-600 hover:to-[#7EBE41] transition-all duration-300 text-sm px-4 py-1.5">
          <span className="text-lg">←</span> Back
        </button>
      </div>
      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#f7f7f7] border-t border-[#e0f2d8] py-4 px-4 flex flex-col md:flex-row items-center justify-between z-40 shadow-lg">
        <div className="text-gray-700 font-semibold text-center md:text-left mb-2 md:mb-0">Low Processing Charges & Quick Loan Disbursals</div>
        <Link to="/enquire" className="bg-gradient-to-r from-[#7EBE41] to-green-600 text-white font-bold px-8 py-2 rounded-full shadow-lg hover:scale-105 hover:from-green-600 hover:to-[#7EBE41] transition-transform transition-colors duration-150 text-lg">Enquire Now</Link>
      </div>
    </div>
  );
} 