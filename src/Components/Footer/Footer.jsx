import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router";
const Footer = () => {
  useEffect(() => {
      AOS.init({
        duration: 600,
        delay: 200,
      });
    }, []);
  return (
    <div className="bg-gray-200 text-white dark:bg-gray-900 ">
      <footer className="footer sm:footer-horizontal py-10 px-5 lg:px-20">
        <aside>
         <img className="h-16 w-16 rounded-full" data-aos="fade-up"  src={`https://i.ibb.co/tPJs4Gv5/home-06.jpg`} alt="" />
          <h2 className="text-2xl text-blue-500 font-extrabold" data-aos="fade-Left">Home Repair Services</h2>
          <p data-aos="fade-left" className="text-black dark:text-white">
            Providing reliable service since 2010
          </p>
        </aside>
        <nav className="text-black dark:text-white">
          <h6 className="footer-title">Services</h6>
          <Link to='/allServices'>All Service</Link>
          <Link to='/manageServices'>Manage Service</Link>
          <Link to='/contact'>Contact</Link>
          

          
        </nav>
        <nav className="text-black dark:text-white">
          <h6 className="footer-title">Follow Us</h6>
          <a href='https://web.facebook.com/shahnewaz.ahammed' target="_blank" className="link link-hover">Facebook</a>
          <a href="https://www.linkedin.com/jobs/" target="_blank" className="link link-hover">LinkedIn</a>
          <a href="https://www.instagram.com/blue_bird_himu/" className="link link-hover">Instagram</a>
          <a href='https://github.com/newaz2580' target="_blank" className="link link-hover">Github</a>
        </nav>
        <nav className="text-black dark:text-white">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <h3 className="text-center py-5 text-black dark:text-white">
        © Copyright Home Repair Services All Rights Reserved
      </h3>
    </div>
  );
};

export default Footer;
