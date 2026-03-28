import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Search, User } from "lucide-react";
import { orderHistoryData } from "../../Data/OrderHistoryData";

const OrderHistory = () => {
  return (
    <div className="min-h-screen bg-[#FCF8F5] pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-5 sm:px-10">
        
        {/* Header Section */}
        <div className="mb-12">
          <h1 
            className="text-4xl md:text-5xl font-bold text-[#3e2723] mb-4 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Order History
          </h1>
          <p className="text-[#7A7A7A] text-[15px] font-medium max-w-lg">
            Review your past artisanal coffee selections and subscriptions.
          </p>
        </div>

        {/* Order Cards List */}
        <div className="space-y-6">
          {orderHistoryData.map((order, idx) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-[24px] p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-black/5"
            >
              {/* Order Card Top */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <div>
                  <h3 className="text-[11px] font-black text-[#D46C11] uppercase tracking-[0.15em] mb-1">
                    ORDER #{order.id}
                  </h3>
                  <p className="text-[14px] font-bold text-[#7A7A7A]">
                    Placed on {order.date}
                  </p>
                </div>
                
                {/* Status Badge */}
                <span className={`px-4 py-1.5 rounded-full text-[12px] font-black flex items-center gap-2 ${
                  order.status === "Delivered" ? "bg-[#E6F4EA] text-[#1E8E3E]" :
                  order.status === "Processing" ? "bg-[#E8F0FE] text-[#1967D2]" :
                  "bg-[#F1F3F4] text-[#5F6368]"
                }`}>
                  <span className={`w-2 h-2 rounded-full ${
                    order.status === "Delivered" ? "bg-[#1E8E3E]" :
                    order.status === "Processing" ? "bg-[#1967D2]" :
                    "bg-[#5F6368]"
                  }`}></span>
                  {order.status}
                </span>
              </div>

              {/* Order Card Middle - Items */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex -space-x-3 overflow-hidden">
                  {order.items.slice(0, 3).map((item, i) => (
                    <div 
                      key={i} 
                      className="inline-block h-12 w-12 rounded-full ring-2 ring-white overflow-hidden bg-[#F4F5F7]"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src={item.image}
                        alt={item.name}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex-1">
                  <p className="text-[14px] font-bold text-[#0A0A0A] line-clamp-1">
                    {order.items[0].name}
                    {order.items.length > 1 && `, ${order.items[1].name}`}
                    {order.totalCount > 3 && ` + ${order.totalCount - 3} more`}
                  </p>
                </div>
              </div>

              {/* Order Card Bottom - Price & Actions */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-8 border-t border-[#F4F5F7] gap-6">
                <span className="text-[22px] font-black text-[#0A0A0A]">
                   ₹{order.totalPrice.toFixed(2)}
                </span>
                
                <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                    {order.actions.map((action, actionIdx) => (
                        <button 
                          key={actionIdx}
                          className={`flex-1 sm:flex-none px-6 h-11 rounded-full text-[14px] font-bold transition-all duration-300 ${
                            actionIdx === 1 
                              ? "bg-[#3e2723] text-white hover:bg-[#2d1b18]" 
                              : "bg-white border-2 border-[#EAEAEA] text-[#0A0A0A] hover:border-[#D46C11]"
                          } ${action === "Try Again" ? "opacity-50" : ""}`}
                        >
                          {action}
                        </button>
                    ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-16 flex items-center justify-center gap-6">
          <button className="w-10 h-10 rounded-full border-2 border-[#EAEAEA] flex items-center justify-center text-[#A3A3A3] hover:text-[#0A0A0A] hover:border-[#0A0A0A] transition-all">
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>
          <span className="text-[14px] font-bold text-[#0A0A0A]">
            Page <span className="text-[#D46C11]">1</span> of 5
          </span>
          <button className="w-10 h-10 rounded-full border-2 border-[#EAEAEA] flex items-center justify-center text-[#A3A3A3] hover:text-[#0A0A0A] hover:border-[#0A0A0A] transition-all">
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default OrderHistory;
