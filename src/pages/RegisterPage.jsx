import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", form);
      toast.success("✅ تم إنشاء الحساب بنجاح");
      navigate("/login");
    } catch (err) {
      toast.error("❌ حدث خطأ أثناء التسجيل");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4">إنشاء حساب</h2>

        <input
          type="text"
          name="name"
          placeholder="الاسم الكامل"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded bg-white text-gray-800"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="البريد الإلكتروني"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded bg-white text-gray-800"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="كلمة المرور"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded bg-white text-gray-800"
          required
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          إنشاء الحساب
        </button>
      </form>
    </main>
  );
};

export default RegisterPage;
