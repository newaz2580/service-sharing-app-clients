import React from "react";

const About = () => {
  return (
    <section className="bg-white dark:bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl mb-4">
          About Service Sharing
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
          Service Sharing is a platform dedicated to connecting people with quality
          service providers in various fields. Whether you need help with home cleaning,
          repairs, or any specialized service, our goal is to make your life easier by
          bringing trustworthy professionals right to your fingertips.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Reliable Services</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We carefully vet all service providers to ensure you get the best quality and reliability.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Easy Booking</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Book your desired service in just a few clicks. No hassle, no confusion.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Customer Support</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our friendly support team is available to assist you anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
