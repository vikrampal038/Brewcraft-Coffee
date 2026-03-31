import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Loader } from "lucide-react";
import { forgotPasswordSchema } from "../../../utils/validators/authSchema";
import { useAuthModal } from "../../../Context/AuthContext";

const ForgotPasswordForm = () => {
  const { setAuthView } = useAuthModal();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [fieldErrors, setFieldErrors] = useState({});

  const setSingleFieldError = (name, nextData) => {
    const result = forgotPasswordSchema.safeParse(nextData);
    const fieldIssue = result.success
      ? null
      : result.error.issues.find((issue) => issue.path[0] === name);

    setFieldErrors((prev) => ({
      ...prev,
      [name]: fieldIssue?.message || "",
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nextData = { ...formData, [name]: value };

    setFormData(nextData);
    setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    setError("");
    setSuccessMessage("");
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setSingleFieldError(name, formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError("");
    setSuccessMessage("");
    setFieldErrors({});

    const result = forgotPasswordSchema.safeParse(formData);
    if (!result.success) {
      const errors = {};
      result.error.issues.forEach((issue) => {
        errors[issue.path[0]] = issue.message;
      });
      setFieldErrors(errors);
      setLoading(false);
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 700));
      setSuccessMessage(
        "Email verified. Your new password is ready to be updated on the server once reset API is connected."
      );
      setFormData({ email: "", newPassword: "", confirmPassword: "" });
    } catch (submitError) {
      setError(submitError.message || "Unable to process forgot password request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-[13px] font-bold">
          {error}
        </div>
      )}

      {successMessage && (
        <div className="p-4 bg-green-50 border border-green-100 rounded-2xl text-green-700 text-[13px] font-bold leading-relaxed">
          {successMessage}
        </div>
      )}

      <div className="space-y-1.5">
        <label className="text-[11px] font-black text-[#D46C11] uppercase tracking-[0.15em] ml-4">
          Email
        </label>
        <div className="relative">
          <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-[#A3A3A3]" size={18} />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            type="email"
            placeholder="email@example.com"
            className={`w-full h-14 pl-14 pr-6 bg-[#F4F5F7] border focus:bg-white rounded-full text-sm font-bold transition-all outline-none ${
              fieldErrors.email ? "border-red-300" : "border-transparent focus:border-[#D46C11]"
            }`}
          />
        </div>
        {fieldErrors.email && (
          <p className="text-red-500 text-[10px] ml-5 font-bold">{fieldErrors.email}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <label className="text-[11px] font-black text-[#D46C11] uppercase tracking-[0.15em] ml-4">
          New Password
        </label>
        <div className="relative">
          <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-[#A3A3A3]" size={18} />
          <input
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            type={showNewPassword ? "text" : "password"}
            placeholder="Min 6"
            className={`w-full h-14 pl-14 pr-14 bg-[#F4F5F7] border focus:bg-white rounded-full text-sm font-bold transition-all outline-none ${
              fieldErrors.newPassword ? "border-red-300" : "border-transparent focus:border-[#D46C11]"
            }`}
          />
          <button
            type="button"
            onClick={() => setShowNewPassword((prev) => !prev)}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-[#A3A3A3] hover:text-[#0A0A0A]"
          >
            {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {fieldErrors.newPassword && (
          <p className="text-red-500 text-[10px] ml-5 font-bold">{fieldErrors.newPassword}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <label className="text-[11px] font-black text-[#D46C11] uppercase tracking-[0.15em] ml-4">
          Confirm Password
        </label>
        <div className="relative">
          <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-[#A3A3A3]" size={18} />
          <input
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Repeat password"
            className={`w-full h-14 pl-14 pr-14 bg-[#F4F5F7] border focus:bg-white rounded-full text-sm font-bold transition-all outline-none ${
              fieldErrors.confirmPassword ? "border-red-300" : "border-transparent focus:border-[#D46C11]"
            }`}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-[#A3A3A3] hover:text-[#0A0A0A]"
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {fieldErrors.confirmPassword && (
          <p className="text-red-500 text-[10px] ml-5 font-bold">{fieldErrors.confirmPassword}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full h-14 bg-[#D46C11] hover:bg-[#B5590D] text-white font-black text-[15px] uppercase tracking-widest rounded-full shadow-lg transition-all flex items-center justify-center gap-2"
      >
        {loading ? <Loader className="animate-spin" size={20} /> : "Reset Access"}
      </button>

      <div className="text-center pt-4">
        <button
          type="button"
          onClick={() => setAuthView("login")}
          className="text-[#D46C11] font-black capitalize text-[12px] tracking-wider hover:underline"
        >
          Remembered Your Password? <span className="text-[#3e2723]">Login</span>
        </button>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
