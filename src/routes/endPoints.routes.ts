import { Router } from "express";
import { alpha, flatten, status } from "../controllers/endPoints";

export const router = Router();

router.put("/alpha", alpha);
router.post("/flatten", flatten);
router.get("/status", status);