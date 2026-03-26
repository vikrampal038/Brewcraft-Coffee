import React, { useEffect } from "react";
import { useAuthModal } from "../../Context/AuthContext";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import VerifyOTP from "./VerifyOTP";

const LoginModal = () => {
    const { isLoginModalOpen, closeAuthModal, authView, setAuthView } = useAuthModal();

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isLoginModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            setAuthView('login');
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isLoginModalOpen, setAuthView]);

    if (!isLoginModalOpen) return null;

    return (
        <AnimatePresence mode="wait">
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={closeAuthModal}
                    className="fixed inset-0 bg-black/70 backdrop-blur-md"
                />

                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 30 }}
                    className="relative w-full max-w-lg bg-white rounded-[40px] shadow-2xl overflow-hidden my-auto"
                >
                    {/* Progress Bar (Logic Visual Only) */}
                    {authView === 'verify' && (
                         <motion.div 
                            initial={{ width: "50%" }}
                            animate={{ width: "100%" }}
                            className="absolute top-0 left-0 h-1.5 bg-[#D46C11] z-50 rounded-full"
                         />
                    )}

                    {/* Header Image/Pattern */}
                    <div className="h-28 bg-[#3e2723] flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10 pointer-events-none rotate-12 scale-150">
                            <svg className="h-full w-full" fill="none" viewBox="0 0 200 200"><path stroke="#fff" strokeWidth="0.5" d="M0 0l200 200M200 0L0 200M0 100h200M100 0v200"/></svg>
                        </div>
                        <h2 className="text-white text-3xl font-bold tracking-tight z-10" style={{ fontFamily: "'Playfair Display', serif" }}>
                            {authView === 'login' && 'Unlock Sanctuary'}
                            {authView === 'register' && 'Join the Roast'}
                            {authView === 'verify' && 'Verify Identity'}
                        </h2>
                        <button 
                            onClick={closeAuthModal}
                            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all border border-white/5 z-20"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    <div className="p-8 sm:p-12">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={authView}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                {authView === 'login' && <LoginForm />}
                                {authView === 'register' && <RegisterForm />}
                                {authView === 'verify' && <VerifyOTP />}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Footer Subtle Branding */}
                    <div className="bg-[#FBF8EF] py-4 px-8 text-center text-[11px] font-black uppercase text-[#A3A3A3] tracking-[0.2em] border-t border-[#F2EAE4]">
                        Established 2024 • Brewcraft Coffee
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default LoginModal;
