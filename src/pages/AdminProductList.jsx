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
