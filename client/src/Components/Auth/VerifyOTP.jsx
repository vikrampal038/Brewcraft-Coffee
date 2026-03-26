import React, { useState, useEffect } from "react";
import { useSignUp } from "@clerk/clerk-react";
import { ShieldCheck, Loader, ChevronLeft, RefreshCw } from "lucide-react";
import { otpSchema } from "../../utils/validators/authSchema";
import { getErrorMessage } from "../../utils/authErrors";
import { useAuthModal } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const VerifyOTP = () => {
    const { isLoaded, signUp, setActive } = useSignUp();
    const { setAuthView, closeAuthModal, redirectPath, clearRedirectPath } = useAuthModal();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [resending, setResending] = useState(false);
    const [cooldown, setCooldown] = useState(0);
    const [error, setError] = useState("");
    const [code, setCode] = useState("");

    // Handle cooldown timer
    useEffect(() => {
        let timer;
        if (cooldown > 0) {
            timer = setInterval(() => setCooldown(prev => prev - 1), 1000);
        }
        return () => clearInterval(timer);
    }, [cooldown]);

    const handleVerify = async (e) => {
        e.preventDefault();
        if (!isLoaded || loading) return;

        setLoading(true);
        setError("");

        // Zod validation
        const result = otpSchema.safeParse({ code });
        if (!result.success) {
            setError(result.error.errors[0].message);
            setLoading(false);
            return;
        }

        try {
            const completeSignUp = await signUp.attemptEmailAddressVerification({
                code: code,
            });

            if (completeSignUp.status === "complete") {
                await setActive({ session: completeSignUp.createdSessionId });
                closeAuthModal();
                if (redirectPath) {
                    navigate(redirectPath);
                    clearRedirectPath();
                }
            } else {
                setError("Verification incomplete. Please try again.");
            }
        } catch (err) {
            setError(getErrorMessage(err));
        } finally {
            setLoading(false);
        }
    };

    const handleResend = async () => {
        if (!isLoaded || resending || cooldown > 0) return;

        setResending(true);
        setError("");
        try {
            await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
            setCooldown(60); // 60 seconds cooldown
        } catch (err) {
            setError(getErrorMessage(err));
        } finally {
            setResending(false);
        }
    };

    return (
        <div className="space-y-6">
            <div className="text-center">
                <div className="w-16 h-16 bg-[#FFF4E8] rounded-full flex items-center justify-center mx-auto mb-4 text-[#D46C11]">
                    <ShieldCheck size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#0A0A0A] mb-2 tracking-tight">Verify Your Email</h3>
                <p className="text-[#7A7A7A] text-sm font-medium">We've sent a 6-digit code to your inbox.</p>
            </div>

            <form onSubmit={handleVerify} className="space-y-5">
                {error && (
                    <div className="p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-[13px] font-bold">
                        {error}
                    </div>
                )}

                <div className="space-y-1.5">
                    <label className="text-[11px] font-black text-[#D46C11] uppercase tracking-[0.15em] ml-4 text-center block">Verification Code</label>
                    <input 
                        value={code}
                        onChange={(e) => setCode(e.target.value.replace(/[^0-9]/g, '').slice(0, 6))}
                        type="text" 
                        maxLength={6}
                        placeholder="0 0 0 0 0 0"
                        className="w-full h-16 bg-[#F4F5F7] border border-transparent focus:border-[#D46C11] focus:bg-white rounded-full text-2xl font-black text-center tracking-[0.3em] outline-none transition-all" 
                    />
                </div>

                <div className="flex flex-col gap-4">
                    <button 
                        type="submit" 
                        disabled={loading || code.length < 6}
                        className="w-full h-14 bg-[#D46C11] hover:bg-[#B5590D] text-white font-black text-[15px] uppercase tracking-widest rounded-full shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? <Loader className="animate-spin" size={20} /> : "Verify Identity"}
                    </button>

                    <button 
                        type="button"
                        onClick={handleResend}
                        disabled={resending || cooldown > 0}
                        className="text-[12px] font-black uppercase tracking-widest text-[#D46C11] hover:underline disabled:opacity-50 disabled:no-underline flex items-center justify-center gap-2"
                    >
                        {resending ? <Loader className="animate-spin" size={14} /> : <RefreshCw size={14} />}
                        {cooldown > 0 ? `Resend in ${cooldown}s` : "Resend code"}
                    </button>
                </div>
                
                <div className="text-center">
                    <button 
                        type="button"
                        onClick={() => setAuthView('register')}
                        className="text-[#7A7A7A] font-bold text-[13px] hover:text-[#0A0A0A] flex items-center justify-center gap-2 mx-auto"
                    >
                        <ChevronLeft size={16} /> Back to Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default VerifyOTP;
