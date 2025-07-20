import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qpe7c9m",
        "template_knlgs1y",
        form.current,
        "6wHKj8vUrg68le2-_"
      )
      .then(
        () => {
          toast.success("Message sent successfully");
          form.current.reset();
        },
        (error) => {
          toast.error("Message failed to send");
          console.error(error.text);
        }
      );
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-14 abril-font">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Info */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-blue-700 abril-font">
              Let’s Get in Touch!
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 font-poppins">
              Have questions, suggestions, or just want to connect? Fill out the form or reach out to us via phone or email. We're always ready to help you with your service-sharing needs.
            </p>

            <div className="space-y-4 text-gray-700 dark:text-gray-300 mt-8">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-600 text-lg" />
                <span>+8801687678113</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-600 text-lg" />
                <span>newaz2796@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-600 text-lg" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white dark:bg-gray-800 p-8 shadow-lg rounded-2xl">
            <h4 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 abril-font">
              Send Us a Message
            </h4>
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
              ></textarea>
              <button
                type="submit"
                className="w-full font-poppins py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
