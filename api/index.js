import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

try {
  mongoose.connect(process.env.MONGO)
  .then(() => console.log("MongoDB Connected Sucessfully"))
} catch (error) {
  console.log(error);
}


app.listen(3000, () => {
  console.log('Server is running on port 3000!!');
})



