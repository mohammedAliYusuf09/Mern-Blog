import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

try {
  mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Sucessfully"))
} catch (error) {
  console.log(error);
}

const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`Server is running on port ${port}!!`);
})



