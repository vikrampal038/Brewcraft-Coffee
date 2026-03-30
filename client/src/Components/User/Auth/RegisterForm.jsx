import React, { useState } from "react";
import { Mail, Lock, User, Phone, Loader } from "lucide-react";
import { registerSchema } from "../../../utils/validators/authSchema";
import { useAuthModal } from "../../../Context/AuthContext";
import api from "../../../lib/axios";

const RegisterForm = () => {
    const { setAuthView } = useAuthModal();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    
    const [formData, setFormData] = useState({ 
        name: "", 
        email: "", 
        phone: "", 
        password: "", 
        confirmPassword: "" 
    });
    const [fieldErrors, setFieldErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setFieldErrors({ ...fieldErrors, [e.target.name]: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) return;

        setLoading(true);
        setError("");
        setFieldErrors({});

        const result = registerSchema.safeParse(formData);
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
            const { data } = await api.post('/auth/register', {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                password: formData.password
            });

            localStorage.setItem("isAuthenticated", "true");
            localStorage.setItem(
                "user",
                JSON.stringify({
                    name: data?.user?.name || formData.name,
                    email: data?.user?.email || formData.email,
                    phone: data?.user?.phone || formData.phone,
                    createdAt: data?.user?.createdAt || new Date().toISOString(),
                    imageUrl: data?.user?.imageUrl || "",
                    coffeeStory: data?.user?.coffeeStory || "",
                })
            );
            window.location.reload();

        } catch (err) {
            setError(err.response?.data?.message || err.message || "An error occurred during registration");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
                <div className="p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-[13px] font-bold">
                    {error}
                </div>
            )}

            <div className="space-y-1">
                <label className="text-[11px] font-black text-[#D46C11] uppercase tracking-[0.15em] ml-4">Full Name</label>
                <div className="relative">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 text-[#A3A3A3]" size={18} />
                    <input 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        type="text" 
                        placeholder="Brewcraft Member"
                        className={`w-full h-14 pl-14 bg-[#F4F5F7] border focus:bg-white rounded-full text-sm font-bold transition-all outline-none ${
                            fieldErrors.name ? "border-red-300" : "border-transparent focus:border-[#D46C11]"
                        }`} 
                    />
                </div>
                {fieldErrors.name && <p className="text-red-500 text-[10px] ml-5 font-bold">{fieldErrors.name}</p>}
            </div>

            <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                    <label className="text-[11px] font-black text-[#D46C11] uppercase tracking-[0.15em] ml-4">Email</label>
                    <div className="relative">
                        <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-[#A3A3A3]" size={18} />
                        <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="email@example.com" className={`w-full h-14 pl-14 bg-[#F4F5F7] border focus:bg-white rounded-full text-sm font-bold transition-all outline-none ${fieldErrors.email ? "border-red-300" : "border-transparent focus:border-[#D46C11]"}`} />
                    </div>
                </div>
                <div className="space-y-1">
                    <label className="text-[11px] font-black text-[#D46C11] uppercase tracking-[0.15em] ml-4">Phone</label>
                    <div className="relative">
                        <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-[#A3A3A3]" size={18} />
                        <input name="phone" value={formData.phone} onChange={handleChange} type="text" placeholder="10 Digits" className={`w-full h-14 pl-14 bg-[#F4F5F7] border focus:bg-white rounded-full text-sm font-bold transition-all outline-none ${fieldErrors.phone ? "border-red-300" : "border-transparent focus:border-[#D46C11]"}`} />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                    <label className="text-[11px] font-black text-[#D46C11] uppercase tracking-[0.15em] ml-4">Password</label>
                    <div className="relative">
                        <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-[#A3A3A3]" size={18} />
                        <input name="password" value={formData.password} onChange={handleChange} type="password" placeholder="Min 6" className={`w-full h-14 pl-14 bg-[#F4F5F7] border focus:bg-white rounded-full text-sm font-bold transition-all outline-none ${fieldErrors.password ? "border-red-300" : "border-transparent focus:border-[#D46C11]"}`} />
                    </div>
                </div>
            </div>

            <button 
                type="submit" 
                disabled={loading}
                className="w-full h-14 bg-[#D46C11] hover:bg-[#B5590D] text-white font-black text-[15px] uppercase tracking-widest rounded-full shadow-lg transition-all flex items-center justify-center gap-2 "
            >
                {loading ? <Loader className="animate-spin" size={20} /> : "Join the Roast"}
            </button>
            
            <div className="text-center pt-2">
                <button 
                    type="button"
                    onClick={() => setAuthView('login')}
                    className="text-[#D46C11] font-black uppercase text-[12px] tracking-wider hover:underline"
                >
                    Already have an account? Login
                </button>
            </div>
        </form>
    );
};

export default RegisterForm;
