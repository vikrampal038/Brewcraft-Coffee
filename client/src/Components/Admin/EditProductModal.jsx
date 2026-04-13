import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Package, Trash2, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const EditProductModal = ({ isOpen, onClose, product }) => {
    const [status, setStatus] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        stock: '',
        sku: '',
        category: ''
    });
    const [imagePreview, setImagePreview] = useState(null);
    const fileInputRef = useRef(null);

    // Sync product data to form when modal opens
    useEffect(() => {
        if (product && isOpen) {
            setFormData({
                name: product.name || '',
                description: product.description || 'Grown in the lofty volcanic slopes, this legendary dark roast offers a heavy body with concentrated notes of dark chocolate, earthy cedar, and a syrupy sweet finish. Traditionally wet-hulled for maximum complexity.',
                price: product.price || '',
                stock: product.stock || '12',
                sku: product.sku || 'SUM-D-0042',
                category: product.categories && product.categories.length > 0 ? product.categories[0] : 'Dark Roast'
            });
            setStatus(product.status === 'Available');
            setImagePreview(product.image || null);
        }
    }, [product, isOpen]);

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

    if (!isOpen || !product) return null;

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
                        className="relative w-full max-w-[1100px] max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-[#EEEEEE] flex flex-col overflow-hidden"
                    >
                        {/* Close Button */}
                        <button 
                            onClick={onClose}
                            className="absolute top-6 right-6 md:top-8 md:right-8 text-[#A3A3A3] hover:text-[#111111] transition-colors bg-[#F9F9F9] p-2.5 rounded-full border border-[#EEEEEE] z-20"
                        >
                            <X size={20} />
                        </button>

                        {/* Fixed Header */}
                        <div className="p-6 md:px-10 md:pt-10 md:pb-6 border-b border-[#EEEEEE] shrink-0 bg-white relative z-10 flex items-center gap-4">
                            <h2 className="text-[28px] md:text-[36px] font-serif font-black text-[#111111] leading-none italic">Edit Product</h2>
                        </div>

                        {/* Scrollable Body */}
                        <div className="p-6 md:p-10 overflow-y-auto flex-1 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#E0E0E0] [&::-webkit-scrollbar-thumb]:rounded-full">
                            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 md:gap-10">
                                
                                {/* Left Form Side */}
                                <div className="space-y-6">
                                    {/* Main Info */}
                                    <div className="bg-white p-8 rounded-2xl border border-[#EEEEEE] shadow-[0_4px_20px_rgba(0,0,0,0.02)] space-y-6">
                                        <div>
                                            <label className="block text-[11px] font-black tracking-widest text-[#D46C11] uppercase mb-2">Product Name</label>
                                            <input 
                                                type="text" 
                                                value={formData.name}
                                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                                className="w-full bg-[#FDFDFD] border border-[#EEEEEE] text-[#111111] text-[13px] font-bold rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#D46C11] transition-colors"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-[11px] font-black tracking-widest text-[#D46C11] uppercase mb-2">Description</label>
                                            <textarea 
                                                rows="6"
                                                value={formData.description}
                                                onChange={(e) => setFormData({...formData, description: e.target.value})}
                                                className="w-full bg-[#FDFDFD] border border-[#EEEEEE] text-[#111111] text-[13px] font-medium leading-relaxed rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#D46C11] transition-colors resize-none"
                                            ></textarea>
                                        </div>
                                    </div>

                                    {/* Inventory & Logistics */}
                                    <div className="bg-white p-8 rounded-2xl border border-[#EEEEEE] shadow-[0_4px_20px_rgba(0,0,0,0.02)] space-y-6">
                                        <div className="flex items-center gap-3 mb-6">
                                            <Package size={20} className="text-[#D46C11]" />
                                            <h3 className="text-[16px] font-serif font-bold text-[#111111]">Inventory & Logistics</h3>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                            <div>
                                                <label className="block text-[11px] font-black tracking-widest text-[#D46C11] uppercase mb-2">Stock Quantity</label>
                                                <div className="relative">
                                                    <input 
                                                        type="text" 
                                                        value={formData.stock}
                                                        onChange={(e) => setFormData({...formData, stock: e.target.value})}
                                                        className="w-full bg-[#FDFDFD] border border-[#EEEEEE] text-[#111111] text-[13px] font-bold rounded-xl px-4 py-3.5 pr-12 focus:outline-none focus:border-[#D46C11] transition-colors"
                                                    />
                                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] font-bold text-[#A3A3A3]">Units</span>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-[11px] font-black tracking-widest text-[#D46C11] uppercase mb-2">SKU Reference</label>
                                                <input 
                                                    type="text" 
                                                    value={formData.sku}
                                                    onChange={(e) => setFormData({...formData, sku: e.target.value})}
                                                    className="w-full bg-[#FDFDFD] border border-[#EEEEEE] text-[#111111] text-[13px] font-bold rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#D46C11] transition-colors"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-4 shrink-0">
                                        <button className="flex items-center gap-2 text-[#DC2626] font-bold text-[13px] hover:text-[#B91C1C] transition-colors py-3.5 px-2">
                                            <Trash2 size={16} /> Delete Product
                                        </button>
                                        <div className="flex flex-col-reverse sm:flex-row gap-4 w-full sm:w-auto flex-1 sm:flex-none justify-end">
                                            <button 
                                                onClick={onClose}
                                                className="bg-white border border-[#EEEEEE] text-[#111111] font-bold text-[14px] py-3.5 px-8 rounded-xl hover:bg-[#F9F9F9] transition-all"
                                            >
                                                Cancel
                                            </button>
                                            <button className="bg-[#D46C11] text-white font-bold text-[14px] py-3.5 px-8 rounded-xl shadow-[0_4px_15px_rgba(212,108,17,0.2)] hover:shadow-[0_4px_20px_rgba(212,108,17,0.4)] hover:bg-[#B5590D] transition-all">
                                                Update Product
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Form Side */}
                                <div className="space-y-6">
                                    {/* Visual Preview */}
                                    <div className="bg-white p-8 rounded-2xl border border-[#EEEEEE] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                                        <h3 className="text-[13px] font-black text-[#111111] mb-4">Visual Preview</h3>
                                        <input 
                                            type="file" 
                                            accept="image/*" 
                                            className="hidden" 
                                            ref={fileInputRef} 
                                            onChange={handleImageChange} 
                                        />
                                        <div 
                                            onClick={() => fileInputRef.current?.click()}
                                            className="w-full aspect-[3/4] bg-[#FDFDFD] rounded-xl border border-[#EEEEEE] flex items-center justify-center mb-4 cursor-pointer hover:border-[#D46C11] group relative overflow-hidden"
                                        >
                                            {imagePreview ? (
                                                <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                                            ) : (
                                                <ImageIcon size={40} className="text-[#E0E0E0]" />
                                            )}
                                            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center font-bold text-[#D46C11] text-[13px]">
                                                Change Image
                                            </div>
                                        </div>
                                        <p className="text-center text-[11px] text-[#8A8A8A]">Recommended size: 1200x1600px (JPG or PNG)</p>
                                    </div>

                                    {/* Pricing & Visibility */}
                                    <div className="bg-white p-8 rounded-2xl border border-[#EEEEEE] shadow-[0_4px_20px_rgba(0,0,0,0.02)] space-y-6">
                                        <div>
                                            <label className="block text-[11px] font-black tracking-widest text-[#D46C11] uppercase mb-2">Price (USD)</label>
                                            <div className="relative">
                                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A8A8A] font-bold">$</span>
                                                <input 
                                                    type="text" 
                                                    value={formData.price}
                                                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                                                    className="w-full bg-[#FDFDFD] border border-[#EEEEEE] text-[#111111] text-[14px] font-black rounded-xl pl-8 pr-4 py-3.5 focus:outline-none focus:border-[#D46C11] transition-colors"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-[11px] font-black tracking-widest text-[#D46C11] uppercase mb-2">Category</label>
                                            <select 
                                                value={formData.category}
                                                onChange={(e) => setFormData({...formData, category: e.target.value})}
                                                className="w-full bg-[#FDFDFD] border border-[#EEEEEE] text-[#111111] text-[13px] font-medium rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#D46C11] transition-colors appearance-none outline-none"
                                            >
                                                <option>Dark Roast</option>
                                                <option>Single Origin</option>
                                                <option>Espresso Blend</option>
                                                <option>Decaf</option>
                                            </select>
                                        </div>

                                        <div className="pt-2 border-t border-[#EEEEEE] flex items-center justify-between">
                                            <div>
                                                <h4 className="text-[13px] font-bold text-[#111111]">Visibility Status</h4>
                                                <p className="text-[11px] text-[#A3A3A3]">{status ? 'Active in storefront' : 'Hidden from storefront'}</p>
                                            </div>
                                            <button 
                                                onClick={() => setStatus(!status)}
                                                className={`w-11 h-6 rounded-full relative transition-colors ${status ? 'bg-[#D46C11]/20' : 'bg-[#EAEAEA]'}`}
                                            >
                                                <div className={`w-4 h-4 rounded-full absolute top-[4px] transition-all bg-[#D46C11] shadow-sm ${status ? 'right-[4px]' : 'left-[4px] bg-[#A3A3A3]'}`}></div>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Tip */}
                                    <div className="bg-[#FDF4EB] p-6 rounded-2xl border border-[#FDEBDB] flex gap-4 shadow-sm">
                                        <div className="mt-0.5">
                                            <Sparkles size={18} className="text-[#D46C11]" />
                                        </div>
                                        <div>
                                            <h4 className="text-[12px] font-black text-[#111111] mb-1">Roast Master Insight</h4>
                                            <p className="text-[11px] text-[#A3A3A3] leading-relaxed font-medium">
                                                This lot is showing high demand in seasonal analytics. Consider promoting as 'Roaster's Choice' for the upcoming month.
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

export default EditProductModal;
