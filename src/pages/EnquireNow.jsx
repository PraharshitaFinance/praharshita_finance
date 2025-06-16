import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from "axios";
const loanTypes = [
  'Personal Loan',
  'Gold Loan',
  'Two Wheeler Loan',
  'Four Wheeler Loan',
  'Business Loan',
  'Commodity Loan',
];

const employmentTypes = [
  'Salaried',
  'Self-Employed',
  'Business Owner',
  'Farmer',
  'Other'
];

const indianStates = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  'Andaman and Nicobar Islands',
  'Chandigarh',
  'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi',
  'Jammu and Kashmir',
  'Ladakh',
  'Lakshadweep',
  'Puducherry'
];

const districts = [
  {
    name: 'Anantapur',
    cities: ['Anantapur', 'Dharmavaram', 'Guntakal', 'Hindupur', 'Kadiri', 'Tadipatri', 'Kalyanadurgam', 'Rayadurg', 'Puttaparthi']
  },
  {
    name: 'Chittoor',
    cities: ['Tirupati', 'Chittoor', 'Madanapalle', 'Srikalahasti', 'Puttur', 'Nagari', 'Palamaner', 'Punganur']
  },
  {
    name: 'East Godavari',
    cities: ['Kakinada', 'Rajahmundry', 'Amalapuram', 'Tuni', 'Mandapeta', 'Peddapuram', 'Samalkot', 'Pithapuram']
  },
  {
    name: 'Guntur',
    cities: ['Guntur', 'Tenali', 'Narasaraopet', 'Chilakaluripet', 'Bapatla', 'Piduguralla', 'Mangalagiri', 'Vinukonda']
  },
  {
    name: 'Krishna',
    cities: ['Vijayawada', 'Machilipatnam', 'Gudivada', 'Jaggayyapeta', 'Nuzvid', 'Nandigama', 'Vuyyuru', 'Tiruvuru']
  },
  {
    name: 'Kurnool',
    cities: ['Kurnool', 'Nandyal', 'Adoni', 'Yemmiganur', 'Dhone', 'Atmakur', 'Nandikotkur', 'Allagadda']
  },
  {
    name: 'Prakasam',
    cities: ['Ongole', 'Markapur', 'Chirala', 'Kandukur', 'Addanki', 'Chimakurthy', 'Giddalur', 'Podili']
  },
  {
    name: 'Nellore',
    cities: ['Nellore', 'Kavali', 'Gudur', 'Sullurpeta', 'Venkatagiri', 'Atmakur', 'Buchireddypalem', 'Naidupeta']
  },
  {
    name: 'Srikakulam',
    cities: ['Srikakulam', 'Amadalavalasa', 'Palasa', 'Ichapuram', 'Rajam', 'Palakonda', 'Tekkali', 'Narasannapeta']
  },
  {
    name: 'Visakhapatnam',
    cities: ['Visakhapatnam', 'Gajuwaka', 'Anakapalle', 'Bheemunipatnam', 'Narsipatnam', 'Chodavaram', 'Yelamanchili', 'Pendurthi']
  },
  {
    name: 'Vizianagaram',
    cities: ['Vizianagaram', 'Bobbili', 'Parvathipuram', 'Cheepurupalli', 'Salur', 'Gajapathinagaram', 'Nellimarla']
  },
  {
    name: 'West Godavari',
    cities: ['Eluru', 'Bhimavaram', 'Tadepalligudem', 'Tanuku', 'Narsapur', 'Palacole', 'Kovvur', 'Jangareddygudem']
  },
  {
    name: 'YSR Kadapa',
    cities: ['Kadapa', 'Proddatur', 'Rajampet', 'Pulivendla', 'Jammalamadugu', 'Rayachoti', 'Badvel', 'Mydukur']
  }
];

const loanSummaries = [
  {
    name: 'Personal Loan',
    desc: 'Quick and easy loans for personal needs like education, travel, or emergencies.'
  },
  {
    name: 'Gold Loan',
    desc: 'Get instant funds by pledging your gold jewelry or coins at attractive rates.'
  },
  {
    name: 'Two Wheeler Loan',
    desc: 'Affordable loans for new and used two-wheelers with flexible EMIs.'
  },
  {
    name: 'Four Wheeler Loan',
    desc: 'Easy loans for new and used cars with fast approval and attractive rates.'
  },
  {
    name: 'Business Loan',
    desc: 'Finance for entrepreneurs and businesses to grow, expand, or manage capital.'
  },
  {
    name: 'Commodity Loan',
    desc: 'Loans for farmers, traders, and agri-businesses to manage inventory and growth.'
  },
];

const vehicleOptions = ['New', 'Used'];

function LoanFlipTile({ name, desc }) {
  return (
    <div className="flip-card w-full h-32 cursor-pointer">
      <div className="flip-card-inner w-full h-full">
        <div className="flip-card-front flex items-center justify-center bg-gradient-to-r from-[#7EBE41] to-green-600 text-white font-bold text-lg rounded-2xl shadow-lg">
          {name}
        </div>
        <div className="flip-card-back flex items-center justify-center bg-white text-gray-800 font-semibold text-sm rounded-2xl shadow-lg p-4">
          {desc}
        </div>
      </div>
    </div>
  );
}

const EnquireNow = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [availableCities, setAvailableCities] = useState([]);
  const [errors, setErrors] = useState({});
  
  const [form, setForm] = useState({
    // Personal Information
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    district: '',
    city: '',
    pincode: '',
    
    // Documents & Income
    panCard: '',
    aadhaarNumber: '',
    employmentType: '',
    monthlyIncome: '',
    companyName: '',
    workExperience: '',
    
    // Loan Details
    loanType: '',
    vehicleCondition: '',
    loanAmount: '',
    loanPurpose: '',
    tenure: ''
  });

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'fullName':
        if (!value.trim()) {
          error = 'Full name is required';
        } else if (!/^[a-zA-Z\s]{2,50}$/.test(value.trim())) {
          error = 'Please enter a valid name (2-50 characters)';
        }
        break;
      
      case 'email':
        if (!value) {
          error = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;
      
      case 'phone':
        if (!value) {
          error = 'Phone number is required';
        } else if (!/^[6-9]\d{9}$/.test(value)) {
          error = 'Please enter a valid 10-digit mobile number';
        }
        break;
      
      case 'dateOfBirth':
        if (!value) {
          error = 'Date of birth is required';
        } else {
          const age = new Date().getFullYear() - new Date(value).getFullYear();
          if (age < 18) {
            error = 'You must be at least 18 years old';
          } else if (age > 60) {
            error = 'Age cannot be more than 60 years';
          }
        }
        break;
      
      case 'address':
        if (!value.trim()) {
          error = 'Address is required';
        } else if (value.trim().length < 10) {
          error = 'Please enter complete address';
        }
        break;
      
      case 'district':
        if (!value) {
          error = 'Please select your district';
        }
        break;
      
      case 'city':
        if (!value) {
          error = 'Please select your city';
        }
        break;
      
      case 'pincode':
        if (!value) {
          error = 'Pincode is required';
        } else if (!/^\d{6}$/.test(value)) {
          error = 'Please enter a valid 6-digit pincode';
        }
        break;
      
      case 'panCard':
        if (!value) {
          error = 'PAN Card number is required';
        } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(value)) {
          error = 'Please enter a valid PAN Card number';
        }
        break;
      
      case 'aadhaarNumber':
        if (!value) {
          error = 'Aadhaar number is required';
        } else if (!/^\d{12}$/.test(value)) {
          error = 'Please enter a valid 12-digit Aadhaar number';
        }
        break;
      
      case 'employmentType':
        if (!value) {
          error = 'Please select your employment type';
        }
        break;
      
      case 'monthlyIncome':
        if (!value) {
          error = 'Monthly income is required';
        } else if (value < 10000) {
          error = 'Monthly income should be at least ₹10,000';
        }
        break;
      
      case 'companyName':
        if (!value.trim()) {
          error = 'Company/Business name is required';
        }
        break;
      
      case 'workExperience':
        if (!value) {
          error = 'Work experience is required';
        } else if (value < 0) {
          error = 'Work experience cannot be negative';
        } else if (value < 1) {
          error = 'Minimum 1 year of work experience required';
        }
        break;
      
      case 'loanType':
        if (!value) {
          error = 'Please select loan type';
        }
        break;
      
      case 'vehicleCondition':
        if ((form.loanType === 'Two Wheeler Loan' || form.loanType === 'Four Wheeler Loan') && !value) {
          error = 'Please select vehicle condition';
        }
        break;
      
      case 'loanAmount':
        if (!value) {
          error = 'Loan amount is required';
        } else if (value < 10000) {
          error = 'Minimum loan amount is ₹10,000';
        } else if (value > 1000000) {
          error = 'Maximum loan amount is ₹10,00,000';
        }
        break;
      
      case 'loanPurpose':
        if (form.loanType === 'Personal Loan' && !value) {
          error = 'Please select loan purpose';
        }
        break;
      
      case 'tenure':
        if (!value) {
          error = 'Loan tenure is required';
        } else if (value < 1) {
          error = 'Minimum tenure is 1 month';
        } else if (value > 84) {
          error = 'Maximum tenure is 84 months';
        }
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'district') {
      const selectedDistrict = districts.find(d => d.name === value);
      setForm(prev => ({
        ...prev,
        [name]: value,
        city: ''
      }));
      setAvailableCities(selectedDistrict ? selectedDistrict.cities : []);
    } else if (name === 'loanType') {
      setForm(prev => ({
        ...prev,
        [name]: value,
        vehicleCondition: '',
        loanPurpose: value !== 'Personal Loan' ? '' : prev.loanPurpose
      }));
    } else {
      setForm(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Validate field on change
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const validateStep = (step) => {
    const stepFields = {
      1: ['fullName', 'email', 'phone', 'dateOfBirth', 'address', 'district', 'city', 'pincode'],
      2: ['panCard', 'aadhaarNumber', 'employmentType', 'monthlyIncome', 'companyName', 'workExperience'],
      3: ['loanType', 'loanAmount', 'tenure']
    };

    const newErrors = {};
    stepFields[step].forEach(field => {
      const error = validateField(field, form[field]);
      if (error) {
        newErrors[field] = error;
      }
    });

    // Add conditional field validations
    if (step === 3) {
      if ((form.loanType === 'Two Wheeler Loan' || form.loanType === 'Four Wheeler Loan')) {
        const error = validateField('vehicleCondition', form.vehicleCondition);
        if (error) newErrors.vehicleCondition = error;
      }
      if (form.loanType === 'Personal Loan') {
        const error = validateField('loanPurpose', form.loanPurpose);
        if (error) newErrors.loanPurpose = error;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validateStep(3)) return;
  
    try {
      const response = await fetch("https://formspree.io/f/mjkrrprl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form), // Sends your existing form object
      });
  
      if (response.ok) {
        navigate("/success");
        // alert("Message sent successfully!");
      } else {
        const data = await response.json();
        console.error(data);
        alert("Error submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong.");
    }
  };
  
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (validateStep(3)) {
  //     const formData = new FormData();
  //     for (const key in form) {
  //       formData.append(key, form[key] || '');
  //     }
  
  //     try {
  //       const res = await axios.post("http://localhost:8000/send-email", formData);
  //       console.log(res.data);
  //     } catch (err) {
  //       console.error("Failed to send email:", err);
  //     }
  //   }
  // };
  

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex items-center gap-2 mb-8">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-[#7EBE41] hover:text-green-600 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
      </div>

      <h1 className="text-4xl font-extrabold text-left text-[#7EBE41] tracking-wide mb-12 uppercase">Enquire Now</h1>

      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-[#7EBE41] text-white' : 'bg-gray-200 text-gray-500'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div className={`w-24 h-1 ${currentStep >= 2 ? 'bg-[#7EBE41]' : 'bg-gray-200'}`}></div>
        </div>
        <div className="flex items-center">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-[#7EBE41] text-white' : 'bg-gray-200 text-gray-500'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div className={`w-24 h-1 ${currentStep >= 3 ? 'bg-[#7EBE41]' : 'bg-gray-200'}`}></div>
        </div>
        <div className="flex items-center">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${currentStep >= 3 ? 'bg-[#7EBE41] text-white' : 'bg-gray-200 text-gray-500'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 md:p-12 border border-[#e0f2d8] space-y-6">
        {/* Personal Information */}
        <div className={`transition-all duration-300 ${currentStep === 1 ? 'opacity-100' : 'opacity-50 pointer-events-none h-0 overflow-hidden'}`}>
          <div className="flex items-center gap-3 mb-6">
            <svg className="w-6 h-6 text-[#7EBE41]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <h2 className="text-2xl font-semibold">Personal Information</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#7EBE41] focus:border-transparent`}
                required
              />
              {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#7EBE41] focus:border-transparent`}
                required
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#7EBE41] focus:border-transparent`}
                required
              />
              {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={form.dateOfBirth}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#7EBE41] focus:border-transparent`}
                required
              />
              {errors.dateOfBirth && <p className="mt-1 text-sm text-red-500">{errors.dateOfBirth}</p>}
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-2">Address</label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                rows="3"
                className={`w-full px-4 py-2 rounded-lg border ${errors.address ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#7EBE41] focus:border-transparent`}
                required
              ></textarea>
              {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">District</label>
              <select
                name="district"
                value={form.district}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${errors.district ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#7EBE41] focus:border-transparent`}
                required
              >
                <option value="">Select District</option>
                {districts.map(district => (
                  <option key={district.name} value={district.name}>{district.name}</option>
                ))}
              </select>
              {errors.district && <p className="mt-1 text-sm text-red-500">{errors.district}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">City</label>
              <select
                name="city"
                value={form.city}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${errors.city ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#7EBE41] focus:border-transparent`}
                required
              >
                <option value="">Select City</option>
                {availableCities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
              {errors.city && <p className="mt-1 text-sm text-red-500">{errors.city}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Pincode</label>
              <input
                type="text"
                name="pincode"
                value={form.pincode}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${errors.pincode ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#7EBE41] focus:border-transparent`}
                required
              />
              {errors.pincode && <p className="mt-1 text-sm text-red-500">{errors.pincode}</p>}
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <button
              type="button"
              onClick={handleNextStep}
              className="bg-[#7EBE41] text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              Next
            </button>
          </div>
        </div>

        {/* Documents & Income */}
        <div className={`transition-all duration-300 ${currentStep === 2 ? 'opacity-100' : 'opacity-50 pointer-events-none h-0 overflow-hidden'}`}>
          <div className="flex items-center gap-3 mb-6">
            <svg className="w-6 h-6 text-[#7EBE41]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h2 className="text-2xl font-semibold">Documents & Income</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">PAN Card Number</label>
              <input
                type="text"
                name="panCard"
                value={form.panCard}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${errors.panCard ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#7EBE41] focus:border-transparent`}
                placeholder="ABCDE1234F"
                required
              />
              {errors.panCard && <p className="mt-1 text-sm text-red-500">{errors.panCard}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Aadhaar Number</label>
              <input
                type="text"
                name="aadhaarNumber"
                value={form.aadhaarNumber}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${errors.aadhaarNumber ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#7EBE41] focus:border-transparent`}
                placeholder="123456789012"
                required
              />
              {errors.aadhaarNumber && <p className="mt-1 text-sm text-red-500">{errors.aadhaarNumber}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Employment Type</label>
              <select
                name="employmentType"
                value={form.employmentType}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${errors.employmentType ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#7EBE41] focus:border-transparent`}
                required
              >
                <option value="">Select Employment Type</option>
                {employmentTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              {errors.employmentType && <p className="mt-1 text-sm text-red-500">{errors.employmentType}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Monthly Income</label>
              <input
                type="number"
                name="monthlyIncome"
                value={form.monthlyIncome}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${errors.monthlyIncome ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#7EBE41] focus:border-transparent`}
                required
              />
              {errors.monthlyIncome && <p className="mt-1 text-sm text-red-500">{errors.monthlyIncome}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Company/Business Name</label>
              <input
                type="text"
                name="companyName"
                value={form.companyName}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${errors.companyName ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#7EBE41] focus:border-transparent`}
                required
              />
              {errors.companyName && <p className="mt-1 text-sm text-red-500">{errors.companyName}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Work Experience (Years)</label>
              <input
                type="number"
                name="workExperience"
                value={form.workExperience}
                onChange={handleChange}
                min="0"
                step="0.5"
                className={`w-full px-4 py-2 rounded-lg border ${errors.workExperience ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#7EBE41] focus:border-transparent`}
                required
              />
              {errors.workExperience && <p className="mt-1 text-sm text-red-500">{errors.workExperience}</p>}
            </div>
          </div>
          <div className="mt-8 flex justify-between">
            <button
              type="button"
              onClick={handlePrevStep}
              className="text-gray-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={handleNextStep}
              className="bg-[#7EBE41] text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              Next
            </button>
          </div>
        </div>

        {/* Loan Details */}
        <div className={`transition-all duration-300 ${currentStep === 3 ? 'opacity-100' : 'opacity-50 pointer-events-none h-0 overflow-hidden'}`}>
          <div className="flex items-center gap-3 mb-6">
            <svg className="w-6 h-6 text-[#7EBE41]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-2xl font-semibold">Loan Details</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Loan Type</label>
              <select
                name="loanType"
                value={form.loanType}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${errors.loanType ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#7EBE41] focus:border-transparent`}
                required
              >
                <option value="">Select Loan Type</option>
                {loanTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              {errors.loanType && <p className="mt-1 text-sm text-red-500">{errors.loanType}</p>}
            </div>
            
            {(form.loanType === 'Two Wheeler Loan' || form.loanType === 'Four Wheeler Loan') && (
              <div>
                <label className="block text-gray-700 font-medium mb-2">Vehicle Condition</label>
                <select
                  name="vehicleCondition"
                  value={form.vehicleCondition}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${errors.vehicleCondition ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#7EBE41] focus:border-transparent`}
                  required
                >
                  <option value="">Select Vehicle Condition</option>
                  <option value="new">New Vehicle</option>
                  <option value="used">Used Vehicle</option>
                </select>
                {errors.vehicleCondition && <p className="mt-1 text-sm text-red-500">{errors.vehicleCondition}</p>}
              </div>
            )}
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">Loan Amount</label>
              <input
                type="number"
                name="loanAmount"
                value={form.loanAmount}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${errors.loanAmount ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#7EBE41] focus:border-transparent`}
                required
              />
            </div>

            {form.loanType === 'Personal Loan' && (
              <div>
                <label className="block text-gray-700 font-medium mb-2">Loan Purpose</label>
                <select
                  name="loanPurpose"
                  value={form.loanPurpose}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#7EBE41] focus:border-transparent"
                  required
                >
                  <option value="">Select Purpose</option>
                  <option value="Medical Emergency">Medical Emergency</option>
                  <option value="Education">Education</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Home Renovation">Home Renovation</option>
                  <option value="Travel">Travel</option>
                  <option value="Debt Consolidation">Debt Consolidation</option>
                  <option value="Business Expansion">Business Expansion</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            )}
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">Tenure (Months)</label>
              <input
                type="number"
                name="tenure"
                value={form.tenure}
                onChange={handleChange}
                min="1"
                max="84"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#7EBE41] focus:border-transparent"
                required
              />
              <p className="text-xs text-gray-500 mt-1">Choose between 1 to 84 months</p>
            </div>
          </div>
          <div className="mt-8 flex justify-between">
            <button
              type="button"
              onClick={() => setCurrentStep(2)}
              className="text-gray-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Previous
            </button>
            <button
              type="submit"
              className="bg-[#7EBE41] text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Submit Application
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EnquireNow; 