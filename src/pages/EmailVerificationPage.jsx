// src/pages/EmailVerificationPage.jsx
import { Link } from 'react-router-dom';

const EmailVerificationPage = () => {
  return (
    <div className="text-center mt-20 px-4">
      <h2 className="text-2xl font-semibold mb-4 text-green-700">📧 تم إرسال رابط التحقق</h2>
      <p className="text-gray-700 mb-6">
        تم إرسال رسالة تأكيد إلى بريدك الإلكتروني. فضلاً تحقق من بريدك ثم قم بتسجيل الدخول.
      </p>
      <Link to="/login" className="text-blue-700 hover:underline font-medium">
        العودة لتسجيل الدخول
      </Link>
    </div>
  );
};

export default EmailVerificationPage;
