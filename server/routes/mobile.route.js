import express from 'express';
import { createMobile, deleteMobile, getMobiles, updateMobile } from '../controller/mobile.controller.js';
import authMiddleware from '../middleware/middleware.js';
import upload from '../middleware/upload.js'
export const mobileRoute = express.Router();
mobileRoute.post("/mobile", upload.single("image"), createMobile) // CREATE
mobileRoute.get("/mobiles",   getMobiles) // READ
mobileRoute.put("/mobile/:id", authMiddleware, updateMobile)
mobileRoute.delete("/mobile/:id",authMiddleware, deleteMobile)