import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [referrals, setReferrals] = useState([]);

  useEffect(() => {
    // Fetch referrals from backend
    axios.get("https://accredian-backend-task-u5c5.onrender.com/api/referrals")

      .then(response => {
        setReferrals(response.data); // Store referrals in state
      })
      .catch(error => {
        console.error("Error fetching referrals:", error);
      });
  }, []);

}

export default Dashboard;
