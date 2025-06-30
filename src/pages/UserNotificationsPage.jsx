// src/pages/UserNotificationsPage.jsx
import { useEffect, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

const UserNotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);

  const fetchNotifications = () => {
    api
      .get("/notifications")
      .then((res) => setNotifications(res.data))
      .catch(() => toast.error("❌ فشل في تحميل الإشعارات"));
  };

  const markAllAsRead = () => {
    const unread = notifications.filter((n) => !n.is_read);
    if (unread.length === 0) return;

    unread.forEach((n) => {
      api.patch(`/notifications/${n.id}/read`).catch(() => {});
    });

    setNotifications((prev) =>
      prev.map((n) => ({ ...n, is_read: true }))
    );
    toast.success("📩 تم تعليم الكل كمقروء");
  };

  const deleteNotification = (id) => {
    api
      .delete(`/notifications/${id}`)
      .then(() => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
        toast.success("🗑️ تم حذف الإشعار");
      })
      .catch(() => toast.error("❌ فشل في الحذف"));
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">🔔 إشعاراتي</h2>

      {notifications.length === 0 ? (
        <p className="text-center text-gray-500">لا توجد إشعارات حالياً.</p>
      ) : (
        <>
          <div className="flex justify-end mb-4">
            <button
              onClick={markAllAsRead}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              ✅ تعليم الكل كمقروء
            </button>
          </div>

          <ul className="space-y-4">
            {notifications.map((notif) => (
              <li
                key={notif.id}
                className={`p-4 rounded shadow ${
                  notif.is_read ? "bg-gray-100" : "bg-white border border-blue-500"
                }`}
              >
                <div className="flex justify-between items-center">
                  <p className="text-sm">{notif.message}</p>
                  <div className="flex gap-2">
                    {!notif.is_read && (
                      <button
                        onClick={() => api.patch(`/notifications/${notif.id}/read`).then(fetchNotifications)}
                        className="text-blue-600 text-sm hover:underline"
                      >
                        تعليم كمقروء
                      </button>
                    )}
                    <button
                      onClick={() => deleteNotification(notif.id)}
                      className="text-red-600 text-sm hover:underline"
                    >
                      حذف
                    </button>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1 text-end">
                  {new Date(notif.created_at).toLocaleString("ar-EG")}
                </p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default UserNotificationsPage;
