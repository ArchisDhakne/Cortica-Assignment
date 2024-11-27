import React from "react";
import { useNavigate } from "react-router-dom";

// Sample logo URL (replace this with the actual logo or image URL from Cortica's website)
// import corticaLogo from './assets/cortica-logo.png'; 

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    // Navigate to the login page
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500 text-white">
      {/* Container for the Home Page */}
      <div className="text-center max-w-4xl mx-auto px-4 py-10">

        {/* Cortica Web Solutions Logo */}
        <div className="mb-8">
          {/* <img 
            src={corticaLogo} 
            alt="Cortica Web Solutions Logo" 
            className="w-32 mx-auto"
          /> */}
        </div>

        {/* Tagline */}
        <h1 className="text-4xl font-semibold mb-4">
          Empowering Your Digital Presence
        </h1>

        <p className="text-lg mb-8">
          At Cortica Web Solutions, we provide cutting-edge digital solutions that drive your business forward. 
          Let us help you achieve your goals with innovative web development services.
        </p>

        {/* Get Started Button */}
        <button
          onClick={handleGetStarted}
          className="bg-yellow-500 text-gray-800 hover:bg-yellow-600 py-2 px-6 rounded-lg text-xl font-semibold"
        >
          Get Started
        </button>
      </div>

      {/* Optional Footer */}
      <footer className="absolute bottom-4 text-center w-full text-sm">
        <p>&copy; 2024 Cortica Web Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
