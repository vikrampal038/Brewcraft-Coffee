import express from 'express';
import dotenv from 'dotenv';
import authRouter from "./routers/auth.route.js";
import orderRouter from "./routers/order.route.js";
const app = express();
dotenv.config();

app.use(express.json());
app.use("/auth", authRouter);
app.use("/order", orderRouter);

export default app;
