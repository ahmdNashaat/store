// src/pages/AdminUsersPage.jsx
import { useEffect, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

const AdminUsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/admin/users")
      .then((res) => setUsers(res.data))
      .catch(() => toast.error("❌ فشل في تحميل المستخدمين"));
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">👥 جميع المستخدمين</h2>

      {users.length === 0 ? (
        <p>لا يوجد مستخدمون حاليًا.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>اسم المستخدم</th>
                <th>البريد الإلكتروني</th>
                <th>الحالة</th>
                <th>أدمن؟</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={user.id}>
                  <td>{i + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.is_verified ? "✅ مفعل" : "⛔ غير مفعل"}</td>
                  <td>{user.is_admin ? "🛡️ نعم" : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminUsersPage;
