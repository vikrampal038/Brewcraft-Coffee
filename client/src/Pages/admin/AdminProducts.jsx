import React, { useState, useMemo } from 'react';
import { Plus, Search, Filter, RotateCcw, Eye, Edit2, Trash2, ChevronDown, Image as ImageIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../Common/Admin/AdminLayout';
import { adminProductsMock } from '../../Data/AdminData';
import AddProductModal from '../../Components/Admin/AddProductModal';
import EditProductModal from '../../Components/Admin/EditProductModal';

const AdminProducts = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState(adminProductsMock);
    
    // UI state
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedEditProduct, setSelectedEditProduct] = useState(null);

    // Filter states
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('All Categories');
    const [statusFilter, setStatusFilter] = useState('All Statuses');

    const handleReset = () => {
        setSearchTerm('');
        setCategoryFilter('All Categories');
        setStatusFilter('All Statuses');
    };

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                  product.sku.toLowerCase().includes(searchTerm.toLowerCase());
            
            const matchesCategory = categoryFilter === 'All Categories' || 
                                    product.categories.includes(categoryFilter);
            
            const matchesStatus = statusFilter === 'All Statuses' || 
                                  product.status === statusFilter;

            return matchesSearch && matchesCategory && matchesStatus;
        });
    }, [products, searchTerm, categoryFilter, statusFilter]);

    return (
        <AdminLayout>
            <div className="flex flex-col gap-6 max-w-[1400px]">
                
                {/* Header Section */}
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <div className="flex items-center gap-2 text-[12px] font-bold text-[#8A8A8A] mb-4">
                            <span>Admin</span>
                            <span>›</span>
                            <span className="text-[#D46C11]">Products</span>
                        </div>
                        <h2 className="text-[32px] font-black text-[#111111] mb-2 leading-none">Products</h2>
                        <p className="text-[13px] font-medium text-[#8A8A8A]">Manage your curated coffee menu items and roasts.</p>
                    </div>
                    <button 
                        onClick={() => setIsAddModalOpen(true)}
                        className="bg-[#D46C11] hover:bg-[#B5590D] transition-colors text-white px-6 py-2.5 rounded-full text-[13px] font-bold shadow-sm flex items-center gap-2"
                    >
                        <Plus size={16} strokeWidth={2.5} />
                        Add Product
                    </button>
                </div>

                <AddProductModal 
                    isOpen={isAddModalOpen} 
                    onClose={() => setIsAddModalOpen(false)} 
                />

                <EditProductModal 
                    isOpen={isEditModalOpen}
                    onClose={() => setIsEditModalOpen(false)}
                    product={selectedEditProduct}
                />

                {/* Filter Section */}
                <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#EEEEEE] shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-wrap lg:flex-nowrap items-end gap-4">
                    <div className="flex-1 min-w-[250px]">
                        <label className="block text-[10px] font-black tracking-wider text-[#A3A3A3] uppercase mb-2">Search Products</label>
                        <div className="relative">
                            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A8A8A]" />
                            <input 
                                type="text" 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Name or SKU..." 
                                className="w-full bg-white border border-[#EEEEEE] text-[#111111] text-[13px] font-medium rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-[#D46C11] transition-colors"
                            />
                        </div>
                    </div>
                    
                    <div className="w-full lg:w-[220px]">
                        <label className="block text-[10px] font-black tracking-wider text-[#A3A3A3] uppercase mb-2">Category</label>
                        <div className="relative">
                            <select 
                                value={categoryFilter}
                                onChange={(e) => setCategoryFilter(e.target.value)}
                                className="w-full bg-white border border-[#EEEEEE] text-[#111111] text-[13px] font-medium rounded-xl py-3 pl-4 pr-10 focus:outline-none focus:border-[#D46C11] transition-colors appearance-none"
                            >
                                <option>All Categories</option>
                                <option>Whole Bean</option>
                                <option>Single Origin</option>
                                <option>Ground Coffee</option>
                                <option>Espresso</option>
                            </select>
                            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8A8A8A] pointer-events-none" />
                        </div>
                    </div>

                    <div className="w-full lg:w-[200px]">
                        <label className="block text-[10px] font-black tracking-wider text-[#A3A3A3] uppercase mb-2">Status</label>
                        <div className="relative">
                            <select 
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="w-full bg-white border border-[#EEEEEE] text-[#111111] text-[13px] font-medium rounded-xl py-3 pl-4 pr-10 focus:outline-none focus:border-[#D46C11] transition-colors appearance-none"
                            >
                                <option>All Statuses</option>
                                <option>Available</option>
                                <option>Out of Stock</option>
                            </select>
                            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8A8A8A] pointer-events-none" />
                        </div>
                    </div>

                    <button 
                        onClick={() => {}} 
                        className="bg-[#F9F9F9] hover:bg-[#F0F0F0] text-[#111111] transition-colors px-6 py-3 rounded-xl flex items-center justify-center gap-2 border border-[#EEEEEE] text-[13px] font-bold h-[46px] w-full lg:w-auto"
                    >
                        <Filter size={16} /> Apply
                    </button>
                    
                    <button 
                        onClick={handleReset}
                        className="bg-[#F9F9F9] hover:bg-[#F0F0F0] text-[#111111] transition-colors w-[46px] h-[46px] shrink-0 rounded-xl flex items-center justify-center border border-[#EEEEEE]"
                        title="Reset Filters"
                    >
                        <RotateCcw size={16} />
                    </button>
                </div>

                {/* Table Section */}
                <div className="bg-white rounded-3xl border border-[#EEEEEE] px-8 pt-8 pb-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                    <div className="w-full overflow-x-auto overflow-y-auto max-h-[500px] pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#E0E0E0] [&::-webkit-scrollbar-thumb]:rounded-full">
                        <table className="w-full text-left border-collapse relative">
                            <thead className="bg-white sticky top-0 z-10 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:border-b before:border-[#F4F4F4]">
                                <tr>
                                    <th className="pb-4 text-[10px] font-black text-[#A3A3A3] uppercase tracking-widest w-[35%]">Product</th>
                                    <th className="pb-4 text-[10px] font-black text-[#A3A3A3] uppercase tracking-widest w-[20%]">Category</th>
                                    <th className="pb-4 text-[10px] font-black text-[#A3A3A3] uppercase tracking-widest w-[15%]">Price</th>
                                    <th className="pb-4 text-[10px] font-black text-[#A3A3A3] uppercase tracking-widest w-[15%]">Status</th>
                                    <th className="pb-4 text-[10px] font-black text-[#A3A3A3] uppercase tracking-widest w-[15%] text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredProducts.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" className="py-12 text-center text-[#8A8A8A] text-[14px]">No products found matching your criteria.</td>
                                    </tr>
                                ) : filteredProducts.map((product) => (
                                    <tr key={product.id} className="border-b border-[#F9F9F9] last:border-0 hover:bg-[#FAFAFA] transition-colors">
                                        <td className="py-5">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-[#F9F9F9] border border-[#EEEEEE] overflow-hidden shrink-0 flex items-center justify-center">
                                                    {product.image ? (
                                                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                                    ) : (
                                                        <ImageIcon size={20} className="text-[#A3A3A3]" />
                                                    )}
                                                </div>
                                                <div>
                                                    <h4 className="text-[14px] font-black text-[#111111] leading-none mb-1.5">{product.name}</h4>
                                                    <p className="text-[11px] text-[#A3A3A3] font-black tracking-wider uppercase">SKU: {product.sku}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-5">
                                            <div className="flex flex-wrap gap-2">
                                                {product.categories.map((cat, i) => (
                                                    <span key={i} className="px-3 py-1.5 bg-[#FDF4EB] text-[#D46C11] rounded-full text-[10px] font-black tracking-widest uppercase whitespace-nowrap">
                                                        {cat}
                                                    </span>
                                                ))}
                                            </div>
                                        </td>
                                        <td className="py-5">
                                            <span className="text-[14px] font-black text-[#111111]">${product.price}</span>
                                        </td>
                                        <td className="py-5">
                                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-black tracking-widest uppercase ${
                                                product.status === 'Available' ? 'bg-[#E6F4EA] text-[#1E8E3E]' : 'bg-[#FFF8E1] text-[#F57C00]'
                                            }`}>
                                                {product.status}
                                            </span>
                                        </td>
                                        <td className="py-5">
                                            <div className="flex items-center justify-end gap-3 text-[#A3A3A3]">
                                                <button className="hover:text-[#D46C11] transition-colors p-1"><Eye size={18} /></button>
                                                <button 
                                                    onClick={() => {
                                                        setSelectedEditProduct(product);
                                                        setIsEditModalOpen(true);
                                                    }}
                                                    className="hover:text-[#D46C11] transition-colors p-1"
                                                >
                                                    <Edit2 size={18} />
                                                </button>
                                                <button className="hover:text-[#DC2626] transition-colors p-1"><Trash2 size={18} /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </AdminLayout>
    );
};

export default AdminProducts;
