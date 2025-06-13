import React from 'react';
import { useLoaderData } from 'react-router';
import ServiceCard from '../ServiceCard/ServiceCard';
import ServicesCategories from '../Services/ServiceCategories';
import Hero from '../Hero/Hero';
import ClientReview from '../ClientReview/ClientReview';
import { Helmet } from 'react-helmet';
const Home = () => {
    const serviceData=useLoaderData()
    return (
        <div className='px-10 lg:px-20 bg-white text-black dark:bg-gray-900 dark:text-white'>
         <Helmet><title>Home</title></Helmet>
         <Hero></Hero>
         <ServiceCard serviceData={serviceData}></ServiceCard>
         <ServicesCategories></ServicesCategories>
         <ClientReview></ClientReview>
        </div>
    );
};

export default Home;