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
