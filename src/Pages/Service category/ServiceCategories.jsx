import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const sliderData = [
  {
    image: "https://i.ibb.co/hx3nB2TX/child-safety.webp",
    title: "Child Safety First",
    description: "Ensuring your child's safety with every step they take.",
  },
  {
    image: "https://i.ibb.co/hx3nB2TX/child-safety.webp",
    title: "Safe Environments",
    description: "Creating spaces where children can grow securely.",
  },
  {
    image: "https://i.ibb.co/hx3nB2TX/child-safety.webp",
    title: "Trusted Care",
    description: "Providing peace of mind for every parent.",
  },
  {
    image: "https://i.ibb.co/hx3nB2TX/child-safety.webp",
    title: "Smart Protection",
    description: "Modern solutions for everyday safety concerns.",
  },
  {
    image: "https://i.ibb.co/hx3nB2TX/child-safety.webp",
    title: "Awareness First",
    description: "Educating families on essential safety practices.",
  },
  {
    image: "https://i.ibb.co/hx3nB2TX/child-safety.webp",
    title: "Everyday Watch",
    description: "Tools to keep children safe in daily life.",
  },
  {
    image: "https://i.ibb.co/hx3nB2TX/child-safety.webp",
    title: "Community Support",
    description: "Working together to keep children safe.",
  },
  {
    image: "https://i.ibb.co/hx3nB2TX/child-safety.webp",
    title: "Prepared and Protected",
    description: "Always ready to prevent the unexpected.",
  },
];

const ServiceCategories = () => {
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };;
    return (
        <div className='w-3/4 m-auto'>
            <div className='my-20 '>
                <h1 className='text-4xl text-center my-8'>Our Recent Projects</h1>
                <Slider {...settings}>
            {
                sliderData.map((item)=>(
                <div className='bg-white h-[400px] text-black rounded-xl '>
                <div className='h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center flex-col'>
                <img src={item.image} alt="" className='h-36 w-36 rounded-full' />
                </div>
                <div className='flex flex-col justify-center items-center gap-4 p-4'>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                </div>
                </div>
                ))}
                </Slider>
            </div>
        </div>
    );
};

export default ServiceCategories;