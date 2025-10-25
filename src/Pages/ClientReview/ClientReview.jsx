import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { LuMapPin } from "react-icons/lu";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const cards = [
  {
    id: 1,
    client_name: 'Foysal Ahmed',
    place: 'Dhanmondi',
    comment: 'Great service',
    description: 'They did an excellent job with professional behavior.',
    img: 'https://i.ibb.co/Q3WcMRmw/men1.jpg',
    rating: 5,
  },
  {
    id: 2,
    client_name: 'Arif Hossain',
    place: 'Banani',
    comment: 'Very satisfied',
    description: 'Quick response and great quality of work.',
    img: 'https://i.ibb.co/mrr94f7m/men2.png',
    rating: 4,
  },
  {
    id: 3,
    client_name: 'Nusrat Jahan',
    place: 'Uttara',
    comment: 'Highly recommended',
    description: 'Delivered exactly what I asked for. Very professional!',
    img: 'https://i.ibb.co/nqzVCJgK/women1.jpg',
    rating: 5,
  },
  {
    id: 4,
    client_name: 'Tanvir Islam',
    place: 'Gulshan',
    comment: 'Loved it',
    description: 'Great attention to detail and timely delivery.',
    img: 'https://i.ibb.co/spFjQ1PJ/m5.jpg',
    rating: 5,
  },
  {
    id: 5,
    client_name: 'Rima Khatun',
    place: 'Mirpur',
    comment: 'Excellent',
    description: 'Very friendly team and professional work.',
    img: 'https://i.ibb.co/mrgNdR92/women2.jpg',
    rating: 4,
  },
  {
    id: 6,
    client_name: 'Mahmudul Hasan',
    place: 'Mohakhali',
    comment: 'Perfect job',
    description: 'Exceeded my expectations!',
    img: 'https://i.ibb.co/4R4jJvsb/m4.jpg',
    rating: 5,
  },
  {
    id: 7,
    client_name: 'Sumaiya Rahman',
    place: 'Bashundhara',
    comment: 'Smooth experience',
    description: 'The team was responsive and efficient.',
    img: 'https://i.ibb.co/xt6XQXv6/w-3.jpg',
    rating: 4,
  },
  {
    id: 8,
    client_name: 'Rashed Khan',
    place: 'Shantinagar',
    comment: 'Highly professional',
    description: 'Would definitely work with them again.',
    img: 'https://i.ibb.co/hxnmj8fX/m3.jpg',
    rating: 5,
  },
];

const ClientReview = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-8 py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header Section */}
      <div className="text-center mb-2">
        <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <span>💬 Client Testimonials</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 abril-font">
          What Our <span className="text-blue-500">Clients Say</span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-poppins">
          Discover why thousands of customers trust us with their home services
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ 
          clickable: true,
          el: '.swiper-pagination',
          type: 'bullets',
        }}
        autoplay={{ 
          delay: 4000, 
          disableOnInteraction: false,
          pauseOnMouseEnter: true 
        }}
        loop={true}
        breakpoints={{
          640: { 
            slidesPerView: 2,
            spaceBetween: 20 
          },
          768: { 
            slidesPerView: 2,
            spaceBetween: 25 
          },
          1024: { 
            slidesPerView: 3,
            spaceBetween: 30 
          },
          1280: { 
            slidesPerView: 3,
            spaceBetween: 30 
          },
        }}
        className="pb-16"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <motion.div
              whileHover={{ y: -5 }}
              className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 relative h-full min-h-[320px] flex flex-col"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <FaQuoteLeft className="text-6xl text-blue-500" />
              </div>

              {/* Client Image & Info */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <img 
                    src={card.img} 
                    alt={card.client_name} 
                    className="h-16 w-16 rounded-full object-cover border-4 border-blue-100 dark:border-blue-900 shadow-md" 
                  />
                  <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white p-1 rounded-full">
                    <FaQuoteLeft className="text-xs" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white font-poppins">
                    {card.client_name}
                  </h3>
                  <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                    <LuMapPin className="text-blue-500 text-sm" />
                    <span className="text-sm font-poppins">{card.place}</span>
                  </div>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i}
                    className={`text-sm ${
                      i < card.rating 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-gray-300 dark:text-gray-600'
                    }`}
                  />
                ))}
                <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                  ({card.rating}.0)
                </span>
              </div>

              {/* Comment */}
              <h4 className="text-blue-500 dark:text-blue-400 text-lg font-semibold font-poppins mb-2">
                "{card.comment}"
              </h4>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed font-poppins flex-grow">
                {card.description}
              </p>

              {/* Bottom Gradient Border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination and Navigation */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <div className="swiper-pagination !relative !w-auto"></div>
      </div>

      {/* Custom Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button className="swiper-button-prev bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl rounded-full p-3 hover:bg-blue-500 hover:text-white transition-all duration-300">
          ←
        </button>
        <button className="swiper-button-next bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl rounded-full p-3 hover:bg-blue-500 hover:text-white transition-all duration-300">
          →
        </button>
      </div>
    </div>
  );
};

export default ClientReview;