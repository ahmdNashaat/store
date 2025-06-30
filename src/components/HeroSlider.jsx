import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    image: "/shaltout.jpg",
    title: "أحدث العروض",
    subtitle: "استكشف تشكيلتنا الجديدة من الإلكترونيات والملابس!",
    button: "تسوق الآن",
  },
  {
    id: 2,
    image: "/pic3.png",
    title: "عروض الصيف",
    subtitle: "خصومات تصل إلى 50% على منتجات مختارة",
    button: "استفد الآن",
  },
  {
    id: 3,
    image: "/banner3.jpg",
    title: "خدمة سريعة",
    subtitle: "شحن خلال 48 ساعة لكل المحافظات",
    button: "ابدأ التسوق",
  },
  {
    id: 4,
    image: "/banner4.jpg",
    title: "مفضلات العملاء",
    subtitle: "منتجات الأعلى تقييمًا الآن بين يديك",
    button: "تصفح المفضلة",
  },
];

const HeroSlider = () => {
  return (
    <section className="relative w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="h-[400px] md:h-[500px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-2">{slide.title}</h2>
                <p className="text-lg md:text-xl mb-4">{slide.subtitle}</p>
                <Link
                  to="/products"
                  className="bg-white text-indigo-700 font-bold px-6 py-3 rounded hover:bg-indigo-100 transition"
                >
                  {slide.button}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
