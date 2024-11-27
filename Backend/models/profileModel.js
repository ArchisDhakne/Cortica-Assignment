import mongoose from 'mongoose'


const profileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  contactInfo: { type: String, required: true },
  address: { type: String, required: true },
  bio: { type: String }
});

export default profileSchema;