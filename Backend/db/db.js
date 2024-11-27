import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()
const MONGOURI = process.env.MONGOURI;

// Connect to MongoDB
const connection = mongoose.connect(MONGOURI, {
  useNewUrlParser: true,  // To use the new MongoDB driver's connection string parser
  useUnifiedTopology: true, // To enable the unified topology layer for server discovery and monitoring
})
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Export the connection
export default connection;
 