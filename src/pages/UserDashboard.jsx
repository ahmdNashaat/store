import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const UserDashboard = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Helmet>
        <title>حسابي | Shaltout Store</title>
        <meta name="description" content="تصفح بيانات حسابك، الطلبات، المفضلة والمزيد في Shaltout Store." />
      </Helmet>

      <h2 className="text-2xl font-bold mb-4">👤 حسابي</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link to="/orders" className="btn btn-outline btn-primary">📦 طلباتي</Link>
        <Link to="/favorites" className="btn btn-outline btn-secondary">❤️ المفضلة</Link>
        <Link to="/cart" className="btn btn-outline btn-accent">🛒 السلة</Link>
        <Link to="/logout" className="btn btn-outline btn-error">🚪 تسجيل الخروج</Link>
      </div>
    </div>
  );
};

export default UserDashboard;
