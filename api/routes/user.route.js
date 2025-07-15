import express from "express";
import { test } from "../controllor.js/user.controllor.js";

const userRouter = express.Router();

userRouter.get('/test', test);

export default userRouter;