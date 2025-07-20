import React from "react";
import { FaTools, FaBolt, FaSnowflake, FaPaintRoller, FaHammer, FaToilet, FaLock, FaBrush } from "react-icons/fa";

const offers = [
  {
    icon: <FaTools className="text-3xl text-blue-600" />,
    title: "Plumbing Fix",
    description: "Say goodbye to leaks and clogs. Includes pipe repair, faucet replacement & drain cleaning.",
    oldPrice: 1200,
    newPrice: 999,
    badge: "Hot Deal",
  },
  {
    icon: <FaBolt className="text-3xl text-yellow-500" />,
    title: "Electrical Repair",
    description: "Fix faulty wiring, circuit issues & switch boards with expert care and inspection.",
    oldPrice: 1500,
    newPrice: 1200,
    badge: "20% OFF",
  },
  {
    icon: <FaSnowflake className="text-3xl text-cyan-500" />,
    title: "AC Servicing",
    description: "Filter cleaning, coil check & FREE gas level check for better cooling.",
    oldPrice: 1800,
    newPrice: 1800,
    badge: "Free Gas Check",
  },
  {
    icon: <FaHammer className="text-3xl text-orange-500" />,
    title: "Carpentry Work",
    description: "From door fixes to custom furniture. Precision woodwork, now 10% off.",
    oldPrice: 1300,
    newPrice: 1170,
    badge: "10% OFF",
  },
  {
    icon: <FaPaintRoller className="text-3xl text-pink-500" />,
    title: "Room Painting",
    description: "Weatherproof wall paint with material + labor. FREE design on 1 wall!",
    oldPrice: 3000,
    newPrice: 2500,
    badge: "Bonus Offer",
  },
  {
    icon: <FaToilet className="text-3xl text-red-400" />,
    title: "Bathroom Renovation",
    description: "Modern design with plumbing, tiling, and finishing. Full upgrade at a discounted rate.",
    oldPrice: 5500,
    newPrice: 5000,
    badge: "New!",
  },
  {
    icon: <FaLock className="text-3xl text-indigo-500" />,
    title: "Door Lock Repair",
    description: "Fix broken locks & enhance your home’s safety with expert lock repair services.",
    oldPrice: 900,
    newPrice: 700,
    badge: "Limited Time",
  },
  {
    icon: <FaBrush className="text-3xl text-green-500" />,
    title: "Water Tank Cleaning",
    description: "Deep cleaning and sanitizing of household tanks. Ensure safe water for your family.",
    oldPrice: 1200,
    newPrice: 1000,
    badge: "Clean Deal",
  },
];

const Promotional = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-10 xl:px-30">
      <div className="max-w-7xl mx-auto text-center mb-5">
        <h2 className="text-4xl font-bold text-blue-600 mb-2 abril-font ">🎉 Promotional Offers</h2>
        <p className="text-gray-600 text-lg font-poppins dark:text-white">
          Special discounts on essential home repair services — Limited Time Only!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow hover:shadow-lg transition"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-gray-100 rounded-full">{offer.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{offer.title}</h3>
            </div>
            <p className="text-gray-600 mb-4 text-sm font-poppins dark:text-white">{offer.description}</p>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-gray-400 line-through mr-2 dark:text-white">৳{offer.oldPrice}</span>
                <span className="text-lg font-bold text-blue-600 dark:text-white">৳{offer.newPrice}</span>
              </div>
              <span className="px-3 py-1 text-xs bg-blue-500 text-white rounded-full font-semibold">
                {offer.badge}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Promotional;
