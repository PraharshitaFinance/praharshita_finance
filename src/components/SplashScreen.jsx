import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen = ({ onFinish, children, hideChildren = false }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLogoVisible, setIsLogoVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [startCurtainUp, setStartCurtainUp] = useState(false);
  const readyRef = useRef(false);
  const fallbackTimeoutRef = useRef();

  // Fallback: auto-dismiss splash after 2 seconds
  useEffect(() => {
    fallbackTimeoutRef.current = setTimeout(() => {
      if (!readyRef.current) {
        startSplashSequence();
      }
    }, 100);
    return () => clearTimeout(fallbackTimeoutRef.current);
  }, []);

  // Start the splash sequence (logo, text, curtain up, finish)
  const startSplashSequence = () => {
    if (readyRef.current) return;
    readyRef.current = true;
    setTimeout(() => setIsLogoVisible(true), 10);
    setTimeout(() => setIsTextVisible(true), 80);
    setTimeout(() => setStartCurtainUp(true), 900);
    setTimeout(() => {
      setIsVisible(false);
      setTimeout(onFinish, 300);
    }, 1600);
  };

  // Wait for Home to signal ready before starting animation
  const handleReady = () => {
    if (readyRef.current) return;
    clearTimeout(fallbackTimeoutRef.current);
    startSplashSequence();
  };

  // Pass onReady to children if they are a function
  const childrenWithReady = (!hideChildren || !isVisible)
    ? (typeof children === 'function' ? children({ splashVisible: isVisible, onReady: handleReady }) : children)
    : null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col">
      {childrenWithReady}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed inset-0 bg-[#7EBE41] flex flex-col items-center justify-center z-50"
            initial={{ y: 0, opacity: 1 }}
            animate={startCurtainUp ? { y: '-100%', opacity: 1 } : { y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ y: { duration: 0.7, ease: [0.4, 0.8, 0.2, 1] }, opacity: { duration: 0.2 } }}
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="relative flex flex-col items-center justify-center min-h-[60vh]">
              {/* Logo Animation */}
              <div
                className={`transform transition-all duration-500 ${
                  isLogoVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
                }`}
              >
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-6xl">₹</span>
                </div>
              </div>
              {/* Company Name Animation */}
              <div
                className={`mt-6 text-center transition-all duration-500 ${
                  isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                <h1 className="text-4xl font-bold text-white mb-2">Praharshita Finance</h1>
                <p className="text-lg text-white/90">Empowering Growth, Enabling Dreams</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SplashScreen; 