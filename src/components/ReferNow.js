import React, { useState } from "react";
import ReferralForm from "./ReferralForm";

const ReferNow = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold">Refer a Friend & Earn Rewards!</h1>
      <p className="mt-2 text-gray-600">Invite your friends to enroll and get rewarded.</p>
      
      <button
        onClick={() => setIsModalOpen(true)}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Refer Now
      </button>
      
      {isModalOpen && <ReferralForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default ReferNow;