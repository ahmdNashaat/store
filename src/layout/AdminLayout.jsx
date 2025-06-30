import { Outlet, useLocation, NavLink, useNavigate } from "react-router-dom";
import { Bars3Icon, ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useEffect, useState } from "react";
import api from "../services/api";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [unreadCount, setUnreadCount] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/admin/contact-messages/unread-count")
      .then((res) => setUnreadCount(res.data.unread || 0))
      .catch(() => setUnreadCount(0));
  }, []);

  const navLinks = [
    { path: "/admin/dashboard", label: "لوحة التحكم" },
    { path: "/admin/products", label: "المنتجات" },
    { path: "/admin/orders", label: "الطلبات" },
    { path: "/admin/users", label: "المستخدمين" },
    { path: "/admin/notifications", label: "الإشعارات" },
    { path: "/admin/help", label: "المساعدة" },
    {
      path: "/admin/contact-messages",
      label: `رسائل التواصل${unreadCount ? ` (${unreadCount})` : ""}`
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* ✅ Sidebar */}
      <aside
        className={clsx(
          "bg-blue-800 text-white transition-all duration-300 ease-in-out",
          isSidebarOpen ? "w-64" : "w-16"
        )}
      >
        {/* Toggle */}
        <div className="p-4 flex items-center justify-between">
          <button
            onClick={() => setIsSidebarOpen((prev) => !prev)}
            className="text-white focus:outline-none"
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
          {isSidebarOpen && (
            <span className="ml-2 font-bold text-lg">لوحة التحكم</span>
          )}
        </div>

        {/* Links */}
        <nav className="mt-4 space-y-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                clsx(
                  "block px-4 py-2 text-sm hover:bg-blue-700 transition",
                  isActive && "bg-blue-700 font-semibold"
                )
              }
            >
              {isSidebarOpen ? link.label : <span title={link.label}>•</span>}
            </NavLink>
          ))}

          {/* 🔙 زر الرجوع للرئيسية */}
          <button
            onClick={() => navigate("/")}
            className="block w-full text-start px-4 py-2 text-sm hover:bg-blue-700 transition mt-4 text-white"
          >
            {isSidebarOpen ? (
              <>
                <ArrowLeftOnRectangleIcon className="inline w-4 h-4 mr-1" />
                العودة للرئيسية
              </>
            ) : (
              <ArrowLeftOnRectangleIcon className="w-5 h-5 mx-auto" />
            )}
          </button>
        </nav>
      </aside>

      {/* ✅ Main */}
      <main className="flex-1 overflow-y-auto p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
