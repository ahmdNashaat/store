import { useEffect, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

const AdminOrderList = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = () => {
    api.get("/orders/all")
      .then((res) => setOrders(res.data))
      .catch(() => {
        toast.error("❌ فشل في تحميل الطلبات");
        setOrders([]);
      });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">📋 جميع الطلبات</h2>

      <div className="overflow-x-auto bg-white shadow rounded">
        <table className="min-w-full table-auto border border-gray-200">
          <thead className="bg-indigo-50 text-gray-700 text-sm">
            <tr>
              <th className="p-2 border">#</th>
              <th className="p-2 border">رقم الطلب</th>
              <th className="p-2 border">العميل</th>
              <th className="p-2 border">الإجمالي</th>
              <th className="p-2 border">عدد المنتجات</th>
              <th className="p-2 border">التاريخ</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center text-gray-500 py-6">
                  لا توجد طلبات حالياً.
                </td>
              </tr>
            ) : (
              orders.map((order, i) => (
                <tr key={order.id} className="text-center text-gray-800">
                  <td className="p-2 border">{i + 1}</td>
                  <td className="p-2 border">{order.id}</td>
                  <td className="p-2 border">
                    {order.user?.username || "مستخدم غير معروف"}
                  </td>
                  <td className="p-2 border font-semibold text-green-600">
                    {order.total_price} ج.م
                  </td>
                  <td className="p-2 border">{order.items?.length || 0}</td>
                  <td className="p-2 border">
                    {new Date(order.created_at).toLocaleString("ar-EG")}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOrderList;
