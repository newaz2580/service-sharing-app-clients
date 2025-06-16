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
          <h2 className="text-2xl" data-aos="fade-Left">Home Repair BD Ltd</h2>
          <p data-aos="fade-left">
            Providing reliable service since 2010
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Follow Us</h6>
          <a href='https://web.facebook.com/shahnewaz.ahammed' target="_blank" className="link link-hover">Facebook</a>
          <a href="https://web.facebook.com/shahnewaz.ahammed" target="_blank" className="link link-hover">LinkedIn</a>
          <a href="https://www.instagram.com/blue_bird_himu/" className="link link-hover">Instagram</a>
          <a href='https://github.com/newaz2580' target="_blank" className="link link-hover">Github</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <h3 className="text-center py-5">
        © Copyright Home Repair BD Ltd. All Rights Reserved
      </h3>
    </div>
  );
};

export default Footer;
