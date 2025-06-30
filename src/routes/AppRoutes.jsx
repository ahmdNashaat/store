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

        {/* صفحات محمية */}
        <Route path="/favorites" element={<ProtectedRoute><FavoritesPage /></ProtectedRoute>} />
        <Route path="/cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />
        <Route path="/orders" element={<ProtectedRoute><MyOrdersPage /></ProtectedRoute>} />
      </Route>

      {/* ✅ توجيه /admin إلى لوحة التحكم */}
      <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />

      {/* ✅ صفحات الأدمن تحت حماية AdminRoute */}
      <Route path="/admin" element={<AdminRoute />}>
        <Route element={<AdminLayout />}>
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
      </Route>

      {/* راوت fallback */}
      <Route path="*" element={<Navigate to="/" />} />

    </Routes>
  );
};

export default AppRoutes;
