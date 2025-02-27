import React, { useState } from "react";

const ReferralForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
    referralCode: `REF-${Math.random().toString(36).substr(2, 8).toUpperCase()}`,
    courseName: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await fetch(
        "https://accredian-backend-task-u5c5.onrender.com/api/referrals",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Referral submitted successfully!");
        setFormData({
          referrerName: "",
          referrerEmail: "",
          refereeName: "",
          refereeEmail: "",
          referralCode: `REF-${Math.random().toString(36).substr(2, 8).toUpperCase()}`,
          courseName: "",
        });
      } else {
        setError(data.error || "Error submitting referral!");
      }
    } catch (error) {
      setError("Failed to submit referral. Please try again.");
    }

    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Refer a Friend</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="referrerName"
            placeholder="Your Name"
            value={formData.referrerName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            name="referrerEmail"
            placeholder="Your Email"
            value={formData.referrerEmail}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="refereeName"
            placeholder="Friend's Name"
            value={formData.refereeName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            name="refereeEmail"
            placeholder="Friend's Email"
            value={formData.refereeEmail}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          {/* Select Course Dropdown */}
          <select
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-white"
            required
          >
            <option value="">-- Select a Course --</option>
            <option value="Web Development">Web Development</option>
            <option value="Data Science">Data Science</option>
            <option value="AI & ML">AI & ML</option>
            <option value="Cybersecurity">Cybersecurity</option>
          </select>

          <input
            type="text"
            name="referralCode"
            value={formData.referralCode}
            readOnly
            className="w-full p-2 border rounded bg-gray-100"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
        {message && <p className="text-green-500 mt-2">{message}</p>}
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <button onClick={onClose} className="mt-4 w-full text-center text-gray-500">
          Close
        </button>
      </div>
    </div>
  );
};

export default ReferralForm;
