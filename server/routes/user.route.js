import express from 'express';
import { login, register } from '../controller/user.controller.js';

export const userRoute = express.Router();

userRoute.post("/register", register);
userRoute.post("/login", login)