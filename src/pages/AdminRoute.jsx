import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import api from "../services/api";

const AdminRoute = () => {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const res = await api.get("/admin/me");
        if (res.data?.is_admin) {
          setIsAdmin(true);
        }
      } catch (err) {
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    };
    checkAdmin();
  }, []);

  if (loading) {
    return <div className="text-center mt-10 text-lg font-semibold">جارٍ التحقق من صلاحيات الأدمن...</div>;
  }

  return isAdmin ? <Outlet /> : <Navigate to="/login" />;
};

export default AdminRoute;
