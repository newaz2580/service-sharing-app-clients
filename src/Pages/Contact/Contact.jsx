import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
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
          toast.success("message send successfully");
          form.current.reset();
        },
        (error) => {
          toast.error("Message failed to send", error.text);
        }
      );
  };
  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 py-16 px-6 md:px-10 lg:px-20">
       <h2 className="text-center text-blue-600 text-4xl py-5">Contact Us</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
       
        <div>
          <h2 className="text-4xl font-bold text-blue-700 mb-4">
             Our Service Sharing Platform
          </h2>
          <p className="text-gray-700 dark:text-white text-xl leading-relaxed mb-4">
            Our platform connects people who offer and need services — from
            household help, to tutoring, to tech support. It’s a trusted place
            where communities collaborate and help each other thrive.
          </p>
          <p className="text-gray-700 leading-relaxed dark:text-white text-xl">
            We believe in trust, transparency, and building real connections.
            Whether you're a service provider or a customer, we’re here to
            support you. If you have any feedback, questions, or partnership
            ideas — feel free to reach out below!
          </p>
        </div>

       
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl ">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Contact Us For Information
          </h3>
          <form onSubmit={sendEmail} ref={form} className="space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="User name"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white"
            />
            
            <input
              type="text"
              name="subject"
              placeholder="Your Subject"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500  text-black dark:text-white"
            />
            
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500  text-black dark:text-white"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500  text-black dark:text-white"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
