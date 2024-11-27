import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  
  const navigate = useNavigate();
  
  const password = watch("password"); // Watch the password field for dynamic validation
  
  const onSubmit = async (data) => {
    try {
     console.log('role of user',data.role);
     
      const response = await axios.post("http://localhost:8000/api/user/signup", {
        name: data.name,
        email: data.email,
        password: data.password,
        role: data.role,
        class:data.class,
      });
      
      if (response) {
        const user = response.data.user;
        console.log('this is user signup',user);
        
        alert("Signup Successful");
        navigate('/login');
        alert("Please Login");
      } else {
        alert("Signup Failed: Something went wrong");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("An error occurred during signup.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold mb-4">Signup</h2>

        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 ${
              errors.name ? "border-red-500" : ""
            }`}
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

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
                message: "Invalid email address"
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
            {...register("password", { 
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters"
              }
            })}
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
        </div>

        {/* Confirm Password Field with match validation */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
          <input
            type="password"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 ${
              errors.confirmPassword ? "border-red-500" : ""
            }`}
            {...register("confirmPassword", { 
              required: "Please confirm your password",
              validate: value => value === password || "Passwords do not match"
            })}
          />
          {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
        </div>

        {/* Role Selection */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Role</label>
          <select
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 ${
              errors.role ? "border-red-500" : ""
            }`}
            {...register("role", { required: "Role is required" })}
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            {/* <option value="admin">Admin</option> */}
          </select>
          {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role.message}</p>}
        </div>



        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Class</label>
          <select
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 ${
              errors.role ? "border-red-500" : ""
            }`}
            {...register("class", { required: "class is required" })}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          {errors.class && <p className="text-red-500 text-xs mt-1">{errors.class.message}</p>}
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Signup
        </button>

        {/* Existing Account Link */}
        <div className="mt-4 text-center">
          <p className="text-sm">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-500 hover:text-blue-700"
            >
              Login here
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
