import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import './index.css';
import Layout from './components/Layout';
import SplashScreen from './components/SplashScreen';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Loans from './pages/Loans';
import About from './pages/About';
import Discover from './pages/Discover';
import Contact from './pages/Contact';
import TwoWheelerLoan from './pages/loanDetails/TwoWheelerLoan';
import FourWheelerLoan from './pages/loanDetails/FourWheelerLoan';
import PersonalLoan from './pages/loanDetails/PersonalLoan';
import GoldLoan from './pages/loanDetails/GoldLoan';
import BusinessLoan from './pages/loanDetails/BusinessLoan';
import CommodityLoan from './pages/loanDetails/CommodityLoan';
import FinancialPlanning from './pages/discover/FinancialPlanning';
import LoanCalculator from './pages/discover/LoanCalculator';
import InvestmentTips from './pages/discover/InvestmentTips';
import CreditScore from './pages/discover/CreditScore';
import EnquireNow from './pages/EnquireNow';
import Success from "./pages/success";
// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.2
};

function AnimatedRoutes() {
  // This is now handled by the nested routing structure
  return null;
}

function App() {
  const [showSplash, setShowSplash] = useState(false);
  const [isReload, setIsReload] = useState(false);

  useEffect(() => {
    // Check if this is a reload
    const isPageReload = performance.navigation.type === performance.navigation.TYPE_RELOAD;
    if (isPageReload) {
      setIsReload(true);
      setShowSplash(true);
    }
  }, []);

  const handleSplashFinish = () => {
    setShowSplash(false);
    if (isReload) {
      // Force a re-render of the router after splash screen
      window.location.href = '/';
    }
  };

  return (
    <Router>
      {showSplash ? (
        <SplashScreen onFinish={handleSplashFinish} hideChildren={true}>
          {({ splashVisible, onReady }) => (
            <Layout>
              <Home splashVisible={splashVisible} onReady={onReady} />
            </Layout>
          )}
        </SplashScreen>
      ) : (
        <>
          <ScrollToTop />
          <Routes>
            <Route element={<Layout />}>
              <Route index element={
                <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
                  <Home />
                </motion.div>
              } />
              <Route path="loans" element={
                <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
                  <Loans />
                </motion.div>
              } />
              <Route path="about" element={
                <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
                  <About />
                </motion.div>
              } />
              <Route path="discover" element={
                <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
                  <Discover />
                </motion.div>
              } />
              <Route path="contact" element={
                <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
                  <Contact />
                </motion.div>
              } />
              <Route path="enquire" element={
                <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
                  <EnquireNow />
                </motion.div>
              } />
              <Route path="loans/two-wheeler" element={<TwoWheelerLoan />} />
              <Route path="loans/four-wheeler" element={<FourWheelerLoan />} />
              <Route path="loans/personal" element={<PersonalLoan />} />
              <Route path="loans/gold" element={<GoldLoan />} />
              <Route path="loans/business" element={<BusinessLoan />} />
              <Route path="loans/commodity" element={<CommodityLoan />} />
              <Route path="discover/financial-planning" element={<FinancialPlanning />} />
              <Route path="discover/loan-calculator" element={<LoanCalculator />} />
              <Route path="discover/investment-tips" element={<InvestmentTips />} />
              <Route path="discover/credit-score" element={<CreditScore />} />
              <Route path="/success" element={<Success />} />
            </Route>
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
