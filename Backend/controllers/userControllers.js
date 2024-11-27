import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();


const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const isUser = await userModel.findOne({ email: email });
    if (!isUser) {
      return res.status(404).json({ message: "Invalid credentials no user"});
    }

    // Compare the provided password with the stored hashed password
    const checkPass = await bcrypt.compare(password, isUser.password);
    if (!checkPass) {
      return res.status(401).json({ message: "Invalid credentials wrong password"});
    }

    // Generate JWT token with the user's information
    const token = jwt.sign(
      { email: email, name: isUser.name, id: isUser._id }, // Payload (data to encode)
      process.env.JWT_SECRET, 
    );

    // Successful login, send the token
    res.status(200).json({ message: "Login successful", token: token ,  user: {
      id: isUser._id,
      name: isUser.name,
      email: isUser.email,
      role: isUser.role,
      class:isUser.class
    } });
  } catch (error) {
    // Handle server errors
    res.status(500).json({ message: "Error in login", error: error.message });
  }
};

//---------------------------------------------------------------------------

const Signup = async (req, res) => {
 
  const { email, password,name,classNo, role } = req.body;

  
  if (!email || !password || !name || !role ) {
    return res.status(400).json({ message: "All fields are required" });
  }
  
  try {
    // Check if the user already exists with the same email
    const existingUser = await userModel.findOne({ email: email });

    
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Hash the password before saving to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
      role,
      classNo
    });

    // Save the user to the database
    await newUser.save();

    // Send success response
    res.status(201).json({ message: "Signup successful!" });

  } catch (error) {
    // Send error response
    res.status(500).json({ message: "Error in signup", error: error.message });
  }
};


export {Login,Signup}