import React, { useState, useRef } from 'react';
import { Sparkles, UploadCloud, X, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AddProductModal = ({ isOpen, onClose }) => {
    const [status, setStatus] = useState(true); // true = In Stock
    const [imagePreview, setImagePreview] = useState(null);
    const fileInputRef = useRef(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center font-sans p-4">
                    {/* Backdrop */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
                    ></motion.div>

                    {/* Modal Content */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative w-full max-w-[1000px] max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-[#EEEEEE] flex flex-col overflow-hidden"
                    >
                        {/* Close Button */}
                        <button 
                            onClick={onClose}
                            className="absolute top-6 right-6 md:top-8 md:right-8 text-[#A3A3A3] hover:text-[#111111] transition-colors bg-[#F9F9F9] p-2.5 rounded-full border border-[#EEEEEE] z-20"
                        >
                            <X size={20} />
                        </button>

                        {/* Fixed Header */}
                        <div className="p-6 md:px-10 md:pt-10 md:pb-6 border-b border-[#EEEEEE] shrink-0 bg-white relative z-10">
                            <p className="text-[10px] font-black tracking-[0.2em] text-[#D46C11] uppercase mb-2">Curating the Atelier</p>
                            <h2 className="text-[28px] md:text-[36px] font-serif font-black text-[#111111] mb-2 leading-none pr-12">Add New Roast</h2>
                            <p className="text-[13px] text-[#8A8A8A] max-w-[600px] leading-relaxed">
                                Define the sensory profile and logistics for your latest premium batch. Every entry contributes to the narrative of craft.
                            </p>
                        </div>

                        {/* Scrollable Body */}
                        <div className="p-6 md:p-10 overflow-y-auto flex-1 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#E0E0E0] [&::-webkit-scrollbar-thumb]:rounded-full">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
                                {/* Left Form Side */}
                                <div className="space-y-6">
                                    <div className="bg-white p-6 rounded-2xl border border-[#EEEEEE] shadow-[0_4px_20px_rgba(0,0,0,0.02)] space-y-6">
                                        <div>
                                            <label className="block text-[11px] font-black tracking-widest text-[#D46C11] uppercase mb-2">Product Name</label>
                                            <input 
                                                type="text" 
                                                placeholder="e.g., Ethiopian Yirgacheffe G1" 
                                                className="w-full bg-[#FDFDFD] border border-[#EEEEEE] text-[#111111] text-[13px] font-medium rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#D46C11] transition-colors placeholder:text-[#A3A3A3]"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-[11px] font-black tracking-widest text-[#D46C11] uppercase mb-2">Description</label>
                                            <textarea 
                                                rows="4"
                                                placeholder="Describe the aroma, tasting notes, and origin..." 
                                                className="w-full bg-[#FDFDFD] border border-[#EEEEEE] text-[#111111] text-[13px] font-medium rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#D46C11] transition-colors placeholder:text-[#A3A3A3] resize-none"
                                            ></textarea>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                            <div>
                                                <label className="block text-[11px] font-black tracking-widest text-[#D46C11] uppercase mb-2">Category</label>
                                                <select className="w-full bg-[#FDFDFD] border border-[#EEEEEE] text-[#111111] text-[13px] font-medium rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#D46C11] transition-colors appearance-none outline-none">
                                                    <option>Single Origin</option>
                                                    <option>Espresso Blend</option>
                                                    <option>Decaf</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-[11px] font-black tracking-widest text-[#D46C11] uppercase mb-2">Status</label>
                                                <div className="w-full bg-[#FDFDFD] border border-[#EEEEEE] rounded-xl px-4 py-3.5 flex items-center justify-between">
                                                    <span className="text-[13px] font-bold text-[#111111]">{status ? 'In Stock' : 'Out of Stock'}</span>
                                                    <button 
                                                        onClick={() => setStatus(!status)}
                                                        className={`w-10 h-5 rounded-full relative transition-colors ${status ? 'bg-[#D46C11]/20' : 'bg-[#EAEAEA]'}`}
                                                    >
                                                        <div className={`w-3.5 h-3.5 rounded-full absolute top-[3px] transition-all bg-[#D46C11] ${status ? 'right-[4px]' : 'left-[4px] bg-[#A3A3A3]'}`}></div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                            <div>
                                                <label className="block text-[11px] font-black tracking-widest text-[#D46C11] uppercase mb-2">Price (USD)</label>
                                                <div className="relative">
                                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A8A8A] font-bold">$</span>
                                                    <input 
                                                        type="text" 
                                                        placeholder="0.00" 
                                                        className="w-full bg-[#FDFDFD] border border-[#EEEEEE] text-[#111111] text-[13px] font-bold rounded-xl pl-8 pr-4 py-3.5 focus:outline-none focus:border-[#D46C11] transition-colors placeholder:text-[#A3A3A3]"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-[11px] font-black tracking-widest text-[#D46C11] uppercase mb-2">Stock Quantity</label>
                                                <input 
                                                    type="text" 
                                                    placeholder="Units" 
                                                    className="w-full bg-[#FDFDFD] border border-[#EEEEEE] text-[#111111] text-[13px] font-bold rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#D46C11] transition-colors placeholder:text-[#A3A3A3]"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-col-reverse sm:flex-row gap-4">
                                        <button 
                                            onClick={onClose}
                                            className="flex-1 bg-white border border-[#EEEEEE] text-[#111111] font-bold text-[14px] py-3.5 sm:py-4 rounded-xl hover:bg-[#F9F9F9] transition-all"
                                        >
                                            Cancel
                                        </button>
                                        <button className="flex-1 bg-[#D46C11] text-white font-bold text-[14px] py-3.5 sm:py-4 rounded-xl shadow-[0_4px_15px_rgba(212,108,17,0.2)] hover:shadow-[0_4px_20px_rgba(212,108,17,0.4)] hover:bg-[#B5590D] transition-all">
                                            Save Product
                                        </button>
                                    </div>
                                </div>

                                {/* Right Side - Imagery & Tips */}
                                <div className="space-y-6">
                                    <div className="bg-white p-6 rounded-2xl border border-[#EEEEEE] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                                        <h3 className="text-[11px] font-black tracking-widest text-[#D46C11] uppercase mb-4">Product Imagery</h3>
                                        
                                        <input 
                                            type="file" 
                                            accept="image/*" 
                                            className="hidden" 
                                            ref={fileInputRef} 
                                            onChange={handleImageChange} 
                                        />

                                        <div 
                                            onClick={() => fileInputRef.current?.click()}
                                            className="w-full aspect-[4/3] sm:aspect-square bg-[#FDFDFD] rounded-2xl border-2 border-dashed border-[#EEEEEE] flex flex-col items-center justify-center mb-4 hover:border-[#D46C11] hover:bg-[#FDF4EB] transition-colors cursor-pointer group relative overflow-hidden"
                                        >
                                            {imagePreview ? (
                                                <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-40 h-40 bg-gradient-to-b from-[#F0F0F0] to-[#EAEAEA] rounded-full shadow-[0_15px_35px_rgba(0,0,0,0.1)] flex items-center justify-center group-hover:scale-105 transition-transform duration-500 border-4 border-white">
                                                    <span className="text-[#A3A3A3] font-serif italic text-4xl font-bold">Brew</span>
                                                </div>
                                            )}
                                            <div className="absolute inset-0 bg-white/90 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center backdrop-blur-sm">
                                                <UploadCloud className="text-[#D46C11] mb-2" size={28} strokeWidth={2.5} />
                                                <span className="text-[14px] font-black text-[#111111] mb-1">Replace Image</span>
                                                <span className="text-[11px] font-bold text-[#8A8A8A]">High-res JPG or PNG (max 5MB)</span>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-3 gap-3 md:gap-4">
                                            <div className="aspect-square bg-[#FDFDFD] rounded-xl border border-[#EEEEEE] overflow-hidden relative">
                                                <img src={imagePreview || "https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=200&q=80"} alt="Thumbnail" className="w-full h-full object-cover opacity-80" />
                                            </div>
                                            <div onClick={() => fileInputRef.current?.click()} className="aspect-square bg-[#FDFDFD] rounded-xl border-2 border-dashed border-[#EEEEEE] flex items-center justify-center text-[#A3A3A3] hover:text-[#D46C11] hover:border-[#D46C11] hover:bg-[#FDF4EB] transition-colors cursor-pointer">
                                                <Plus size={24} strokeWidth={2.5} />
                                            </div>
                                            <div className="aspect-square bg-[#FDFDFD] rounded-xl border-2 border-dashed border-[#EEEEEE] flex items-center justify-center text-[#A3A3A3] hover:text-[#D46C11] hover:border-[#D46C11] hover:bg-[#FDF4EB] transition-colors cursor-pointer">
                                                <Plus size={24} strokeWidth={2.5} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-[#FDF4EB] p-5 rounded-2xl border border-[#FDEBDB] flex gap-4 shadow-sm">
                                        <div className="mt-0.5">
                                            <Sparkles size={18} className="text-[#D46C11]" />
                                        </div>
                                        <div>
                                            <h4 className="text-[13px] font-black text-[#111111] mb-1">Curation Tip</h4>
                                            <p className="text-[12px] text-[#A3A3A3] leading-relaxed font-medium">
                                                For Single Origin roasts, ensure the altitude and farm name are included in the description to justify the premium pricing tier.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default AddProductModal;
