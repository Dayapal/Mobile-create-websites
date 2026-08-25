import express from 'express';
import { createMobile, deleteMobile, getMobiles, updateMobile } from '../controller/mobile.controller.js';
import authMiddleware from '../middleware/middleware.js';
export const mobileRoute = express.Router();
mobileRoute.post("/mobile", authMiddleware, createMobile) // CREATE
mobileRoute.get("/mobiles",   getMobiles) // READ
mobileRoute.put("/mobile/:id", authMiddleware, updateMobile)
mobileRoute.delete("/mobile/:id",authMiddleware, deleteMobile)