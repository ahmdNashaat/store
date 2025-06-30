import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import api from "../services/api";
import ProductCard from "../components/ProductCard";
import HeroSlider from "../components/HeroSlider";

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    api
      .get("/products?page=1&per_page=6")
      .then((res) => {
        if (Array.isArray(res.data.products)) {
          setFeaturedProducts(res.data.products);
        }
      })
      .catch(() => setFeaturedProducts([]));
  }, []);

  return (
    <main className="bg-gray-50 text-gray-800 min-h-screen">
      <Helmet>
        <title>Shaltout Store | تسوق أفضل المنتجات بأسعار مذهلة</title>
        <meta
          name="description"
          content="اكتشف أفضل العروض والمنتجات في Shaltout Store. شحن سريع وخدمة عملاء ممتازة. تسوق الآن!"
        />
        <meta
          property="og:title"
          content="Shaltout Store | عروض مميزة وأسعار منافسة"
        />
        <meta
          property="og:description"
          content="منتجات مختارة بأعلى جودة وخدمة سريعة في Shaltout Store."
        />
      </Helmet>

      {/* ✅ سلايدر جديد */}
      <HeroSlider />

      {/* ✅ منتجات مختارة */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h3 className="text-2xl font-bold mb-6 text-center">💎 منتجات مختارة</h3>
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))]">
          {featuredProducts.length === 0 ? (
            <p className="text-center text-gray-500">جارٍ تحميل المنتجات...</p>
          ) : (
            featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
