
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { LuMapPin } from "react-icons/lu";

const cards = [
  {
    id: 1,
    client_name: 'Foysal Ahmed',
    place: 'Dhanmondi',
    comment: 'Great service',
    description: 'They did an excellent job with professional behavior.',
    img: 'https://i.ibb.co/Q3WcMRmw/men1.jpg',
  },
  {
    id: 2,
    client_name: 'Arif Hossain',
    place: 'Banani',
    comment: 'Very satisfied',
    description: 'Quick response and great quality of work.',
    img: 'https://i.ibb.co/mrr94f7m/men2.png',
  },
  {
    id: 3,
    client_name: 'Nusrat Jahan',
    place: 'Uttara',
    comment: 'Highly recommended',
    description: 'Delivered exactly what I asked for. Very professional!',
    img: 'https://i.ibb.co/nqzVCJgK/women1.jpg',
  },
  {
    id: 4,
    client_name: 'Tanvir Islam',
    place: 'Gulshan',
    comment: 'Loved it',
    description: 'Great attention to detail and timely delivery.',
    img: 'https://i.ibb.co/spFjQ1PJ/m5.jpg',
  },
  {
    id: 5,
    client_name: 'Rima Khatun',
    place: 'Mirpur',
    comment: 'Excellent',
    description: 'Very friendly team and professional work.',
    img: 'https://i.ibb.co/mrgNdR92/women2.jpg',
  },
  {
    id: 6,
    client_name: 'Mahmudul Hasan',
    place: 'Mohakhali',
    comment: 'Perfect job',
    description: 'Exceeded my expectations!',
    img: 'https://i.ibb.co/4R4jJvsb/m4.jpg',
  },
  {
    id: 7,
    client_name: 'Sumaiya Rahman',
    place: 'Bashundhara',
    comment: 'Smooth experience',
    description: 'The team was responsive and efficient.',
    img: 'https://i.ibb.co/xt6XQXv6/w-3.jpg',
  },
  {
    id: 8,
    client_name: 'Rashed Khan',
    place: 'Shantinagar',
    comment: 'Highly professional',
    description: 'Would definitely work with them again.',
    img: 'https://i.ibb.co/hxnmj8fX/m3.jpg',
  },
];

const ClientReview = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 text-black  mb-5 ">
        <h2 className='text-center py-5 text-4xl  dark:text-white abril-font text-blue-500'>What Our Clients Have To Say</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-3 dark:bg-green-950 py-5  shadow-lg  rounded-xl h-60 overflow-hidden transition duration-300"
            >
              <img src={card.img} alt={card.title} className=" h-12 w-12  bg-cover rounded-full mx-auto object-cover" />
              <div className="p-1 text-center space-y-1">
                <h1 className='text-xl font-bold dark:text-white font-poppins'>{card.client_name}</h1>
                <div className='flex items-center justify-center gap-1'>
                  <span className='text-blue-700'><LuMapPin /></span>
                  <p className='dark:text-blue-700 font-poppins'>{card.place}</p>
                </div>
                <h3 className='text-blue-500 text-md dark:text-white font-poppins'>{card.comment}</h3>
                <h2 className="text-sm font-semibold text-gray-600 dark:text-white font-poppins">{card.description}</h2>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientReview;
