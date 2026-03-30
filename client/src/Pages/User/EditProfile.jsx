import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, MoreVertical, CheckCircle2 } from 'lucide-react';

const EditProfile = () => {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();
  const fileInputRef = React.useRef(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    coffeeStory: "",
  });
  const [isSaving, setIsSaving] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (isLoaded && user) {
      setFormData({
        fullName: user.fullName || "",
        phoneNumber: user.primaryPhoneNumber?.phoneNumber || "",
        coffeeStory: user.unsafeMetadata?.coffeeStory || "",
      });
    }
  }, [isLoaded, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        await user.setProfileImage({ file });
      } catch (error) {
        console.error("Image upload error:", error);
        alert("Failed to upload image.");
      }
    }
  };

  const handleSave = async () => {
    if (isSaving) return;
    setIsSaving(true);
    try {
      const names = formData.fullName.trim().split(" ");
      const firstName = names[0];
      const lastName = names.slice(1).join(" ");

      await user.update({
        firstName,
        lastName,
        unsafeMetadata: {
          ...user.unsafeMetadata,
          coffeeStory: formData.coffeeStory,
        },
      });

      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        navigate("/profile");
      }, 2000);
    } catch (error) {
      console.error("Update error:", error);
      alert("Failed to update profile. Please check console for details.");
    } finally {
      setIsSaving(false);
    }
  };

  if (!isLoaded || !user) return null;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-20 pb-12 font-sans selection:bg-[#A68966]/30">
      <div className="max-w-2xl mx-auto px-4">
        
        {/* Top Navbar Style Header */}
        <div className="flex items-center justify-between mb-8 px-2">
          <Link 
            to="/profile" 
            className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/70 hover:text-white"
          >
            <ArrowLeft size={22} />
          </Link>
          <span className="text-lg font-medium tracking-wide text-[#EAEAEA]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Brewcraft Coffee
          </span>
          <button className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/70 hover:text-white">
            <MoreVertical size={22} />
          </button>
        </div>

        {/* Form Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#121212] rounded-[40px] p-8 sm:p-12 border border-white/5 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.8)]"
        >
          {/* Titles */}
          <div className="text-center mb-10">
            <h1 
              className="text-4xl sm:text-5xl font-bold mb-3 tracking-tight text-[#F5F5F5]" 
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Edit Your Profile
            </h1>
            <p className="text-[10px] font-black tracking-[0.25em] text-[#A68966] uppercase">
              Curating your craft coffee experience
            </p>
          </div>

          {/* Profile Photo Section */}
          <div className="flex flex-col items-center mb-10">
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleImageChange} 
              className="hidden" 
              accept="image/*"
            />
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#A68966]/20 relative group mb-4 cursor-pointer"
            >
              <img 
                src={user.imageUrl} 
                alt="Profile" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-bold uppercase tracking-wider">Update</span>
              </div>
            </div>
            <div className="flex gap-8">
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="text-[12px] font-bold text-[#A68966] hover:text-[#C4A47C] transition-colors uppercase tracking-wider"
              >
                Change Photo
              </button>
              <button className="text-[12px] font-bold text-white/30 hover:text-white/50 transition-colors uppercase tracking-wider">
                Remove
              </button>
            </div>
          </div>

          {/* Inputs Section */}
          <div className="space-y-6 mb-10">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.15em] text-[#A68966] ml-1">
                Full Name
              </label>
              <div className="relative group">
                <input 
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-[#1A1A1A] border border-white/5 rounded-2xl py-4 px-6 text-white text-base focus:outline-none focus:border-[#A68966]/30 focus:ring-1 focus:ring-[#A68966]/30 transition-all placeholder:text-white/10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.15em] text-[#A68966] ml-1">
                Email Address (Read Only)
              </label>
              <div className="relative group">
                <input 
                  type="email"
                  value={user.primaryEmailAddress?.emailAddress}
                  readOnly
                  className="w-full bg-[#1A1A1A]/40 border border-white/5 rounded-2xl py-4 px-6 text-white/30 text-base cursor-not-allowed outline-none"
                />
                <div className="absolute right-6 top-1/2 -translate-y-1/2 text-white/10">
                  <CheckCircle2 size={18} />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.15em] text-[#A68966] ml-1">
                Phone Number
              </label>
              <div className="relative group">
                <input 
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-[#1A1A1A] border border-white/5 rounded-2xl py-4 px-6 text-white text-base focus:outline-none focus:border-[#A68966]/30 focus:ring-1 focus:ring-[#A68966]/30 transition-all placeholder:text-white/10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.15em] text-[#A68966] ml-1">
                Coffee Story
              </label>
              <div className="relative group">
                <textarea 
                  name="coffeeStory"
                  value={formData.coffeeStory}
                  onChange={handleChange}
                  placeholder="Tell us about your favorite roast..."
                  rows={4}
                  className="w-full bg-[#1A1A1A] border border-white/5 rounded-2xl py-4 px-6 text-white text-base focus:outline-none focus:border-[#A68966]/30 focus:ring-1 focus:ring-[#A68966]/30 transition-all placeholder:text-white/10 resize-none"
                />
              </div>
            </div>
          </div>

          {/* Sync Status Button */}
          <div className="flex justify-center mb-10">
            <button className="flex items-center gap-3 px-6 py-2.5 bg-[#1A1A1A] rounded-full border border-white/5 opacity-80 hover:opacity-100 transition-opacity cursor-default">
              <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                Cloud Sync Active
              </span>
            </button>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={handleSave}
              disabled={isSaving}
              className="relative group overflow-hidden rounded-[20px] h-14 disabled:opacity-50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#A6855B] to-[#735432] transition-transform duration-500 group-hover:scale-105"></div>
              <span className="relative z-10 text-[13px] font-black uppercase tracking-widest text-white shadow-sm">
                {isSaving ? "Saving..." : "Save Changes"}
              </span>
            </button>
            <button 
              onClick={() => navigate("/profile")}
              className="rounded-[20px] border border-white/10 bg-white/5 hover:bg-white/10 transition-all h-14 text-[13px] font-black uppercase tracking-widest text-white/80"
            >
              Cancel
            </button>
          </div>
        </motion.div>
      </div>

      {/* Success Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 w-max"
          >
            <div className="bg-[#A68966] text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-3">
              <CheckCircle2 size={20} />
              <span className="font-bold uppercase tracking-widest text-[10px]">Profile Updated Successfully</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EditProfile;
