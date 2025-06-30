import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          searchPlaceholder: 'Search for a product...',
          cart: 'Cart',
          favorites: 'Favorites',
          account: 'My Account',
          logout: 'Logout',
          admin: 'Admin',
          home: 'Home',
          hotDeals: '🔥 HOT DEALS',
          categories: 'Categories',
          login: 'Login',
        },
      },
      ar: {
        translation: {
          searchPlaceholder: 'ابحث عن منتج...',
          cart: 'السلة',
          favorites: 'المفضلة',
          account: 'حسابي',
          logout: 'تسجيل الخروج',
          admin: 'الأدمن',
          home: 'الرئيسية',
          hotDeals: '🔥 العروض',
          categories: 'التصنيفات',
          login: 'تسجيل الدخول',
        },
      },
    },
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
