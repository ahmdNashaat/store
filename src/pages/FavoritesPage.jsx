// src/pages/FavoritesPage.jsx
import { Helmet } from "react-helmet-async";
import { useAuth } from "../contexts/AuthContext";
import api from "../services/api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const FavoritesPage = () => {
  const { favorites, fetchFavorites, loading } = useAuth();

  // ✅ أثناء التحميل
  if (loading) {
    return (
      <div className="p-6 text-center text-gray-500">
        <p>🔄 جاري تحميل المفضلة...</p>
      </div>
    );
  }

  // ✅ بعد التحميل، لو فارغة
  if (favorites.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">
        <Helmet>
          <title>❤️ المفضلة | Shaltout Store</title>
        </Helmet>
        <h2 className="text-2xl font-bold mb-4">❤️ المفضلة</h2>
        <p>لا توجد منتجات مضافة إلى المفضلة بعد.</p>
      </div>
    );
  }

  // ✅ إزالة منتج من المفضلة
  const removeFromFavorites = (productId) => {
    api.delete(`/favorites/${productId}`)
      .then(() => {
        toast.success("🗑️ تم إزالة المنتج من المفضلة");
        fetchFavorites();
      })
      .catch(() => toast.error("❌ فشل في الإزالة"));
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Helmet>
        <title>❤️ المفضلة | Shaltout Store</title>
      </Helmet>

      <h2 className="text-2xl font-bold mb-6">❤️ المنتجات المفضلة</h2>

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] gap-6">
        {favorites.map((product) => (
          <div key={product.id} className="bg-white shadow rounded p-4 relative">
            <Link to={`/products/${product.id}`}>
              <img
                src={`http://localhost:5000/${product.image_url}`}
                alt={product.name}
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
            </Link>

            <button
              onClick={() => removeFromFavorites(product.id)}
              className="absolute top-2 right-2 text-red-500 hover:scale-110"
              title="إزالة من المفضلة"
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
