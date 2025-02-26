import React, { useState } from "react";
import ReferralForm from "./ReferralForm";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold text-black">
        Invite Your Friends & <span className="text-purple-600">Earn Rewards!</span>
      </h1>
      <p className="text-gray-600 mt-2">
        Refer your friends to our courses and earn exciting rewards. Get ₹1000 for every successful referral!
      </p>
      <button onClick={() => setIsModalOpen(true)} className="bg-black text-white px-6 py-3 mt-4 rounded-md hover:bg-gray-800 transition">
        Refer Now
      </button>

      {/* Render Modal */}
      <ReferralForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default HeroSection;
