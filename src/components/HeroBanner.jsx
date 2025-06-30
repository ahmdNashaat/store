// src/components/HeroBanner.jsx
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">🎉 مرحبًا بك في Shaltout Store</h1>
        <p className="text-lg mb-6">
          عروض مذهلة على أحدث المنتجات، شحن سريع وخدمة ممتازة 24/7
        </p>
        <Link
          to="/products"
          className="bg-yellow-400 text-indigo-800 font-bold px-6 py-3 rounded hover:bg-yellow-300 transition"
        >
          تسوق الآن
        </Link>
      </div>
    </section>
  );
};

export default HeroBanner;
