import { useNavigate } from 'react-router-dom';

const TwoWheelerLoan = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Back Button - fixed bottom left, small */}
      <button onClick={() => navigate(-1)} className="fixed left-4 bottom-4 flex items-center gap-2 bg-gradient-to-r from-[#7EBE41] to-green-600 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:from-green-600 hover:to-[#7EBE41] transition-all duration-300 text-sm px-4 py-1.5 z-50">
        <span className="text-lg">←</span> Back
      </button>
      <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">Two Wheeler Loan</h1>
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">About Two Wheeler Loan</h2>
        <p className="text-gray-700 mb-4">Get affordable loans for new and used two-wheelers with flexible EMIs and minimal documentation. Ride your dream bike with ease!</p>
        <h3 className="text-xl font-semibold mb-2">Eligibility</h3>
        <ul className="list-disc ml-6 text-gray-600 mb-4">
          <li>Indian resident aged 21-60 years</li>
          <li>Valid driving license</li>
          <li>Stable income source</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">Process</h3>
        <ol className="list-decimal ml-6 text-gray-600 mb-4">
          <li>Apply online or at our branch</li>
          <li>Submit required documents</li>
          <li>Loan approval and disbursal</li>
        </ol>
      </div>
    </div>
  );
};

export default TwoWheelerLoan; 