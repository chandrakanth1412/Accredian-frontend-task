import React from "react";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import BackgroundCircles from "./components/BackgroundCircles";
import Dashboard from "./components/Dashboard";
import ReferNow from "./components/ReferNow"; 

const App = () => {
  return (
    <div className="bg-[#fcf4ff] min-h-screen flex flex-col items-center">
      <BackgroundCircles />
      <HeroSection />
      <HowItWorks />
      <ReferNow />  {/* Add Referral Form */}
      <Dashboard /> {/* Show referral data */}
    </div>
  );
};

export default App;
