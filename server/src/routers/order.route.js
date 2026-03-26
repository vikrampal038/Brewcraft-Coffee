import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";


const router = Router();
router.post("/create",authMiddleware, async (req, res) => {

res.json({message:"Order created successfully"});

});

export default router;