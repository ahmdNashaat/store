// src/pages/AdminHelpPage.jsx
const AdminHelpPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6 text-gray-800">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">📘 مركز المساعدة</h2>

      <section>
        <h3 className="text-lg font-semibold mb-2">💡 إدارة المنتجات</h3>
        <ul className="list-disc space-y-1 ps-5 text-sm">
          <li>لإضافة منتج، اذهب إلى قسم المنتجات واضغط على "➕ منتج جديد".</li>
          <li>يمكنك تعديل أو حذف أي منتج موجود من القائمة.</li>
          <li>دعم الصور يتم تلقائيًا، فقط تأكد من حجم الصورة ونوعها.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-2">📦 الطلبات</h3>
        <ul className="list-disc space-y-1 ps-5 text-sm">
          <li>قسم الطلبات يعرض كافة الطلبات من المستخدمين.</li>
          <li>يُظهر عدد المنتجات وسعر الطلب وتاريخ الإنشاء.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-2">🛑 المستخدمين</h3>
        <ul className="list-disc space-y-1 ps-5 text-sm">
          <li>يمكنك حظر/إلغاء حظر أي مستخدم بنقرة زر.</li>
          <li>الحسابات المحظورة لا تستطيع تسجيل الدخول أو الطلب.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-2">🔔 الإشعارات</h3>
        <ul className="list-disc space-y-1 ps-5 text-sm">
          <li>ستظهر إشعارات الطلبات الجديدة تلقائيًا.</li>
          <li>يمكنك تعليم الإشعارات كمقروء بنقرة واحدة.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-2">📞 دعم فني</h3>
        <p className="text-sm">
          لأي استفسار تقني أو مشكلة في النظام، يرجى التواصل عبر البريد:{" "}
          <a href="mailto:support@shaltoutstore.com" className="text-blue-600 underline">
            support@shaltoutstore.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default AdminHelpPage;
