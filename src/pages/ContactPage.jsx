import { useState } from "react";
import { toast } from "react-toastify";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("❌ جميع الحقول مطلوبة");
      return;
    }

    // send the form data to backend (optional)
    toast.success("✅ تم إرسال الرسالة بنجاح");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-xl space-y-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
          تواصل معنا
        </h2>

        <input
          type="text"
          name="name"
          placeholder="الاسم"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="البريد الإلكتروني"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />

        <textarea
          name="message"
          rows="5"
          placeholder="اكتب رسالتك هنا..."
          value={form.message}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          إرسال
        </button>
      </form>
    </main>
  );
};

export default ContactPage;
