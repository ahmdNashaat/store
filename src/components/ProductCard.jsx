import { Link } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";

const ProductCard = ({ product }) => {
  const { cart, favorites, fetchCart, fetchFavorites } = useAuth();

  const addToFavorites = async () => {
    const alreadyExists = favorites.find(item => item.id === product.id);
    if (alreadyExists) {
      toast.info("❤️ المنتج موجود بالفعل في المفضلة");
      return;
    }

    try {
      await api.post(`/favorites/${product.id}`);
      toast.success("❤️ تمت الإضافة إلى المفضلة");
      fetchFavorites();
    } catch {
      toast.error("❌ حدث خطأ أثناء الإضافة إلى المفضلة");
    }
  };

  const addToCart = async () => {
    const alreadyExists = cart.find(item => item.product_id === product.id);
    if (alreadyExists) {
      toast.info("🛒 المنتج موجود بالفعل في السلة");
      return;
    }

    try {
      await api.post(`/cart`, { product_id: product.id, quantity: 1 });
      toast.success("🛒 تم إضافة المنتج إلى السلة");
      fetchCart();
    } catch {
      toast.error("❌ حدث خطأ أثناء الإضافة إلى السلة");
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition p-3 relative">
      {product.discount_price && (
        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          خصم
        </span>
      )}

      <Link to={`/products/${product.id}`} className="block">
        {product.image_url && (
          <img
            src={`http://localhost:5000/${product.image_url}`}
            alt={product.name}
            className="w-full h-52 object-contain mb-3"
          />
        )}
      </Link>

      <h4 className="text-base font-semibold text-gray-800 line-clamp-1">{product.name}</h4>
      <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>

      <div className="mt-2 flex items-center gap-2">
        {product.discount_price ? (
          <>
            <span className="text-green-600 font-bold">{product.discount_price} ج.م</span>
            <span className="line-through text-sm text-gray-400">{product.price} ج.م</span>
          </>
        ) : (
          <span className="text-green-600 font-bold">{product.price} ج.م</span>
        )}
      </div>

      <p className="text-sm text-green-500 mt-1">✔ متوفر في المخزون</p>

      <div className="mt-3 flex items-center justify-between">
        <button
          onClick={addToCart}
          className="bg-indigo-600 text-white text-sm px-3 py-1 rounded hover:bg-indigo-700"
        >
          ➕ للسلة
        </button>
        <button
          onClick={addToFavorites}
          className="text-red-500 text-lg hover:scale-110 transition"
        >
          ❤️
        </button>
      </div>

      <p className="mt-2 text-xs text-blue-800">
        🚚 توصيل خلال 2-5 أيام | سياسة الشحن
      </p>
    </div>
  );
};

export default ProductCard;
