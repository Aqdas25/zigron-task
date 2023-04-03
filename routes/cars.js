import express from "express";
import { create, getCars } from "../Controller/cars.js";
const router = express.Router();

//routes
router.get("/", getCars);
router.post("/", create);

export default router;
