import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import api from "../services/api";
import ProductCard from "../components/ProductCard";
import { Helmet } from "react-helmet-async";

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({
    category_id: "",
    min: "",
    max: "",
  });
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("q");
  const urlCategoryId = searchParams.get("category_id");

  // ✅ تحديث الفلاتر بناءً على رابط التصنيف
  useEffect(() => {
    if (urlCategoryId) {
      setFilters((prev) => ({ ...prev, category_id: urlCategoryId }));
    }
  }, [location.search]);

  const fetchProducts = () => {
    setLoading(true);

    if (searchQuery) {
      // ✅ البحث باستخدام كلمة مفتاحية
      api
        .get(`/products/search?q=${searchQuery}`)
        .then((res) => {
          setProducts(res.data.products || []);
        })
        .catch(() => setProducts([]))
        .finally(() => setLoading(false));
    } else {
      // ✅ استخدام الفلاتر
      const params = {
        ...filters,
        ...(filters.category_id === "" && { category_id: undefined }),
        ...(filters.min === "" && { min: undefined }),
        ...(filters.max === "" && { max: undefined }),
      };

      api
        .get("/products/filter", { params })
        .then((res) => {
          setProducts(res.data.products || []);
        })
        .catch(() => setProducts([]))
        .finally(() => setLoading(false));
    }
  };

  const fetchCategories = () => {
    api
      .get("/categories")
      .then((res) => setCategories(res.data))
      .catch(() => setCategories([]));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [searchQuery, filters]);

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

        {/* ✅ الفلاتر */}
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

        {/* ✅ عرض المنتجات أو حالة التحميل */}
        {loading ? (
          <p className="text-center text-gray-500">⏳ جاري تحميل المنتجات...</p>
        ) : products.length === 0 ? (
          <p className="text-center text-gray-500">😕 لا توجد منتجات مطابقة.</p>
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
