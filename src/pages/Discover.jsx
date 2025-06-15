import { Link } from 'react-router-dom';

function Discover() {
  const resources = [
    {
      title: "Financial Planning Guide",
      description: "Learn the basics of financial planning and how to achieve your financial goals.",
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>,
      link: "/discover/financial-planning"
    },
    {
      title: "Loan Calculator",
      description: "Calculate your EMI and plan your loan repayment effectively.",
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>,
      link: "/discover/loan-calculator"
    },
    {
      title: "Investment Tips",
      description: "Expert advice on making smart investment decisions.",
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>,
      link: "/discover/investment-tips"
    },
    {
      title: "Credit Score Guide",
      description: "Understand your credit score and how to improve it.",
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>,
      link: "/discover/credit-score"
    }
  ];

  const blogPosts = [
    {
      title: "How to Choose the Right Loan for Your Business",
      date: "June 10, 2024",
      excerpt: "Learn about different types of business loans and how to select the best one for your needs."
    },
    {
      title: "Understanding Gold Loan Interest Rates",
      date: "June 8, 2024",
      excerpt: "A comprehensive guide to gold loan interest rates and factors that affect them."
    },
    {
      title: "Tips for Better Financial Management",
      date: "June 5, 2024",
      excerpt: "Essential tips and strategies for managing your finances effectively."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Discover Financial Insights</h1>

      {/* Resources Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Financial Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <Link to={resource.link} key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 block">
              <div className="text-4xl mb-4">{resource.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
              <p className="text-gray-600">{resource.description}</p>
              <span className="mt-4 text-[#7EBE41] font-semibold hover:text-green-600 transition-colors duration-300 inline-block">Learn More →</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Blog Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <button className="text-[#7EBE41] font-semibold hover:text-green-600 transition-colors duration-300">
                    Read More →
                  </button>
                </div>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-50 rounded-lg p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for the latest financial insights and updates.
          </p>
          <form className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-[#7EBE41] text-white py-2 px-6 rounded-md hover:bg-green-600 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Discover; 