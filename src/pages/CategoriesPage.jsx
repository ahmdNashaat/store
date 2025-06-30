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
