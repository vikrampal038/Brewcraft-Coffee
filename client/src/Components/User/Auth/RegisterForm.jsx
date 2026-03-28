import React, { useState } from "react";
import { useSignUp } from "@clerk/clerk-react";
import { Mail, Lock, User, Phone, Loader } from "lucide-react";
import { registerSchema } from "../../../utils/validators/authSchema";
import { getErrorMessage } from "../../../utils/authErrors";
import { useAuthModal } from "../../../Context/AuthContext";

/**
 * Formats a phone number to E.164 format.
 * Default country code: +91
 */
const formatPhoneNumber = (phone) => {
    let cleaned = phone.replace(/\s+/g, '').replace(/[()-]/g, '');
    if (!cleaned.startsWith('+')) {
        if (cleaned.length === 10) return `+91${cleaned}`;
        if (cleaned.length === 12 && cleaned.startsWith('91')) return `+${cleaned}`;
        return cleaned; // Let Clerk validate others
    }
    return cleaned;
};

const RegisterForm = () => {
    const { isLoaded, signUp } = useSignUp();
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
        if (!isLoaded || loading) return;

        setLoading(true);
        setError("");
        setFieldErrors({});

        // Zod validation
        const result = registerSchema.safeParse(formData);
        if (!result.success) {
            const errors = {};
            result.error.errors.forEach((err) => {
                errors[err.path[0]] = err.message;
            });
            setFieldErrors(errors);
            setLoading(false);
            return;
        }

        const formattedPhone = formatPhoneNumber(formData.phone);
        
        // Debug Log
        const payload = {
            firstName: formData.name.split(' ')[0],
            lastName: formData.name.split(' ').slice(1).join(' ') || "Guest",
            emailAddress: formData.email,
            phoneNumber: formattedPhone,
            password: formData.password,
        };
        console.log("Register Payload:", payload);

        try {
            await signUp.create(payload);

            // Trigger OTP verification
            await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
            setAuthView('verify');
        } catch (err) {
            console.log("Clerk Error:", err);
            setError(getErrorMessage(err));
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
                        <input name="phone" value={formData.phone} onChange={handleChange} type="text" placeholder="10 Digits" className="w-full h-14 pl-14 bg-[#F4F5F7] border focus:bg-white rounded-full text-sm font-bold transition-all outline-none" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                    <label className="text-[11px] font-black text-[#D46C11] uppercase tracking-[0.15em] ml-4">Password</label>
                    <div className="relative">
                        <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-[#A3A3A3]" size={18} />
                        <input name="password" value={formData.password} onChange={handleChange} type="password" placeholder="Min 6" className="w-full h-14 pl-14 bg-[#F4F5F7] border focus:bg-white rounded-full text-sm font-bold transition-all outline-none" />
                    </div>
                </div>
                <div className="space-y-1">
                    <label className="text-[11px] font-black text-[#D46C11] uppercase tracking-[0.15em] ml-4">Verify Pass</label>
                    <div className="relative">
                        <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-[#A3A3A3]" size={18} />
                        <input name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} type="password" placeholder="Match it" className="w-full h-14 pl-14 bg-[#F4F5F7] border focus:bg-white rounded-full text-sm font-bold transition-all outline-none" />
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
