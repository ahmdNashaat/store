import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import { AuthContextProvider } from './contexts/AuthContext';
import { I18nextProvider } from 'react-i18next'; 
import i18n from './i18n'; 

import 'react-toastify/dist/ReactToastify.css';
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <HelmetProvider>
    <BrowserRouter>
     <I18nextProvider I18nextProvider>
      <AuthContextProvider>
        <AppRoutes />
      </AuthContextProvider>
    </I18nextProvider> 
      <ToastContainer position="top-center" />
    </BrowserRouter>
  </HelmetProvider>
</React.StrictMode>
)

