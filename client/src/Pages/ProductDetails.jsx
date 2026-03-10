import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { menuData } from '../Data/MenuData';
import ProductDetailsHero from '../Components/ProductDetails/ProductDetailsHero';
import CustomerReviews from '../Components/ProductDetails/CustomerReviews';
import RelatedProducts from '../Components/ProductDetails/RelatedProducts';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Find product from Data store
        let foundProduct = null;
        for (const category of menuData) {
            const item = category.items.find((i) => i.id === id);
            if (item) {
                foundProduct = item;
                break;
            }
        }

        if (foundProduct) {
            setProduct(foundProduct);
            setLoading(false);
        } else {
            // If product not found (e.g invalid url), redirect back to menu
            navigate('/menu');
        }
    }, [id, navigate]);

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    if (loading || !product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="w-12 h-12 border-4 border-[#D46C11] border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white min-h-screen font-sans"
        >
            <ProductDetailsHero product={product} />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
            >
                <CustomerReviews />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeInUp}
            >
                <RelatedProducts currentProductId={product.id} />
            </motion.div>
        </motion.div>
    );
};

export default ProductDetails;
