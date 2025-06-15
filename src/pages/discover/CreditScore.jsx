import { useNavigate } from 'react-router-dom';

const CreditScore = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <button onClick={() => navigate(-1)} className="mb-6 flex items-center gap-2 text-[#7EBE41] hover:text-green-700 font-semibold text-base transition"><span className="text-xl">←</span> Back</button>
      <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">Credit Score Guide</h1>
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-2">What is a Credit Score?</h2>
          <p className="text-gray-700">A credit score is a 3-digit number that represents your creditworthiness. It is used by banks and lenders to decide whether to approve your loan or credit card application.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-1">Why Does It Matter?</h2>
          <p className="text-gray-700 mb-2">A higher credit score increases your chances of getting loans at better interest rates. A low score can lead to rejections or higher costs.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-1">How to Check Your Credit Score</h2>
          <p className="text-gray-700 mb-2">You can check your credit score for free once a year from credit bureaus like CIBIL, Experian, or Equifax. Many banks also offer this service online.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-1">Tips to Improve Your Credit Score</h2>
          <ul className="list-disc ml-6 text-gray-700 mb-2">
            <li>Pay your EMIs and credit card bills on time</li>
            <li>Keep your credit utilization low</li>
            <li>Avoid applying for too much credit at once</li>
            <li>Maintain a healthy mix of credit (secured and unsecured)</li>
            <li>Check your credit report regularly for errors</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CreditScore; 