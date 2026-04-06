import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, MoreVertical, CheckCircle2 } from "lucide-react";
import { useAuth } from "../../Hooks/useAuth";

const EditProfile = () => {
  const { user, isLoaded } = useAuth();
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
        const reader = new FileReader();
        reader.onload = () => {
          const nextUser = {
            ...user,
            imageUrl: reader.result,
          };
          localStorage.setItem("user", JSON.stringify(nextUser));
          window.location.reload();
        };
        reader.readAsDataURL(file);
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
      const nextUser = {
        ...user,
        name: formData.fullName,
        fullName: formData.fullName,
        phone: formData.phoneNumber,
        primaryPhoneNumber: {
          phoneNumber: formData.phoneNumber,
        },
        coffeeStory: formData.coffeeStory,
        unsafeMetadata: {
          ...(user?.unsafeMetadata || {}),
          coffeeStory: formData.coffeeStory,
        },
      };

      localStorage.setItem("user", JSON.stringify(nextUser));

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
    <div className="min-h-screen bg-[#FCF8F5] text-[#0A0A0A] pt-32 pb-20 font-sans selection:bg-[#D46C11]/30">
      <div className="max-w-2xl mx-auto px-5 sm:px-10">
        {/* Top Navbar Style Header */}
        <Link
          to="/profile"
          className="p-2 mb-4 rounded-full transition-colors text-[#555555] hover:text-[#0A0A0A] flex items-center justify-start w-fit"
        >
          <ArrowLeft size={22} className="mr-2" />
          <span className="font-bold text-[14px]">Back to Profile</span>
        </Link>
        <div className="text-center mb-10 w-full mt-4">
          <h1
            className="text-4xl md:text-5xl font-bold mb-3 tracking-tight text-[#3e2723]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Edit Your Profile
          </h1>
          <p className="text-[10px] font-black tracking-[0.25em] text-[#D46C11] uppercase">
            Curating your craft coffee experience
          </p>
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-[40px] flex flex-col gap-6 p-8 border border-black/5 shadow-[0_4px_25px_rgba(0,0,0,0.03)]"
        >

          {/* Profile Photo Section */}
          <div className="flex flex-col items-center gap-4">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              className="hidden"
              accept="image/*"
            />
            <div
              onClick={() => fileInputRef.current?.click()}
              className="w-24 h-24 rounded-full overflow-hidden border-[3px] border-[#FCF8F5] shadow-lg relative group cursor-pointer"
            >
              <img
                src={user.imageUrl}
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                  Update
                </span>
              </div>
            </div>
            <div className="flex gap-8">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="text-[12px] font-bold text-[#D46C11] hover:text-[#B5590D] transition-colors uppercase tracking-wider"
              >
                Change Photo
              </button>
              <button className="text-[12px] font-bold text-[#A3A3A3] hover:text-[#555555] transition-colors uppercase tracking-wider">
                Remove
              </button>
            </div>
          </div>

          {/* Inputs Section */}
          <div className="flex flex-col gap-6 mt-4" >
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase tracking-[0.15em] text-[#D46C11] ml-1">
                Full Name
              </label>
              <div className="relative group">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-[#F4F5F7] border border-transparent rounded-2xl py-4 px-6 text-[#0A0A0A] font-bold text-[15px] focus:outline-none focus:border-[#D46C11] focus:ring-1 focus:ring-[#D46C11]/30 transition-all placeholder:text-[#A3A3A3] placeholder:font-normal"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase tracking-[0.15em] text-[#D46C11] ml-1">
                Email Address (Read Only)
              </label>
              <div className="relative group">
                <input
                  type="email"
                  value={user.primaryEmailAddress?.emailAddress}
                  readOnly
                  className="w-full bg-[#F4F5F7]/60 border border-transparent rounded-2xl py-4 px-6 text-[#7A7A7A] font-bold text-[15px] cursor-not-allowed outline-none"
                />
                <div className="absolute right-6 top-1/2 -translate-y-1/2 text-[#1E8E3E]">
                  <CheckCircle2 size={18} />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase tracking-[0.15em] text-[#D46C11] ml-1">
                Phone Number
              </label>
              <div className="relative group">
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-[#F4F5F7] border border-transparent rounded-2xl py-4 px-6 text-[#0A0A0A] font-bold text-[15px] focus:outline-none focus:border-[#D46C11] focus:ring-1 focus:ring-[#D46C11]/30 transition-all placeholder:text-[#A3A3A3] placeholder:font-normal"
                />
              </div>
            </div>
          </div>

          {/* Sync Status Button */}
          <div className="flex justify-center mt-2">
            <button className="flex items-center gap-3 px-6 py-2.5 bg-[#FCF8F5] rounded-full border border-black/5 transition-opacity cursor-default">
              <div className="w-2 h-2 rounded-full bg-[#1E8E3E] shadow-[0_0_8px_rgba(30,142,62,0.4)]"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#555555]">
                Cloud Sync Active
              </span>
            </button>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-4 mt-2">
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="relative group overflow-hidden rounded-full h-14 disabled:opacity-50"
            >
              <div className="absolute inset-0 bg-[#D46C11] group-hover:bg-[#B5590D] transition-colors duration-300"></div>
              <span className="relative z-10 text-[13px] font-black uppercase tracking-widest text-white shadow-sm flex items-center justify-center h-full">
                {isSaving ? "Saving..." : "Save Changes"}
              </span>
            </button>
            <button
              onClick={() => navigate("/profile")}
              className="rounded-full border-2 border-[#EAEAEA] bg-white hover:border-[#D46C11] transition-all h-14 text-[13px] font-black uppercase tracking-widest text-[#0A0A0A] flex items-center justify-center"
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
            <div className="bg-[#1E8E3E] text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-3">
              <CheckCircle2 size={20} />
              <span className="font-bold uppercase tracking-widest text-[10px]">
                Profile Updated Successfully
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EditProfile;
