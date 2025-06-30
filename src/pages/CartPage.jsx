import { Helmet } from "react-helmet-async";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import api from "../services/api";

const CartPage = () => {
  const { cart, fetchCart, loading } = useAuth();
  

  if (loading) return <p className="text-center">⏳ جاري التحميل...</p>;
  if (cart.length === 0) {
    console.log("⚠️ cart فارغ رغم تسجيل الدخول");
    return <p className="text-gray-500">السلة فارغة.</p>;
 }

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

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Helmet>
        <title>🛒 سلة المشتريات | Shaltout Store</title>
      </Helmet>

      <h2 className="text-2xl font-bold mb-6">🛒 سلة المشتريات</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">السلة فارغة.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="border p-4 rounded flex justify-between items-center">
              <div>
                <p className="font-semibold">{item.product_name}</p>
                <p className="text-sm text-gray-600">الكمية: {item.quantity}</p>
                <p className="text-sm text-gray-600">السعر: {item.price} ج.م</p>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-600 hover:underline"
              >
                ❌ إزالة
              </button>
            </div>
          ))}
          <hr />
          <div className="text-lg font-bold">
            الإجمالي: {cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)} ج.م
          </div>
          <button
            onClick={confirmOrder}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-4"
          >
            تأكيد الطلب
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
