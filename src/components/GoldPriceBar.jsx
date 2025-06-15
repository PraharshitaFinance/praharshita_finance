import { useState, useEffect } from 'react';

export default function GoldPriceBar() {
  const [goldPrice, setGoldPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGoldPrice = async () => {
    try {
      const response = await fetch('https://api.metalpriceapi.com/v1/latest?api_key=934a4e6540972628047febc2e4232011&base=XAU&currencies=INR');
      const data = await response.json();
      // Convert from troy ounce to gram
      setGoldPrice(data.rates.INR / 31.1035);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch gold price');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGoldPrice();
    // Update price every 5 minutes
    const interval = setInterval(fetchGoldPrice, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#7EBE41] text-white py-1 px-4 text-sm">
      <div className="max-w-[1600px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-semibold">Live Gold Price:</span>
          {loading ? (
            <span>Loading...</span>
          ) : error ? (
            <span>{error}</span>
          ) : (
            <span>₹{goldPrice?.toLocaleString('en-IN', {maximumFractionDigits:2})} per gram</span>
          )}
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+919876543210" className="hover:text-gray-200 transition-colors">
            <span className="font-semibold">Call Us:</span> +91 7416956789
          </a>
          <a href="mailto:info@praharshita.com" className="hover:text-gray-200 transition-colors">
            <span className="font-semibold">Email:</span> info@praharshita.com
          </a>
        </div>
      </div>
    </div>
  );
} 