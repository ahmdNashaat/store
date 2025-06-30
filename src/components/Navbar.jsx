import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ShoppingCartIcon,
  HeartIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { useAuth } from "../contexts/AuthContext";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { user, cart, favorites, logout, loading } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [adminMenuOpen, setAdminMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    navigate(`/products?q=${encodeURIComponent(search.trim())}`);
    setSearch("");
  };

  const toggleMobile = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
    localStorage.setItem("i18nextLng", e.target.value);
  };

  return (
    <>
      {/* ✅ الشريط العلوي */}
      <header className="bg-blue-900 text-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap md:flex-nowrap items-center justify-between gap-4">

          {/* ✅ الشعار */}
          <Link to="/" className="text-xl font-bold text-white">KIMO STORE</Link>

          {/* ✅ مربع البحث */}
          <form
            onSubmit={handleSearch}
            className="flex flex-1 max-w-xl rounded-full overflow-hidden border border-gray-200 bg-white"
          >
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t('searchPlaceholder') || "ابحث عن منتج..."}
              className="flex-1 px-4 py-2 text-gray-800 focus:outline-none bg-gray-100"
            />
            <button type="submit" className="bg-yellow-400 px-4 py-2 font-bold text-gray-800">
              🔍
            </button>
          </form>

          {/* ✅ أدوات المستخدم */}
          <div className="flex items-center gap-4 text-sm relative">

            {/* 🔐 الأدمن Dropdown */}
            {user?.is_admin && (
              <div className="relative">
                <button
                  onClick={() => setAdminMenuOpen(!adminMenuOpen)}
                  className="flex items-center gap-1 hover:underline"
                >
                  الأدمن
                  <ChevronDownIcon className="w-4 h-4" />
                </button>

                {adminMenuOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 shadow-lg rounded z-50">
                    <Link
                      to="/admin/dashboard"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setAdminMenuOpen(false)}
                    >
                      لوحة التحكم
                    </Link>
                    <Link
                      to="/admin/products"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setAdminMenuOpen(false)}
                    >
                      إدارة المنتجات
                    </Link>
                    <Link
                      to="/admin/orders"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setAdminMenuOpen(false)}
                    >
                      إدارة الطلبات
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* 🌐 مغير اللغة */}
            <select
              className="text-sm text-gray-800 bg-white border border-gray-300 rounded px-2 py-1"
              onChange={handleLanguageChange}
              defaultValue={i18n.language}
            >
              <option value="ar">🇪🇬 عربي</option>
              <option value="en">🇺🇸 English</option>
            </select>

            {/* 👤 الحساب */}
            {user ? (
              <Link to="/dashboard" className="flex items-center gap-1 hover:underline">
                <UserIcon className="w-4 h-4" />
                حسابي
              </Link>
            ) : (
              <Link to="/login" className="flex items-center gap-1 hover:underline">
                <UserIcon className="w-4 h-4" />
                تسجيل الدخول
              </Link>
            )}

            {/* 🚪 تسجيل الخروج */}
            {user && (
              <button onClick={logout} className="text-red-400 hover:underline">
                تسجيل الخروج
              </button>
            )}

            {/* ❤️ المفضلة */}
            {!loading && (
              <Link to="/favorites" className="relative">
                <HeartIcon className="w-5 h-5 text-red-400" />
                {favorites.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1">
                    {favorites.length}
                  </span>
                )}
              </Link>
            )}

            {/* 🛒 السلة */}
            {!loading && (
              <Link to="/cart" className="relative">
                <ShoppingCartIcon className="w-5 h-5 text-yellow-400" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow-500 text-white rounded-full text-xs px-1">
                    {cart.length}
                  </span>
                )}
              </Link>
            )}

            {/* ☰ زر الهاتف */}
            <button onClick={toggleMobile} className="md:hidden">
              {mobileOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* ✅ قائمة الهاتف */}
        {mobileOpen && (
          <div className="bg-blue-800 px-4 py-2 space-y-2 text-sm text-white md:hidden transition-all">
            <Link to="/products" onClick={toggleMobile}>كل المنتجات</Link>
            <Link to="/promotions" onClick={toggleMobile}>العروض</Link>
            {user?.is_admin && (
              <Link to="/admin/dashboard" onClick={toggleMobile}>لوحة تحكم الأدمن</Link>
            )}
            <Link to="/dashboard" onClick={toggleMobile}>حسابي</Link>
            <Link to="/favorites" onClick={toggleMobile}>المفضلة</Link>
            <Link to="/cart" onClick={toggleMobile}>السلة</Link>
            {user ? (
              <button onClick={() => { logout(); toggleMobile(); }} className="text-red-300">
                تسجيل الخروج
              </button>
            ) : (
              <Link to="/login" onClick={toggleMobile}>تسجيل الدخول</Link>
            )}
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
