import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Heart, Minus, Plus, Edit2, Tag } from 'lucide-react';
import { CartContext } from '../../Context/CartContext';

const ProductDetailsHero = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);

    // Generate some mockup gallery images based on main image
    const galleryImages = [
        product.image,
        "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400&h=400&fit=crop", // brewing coffee
        "https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=400&h=400&fit=crop", // french press
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=400&fit=crop", // coffee beans
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-10 lg:px-20 pt-32 pb-16">

            {/* Breadcrumb */}
            <div className="text-[11px] font-semibold tracking-wider text-[#A3A3A3] mb-8 flex items-center gap-2 uppercase">
                <span className="hover:text-[#0A0A0A] cursor-pointer transition-colors">Home</span> /
                <span className="hover:text-[#0A0A0A] cursor-pointer transition-colors">Single Origin</span> /
                <span className="text-[#0A0A0A]">{product.name}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">

                {/* Left Side: Image Gallery */}
                <div className="space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full aspect-[4/5] bg-[#F9F7F2] rounded-3xl overflow-hidden relative"
                    >
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={selectedImage}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                src={galleryImages[selectedImage]}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </AnimatePresence>
                    </motion.div>

                    <div className="flex gap-4">
                        {galleryImages.map((img, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -2 }}
                                onClick={() => setSelectedImage(idx)}
                                className={`flex-1 aspect-[5/4] rounded-2xl overflow-hidden cursor-pointer border-[3px] transition-all duration-300 ${selectedImage === idx ? 'border-[#D46C11]' : 'border-transparent'}`}
                            >
                                <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Product Info */}
                <div className="flex flex-col justify-start pt-4">

                    {/* Header & Badges */}
                    <div className="flex items-center justify-between mb-4">
                        <span className="bg-[#FFF4EC] text-[#D46C11] text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-widest leading-none">
                            NEW BATCH
                        </span>
                        <button className="flex items-center gap-1.5 text-[11px] font-bold tracking-wide text-[#0A0A0A] hover:text-[#D46C11] transition-colors uppercase">
                            <Edit2 size={12} strokeWidth={2.5} /> Reviews/Edit
                        </button>
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-[40px] lg:text-[46px] font-black text-[#0A0A0A] mb-4 leading-[1.1] tracking-tight"
                    >
                        {product.name}
                    </motion.h1>

                    <div className="flex items-center gap-5 mb-8">
                        <span className="text-3xl font-extrabold text-[#D46C11] tracking-tight">{product.price}</span>
                        <div className="h-6 w-[2px] bg-[#EAEAEA]"></div>
                        <div className="flex items-center gap-1.5">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} size={15} className="fill-[#D46C11] text-[#D46C11]" />
                            ))}
                            <span className="text-[13px] font-medium text-[#7A7A7A] ml-2 tracking-wide">4.8 (124 reviews)</span>
                        </div>
                    </div>

                    <p className="text-[15px] text-[#555555] mb-10 leading-[1.8] font-medium">
                        {product.description} This perfectly roasted selection highlights the rich, complex profile developed through specialized sourcing and delicate handling. Features a rich, full-bodied aroma that coffee enthusiasts adore.
                    </p>

                    {/* Flavor Profile */}
                    <div className="mb-10 border-t border-b border-[#EAEAEA] py-6">
                        <h4 className="text-[11px] font-bold text-[#A3A3A3] uppercase tracking-[0.15em] mb-4">FLAVOR PROFILE</h4>
                        <div className="flex flex-wrap gap-3">
                            <span className="flex items-center gap-2 bg-[#FFF7F0] text-[#D46C11] text-[13px] font-bold px-4 py-2 rounded-full leading-none">
                                🍊 Citrus
                            </span>
                            <span className="flex items-center gap-2 bg-[#FDF1F5] text-[#E05C82] text-[13px] font-bold px-4 py-2 rounded-full leading-none">
                                🌸 Jasmine
                            </span>
                            <span className="flex items-center gap-2 bg-[#FEF8EB] text-[#C49A00] text-[13px] font-bold px-4 py-2 rounded-full leading-none">
                                🍯 Honey
                            </span>
                        </div>
                    </div>

                    {/* Additional Details Grid */}
                    <div className="grid grid-cols-2 gap-y-7 gap-x-10 mb-10">
                        <div>
                            <p className="text-[10px] font-bold text-[#A3A3A3] uppercase tracking-[0.15em] mb-1.5">ROAST LEVEL</p>
                            <p className="font-extrabold text-[#0A0A0A] text-[15px]">Light-Medium</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-[#A3A3A3] uppercase tracking-[0.15em] mb-1.5">PROCESS</p>
                            <p className="font-extrabold text-[#0A0A0A] text-[15px]">Washed</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-[#A3A3A3] uppercase tracking-[0.15em] mb-1.5">ALTITUDE</p>
                            <p className="font-extrabold text-[#0A0A0A] text-[15px]">1,900 - 2,200m</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-[#A3A3A3] uppercase tracking-[0.15em] mb-1.5">VARIETY</p>
                            <p className="font-extrabold text-[#0A0A0A] text-[15px]">Kurume, Dega</p>
                        </div>
                    </div>

                    {/* Add to Cart Area */}
                    <div className="flex items-center gap-4 mb-5">
                        <div className="flex items-center bg-[#F7F7F7] rounded-full px-4 py-3 h-14 border border-[#EAEAEA]">
                            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-[#0A0A0A] hover:text-[#D46C11] transition px-2">
                                <Minus size={18} strokeWidth={2.5} />
                            </button>
                            <span className="font-bold text-[17px] text-[#0A0A0A] w-8 text-center">{quantity}</span>
                            <button onClick={() => setQuantity(quantity + 1)} className="text-[#0A0A0A] hover:text-[#D46C11] transition px-2">
                                <Plus size={18} strokeWidth={2.5} />
                            </button>
                        </div>

                        <button
                            onClick={() => addToCart(product, quantity, { grind: 'Whole Bean', roast: 'Light-Medium' })}
                            className="flex-grow bg-[#D46C11] hover:bg-[#B5590D] h-14 text-white text-[15px] font-bold rounded-full shadow-[0_4px_14px_rgba(212,108,17,0.3)] transition-all hover:shadow-[0_6px_20px_rgba(212,108,17,0.4)] hover:-translate-y-0.5 tracking-wide"
                        >
                            Add to Order
                        </button>

                        <button className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-[#EAEAEA] bg-white text-[#A3A3A3] hover:text-[#D46C11] hover:border-[#D46C11] transition-colors">
                            <Heart size={20} strokeWidth={2.5} />
                        </button>
                    </div>

                    <p className="text-[13px] text-[#818181] font-bold flex items-center gap-2.5 mb-10 tracking-wide">
                        <span className="bg-[#EAEAEA] text-[#0A0A0A] p-1.5 rounded-full"><Tag size={10} fill="currentColor" /></span> Free shipping on orders over ₹4596.50
                    </p>

                    {/* Brewing Guide Dropdown */}
                    <div className="bg-white border-2 border-[#F9F7F2] rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-3 cursor-pointer group">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#FFF4EC] text-[#D46C11] w-8 h-8 flex items-center justify-center rounded-lg text-lg">
                                    ☕
                                </div>
                                <h4 className="font-extrabold text-[#0A0A0A] text-[15px]">Recommended Brewing Guide</h4>
                            </div>
                            <Plus size={18} strokeWidth={3} className="text-[#A3A3A3] group-hover:text-[#0A0A0A] transition-colors" />
                        </div>
                        <p className="text-[14px] text-[#7A7A7A] leading-relaxed font-medium mt-4">
                            For the brightest cup, we recommend a <strong className="text-[#0A0A0A]">V60 Pour-over</strong>. Use a 1:16 ratio (16g coffee to 260g water) with a medium-fine grind. Water temperature at 94°C (201°F) brings out the floral jasmine notes perfectly.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetailsHero;
