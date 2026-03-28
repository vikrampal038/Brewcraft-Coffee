import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../Context/CartContext';

const MenuItemCard = ({ item }) => {
    const { addToCart } = useContext(CartContext);
    const handleAddToCart = (e) => {
        e.preventDefault(); // prevent triggering the Link
        addToCart(item, 1, { grind: 'Whole Bean', roast: 'Medium Roast' });
        // Optional: show a mini toast or handle UI state here
    };

    return (
        <Link to={`/product/${item.id}`} className="block">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-[20px] p-5 flex flex-col h-full shadow-[0_4px_16px_rgba(0,0,0,0.02)] border border-[#EAEAEA] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
                <div className="rounded-[16px] overflow-hidden mb-6 bg-[#FAFAFA] aspect-[5/4] sm:aspect-square flex items-center justify-center">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-[16px]"
                    />
                </div>

                <div className="flex justify-between items-start mb-3">
                    <h3 className="font-extrabold text-[17px] text-[#0A0A0A] tracking-tight">{item.name}</h3>
                    <span className="font-bold text-[#0A0A0A] text-[15px]">{item.price}</span>
                </div>

                <p className="text-[13px] font-medium text-[#7A7A7A] mb-8 flex-grow leading-relaxed">
                    {item.description}
                </p>

                <button
                    onClick={handleAddToCart}
                    className="w-full py-3 rounded-full border-2 border-[#EAEAEA] text-[#0A0A0A] font-bold text-[13px] tracking-wide transition-colors hover:border-[#D46C11] hover:text-[#D46C11] mt-auto"
                >
                    Add to Bag
                </button>
            </motion.div>
        </Link>
    );
};

export default MenuItemCard;
