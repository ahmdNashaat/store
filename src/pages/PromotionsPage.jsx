// ✅ PromotionsPage.jsx
import { useEffect, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const PromotionsPage = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    api.get("/offers")
      .then((res) => setOffers(res.data))
      .catch(() => toast.error("❌ فشل في تحميل العروض"));
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Helmet>
        <title>🔥 العروض | Shaltout Store</title>
        <meta name="description" content="اكتشف أفضل العروض والخصومات المتاحة في Shaltout Store." />
      </Helmet>
      <h2 className="text-2xl font-bold mb-6">🔥 العروض الحالية</h2>
      {offers.length === 0 ? (
        <p>لا توجد عروض حالياً.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {offers.map((offer) => (
            <div key={offer.id} className="border p-4 rounded shadow hover:shadow-md transition">
              <h3 className="font-bold text-lg mb-2">{offer.title}</h3>
              <p className="text-gray-600">{offer.description}</p>
              <p className="text-sm text-gray-500 mt-2">
                ⏳ ينتهي في: {new Date(offer.expires_at).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PromotionsPage;