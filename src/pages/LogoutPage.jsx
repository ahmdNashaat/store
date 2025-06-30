import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('token');
    navigate('/login');
  }, [navigate]);

  return <p className="text-center mt-10">👋 جاري تسجيل الخروج...</p>;
};

export default LogoutPage;
