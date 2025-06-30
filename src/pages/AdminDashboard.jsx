import { useEffect, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminDashboardPage = () => {
  const [stats, setStats] = useState({
    total_users: 0,
    total_products: 0,
    total_orders: 0,
    total_sales: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    api.get("/admin/dashboard")
      .then((res) => {
        setStats(res.data);
      })
      .catch(() => {
        toast.error("❌ فشل في تحميل الإحصائيات");
      });
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">👑 لوحة تحكم الأدمن</h2>
        <button
          onClick={() => navigate("/")}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          ⬅️ عودة للموقع الرئيسي
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded p-4 text-center">
          <h3 className="text-gray-500 mb-1">👥 المستخدمين</h3>
          <p className="text-2xl font-bold text-indigo-600">{stats.total_users}</p>
        </div>

        <div className="bg-white shadow rounded p-4 text-center">
          <h3 className="text-gray-500 mb-1">📦 المنتجات</h3>
          <p className="text-2xl font-bold text-indigo-600">{stats.total_products}</p>
        </div>

        <div className="bg-white shadow rounded p-4 text-center">
          <h3 className="text-gray-500 mb-1">🛒 الطلبات</h3>
          <p className="text-2xl font-bold text-indigo-600">{stats.total_orders}</p>
        </div>

        <div className="bg-white shadow rounded p-4 text-center">
          <h3 className="text-gray-500 mb-1">💰 إجمالي المبيعات</h3>
          <p className="text-2xl font-bold text-green-600">
            {stats.total_sales.toLocaleString("ar-EG")} ج.م
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
