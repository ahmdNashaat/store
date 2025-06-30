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
