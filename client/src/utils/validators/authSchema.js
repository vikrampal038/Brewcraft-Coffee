import { z } from "zod";

export const loginSchema = z.object({
  identifier: z.string().email("Invalid email address").min(1, "Email is required"),
  password:z.string().min(6, "Password must be at least 6 characters")
}); 

export const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^[89]\d{9}$/, "Phone number must start with 8 or 9 and be exactly 10 digits"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const otpSchema = z.object({
  code: z.string().length(6, "Verification code must be 6 digits"),
});
