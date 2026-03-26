export const orderHistoryData = [
  {
    id: "BC-1234",
    date: "October 14, 2023",
    status: "Delivered",
    items: [
      {
        name: "Ethiopia Yirgacheffe",
        image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=150&h=150&fit=crop",
      },
      {
        name: "Colombia Supremo",
        image: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?w=150&h=150&fit=crop",
      }
    ],
    totalCount: 3,
    totalPrice: 42.50,
    actions: ["Order Details", "Reorder"]
  },
  {
    id: "BC-1235",
    date: "October 26, 2023",
    status: "Processing",
    items: [
      {
        name: "Brewcraft Signature Pour-over Set",
        image: "https://images.unsplash.com/photo-1544787210-2213d2429f7b?w=150&h=150&fit=crop",
      }
    ],
    totalCount: 1,
    totalPrice: 65.00,
    actions: ["Track Shipment", "View Receipt"]
  },
  {
    id: "BC-1236",
    date: "October 30, 2023",
    status: "Cancelled",
    items: [
      {
        name: "Subscription: Monthly Roast Selection",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=150&h=150&fit=crop",
      }
    ],
    totalCount: 1,
    totalPrice: 28.00,
    actions: ["Inquiry", "Try Again"]
  }
];
