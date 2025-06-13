import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
      AOS.init({
        duration: 600,
        delay: 200,
      });
    }, []);
  return (
    <div className="bg-blue-700 text-white dark:bg-gray-950 ">
      <footer className="footer sm:footer-horizontal p-10">
        <aside>
         <img className="h-16 w-16 rounded-full" data-aos="fade-up"  src={`https://i.ibb.co/tPJs4Gv5/home-06.jpg`} alt="" />
          <h2 className="text-2xl" data-aos="fade-up">Home Repair BD Ltd</h2>
          <p data-aos="fade-up">
            Providing reliable service since 2010
          </p>
        </aside>
        <nav>
          <h6 className="footer-title" data-aos="fade-up">Services</h6>
          <a className="link link-hover" data-aos="fade-up">Branding</a>
          <a className="link link-hover" data-aos="fade-up">Design</a>
          <a className="link link-hover" data-aos="fade-up">Marketing</a>
          <a className="link link-hover" data-aos="fade-up">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title" data-aos="fade-up">Follow Us</h6>
          <a className="link link-hover" data-aos="fade-up">Facebook</a>
          <a className="link link-hover" data-aos="fade-up">LinkedIn</a>
          <a className="link link-hover" data-aos="fade-up">Instagram</a>
          <a className="link link-hover" data-aos="fade-up">Github</a>
        </nav>
        <nav>
          <h6 className="footer-title" data-aos="fade-up">Legal</h6>
          <a className="link link-hover" data-aos="fade-up">Terms of use</a>
          <a className="link link-hover" data-aos="fade-up">Privacy policy</a>
          <a className="link link-hover" data-aos="fade-up">Cookie policy</a>
        </nav>
      </footer>
      <h3 className="text-center py-5" data-aos="fade-up">
        © Copyright Home Repair BD Ltd. All Rights Reserved
      </h3>
    </div>
  );
};

export default Footer;
