import { useNavigate } from 'react-router-dom';

const InvestmentTips = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <button onClick={() => navigate(-1)} className="mb-6 flex items-center gap-2 text-[#7EBE41] hover:text-green-700 font-semibold text-base transition"><span className="text-xl">←</span> Back</button>
      <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">Investment Tips</h1>
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Smart Investment Strategies</h2>
          <p className="text-gray-700">Investing is key to building wealth and achieving your financial goals. Here are some essential tips for successful investing:</p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-1">1. Diversify Your Portfolio</h2>
          <p className="text-gray-700 mb-2">Don't put all your eggs in one basket. Spread your investments across different asset classes like stocks, bonds, real estate, and gold to reduce risk.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-1">2. Understand Risk</h2>
          <p className="text-gray-700 mb-2">Every investment carries some risk. Assess your risk tolerance and choose investments that match your comfort level and financial goals.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-1">3. Start Early & Use Compounding</h2>
          <p className="text-gray-700 mb-2">The earlier you start investing, the more you benefit from compounding returns. Even small amounts can grow significantly over time.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-1">4. Think Long-Term</h2>
          <p className="text-gray-700 mb-2">Avoid chasing quick profits. Stay invested for the long term to ride out market fluctuations and maximize growth.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-1">5. Review Regularly</h2>
          <p className="text-gray-700 mb-2">Monitor your investments and rebalance your portfolio as needed to stay aligned with your goals.</p>
        </section>
      </div>
    </div>
  );
};

export default InvestmentTips; 