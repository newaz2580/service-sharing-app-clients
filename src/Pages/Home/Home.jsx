import React from 'react';
import { useLoaderData } from 'react-router';
import ServiceCard from '../ServiceCard/ServiceCard';

import ServicesCategories from '../Services/ServiceCategories';

import Hero from '../Hero/Hero';



const Home = () => {
    const serviceData=useLoaderData()
    
   
    return (
        <div className='px-10 lg:px-20 bg-white text-black dark:bg-black dark:text-white'>
         <Hero></Hero>
         <ServiceCard serviceData={serviceData}></ServiceCard>
         <ServicesCategories></ServicesCategories>
        </div>
    );
};

export default Home;