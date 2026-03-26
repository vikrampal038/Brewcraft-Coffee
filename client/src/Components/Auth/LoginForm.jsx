import React, { useState } from "react";
import { useSignIn } from "@clerk/clerk-react";
import { Mail, Lock, Eye, EyeOff, Loader } from "lucide-react";
import { loginSchema } from "../../utils/validators/authSchema";
import { getErrorMessage } from "../../utils/authErrors";
import { useNavigate } from "react-router-dom";
import { useAuthModal } from "../../Context/AuthContext";

const LoginForm = () => {
    const { isLoaded, signIn, setActive } = useSignIn();
    const { setAuthView, closeAuthModal, redirectPath, clearRedirectPath } = useAuthModal();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    
    const [formData, setFormData] = useState({ identifier: "", password: "" });
    const [fieldErrors, setFieldErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setFieldErrors({ ...fieldErrors, [e.target.name]: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isLoaded || loading) return;

        setLoading(true);
        setError("");
        setFieldErrors({});

        // Zod validation
        const result = loginSchema.safeParse(formData);
        if (!result.success) {
            const errors = {};
            result.error.errors.forEach((err) => {
                errors[err.path[0]] = err.message;
            });
            setFieldErrors(errors);
            setLoading(false);
            return;
        }

        try {
            const attempt = await signIn.create({
                identifier: formData.identifier,
                password: formData.password,
            });

            if (attempt.status === "complete") {
                await setActive({ session: attempt.createdSessionId });
                closeAuthModal();
                if (redirectPath) {
                    navigate(redirectPath);
                    clearRedirectPath();
                }
            } else {
                setError("Account needs additional verification. Check your email.");
            }
        } catch (err) {
            setError(getErrorMessage(err));
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
                <label className="text-[11px] font-black text-[#D46C11] uppercase tracking-[0.15em] ml-4">Email or Phone</label>
                <div className="relative">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-[#A3A3A3]" size={18} />
                    <input 
                        name="identifier"
                        value={formData.identifier}
                        onChange={handleChange}
                        type="text" 
                        placeholder="email@example.com"
                        className={`w-full h-14 pl-14 pr-6 bg-[#F4F5F7] border focus:bg-white rounded-full text-sm font-bold transition-all outline-none ${
                            fieldErrors.identifier ? "border-red-300" : "border-transparent focus:border-[#D46C11]"
                        }`} 
                    />
                </div>
                {fieldErrors.identifier && <p className="text-red-500 text-[10px] ml-5 font-bold">{fieldErrors.identifier}</p>}
            </div>

            <div className="space-y-1.5">
                <label className="text-[11px] font-black text-[#D46C11] uppercase tracking-[0.15em] ml-4">Password</label>
                <div className="relative">
                    <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-[#A3A3A3]" size={18} />
                    <input 
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        type={showPassword ? "text" : "password"} 
                        placeholder="••••••••"
                        className={`w-full h-14 pl-14 pr-14 bg-[#F4F5F7] border focus:bg-white rounded-full text-sm font-bold transition-all outline-none ${
                            fieldErrors.password ? "border-red-300" : "border-transparent focus:border-[#D46C11]"
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
                {fieldErrors.password && <p className="text-red-500 text-[10px] ml-5 font-bold">{fieldErrors.password}</p>}
            </div>

            <button 
                type="submit" 
                disabled={loading}
                className="w-full h-14 bg-[#D46C11] hover:bg-[#B5590D] text-white font-black text-[15px] uppercase tracking-widest rounded-full shadow-lg transition-all flex items-center justify-center gap-2 "
            >
                {loading ? <Loader className="animate-spin" size={20} /> : "Unlock Sanctuary"}
            </button>
            
            <div className="text-center pt-4">
                <button 
                    type="button"
                    onClick={() => setAuthView('register')}
                    className="text-[#D46C11] font-black uppercase text-[12px] tracking-wider hover:underline"
                >
                    Create a free account
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
