import React from "react";

const steps = [
  { id: 1, title: "Invite Friends", description: "Fill out the referral form with your friend’s details." },
  { id: 2, title: "Friend Enrolls", description: "Your friend enrolls in any of our courses." },
  { id: 3, title: "Earn Rewards", description: "Get ₹1000 credited to your account." }
];

const HowItWorks = () => {
  return (
    <div className="mt-10 text-center">
      <h2 className="text-2xl font-bold">How It Works</h2>
      <div className="flex justify-center gap-6 mt-6">
        {steps.map((step) => (
          <div key={step.id} className="bg-white shadow-md p-6 rounded-lg w-60">
            <div className="text-purple-600 text-xl font-bold">{step.id}</div>
            <h3 className="font-semibold mt-2">{step.title}</h3>
            <p className="text-gray-500 text-sm mt-1">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
