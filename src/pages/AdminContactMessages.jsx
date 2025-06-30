import { useEffect, useState } from "react";
import api from "../services/api";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const AdminContactMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    api
      .get("/admin/contact-messages")
      .then((res) => setMessages(res.data))
      .catch(() => toast.error("❌ فشل في تحميل الرسائل"));
  }, []);

  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <Helmet>
        <title>📬 رسائل التواصل</title>
      </Helmet>

      <h2 className="text-2xl font-bold mb-6">📬 رسائل التواصل</h2>

      {messages.length === 0 ? (
        <p className="text-gray-500">لا توجد رسائل حاليًا.</p>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <details key={msg.id} className="bg-white shadow rounded p-4">
              <summary className="cursor-pointer font-semibold text-gray-800">
                {msg.name} - {msg.email}
                <span className="text-sm text-gray-500 float-left">{msg.created_at}</span>
              </summary>
              <div className="mt-2 whitespace-pre-wrap text-gray-700">{msg.message}</div>
            </details>
          ))}
        </div>
      )}
    </main>
  );
};

export default AdminContactMessages;
