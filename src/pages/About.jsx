import Layout from '../components/Layout';

function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Praharshita Finance</h1>

      {/* Mission Statement */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-600">
          At Praharshita Finance, we are committed to empowering individuals and businesses with accessible financial solutions. 
          Our mission is to provide innovative and customer-centric financial services that help our clients achieve their dreams 
          and build a secure future.
        </p>
      </div>

      {/* Company Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <p className="text-gray-600 mb-4">
            Founded with a vision to make financial services accessible to all, Praharshita Finance has grown to become 
            a trusted name in the financial sector. We combine traditional values with modern financial solutions to serve 
            our customers better.
          </p>
          <p className="text-gray-600">
            Our team of experienced professionals is dedicated to providing personalized financial solutions that meet 
            the unique needs of each client.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <div>
                <h3 className="font-semibold text-gray-900">Integrity</h3>
                <p className="text-gray-600">We conduct our business with the highest standards of ethics and transparency</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <div>
                <h3 className="font-semibold text-gray-900">Customer First</h3>
                <p className="text-gray-600">Our customers' success is our success</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <div>
                <h3 className="font-semibold text-gray-900">Innovation</h3>
                <p className="text-gray-600">We continuously evolve to provide better financial solutions</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold mb-2">Expert Guidance</h3>
            <p className="text-gray-600">Professional advice from experienced financial experts</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-lg font-semibold mb-2">Quick Processing</h3>
            <p className="text-gray-600">Fast and efficient loan processing</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-lg font-semibold mb-2">Personalized Service</h3>
            <p className="text-gray-600">Tailored solutions for your specific needs</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 