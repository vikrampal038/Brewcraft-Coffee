import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Loader } from "lucide-react";
import { loginSchema } from "../../../utils/validators/authSchema";
import { useNavigate } from "react-router-dom";
import { useAuthModal } from "../../../Context/AuthContext";
import api from "../../../lib/axios";

const LoginForm = () => {
  const { setAuthView, closeAuthModal, redirectPath, clearRedirectPath } =
    useAuthModal();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ identifier: "", password: "" });
  const [fieldErrors, setFieldErrors] = useState({});

  const setSingleFieldError = (name, value) => {
    const result = loginSchema.shape[name]?.safeParse(value);
    setFieldErrors((prev) => ({
      ...prev,
      [name]: result?.success ? "" : result?.error?.issues?.[0]?.message || "",
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    setError("");
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (loginSchema.shape[name]) {
      setSingleFieldError(name, value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError("");
    setFieldErrors({});

    const result = loginSchema.safeParse(formData);
    if (!result.success) {
      const errors = {};
      result.error.issues.forEach((err) => {
        errors[err.path[0]] = err.message;
      });
      setFieldErrors(errors);
      setLoading(false);
      return;
    }

    try {
      const trimmedEmail = formData.identifier.trim();
      const { data } = await api.post("/auth/login", {
        email: trimmedEmail,
        password: formData.password,
      });

      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem(
        "user",
        JSON.stringify({
          name:
            data?.user?.name ||
            data?.user?.fullName ||
            trimmedEmail.split("@")[0],
          email: data?.user?.email || trimmedEmail,
          phone: data?.user?.phone || "",
          createdAt: data?.user?.createdAt || new Date().toISOString(),
          imageUrl: data?.user?.imageUrl || "",
          coffeeStory: data?.user?.coffeeStory || "",
        })
      );

      closeAuthModal();
      if (redirectPath) {
        navigate(redirectPath);
        clearRedirectPath();
      } else {
        window.location.reload();
      }
    } catch (err) {
      const responseData = err.response?.data;
      if (responseData?.field) {
        setFieldErrors((prev) => ({
          ...prev,
          [responseData.field]: responseData.message,
        }));
      } else {
        setError(responseData?.message || err.message || "Invalid credentials");
      }
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

      <div className="space-y-1.5">
        <label className="text-[11px] font-black text-[#D46C11] uppercase tracking-[0.15em] ml-4">
          Email
        </label>
        <div className="relative">
          <Mail
            className="absolute left-5 top-1/2 -translate-y-1/2 text-[#A3A3A3]"
            size={18}
          />
          <input
            name="identifier"
            value={formData.identifier}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            placeholder="email@example.com"
            className={`w-full h-14 pl-14 pr-6 bg-[#F4F5F7] border focus:bg-white rounded-full text-sm font-bold transition-all outline-none ${
              fieldErrors.identifier
                ? "border-red-300"
                : "border-transparent focus:border-[#D46C11]"
            }`}
          />
        </div>
        {fieldErrors.identifier && (
          <p className="text-red-500 text-[10px] ml-5 font-bold">
            {fieldErrors.identifier}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <label className="text-[11px] font-black text-[#D46C11] uppercase tracking-[0.15em] ml-4">
          Password
        </label>
        <div className="relative">
          <Lock
            className="absolute left-5 top-1/2 -translate-y-1/2 text-[#A3A3A3]"
            size={18}
          />
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            type={showPassword ? "text" : "password"}
            placeholder="********"
            className={`w-full h-14 pl-14 pr-14 bg-[#F4F5F7] border focus:bg-white rounded-full text-sm font-bold transition-all outline-none ${
              fieldErrors.password
                ? "border-red-300"
                : "border-transparent focus:border-[#D46C11]"
            }`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-[#A3A3A3] hover:text-[#0A0A0A]"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {fieldErrors.password && (
          <p className="text-red-500 text-[10px] ml-5 font-bold">
            {fieldErrors.password}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full h-14 bg-[#D46C11] hover:bg-[#B5590D] text-white font-black text-[15px] uppercase tracking-widest rounded-full shadow-lg transition-all flex items-center justify-center gap-2 "
      >
        {loading ? (
          <Loader className="animate-spin" size={20} />
        ) : (
          "Unlock Sanctuary"
        )}
      </button>

      <div className="text-center -mt-1">
        <button
          type="button"
          onClick={() => setAuthView("forgotPassword")}
          className="text-[#A3A3A3] hover:text-[#D46C11] font-black capitalize text-[12px] tracking-wider transition-colors"
        >
          Forgot Password?
        </button>
      </div>

      <div className="text-center pt-4">
        <button
          type="button"
          onClick={() => setAuthView("register")}
          className="text-[#D46C11] font-black capitalize text-[12px] tracking-wider hover:underline"
        >
          Don't Have an Account? <span className="text-[#3e2723]">Register</span>
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
