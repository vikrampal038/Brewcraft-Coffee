
import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
const cookieToken = req.cookies?.token;
const authHeader = req.headers?.authorization || req.headers?.Authorization;
const bearerToken = authHeader?.startsWith("Bearer ")
  ? authHeader.split(" ")[1]
  : null;

const token = cookieToken || bearerToken;

    if (!token) {
        return res.status(401).json({
            message:
                "Access denied. No token found in cookies or Authorization header.",
        });
    }

    if (!process.env.JWT_SECRET) {
        return res.status(500).json({ message: "Server JWT secret is not configured" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Token expired. Please log in again." });
        }

        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({ message: "Invalid token." });
        }

        return res.status(401).json({ message: "Authentication failed." });
    }
};

export default authMiddleware;
