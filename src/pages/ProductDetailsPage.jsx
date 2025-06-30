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
