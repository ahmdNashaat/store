import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    toast.error("❌ يرجى تسجيل الدخول للوصول إلى هذه الصفحة");
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;