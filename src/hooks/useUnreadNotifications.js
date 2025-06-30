import { useState, useEffect } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

const useUnreadNotifications = () => {
  const [unreadCount, setUnreadCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchUnreadNotifications = async () => {
    try {
      const res = await api.get("/admin/notifications?unread=true");
      if (Array.isArray(res.data)) {
        setUnreadCount(res.data.length);
      } else {
        setUnreadCount(0);
      }
    } catch {
      toast.error("❌ فشل في تحميل عدد الإشعارات");
      setUnreadCount(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUnreadNotifications();
    const interval = setInterval(fetchUnreadNotifications, 30000); // تحديث كل 30 ثانية
    return () => clearInterval(interval);
  }, []);

  return { unreadCount, loading };
};

export default useUnreadNotifications;