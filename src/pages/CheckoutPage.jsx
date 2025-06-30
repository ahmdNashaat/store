import { useState } from "react";
import { toast } from "react-toastify";

const CheckoutPage = () => {
  const [address, setAddress] = useState("");

  const handleOrder = (e) => {
    e.preventDefault();
    if (!address.trim()) {
      return toast.error("❌ أدخل عنوان الشحن");
    }
    // call your backend API
    toast.success("✅ تم إرسال الطلب بنجاح");
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <form
        onSubmit={handleOrder}
        className="bg-white p-6 rounded shadow-md w-full max-w-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4">معلومات الشحن</h2>

        <textarea
          placeholder="العنوان بالتفصيل"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          rows="4"
          className="w-full p-2 border border-gray-300 rounded bg-white text-gray-800"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          تأكيد الطلب
        </button>
      </form>
    </main>
  );
};

export default CheckoutPage;
