import { z } from "zod";

const emailSchema = z
  .string()
  .trim()
  .min(1, "Email is required")
  .email("Enter a valid email address");

const passwordSchema = z
  .string()
  .min(1, "Password is required")
  .min(6, "Password must be at least 6 characters");

export const loginSchema = z.object({
  identifier: emailSchema,
  password: passwordSchema,
});

export const registerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters")
    .regex(/^[A-Za-z ]+$/, "Name can contain only letters and spaces"),
  email: emailSchema,
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .regex(/^\d+$/, "Phone number must contain only numbers")
    .length(10, "Phone number must be exactly 10 digits"),
  password: passwordSchema,
});

export const forgotPasswordSchema = z
  .object({
    email: emailSchema,
    newPassword: passwordSchema,
    confirmPassword: z
      .string()
      .min(1, "Confirm password is required"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const otpSchema = z.object({
  code: z.string().length(6, "Verification code must be 6 digits"),
});
