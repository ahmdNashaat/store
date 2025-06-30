src/assets
src/assets/logo.jpg
src/assets/react.svg
src/components

import { Link } from "react-router-dom";
import { BellIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const AdminNavbar = () => {
  const { unreadNotifications, logout } = useContext(AuthContext);

  return (
    <header className="bg-blue-900 text-white px-6 py-3 shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/admin/dashboard" className="text-xl font-bold">
          Shaltout Store | Admin
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link to="/admin/dashboard">📊 لوحة التحكم</Link>
          <Link to="/admin/products">📦 المنتجات</Link>
          <Link to="/admin/orders">🧾 الطلبات</Link>
          <Link to="/admin/users">👤 المستخدمين</Link>
          <Link to="/admin/messages">📬 الرسائل</Link>

          <Link to="/notifications" className="relative">
            <BellIcon className="w-6 h-6" />
            {unreadNotifications > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {unreadNotifications}
              </span>
            )}
          </Link>

          <button onClick={logout} title="تسجيل الخروج">
            <ArrowRightOnRectangleIcon className="w-6 h-6 text-red-300 hover:text-red-500" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default AdminNavbar;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-200 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">

        {/* About */}
        <div>
          <h4 className="font-bold mb-2 text-white">عن المتجر</h4>
          <p>Shaltout Store هو متجرك المفضل لشراء أفضل المنتجات بأسعار منافسة.</p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-bold mb-2 text-white">روابط</h4>
          <ul className="space-y-1">
            <li><a href="/products" className="hover:text-white">المنتجات</a></li>
            <li><a href="/contact" className="hover:text-white">تواصل معنا</a></li>
            <li><a href="/terms" className="hover:text-white">الشروط والأحكام</a></li>
          </ul>
        </div>

        {/* CopyRight */}
        <div className="sm:text-right">
          <h4 className="font-bold mb-2 text-white">تابعنا</h4>
          <p>فيسبوك | إنستجرام | تويتر</p>
          <p className="mt-4 text-xs text-gray-400">
            © {currentYear} Shaltout Store. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// src/components/HeroBanner.jsx
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">🎉 مرحبًا بك في Shaltout Store</h1>
        <p className="text-lg mb-6">
          عروض مذهلة على أحدث المنتجات، شحن سريع وخدمة ممتازة 24/7
        </p>
        <Link
          to="/products"
          className="bg-yellow-400 text-indigo-800 font-bold px-6 py-3 rounded hover:bg-yellow-300 transition"
        >
          تسوق الآن
        </Link>
      </div>
    </section>
  );
};

export default HeroBanner;

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    image: "/shaltout.jpg",
    title: "أحدث العروض",
    subtitle: "استكشف تشكيلتنا الجديدة من الإلكترونيات والملابس!",
    button: "تسوق الآن",
  },
  {
    id: 2,
    image: "/pic3.png",
    title: "عروض الصيف",
    subtitle: "خصومات تصل إلى 50% على منتجات مختارة",
    button: "استفد الآن",
  },
  {
    id: 3,
    image: "/banner3.jpg",
    title: "خدمة سريعة",
    subtitle: "شحن خلال 48 ساعة لكل المحافظات",
    button: "ابدأ التسوق",
  },
  {
    id: 4,
    image: "/banner4.jpg",
    title: "مفضلات العملاء",
    subtitle: "منتجات الأعلى تقييمًا الآن بين يديك",
    button: "تصفح المفضلة",
  },
];

const HeroSlider = () => {
  return (
    <section className="relative w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="h-[400px] md:h-[500px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-2">{slide.title}</h2>
                <p className="text-lg md:text-xl mb-4">{slide.subtitle}</p>
                <Link
                  to="/products"
                  className="bg-white text-indigo-700 font-bold px-6 py-3 rounded hover:bg-indigo-100 transition"
                >
                  {slide.button}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;

import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ShoppingCartIcon, HeartIcon, MagnifyingGlassIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const { user, cartCount, favoritesCount } = useContext(AuthContext);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/products?search=${encodeURIComponent(search.trim())}`);
      setSearch(""); // تفريغ مربع البحث بعد الإرسال
    }
  };

  return (
    <header className="w-full">
      {/* ✅ الشريط العلوي */}
      <div className="bg-blue-900 text-white py-3 px-4 flex items-center justify-between">
        {/* ✅ الشعار */}
        <Link to="/" className="text-2xl font-bold tracking-wide">Shaltout Store</Link>

        {/* ✅ مربع البحث */}
        <form onSubmit={handleSearch} className="flex flex-1 mx-6 max-w-xl">
          <input
            type="text"
            placeholder="ابحث عن منتج..."
            className="w-full p-2 rounded-l border-none text-gray-900"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="bg-yellow-400 px-4 rounded-r">
            <MagnifyingGlassIcon className="w-5 h-5 text-black" />
          </button>
        </form>

        {/* ✅ أيقونات */}
        <div className="flex items-center gap-4">
          {/* 🔘 المفضلة */}
          <Link to="/favorites" className="relative" title="المفضلة">
            <HeartIcon className="w-6 h-6 text-white" />
            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {favoritesCount}
              </span>
            )}
          </Link>

          {/* 🛒 السلة */}
          <Link to="/cart" className="relative" title="السلة">
            <ShoppingCartIcon className="w-6 h-6 text-white" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-green-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* 🌐 اللغة (placeholder) */}
          <button title="تغيير اللغة">
            <GlobeAltIcon className="w-6 h-6 text-white" />
          </button>

          {/* 👤 حسابي / تسجيل الدخول */}
          {user ? (
            <Link to="/dashboard" className="text-sm hover:underline">حسابي</Link>
          ) : (
            <Link to="/login" className="text-sm hover:underline">تسجيل الدخول</Link>
          )}
        </div>
      </div>

      {/* ✅ الشريط الثانوي (تصنيفات) */}
      <nav className="bg-blue-600 text-white px-4 py-2 flex flex-wrap gap-4 text-sm font-medium">
        <Link to="/products/category/1">COMPUTER</Link>
        <Link to="/products/category/2">LAPTOP</Link>
        <Link to="/products/category/3">MOBILE & TABLET</Link>
        <Link to="/products/category/4">HOME APPLIANCES</Link>
        <Link to="/products/category/5">CASHIER SYSTEMS</Link>
        <Link to="/products/category/6">NETWORK</Link>
        <Link to="/products/category/7">PERSONAL CARE</Link>
        <Link to="/products/category/8">USED</Link>
        <Link to="/promotions" className="text-red-300 font-bold">🔥 HOT DEALS</Link>
      </nav>
    </header>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";

const ProductCard = ({ product, onAction }) => {
  const addToFavorites = async () => {
    try {
      await api.post(`/favorites/${product.id}`);
      toast.success("❤️ تمت الإضافة إلى المفضلة");
      onAction?.();
    } catch {
      toast.error("❌ حدث خطأ أثناء الإضافة إلى المفضلة");
    }
  };

  const addToCart = async () => {
    try {
      await api.post(`/cart`, {
        product_id: product.id,
        quantity: 1,
      });
      toast.success("🛒 تم إضافة المنتج إلى السلة");
      onAction?.();
    } catch {
      toast.error("❌ حدث خطأ أثناء الإضافة إلى السلة");
    }
  };

  return (
    <div className="relative bg-white shadow rounded-lg overflow-hidden group hover:shadow-xl transition">

      {/* ✅ Badge لو في خصم */}
      {product.discount_price && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          خصم
        </div>
      )}

      <Link to={`/products/${product.id}`}>
        <img
          src={`http://localhost:5000/${product.image_url}`}
          alt={product.name}
          className="w-full h-52 object-cover transition-transform group-hover:scale-105 duration-300"
        />
      </Link>

      <div className="p-4 space-y-2">
        <h4 className="text-lg font-semibold truncate">{product.name}</h4>
        <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>

        {/* ✅ السعر والخصم */}
        {product.discount_price ? (
          <div className="flex items-center gap-2">
            <span className="text-green-600 font-bold">{product.discount_price} ج.م</span>
            <span className="line-through text-gray-500 text-sm">{product.price} ج.م</span>
          </div>
        ) : (
          <p className="text-green-600 font-bold">{product.price} ج.م</p>
        )}

        {/* ✅ أزرار */}
        <div className="flex justify-between items-center pt-2">
          <button
            onClick={addToCart}
            className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 text-sm"
          >
            ➕ للسلة
          </button>

          <button
            onClick={addToFavorites}
            className="text-red-500 hover:scale-110 transition"
          >
            ❤️
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

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

src/contexts

import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [unreadNotifications, setUnreadNotifications] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    api.get("/profile")
      .then((res) => setUser(res.data))
      .catch(() => {
        localStorage.removeItem("token");
        setUser(null);
      });

    api.get("/favorites/count")
      .then((res) => setFavoritesCount(res.data.count || 0))
      .catch(() => setFavoritesCount(0));

    api.get("/notifications/unread-count")
      .then((res) => setUnreadNotifications(res.data.unread || 0))
      .catch(() => setUnreadNotifications(0));
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        cartCount,
        favoritesCount,
        unreadNotifications,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
src/hooks

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exists = cart.find((p) => p.id === product.id);
    if (exists) {
      setCart(
        cart.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

import { useState, useEffect } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

const useUnreadNotifications = () => {
  const [unreadCount, setUnreadCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchUnreadNotifications = async () => {
    try {
      const res = await api.get("/admin/notifications?unread=true");
      if (Array.isArray(res.data)) {
        setUnreadCount(res.data.length);
      } else {
        setUnreadCount(0);
      }
    } catch {
      toast.error("❌ فشل في تحميل عدد الإشعارات");
      setUnreadCount(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUnreadNotifications();
    const interval = setInterval(fetchUnreadNotifications, 30000); // تحديث كل 30 ثانية
    return () => clearInterval(interval);
  }, []);

  return { unreadCount, loading };
};

export default useUnreadNotifications;

src/layout
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


import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";


const MainLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Helmet>
        <title>متجرك الإلكتروني - تسوق أفضل الإلكترونيات</title>
        <meta name="description" content="تسوق أحدث الإلكترونيات والأجهزة المنزلية بأسعار تنافسية." />
      </Helmet>

      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* ✅ أضف حاوية منظمة للمحتوى */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;

src/pages

import { useEffect, useState } from "react";
import api from "../services/api";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const AdminContactMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    api
      .get("/admin/contact-messages")
      .then((res) => setMessages(res.data))
      .catch(() => toast.error("❌ فشل في تحميل الرسائل"));
  }, []);

  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <Helmet>
        <title>📬 رسائل التواصل</title>
      </Helmet>

      <h2 className="text-2xl font-bold mb-6">📬 رسائل التواصل</h2>

      {messages.length === 0 ? (
        <p className="text-gray-500">لا توجد رسائل حاليًا.</p>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <details key={msg.id} className="bg-white shadow rounded p-4">
              <summary className="cursor-pointer font-semibold text-gray-800">
                {msg.name} - {msg.email}
                <span className="text-sm text-gray-500 float-left">{msg.created_at}</span>
              </summary>
              <div className="mt-2 whitespace-pre-wrap text-gray-700">{msg.message}</div>
            </details>
          ))}
        </div>
      )}
    </main>
  );
};

export default AdminContactMessages;

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


// src/pages/AdminHelpPage.jsx
const AdminHelpPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6 text-gray-800">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">📘 مركز المساعدة</h2>

      <section>
        <h3 className="text-lg font-semibold mb-2">💡 إدارة المنتجات</h3>
        <ul className="list-disc space-y-1 ps-5 text-sm">
          <li>لإضافة منتج، اذهب إلى قسم المنتجات واضغط على "➕ منتج جديد".</li>
          <li>يمكنك تعديل أو حذف أي منتج موجود من القائمة.</li>
          <li>دعم الصور يتم تلقائيًا، فقط تأكد من حجم الصورة ونوعها.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-2">📦 الطلبات</h3>
        <ul className="list-disc space-y-1 ps-5 text-sm">
          <li>قسم الطلبات يعرض كافة الطلبات من المستخدمين.</li>
          <li>يُظهر عدد المنتجات وسعر الطلب وتاريخ الإنشاء.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-2">🛑 المستخدمين</h3>
        <ul className="list-disc space-y-1 ps-5 text-sm">
          <li>يمكنك حظر/إلغاء حظر أي مستخدم بنقرة زر.</li>
          <li>الحسابات المحظورة لا تستطيع تسجيل الدخول أو الطلب.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-2">🔔 الإشعارات</h3>
        <ul className="list-disc space-y-1 ps-5 text-sm">
          <li>ستظهر إشعارات الطلبات الجديدة تلقائيًا.</li>
          <li>يمكنك تعليم الإشعارات كمقروء بنقرة واحدة.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-2">📞 دعم فني</h3>
        <p className="text-sm">
          لأي استفسار تقني أو مشكلة في النظام، يرجى التواصل عبر البريد:{" "}
          <a href="mailto:support@shaltoutstore.com" className="text-blue-600 underline">
            support@shaltoutstore.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default AdminHelpPage;

// src/pages/AdminNotificationsPage.jsx
import { useEffect, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

const AdminNotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);

  const fetchNotifications = () => {
    api
      .get("/admin/notifications")
      .then((res) => setNotifications(res.data))
      .catch(() => toast.error("❌ فشل في تحميل الإشعارات"));
  };

  const markAllAsRead = () => {
    const unread = notifications.filter((n) => !n.is_read);
    if (unread.length === 0) return;

    unread.forEach((n) => {
      api.patch(`/notifications/${n.id}/read`).catch(() => {});
    });

    setNotifications((prev) =>
      prev.map((n) => ({ ...n, is_read: true }))
    );
    toast.success("📩 تم تعليم الكل كمقروء");
  };

  const deleteNotification = (id) => {
    api
      .delete(`/notifications/${id}`)
      .then(() => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
        toast.success("🗑️ تم حذف الإشعار");
      })
      .catch(() => toast.error("❌ فشل في الحذف"));
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">🔔 إشعارات الأدمن</h2>

      {notifications.length === 0 ? (
        <p className="text-center text-gray-500">لا توجد إشعارات حالياً.</p>
      ) : (
        <>
          <div className="flex justify-end mb-4">
            <button
              onClick={markAllAsRead}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              ✅ تعليم الكل كمقروء
            </button>
          </div>

          <ul className="space-y-4">
            {notifications.map((notif) => (
              <li
                key={notif.id}
                className={`p-4 rounded shadow ${
                  notif.is_read ? "bg-gray-100" : "bg-white border border-blue-500"
                }`}
              >
                <div className="flex justify-between items-center">
                  <p className="text-sm">{notif.message}</p>
                  <div className="flex gap-2">
                    {!notif.is_read && (
                      <button
                        onClick={() => api.patch(`/notifications/${notif.id}/read`).then(fetchNotifications)}
                        className="text-blue-600 text-sm hover:underline"
                      >
                        تعليم كمقروء
                      </button>
                    )}
                    <button
                      onClick={() => deleteNotification(notif.id)}
                      className="text-red-600 text-sm hover:underline"
                    >
                      حذف
                    </button>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1 text-end">
                  {new Date(notif.created_at).toLocaleString("ar-EG")}
                </p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default AdminNotificationsPage;


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


import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";

const AdminProductForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category_id: "",
    image: null,
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.get("/categories")
      .then((res) => setCategories(res.data))
      .catch(() => toast.error("❌ فشل تحميل التصنيفات"));
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setForm((prev) => ({ ...prev, image: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  useEffect(() => {
    if (id) {
      api.get(`/products/${id}`)
        .then((res) => {
          const { name, description, price, stock, category_id } = res.data;
          setForm((prev) => ({
            ...prev,
            name,
            description,
            price,
            stock,
            category_id,
          }));
        })
        .catch(() => toast.error("❌ فشل تحميل بيانات المنتج"));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (let key in form) {
      if (form[key]) data.append(key, form[key]);
    }

    try {
      if (id) {
        await api.put(`/products/${id}`, form);
        toast.success("✅ تم تعديل المنتج");
      } else {
        await api.post("/products", data);
        toast.success("✅ تم إضافة المنتج");
      }

      navigate("/admin/products");
    } catch (err) {
      console.error(err);
      toast.error("❌ فشل في الحفظ");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow text-gray-800">
      <h2 className="text-xl font-bold mb-4 text-center">
        {id ? "✏️ تعديل المنتج" : "➕ إضافة منتج جديد"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="اسم المنتج"
          className="w-full p-2 border border-gray-300 rounded bg-white focus:ring-2 focus:ring-indigo-500"
          required
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="وصف المنتج"
          className="w-full p-2 border border-gray-300 rounded bg-white focus:ring-2 focus:ring-indigo-500"
          required
        />
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="السعر"
          className="w-full p-2 border border-gray-300 rounded bg-white focus:ring-2 focus:ring-indigo-500"
          required
        />
        <input
          type="number"
          name="stock"
          value={form.stock}
          onChange={handleChange}
          placeholder="المخزون"
          className="w-full p-2 border border-gray-300 rounded bg-white focus:ring-2 focus:ring-indigo-500"
          required
        />
        <select
          name="category_id"
          value={form.category_id}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded bg-white focus:ring-2 focus:ring-indigo-500"
          required
        >
          <option value="">اختر التصنيف</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded bg-white"
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          💾 {id ? "حفظ التعديلات" : "إضافة المنتج"}
        </button>
      </form>
    </div>
  );
};

export default AdminProductForm;

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";

const AdminProductList = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const fetchProducts = () => {
    const endpoint = query.trim()
      ? `/products/search?q=${query}`
      : "/products";

    api.get(endpoint)
      .then((res) => {
        setProducts(res.data.products || []);
      })
      .catch(() => {
        toast.error("❌ فشل في تحميل المنتجات");
        setProducts([]);
      });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("هل أنت متأكد من حذف هذا المنتج؟")) return;

    try {
      await api.delete(`/products/${id}`);
      toast.success("✅ تم حذف المنتج");
      fetchProducts();
    } catch {
      toast.error("❌ فشل في حذف المنتج");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="space-y-6">
      {/* ✅ Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">📦 إدارة المنتجات</h2>
        <div className="flex gap-2">
          <button
            onClick={() => navigate("/admin/dashboard")}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
          >
            ⬅️ رجوع للرئيسية
          </button>
          <Link
            to="/admin/products/new"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            ➕ منتج جديد
          </Link>
        </div>
      </div>

      {/* ✅ Search */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="🔍 بحث عن منتج"
          className="input input-bordered w-full max-w-xs"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={fetchProducts} className="btn btn-primary">بحث</button>
      </div>

      {/* ✅ Table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full border rounded">
          <thead className="bg-gray-100 text-gray-800">
            <tr>
              <th>#</th>
              <th>الصورة</th>
              <th>الاسم</th>
              <th>السعر</th>
              <th>الخصم</th>
              <th>المخزون</th>
              <th>تصنيف</th>
              <th>خيارات</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((p, i) => (
                <tr key={p.id}>
                  <td>{i + 1}</td>
                  <td>
                    <img
                      src={`http://localhost:5000/${p.image_url}`}
                      alt={p.name}
                      className="w-14 h-14 object-cover rounded"
                    />
                  </td>
                  <td>{p.name}</td>
                  <td>{p.price} ج.م</td>
                  <td>{p.discount_price || "-"}</td>
                  <td>{p.stock}</td>
                  <td>{p.category_id}</td>
                  <td className="flex gap-2">
                    <Link
                      to={`/admin/products/edit/${p.id}`}
                      className="btn btn-sm btn-info"
                    >
                      ✏️
                    </Link>
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="btn btn-sm btn-error"
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-6 text-gray-500">
                  لا توجد منتجات حالياً.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProductList;


// src/pages/AdminRoute.jsx
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import api from "../services/api";

const AdminRoute = ({ children }) => {
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

  return isAdmin ? children : <Navigate to="/login" />;
};

export default AdminRoute;

// src/pages/AdminUsersPage.jsx
import { useEffect, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

const AdminUsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/admin/users")
      .then((res) => setUsers(res.data))
      .catch(() => toast.error("❌ فشل في تحميل المستخدمين"));
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">👥 جميع المستخدمين</h2>

      {users.length === 0 ? (
        <p>لا يوجد مستخدمون حاليًا.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>اسم المستخدم</th>
                <th>البريد الإلكتروني</th>
                <th>الحالة</th>
                <th>أدمن؟</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={user.id}>
                  <td>{i + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.is_verified ? "✅ مفعل" : "⛔ غير مفعل"}</td>
                  <td>{user.is_admin ? "🛡️ نعم" : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminUsersPage;

// src/pages/CartPage.jsx
import { useEffect, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async"; // ✅ تأكد من استيراد Helmet

const CartPage = () => {
  const [cart, setCart] = useState({ items: [], total_price: 0 });

  const fetchCart = () => {
    api.get("/cart")
      .then((res) => setCart(res.data))
      .catch(() => {
        toast.error("❌ فشل في تحميل السلة");
        setCart({ items: [], total_price: 0 });
      });
  };

  const removeItem = (itemId) => {
    api.delete(`/cart/${itemId}`)
      .then(() => {
        toast.success("🗑️ تم حذف المنتج من السلة");
        fetchCart();
      })
      .catch(() => toast.error("❌ فشل في الحذف"));
  };

  const confirmOrder = () => {
    api.post("/checkout")
      .then(() => {
        toast.success("✅ تم تأكيد الطلب");
        fetchCart();
      })
      .catch(() => toast.error("❌ فشل في تأكيد الطلب"));
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Helmet>
        <title>🛒 سلة المشتريات | Shaltout Store</title>
        <meta
          name="description"
          content="راجع محتويات سلة التسوق الخاصة بك وأكمل طلبك بسهولة في Shaltout Store."
        />
      </Helmet>

      <h2 className="text-2xl font-bold mb-6">🛒 سلة المشتريات</h2>

      {cart.items.length === 0 ? (
        <p>السلة فارغة.</p>
      ) : (
        <div className="space-y-4">
          {cart.items.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">{item.product_name}</p>
                <p className="text-sm text-gray-600">الكمية: {item.quantity}</p>
                <p className="text-sm text-gray-600">السعر: {item.price} ج.م</p>
              </div>
              <button
                className="text-red-600 hover:underline"
                onClick={() => removeItem(item.id)}
              >
                ❌ إزالة
              </button>
            </div>
          ))}

          <hr />
          <div className="text-lg font-bold">
            الإجمالي: {cart.total_price.toFixed(2)} ج.م
          </div>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-4"
            onClick={confirmOrder}
          >
            تأكيد الطلب
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;

import { useEffect, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.get("/categories")
      .then(res => setCategories(res.data || []))
      .catch(() => toast.error("❌ فشل في تحميل التصنيفات"));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">📂 التصنيفات</h2>
      {categories.length === 0 ? (
        <p className="text-center">لا توجد تصنيفات متاحة حالياً.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div key={cat.id} className="border p-4 text-center rounded shadow">
              <p className="font-semibold">{cat.name}</p>
              <p className="text-sm text-gray-500">معرّف: {cat.id}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoriesPage;

import { useState } from "react";
import { toast } from "react-toastify";

const CheckoutPage = () => {
  const [address, setAddress] = useState("");

  const handleOrder = (e) => {
    e.preventDefault();
    if (!address.trim()) {
      return toast.error("❌ أدخل عنوان الشحن");
    }
    // call your backend API
    toast.success("✅ تم إرسال الطلب بنجاح");
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <form
        onSubmit={handleOrder}
        className="bg-white p-6 rounded shadow-md w-full max-w-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4">معلومات الشحن</h2>

        <textarea
          placeholder="العنوان بالتفصيل"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          rows="4"
          className="w-full p-2 border border-gray-300 rounded bg-white text-gray-800"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          تأكيد الطلب
        </button>
      </form>
    </main>
  );
};

export default CheckoutPage;

import { useState } from "react";
import { toast } from "react-toastify";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("❌ جميع الحقول مطلوبة");
      return;
    }

    // send the form data to backend (optional)
    toast.success("✅ تم إرسال الرسالة بنجاح");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-xl space-y-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
          تواصل معنا
        </h2>

        <input
          type="text"
          name="name"
          placeholder="الاسم"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="البريد الإلكتروني"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />

        <textarea
          name="message"
          rows="5"
          placeholder="اكتب رسالتك هنا..."
          value={form.message}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          إرسال
        </button>
      </form>
    </main>
  );
};

export default ContactPage;


// src/pages/EmailVerificationPage.jsx
import { Link } from 'react-router-dom';

const EmailVerificationPage = () => {
  return (
    <div className="text-center mt-20 px-4">
      <h2 className="text-2xl font-semibold mb-4 text-green-700">📧 تم إرسال رابط التحقق</h2>
      <p className="text-gray-700 mb-6">
        تم إرسال رسالة تأكيد إلى بريدك الإلكتروني. فضلاً تحقق من بريدك ثم قم بتسجيل الدخول.
      </p>
      <Link to="/login" className="text-blue-700 hover:underline font-medium">
        العودة لتسجيل الدخول
      </Link>
    </div>
  );
};

export default EmailVerificationPage;

// src/pages/FavoritesPage.jsx
import { useEffect, useState } from "react";
import api from "../services/api";
import ProductCard from "../components/ProductCard";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async"; // ✅ تأكد من استيراد Helmet

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  const fetchFavorites = () => {
    api.get("/favorites")
      .then((res) => {
        if (Array.isArray(res.data)) {
          setFavorites(res.data);
        }
      })
      .catch(() => {
        toast.error("❌ فشل في تحميل المفضلة");
        setFavorites([]);
      });
  };

  const removeFromFavorites = (productId) => {
    api.delete(`/favorites/${productId}`)
      .then(() => {
        toast.success("🗑️ تم إزالة المنتج من المفضلة");
        fetchFavorites();
      })
      .catch(() => toast.error("❌ فشل في الإزالة"));
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Helmet>
        <title>❤️ المفضلة | Shaltout Store</title>
        <meta
          name="description"
          content="تصفح المنتجات التي قمت بإضافتها إلى المفضلة في Shaltout Store."
        />
      </Helmet>

      <h2 className="text-2xl font-bold mb-6">❤️ المفضلة</h2>

      {favorites.length === 0 ? (
        <p className="text-gray-500">لا توجد منتجات مضافة إلى المفضلة بعد.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favorites.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAction={() => removeFromFavorites(product.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import api from "../services/api";
import ProductCard from "../components/ProductCard";
import HeroSlider from "../components/HeroSlider";

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    api
      .get("/products?page=1&per_page=6")
      .then((res) => {
        if (Array.isArray(res.data.products)) {
          setFeaturedProducts(res.data.products);
        }
      })
      .catch(() => setFeaturedProducts([]));
  }, []);

  return (
    <main className="bg-gray-50 text-gray-800 min-h-screen">
      <Helmet>
        <title>Shaltout Store | تسوق أفضل المنتجات بأسعار مذهلة</title>
        <meta
          name="description"
          content="اكتشف أفضل العروض والمنتجات في Shaltout Store. شحن سريع وخدمة عملاء ممتازة. تسوق الآن!"
        />
        <meta
          property="og:title"
          content="Shaltout Store | عروض مميزة وأسعار منافسة"
        />
        <meta
          property="og:description"
          content="منتجات مختارة بأعلى جودة وخدمة سريعة في Shaltout Store."
        />
      </Helmet>

      {/* ✅ سلايدر جديد */}
      <HeroSlider />

      {/* ✅ منتجات مختارة */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h3 className="text-2xl font-bold mb-6 text-center">💎 منتجات مختارة</h3>
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))]">
          {featuredProducts.length === 0 ? (
            <p className="text-center text-gray-500">جارٍ تحميل المنتجات...</p>
          ) : (
            featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </section>
    </main>
  );
};

export default HomePage;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      toast.error("❌ يجب إدخال اسم المستخدم وكلمة المرور");
      return;
    }

    try {
      const res = await api.post("/login", { username, password });
      const token = res.data.token;

      const decoded = jwtDecode(token); // ✅ استخراج بيانات المستخدم من التوكن

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(decoded));

      toast.success("✅ تم تسجيل الدخول بنجاح");

      // ✅ توجيه حسب الدور
      if (decoded.is_admin) {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }

    } catch (error) {
      if (error.response?.data?.error) {
        toast.error(`❌ ${error.response.data.error}`);
      } else {
        toast.error("❌ حدث خطأ أثناء تسجيل الدخول");
      }
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4">تسجيل الدخول</h2>

        <input
          type="text"
          placeholder="اسم المستخدم"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />

        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          تسجيل الدخول
        </button>
      </form>
    </main>
  );
};

export default LoginPage;

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('token');
    navigate('/login');
  }, [navigate]);

  return <p className="text-center mt-10">👋 جاري تسجيل الخروج...</p>;
};

export default LogoutPage;

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

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import ProductCard from "../components/ProductCard";
import { toast } from "react-toastify";

const ProductCategoryPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await api.get(`/products/category/${id}`);
      setProducts(res.data || []);
    } catch (err) {
      toast.error("❌ فشل تحميل المنتجات");
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [id]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📁 منتجات التصنيف</h2>

      {loading ? (
        <p className="text-gray-600">⏳ جاري التحميل...</p>
      ) : products.length === 0 ? (
        <p className="text-gray-500">🚫 لا توجد منتجات في هذا التصنيف.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCategoryPage;


import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async"; // ✅ تأكد أنك مستورد الهيلمت

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    api.get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch(() => toast.error("❌ فشل في تحميل المنتج"));
  }, [id]);

  const addToCart = async () => {
    try {
      await api.post("/cart", { product_id: product.id, quantity: 1 });
      toast.success("✅ تم إضافة المنتج إلى السلة");
    } catch {
      toast.error("❌ حدث خطأ أثناء الإضافة للسلة");
    }
  };

  const addToFavorites = async () => {
    try {
      await api.post(`/favorites/${product.id}`);
      toast.success("✅ تمت الإضافة إلى المفضلة");
    } catch {
      toast.error("❌ حدث خطأ أثناء الإضافة للمفضلة");
    }
  };

  if (!product)
    return <p className="text-center mt-10">...جارٍ التحميل</p>;

  return (
    <>
      <Helmet>
        <title>{product?.name || "تفاصيل المنتج"} | Shaltout Store</title>
        <meta
          name="description"
          content={product?.description?.slice(0, 150) || "تفاصيل المنتج في Shaltout Store"}
        />
        <meta
          property="og:title"
          content={`${product?.name || "تفاصيل المنتج"} | Shaltout Store`}
        />
        <meta
          property="og:description"
          content={product?.description?.slice(0, 150)}
        />
      </Helmet>

      <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8">
        <img
          src={`http://localhost:5000/${product.image_url}`}
          alt={product.name}
          className="w-full h-96 object-cover rounded"
        />
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>

          {product.discount_price ? (
            <div className="flex items-center gap-4">
              <span className="text-green-600 text-xl font-bold">
                {product.discount_price} ج.م
              </span>
              <span className="line-through text-gray-500">
                {product.price} ج.م
              </span>
            </div>
          ) : (
            <p className="text-green-600 text-xl font-bold">{product.price} ج.م</p>
          )}

          <p className="text-sm text-gray-500">المخزون: {product.stock}</p>
          <p className="text-sm text-gray-500">التصنيف: {product.category?.name || "غير محدد"}</p>

          <div className="flex gap-4 pt-4">
            <button onClick={addToCart} className="btn btn-primary">
              أضف إلى السلة
            </button>
            <button onClick={addToFavorites} className="btn btn-outline">
              ❤️ مفضلة
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;

import { useEffect, useState } from "react";
import api from "../services/api";
import ProductCard from "../components/ProductCard";
import { Helmet } from "react-helmet-async";

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({
    category_id: "",
    min: "",
    max: ""
  });

  const fetchProducts = () => {
    const params = {
      ...filters,
      ...(filters.category_id === "" && { category_id: undefined }),
      ...(filters.min === "" && { min: undefined }),
      ...(filters.max === "" && { max: undefined })
    };

    api.get("/products/filter", { params })
      .then((res) => {
        if (Array.isArray(res.data.products)) {
          setProducts(res.data.products);
        } else {
          setProducts([]);
        }
      })
      .catch(() => setProducts([]));
  };

  const fetchCategories = () => {
    api.get("/categories")
      .then((res) => setCategories(res.data))
      .catch(() => setCategories([]));
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const applyFilters = () => {
    fetchProducts();
  };

  const resetFilters = () => {
    setFilters({ category_id: "", min: "", max: "" });
    fetchProducts();
  };

  return (
    <main className="bg-white min-h-screen text-gray-800">
      <Helmet>
        <title>كل المنتجات | Shaltout Store</title>
        <meta name="description" content="تصفح كل منتجات Shaltout Store وقم بتصفية حسب السعر أو التصنيف." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6 text-center">🛍️ جميع المنتجات</h2>

        {/* ✅ الفلاتر المحسنة */}
        <div className="bg-white border border-gray-200 p-4 rounded-lg mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-4">

            <select
              name="category_id"
              value={filters.category_id}
              onChange={handleFilterChange}
              className="w-full md:w-1/4 p-2 border border-gray-300 rounded text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">كل التصنيفات</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>

            <input
              type="number"
              name="min"
              value={filters.min}
              onChange={handleFilterChange}
              placeholder="أقل سعر"
              min="0"
              className="w-full md:w-1/4 p-2 border border-gray-300 rounded text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="number"
              name="max"
              value={filters.max}
              onChange={handleFilterChange}
              placeholder="أعلى سعر"
              min="0"
              className="w-full md:w-1/4 p-2 border border-gray-300 rounded text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <div className="flex gap-2 w-full md:w-auto">
              <button
                onClick={applyFilters}
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 w-full md:w-auto"
              >
                🔍 تصفية
              </button>
              <button
                onClick={resetFilters}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 w-full md:w-auto"
              >
                🔄 إعادة تعيين
              </button>
            </div>
          </div>
        </div>


        {/* ✅ المنتجات */}
        {products.length === 0 ? (
          <p className="text-center text-gray-500">لا توجد منتجات مطابقة للفلاتر.</p>
        ) : (
          <div className="grid gap-6 grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))]">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default ProductListPage;

// ✅ PromotionsPage.jsx
import { useEffect, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const PromotionsPage = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    api.get("/offers")
      .then((res) => setOffers(res.data))
      .catch(() => toast.error("❌ فشل في تحميل العروض"));
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Helmet>
        <title>🔥 العروض | Shaltout Store</title>
        <meta name="description" content="اكتشف أفضل العروض والخصومات المتاحة في Shaltout Store." />
      </Helmet>
      <h2 className="text-2xl font-bold mb-6">🔥 العروض الحالية</h2>
      {offers.length === 0 ? (
        <p>لا توجد عروض حالياً.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {offers.map((offer) => (
            <div key={offer.id} className="border p-4 rounded shadow hover:shadow-md transition">
              <h3 className="font-bold text-lg mb-2">{offer.title}</h3>
              <p className="text-gray-600">{offer.description}</p>
              <p className="text-sm text-gray-500 mt-2">
                ⏳ ينتهي في: {new Date(offer.expires_at).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PromotionsPage;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", form);
      toast.success("✅ تم إنشاء الحساب بنجاح");
      navigate("/login");
    } catch (err) {
      toast.error("❌ حدث خطأ أثناء التسجيل");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4">إنشاء حساب</h2>

        <input
          type="text"
          name="name"
          placeholder="الاسم الكامل"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded bg-white text-gray-800"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="البريد الإلكتروني"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded bg-white text-gray-800"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="كلمة المرور"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded bg-white text-gray-800"
          required
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          إنشاء الحساب
        </button>
      </form>
    </main>
  );
};

export default RegisterPage;

// src/pages/TermsAndConditions.jsx
const TermsAndConditions = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">📜 الشروط والأحكام</h2>
      <p className="text-gray-700 leading-relaxed space-y-4">
        <p>مرحبًا بك في Shaltout Store! باستخدامك لموقعنا فإنك توافق على الالتزام بالشروط التالية:</p>
        <ul className="list-disc ms-5 mt-3 text-sm text-gray-600">
          <li>يجب أن تكون المعلومات التي تقدمها دقيقة وصحيحة.</li>
          <li>يُمنع استخدام الموقع لأي أغراض غير قانونية أو ضارة.</li>
          <li>نحتفظ بالحق في تعديل الشروط في أي وقت دون إشعار مسبق.</li>
          <li>المنتجات قد تختلف قليلاً عن الصور المعروضة.</li>
        </ul>
        <p className="mt-4">إذا كان لديك أي استفسار، لا تتردد في التواصل معنا.</p>
      </p>
    </div>
  );
};

export default TermsAndConditions;

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

// src/pages/UserNotificationsPage.jsx
import { useEffect, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

const UserNotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);

  const fetchNotifications = () => {
    api
      .get("/notifications")
      .then((res) => setNotifications(res.data))
      .catch(() => toast.error("❌ فشل في تحميل الإشعارات"));
  };

  const markAllAsRead = () => {
    const unread = notifications.filter((n) => !n.is_read);
    if (unread.length === 0) return;

    unread.forEach((n) => {
      api.patch(`/notifications/${n.id}/read`).catch(() => {});
    });

    setNotifications((prev) =>
      prev.map((n) => ({ ...n, is_read: true }))
    );
    toast.success("📩 تم تعليم الكل كمقروء");
  };

  const deleteNotification = (id) => {
    api
      .delete(`/notifications/${id}`)
      .then(() => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
        toast.success("🗑️ تم حذف الإشعار");
      })
      .catch(() => toast.error("❌ فشل في الحذف"));
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">🔔 إشعاراتي</h2>

      {notifications.length === 0 ? (
        <p className="text-center text-gray-500">لا توجد إشعارات حالياً.</p>
      ) : (
        <>
          <div className="flex justify-end mb-4">
            <button
              onClick={markAllAsRead}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              ✅ تعليم الكل كمقروء
            </button>
          </div>

          <ul className="space-y-4">
            {notifications.map((notif) => (
              <li
                key={notif.id}
                className={`p-4 rounded shadow ${
                  notif.is_read ? "bg-gray-100" : "bg-white border border-blue-500"
                }`}
              >
                <div className="flex justify-between items-center">
                  <p className="text-sm">{notif.message}</p>
                  <div className="flex gap-2">
                    {!notif.is_read && (
                      <button
                        onClick={() => api.patch(`/notifications/${notif.id}/read`).then(fetchNotifications)}
                        className="text-blue-600 text-sm hover:underline"
                      >
                        تعليم كمقروء
                      </button>
                    )}
                    <button
                      onClick={() => deleteNotification(notif.id)}
                      className="text-red-600 text-sm hover:underline"
                    >
                      حذف
                    </button>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1 text-end">
                  {new Date(notif.created_at).toLocaleString("ar-EG")}
                </p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default UserNotificationsPage;

src/routes

// src/routes/AppRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "../components/ProtectedRoute";
import AdminRoute from "../pages/AdminRoute";

// Layouts
import MainLayout from "../layout/MainLayout";
import AdminLayout from "../layout/AdminLayout";

// صفحات عامة
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import EmailVerificationPage from "../pages/EmailVerificationPage";
import ProductListPage from "../pages/ProductListPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import FavoritesPage from "../pages/FavoritesPage";
import CartPage from "../pages/CartPage";
import ContactPage from "../pages/ContactPage";
import LogoutPage from "../pages/LogoutPage";
import UserDashboard from "../pages/UserDashboard";
import MyOrdersPage from "../pages/MyOrdersPage";
import CategoriesPage from "../pages/CategoriesPage";
import CheckoutPage from "../pages/CheckoutPage";
import TermsAndConditions from "../pages/TermsAndConditions";
import PromotionsPage from "../pages/PromotionsPage";
import UserNotificationsPage from "../pages/UserNotificationsPage";
import ProductCategoryPage from "../pages/ProductCategoryPage";

// صفحات الأدمن
import AdminDashboard from "../pages/AdminDashboard";
import AdminProductList from "../pages/AdminProductList";
import AdminProductForm from "../pages/AdminProductForm";
import AdminOrderList from "../pages/AdminOrderList";
import AdminUsersPage from "../pages/AdminUsersPage";
import AdminNotificationsPage from "../pages/AdminNotificationsPage";
import AdminHelpPage from "../pages/AdminHelpPage";
import AdminContactMessages from "../pages/AdminContactMessages";

const AppRoutes = () => {
  return (
    <Routes>

      {/* ✅ صفحات عامة تحت MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/checkout" element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/promotions" element={<PromotionsPage />} />
        <Route path="/notifications" element={<UserNotificationsPage />} />
        <Route path="/products/category/:id" element={<ProductCategoryPage />} />


        {/* صفحات محمية */}
        <Route path="/favorites" element={<ProtectedRoute><FavoritesPage /></ProtectedRoute>} />
        <Route path="/cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />
        <Route path="/orders" element={<ProtectedRoute><MyOrdersPage /></ProtectedRoute>} />
      </Route>

      {/* ✅ توجيه /admin إلى لوحة التحكم */}
      <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />

      {/* ✅ صفحات الأدمن تحت AdminLayout */}
      <Route path="/admin" element={<AdminRoute><AdminLayout /></AdminRoute>}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="products" element={<AdminProductList />} />
        <Route path="products/new" element={<AdminProductForm />} />
        <Route path="products/edit/:id" element={<AdminProductForm />} />
        <Route path="orders" element={<AdminOrderList />} />
        <Route path="users" element={<AdminUsersPage />} />
        <Route path="notifications" element={<AdminNotificationsPage />} />
        <Route path="help" element={<AdminHelpPage />} />
        <Route path="contact-messages" element={<AdminContactMessages />} />
      </Route>

      {/* راوت fallback */}
      <Route path="*" element={<Navigate to="/" />} />

    </Routes>
  );
};

export default AppRoutes;

src/services

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:5000/api', // مطابق لـ url_prefix='/api' في __init__.py
  withCredentials: true, // لدعم الـ cookies لو فيه
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Token مخزن بعد تسجيل الدخول
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // لو الـ Token منتهي، مسح الـ Token وإعادة توجيه للـ Login
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;

src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import { AuthContextProvider } from './contexts/AuthContext';
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <AuthContextProvider>
          <AppRoutes />
        </AuthContextProvider>
        <ToastContainer position="top-center" />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
src/index.css

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Noto Sans Arabic', sans-serif;
  direction: rtl;
  line-height: 1.6;
  color: #333;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  cursor: pointer;
}

input, textarea, select {
  font-family: 'Noto Sans Arabic', sans-serif;
}

/* Custom Colors */
:root {
  --primary-blue: #1E40AF;
  --secondary-pink: #EC4899;
  --background-gray: #F3F4F6;
}

/* Scrollbar Styling */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--background-gray);
}

::-webkit-scrollbar-thumb {
  background: var(--primary-blue);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #1E3A8A;
}
