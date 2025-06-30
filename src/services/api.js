import axios from 'axios';
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: 'http://127.0.0.1:5000/api', // مطابق لـ url_prefix='/api' في __init__.py
  withCredentials: true, // لدعم الـ cookies لو فيه
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Token مخزن بعد تسجيل الدخول
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // لو الـ Token منتهي، مسح الـ Token وإعادة توجيه للـ Login
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      toast.error("❌ انتهت صلاحية الجلسة، يرجى تسجيل الدخول مجددًا");
    }
    return Promise.reject(error);
  }
);

export default api;