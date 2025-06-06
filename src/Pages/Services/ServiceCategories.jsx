import React from "react";
import ShowServicesCard from "./ShowServicesCard";


const ServicesCategories = () => {

const servicesData = [
  {
    image: "https://i.ibb.co/Fb4pZZC1/worker-applies.webphttps://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    title: "Damp Wall Repair & Water Proofing",
    description:
      "We provide professional damp wall treatment and advanced waterproofing solutions to prevent leakage, seepage, and long-term structural damage in your home or office.",
  },
  {
    image: "https://i.ibb.co/QBHKksP/Electrical-Work.jpg",
    title: "Electrical Work",
    description:
      "Our certified electricians handle wiring, lighting installation, power backup systems, and electrical safety inspections for both new projects and repairs with complete precision.",
  },
  {
    image: "https://i.ibb.co/gLX5w5P8/Civil-Work.jpg",
    title: "Civil Work",
    description:
      "From foundation to finishing, we offer comprehensive civil construction services including RCC, plastering, brickwork, tiling, and structural repairs tailored to your project.",
  },
  {
    image: "https://i.ibb.co/tTw06Z4s/Construction-Consultancy.webp",
    title: "Construction & Consultancy",
    description:
      "Get expert advice on planning, budgeting, and execution of construction projects. We assist with material selection, site supervision, and quality assurance for your peace of mind.",
  },
  {
    image: "https://i.ibb.co/MycfBsmT/Interior-Work.jpg",
    title: "Interior Work",
    description:
      "Enhance the beauty and functionality of your space with our custom interior design services including modular kitchen, ceiling work, carpentry, painting, and decor solutions.",
  },
  {
    image: "https://i.ibb.co/LX44Lz6y/Plumbing-Work.jpg",
    title: "Plumbing Work",
    description:
      "We offer complete plumbing solutions including pipeline installation, bathroom fitting, leakage repair, water tank setup, and drainage system maintenance with prompt service.",
  },
  {
    image: "https://i.ibb.co/FqnMTqrr/Carpentry-Work.webp",
    title: "Carpentry Work",
    description:
      "Skilled carpentry services for custom furniture, wooden partitions, modular setups, door/window installation, and wood repairs crafted with quality and precision.",
  },
  {
    image: "https://i.ibb.co/7JMF8Mr8/Deep-Cleaning.webp",
    title: "Deep Cleaning",
    description:
      "Thorough deep cleaning services for homes and offices, including kitchens, bathrooms, floors, and hard-to-reach areas — ensuring a spotless, hygienic environment.",
  },
];



 
  return (
    <>
      <h1 className="text-4xl text-center py-8">Service categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
        {
            servicesData?.map((service,index)=><ShowServicesCard key={index} service={service}></ShowServicesCard>)
        }
      </div>
    </>
  );
};

export default ServicesCategories;
