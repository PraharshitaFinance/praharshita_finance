import { useState } from 'react';

const branches = [
  {
    name: 'Head Office',
    address: '123 Finance Street, Business District, Hyderabad, Telangana 500001',
    lat: 17.385044,
    lng: 78.486671
  },
  {
    name: 'Secunderabad Branch',
    address: '456 Market Road, Secunderabad, Telangana 500003',
    lat: 17.439929,
    lng: 78.498274
  },
  {
    name: 'Vijayawada Branch',
    address: '789 MG Road, Vijayawada, Andhra Pradesh 520010',
    lat: 16.506174,
    lng: 80.648015
  },
  {
    name: 'Warangal Branch',
    address: '101 Station Road, Warangal, Telangana 506002',
    lat: 17.978437,
    lng: 79.594054
  }
];

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  // A. Add state and initial value for selected branch
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ fullName: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="text-2xl">📍</div>
              <div>
                <h3 className="font-semibold text-gray-900">Address</h3>
                <p className="text-gray-600">
                  123 Finance Street<br />
                  Business District<br />
                  Hyderabad, Telangana 500001
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-2xl">📞</div>
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600">7416956789</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-2xl">✉️</div>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">info@praharshitafinance.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-2xl">⏰</div>
              <div>
                <h3 className="font-semibold text-gray-900">Business Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 1:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#7EBE41] to-green-600 text-white font-bold py-3 rounded-full shadow-lg hover:scale-105 hover:from-green-600 hover:to-[#7EBE41] transition-all duration-300 text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map and Branches Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
          {/* B. Update the iframe src dynamically */}
          <iframe
            title="Branch Map"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src={`https://maps.google.com/maps?q=${selectedBranch.lat},${selectedBranch.lng}&z=15&output=embed`}
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Branches</h2>
          <ul className="space-y-6">
            {branches.map((branch, idx) => (
              // C. Make each branch item clickable and update style
              <li
                key={idx}
                onClick={() => setSelectedBranch(branch)}
                className={`bg-white rounded-lg shadow p-4 cursor-pointer hover:bg-gray-100 transition${selectedBranch === branch ? ' ring-2 ring-[#7EBE41]' : ''}`}
              >
                <div className="font-semibold text-[#7EBE41] mb-1">{branch.name}</div>
                <div className="text-gray-700 text-sm">{branch.address}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact; 