import mongoose from 'mongoose'

const attendanceSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, required: true },
  timestamp: { type: Date, default: Date.now },
  selfie: { type: String, required: true }
});

export default attendanceSchema;