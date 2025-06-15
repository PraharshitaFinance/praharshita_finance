import { useNavigate } from 'react-router-dom';

const FinancialPlanning = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <button onClick={() => navigate(-1)} className="mb-6 flex items-center gap-2 text-[#7EBE41] hover:text-green-700 font-semibold text-base transition"><span className="text-xl">←</span> Back</button>
      <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">Financial Planning Guide</h1>
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Why Financial Planning?</h2>
          <p className="text-gray-700">Financial planning helps you manage your money wisely, achieve your goals, and secure your future. It involves budgeting, saving, investing, and protecting your assets.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-1">1. Budgeting</h2>
          <p className="text-gray-700 mb-2">Track your income and expenses to understand where your money goes. Use the 50/30/20 rule: 50% for needs, 30% for wants, 20% for savings/investments.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-1">2. Emergency Fund</h2>
          <p className="text-gray-700 mb-2">Set aside 3-6 months of living expenses in a separate account for unexpected events like job loss or medical emergencies.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-1">3. Goal Setting</h2>
          <p className="text-gray-700 mb-2">Define your short-term and long-term financial goals (buying a house, children's education, retirement) and plan your savings accordingly.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-1">4. Investment Basics</h2>
          <p className="text-gray-700 mb-2">Start investing early. Diversify your investments across fixed deposits, mutual funds, stocks, and gold. Review your portfolio regularly.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-1">5. Protect Your Wealth</h2>
          <p className="text-gray-700 mb-2">Get adequate insurance (health, life, property) to safeguard your family and assets from unforeseen risks.</p>
        </section>
      </div>
    </div>
  );
};

export default FinancialPlanning; 