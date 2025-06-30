const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-200 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">

        {/* About */}
        <div>
          <h4 className="font-bold mb-2 text-white">عن المتجر</h4>
          <p>Shaltout Store هو متجرك المفضل لشراء أفضل المنتجات بأسعار منافسة.</p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-bold mb-2 text-white">روابط</h4>
          <ul className="space-y-1">
            <li><a href="/products" className="hover:text-white">المنتجات</a></li>
            <li><a href="/contact" className="hover:text-white">تواصل معنا</a></li>
            <li><a href="/terms" className="hover:text-white">الشروط والأحكام</a></li>
          </ul>
        </div>

        {/* CopyRight */}
        <div className="sm:text-right">
          <h4 className="font-bold mb-2 text-white">تابعنا</h4>
          <p>فيسبوك | إنستجرام | تويتر</p>
          <p className="mt-4 text-xs text-gray-400">
            © {currentYear} Shaltout Store. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
