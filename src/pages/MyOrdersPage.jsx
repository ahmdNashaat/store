// src/pages/MyOrdersPage.jsx
import { useEffect, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async"; // ✅ لازم استيراد Helmet

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get("/my-orders")
      .then((res) => setOrders(res.data))
      .catch(() => {
        toast.error("❌ فشل في تحميل الطلبات");
        setOrders([]);
      });
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <Helmet>
        <title>📦 طلباتي | Shaltout Store</title>
        <meta
          name="description"
          content="تعرف على تفاصيل طلباتك السابقة في Shaltout Store وتابع حالتها."
        />
      </Helmet>

      <h2 className="text-2xl font-bold mb-6">📦 طلباتي</h2>

      {orders.length === 0 ? (
        <p>لا توجد طلبات حالياً.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="border p-4 rounded shadow">
              <div className="mb-2">
                <span className="font-semibold">رقم الطلب: </span>{order.id}
              </div>
              <div className="text-sm text-gray-600 mb-2">
                📅 {order.created_at}
              </div>
              <div className="text-sm text-gray-800">
                <ul className="list-disc ms-5">
                  {order.items.map((item, i) => (
                    <li key={i}>
                      {item.product_name} × {item.quantity} — {item.price} ج.م
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-2 font-bold text-green-700">
                💰 الإجمالي: {order.total_price} ج.م
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrdersPage;
