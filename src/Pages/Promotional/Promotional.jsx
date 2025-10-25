import React from "react";
import { FaTools, FaBolt, FaSnowflake, FaPaintRoller, FaHammer, FaToilet, FaLock, FaBrush, FaStar } from "react-icons/fa";

const offers = [
  {
    icon: <FaTools className="text-2xl text-blue-600" />,
    title: "Plumbing Fix",
    description: "Say goodbye to leaks and clogs. Includes pipe repair, faucet replacement & drain cleaning.",
    oldPrice: 1200,
    newPrice: 999,
    badge: "Hot Deal",
    discount: "17% OFF",
    rating: 4.8,
  },
  {
    icon: <FaBolt className="text-2xl text-yellow-500" />,
    title: "Electrical Repair",
    description: "Fix faulty wiring, circuit issues & switch boards with expert care and inspection.",
    oldPrice: 1500,
    newPrice: 1200,
    badge: "Popular",
    discount: "20% OFF",
    rating: 4.9,
  },
  {
    icon: <FaSnowflake className="text-2xl text-cyan-500" />,
    title: "AC Servicing",
    description: "Filter cleaning, coil check & FREE gas level check for better cooling.",
    oldPrice: 1800,
    newPrice: 1800,
    badge: "Free Service",
    discount: "Free Check",
    rating: 4.7,
  },
  {
    icon: <FaHammer className="text-2xl text-orange-500" />,
    title: "Carpentry Work",
    description: "From door fixes to custom furniture. Precision woodwork, now 10% off.",
    oldPrice: 1300,
    newPrice: 1170,
    badge: "Limited",
    discount: "10% OFF",
    rating: 4.6,
  },
  {
    icon: <FaPaintRoller className="text-2xl text-pink-500" />,
    title: "Room Painting",
    description: "Weatherproof wall paint with material + labor. FREE design on 1 wall!",
    oldPrice: 3000,
    newPrice: 2500,
    badge: "Bonus",
    discount: "17% OFF",
    rating: 4.8,
  },
  {
    icon: <FaToilet className="text-2xl text-red-400" />,
    title: "Bathroom Renovation",
    description: "Modern design with plumbing, tiling, and finishing. Full upgrade at a discounted rate.",
    oldPrice: 5500,
    newPrice: 5000,
    badge: "New",
    discount: "9% OFF",
    rating: 4.9,
  },
  {
    icon: <FaLock className="text-2xl text-indigo-500" />,
    title: "Door Lock Repair",
    description: "Fix broken locks & enhance your home's safety with expert lock repair services.",
    oldPrice: 900,
    newPrice: 700,
    badge: "Sale",
    discount: "22% OFF",
    rating: 4.7,
  },
  {
    icon: <FaBrush className="text-2xl text-green-500" />,
    title: "Water Tank Cleaning",
    description: "Deep cleaning and sanitizing of household tanks. Ensure safe water for your family.",
    oldPrice: 1200,
    newPrice: 1000,
    badge: "Eco",
    discount: "17% OFF",
    rating: 4.8,
  },
];

const Promotional = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span>✨ Limited Time Offers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 abril-font">
            Exclusive <span className="text-blue-600">Deals</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-poppins">
            Special discounts on essential home repair services — Limited Time Only!
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700 relative overflow-hidden"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg">
                  {offer.badge}
                </span>
              </div>

              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {offer.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{offer.title}</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <FaStar className="text-yellow-400 text-sm" />
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      {offer.rating}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 font-poppins line-clamp-2">
                {offer.description}
              </p>

              {/* Price & Discount */}
              <div className="mt-auto">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      ৳{offer.newPrice}
                    </span>
                    {offer.oldPrice > offer.newPrice && (
                      <span className="text-sm text-gray-400 line-through dark:text-gray-500">
                        ৳{offer.oldPrice}
                      </span>
                    )}
                  </div>
                  {offer.discount && (
                    <span className="px-2 py-1 text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-md">
                      {offer.discount}
                    </span>
                  )}
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                  Time limited
                </button>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Promotional;