import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      toast.error("❌ يجب إدخال اسم المستخدم وكلمة المرور");
      return;
    }

    try {
      const res = await api.post("/login", { username, password });
      const token = res.data.token;

      const decoded = jwtDecode(token); // ✅ استخراج بيانات المستخدم من التوكن

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(decoded));

      toast.success("✅ تم تسجيل الدخول بنجاح");

      // ✅ توجيه حسب الدور
      if (decoded.is_admin) {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }

    } catch (error) {
      if (error.response?.data?.error) {
        toast.error(`❌ ${error.response.data.error}`);
      } else {
        toast.error("❌ حدث خطأ أثناء تسجيل الدخول");
      }
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4">تسجيل الدخول</h2>

        <input
          type="text"
          placeholder="اسم المستخدم"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />

        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          تسجيل الدخول
        </button>
      </form>
    </main>
  );
};

export default LoginPage;
