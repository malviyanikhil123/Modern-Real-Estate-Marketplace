import express from 'express';
import dotenc from 'dotenv';
import mongoose from 'mongoose';

const app = express();

dotenc.config();

const PORT = process.env.PORT || 4000;
const MongoDBurl = process.env.MONGODB_URL;

const connentDB = async() => {
  try {
    await mongoose.connect(MongoDBurl);
    console.log('MongoDB connected');
  } catch (error) {
    console.log('MongoDB connection failed ' + error.message);
  }
}

app.listen(PORT, async() => {
  console.log(`Server is running on http://localhost:${PORT}`);
  await connentDB();   
});