import express from 'express';
import dotenv from 'dotenv';
import authRouter from "./routers/auth.route.js";
import orderRouter from "./routers/order.route.js";
import productRouter from "./routers/product.route.js";
import ratelimit from 'express-rate-limit';
import cors from 'cors';
const app = express();
dotenv.config();

const limiter = ratelimit({
    windowMs: 2 * 60 * 1000, // 2 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again after sometime'
})
app.use(limiter);

app.use(cors({
    origin: "http://localhost:5173", // adjust if frontend port is different
    credentials: true
}));
app.use(express.json());
app.use("/auth", authRouter);
app.use("/order", orderRouter);
app.use("/product", productRouter);
export default app;
