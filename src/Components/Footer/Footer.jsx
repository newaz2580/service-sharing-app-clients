import React from "react";

const Footer = () => {
  return (
    <div className="bg-blue-700 text-white dark:bg-gray-800 ">
      <footer className="footer sm:footer-horizontal  p-10">
        <aside>
         <img className="h-16 w-16 rounded-full" src={`https://i.ibb.co/tPJs4Gv5/home-06.jpg`} alt="" />
          <p>
            Home Repair BD Ltd
            <br />
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
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">LinkedIn</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">Github</a>
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
