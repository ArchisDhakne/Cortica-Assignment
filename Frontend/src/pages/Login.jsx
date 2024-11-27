import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // Sending the login data to the backend API
      const response = await axios.post("http://localhost:8000/api/user/login", {
        email: data.email,
        password: data.password,
      });

      if (response.data && response.data.user) {
        const user = response.data.user;
        //
        
        alert("Login Successful");

        // Store the user data (preferably in localStorage or a global state like Redux)
        localStorage.setItem("user", JSON.stringify(user));

        // Navigate based on the user's role
        if (user.role === "student") {
          navigate("/studentDashboard");
        } else if (user.role === "teacher") {
          navigate("/teacherDashboard");
        } else if (user.role === "admin") {
          navigate("/adminDashboard");
        }
      } else {
        alert("Login Failed: Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        {/* Email Field with validation */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 ${
              errors.email ? "border-red-500" : ""
            }`}
            {...register("email", { 
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Please enter a valid email address"
              }
            })}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 ${
              errors.password ? "border-red-500" : ""
            }`}
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Login
        </button>

        {/* New User Link */}
        <div className="mt-4 text-center">
          <p className="text-sm">
            New to the platform?{" "}
            <a
              href="/signup"
              className="text-blue-500 hover:text-blue-700"
            >
              Sign up here
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
