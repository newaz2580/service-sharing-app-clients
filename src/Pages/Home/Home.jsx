import React from 'react';
import { useLoaderData } from 'react-router';
import ServiceCard from '../ServiceCard/ServiceCard';
import ServicesCategories from '../Services/ServiceCategories';
import Banner from '../Banner/Banner';
import ClientReview from '../ClientReview/ClientReview';
import Promotional from '../Promotional/Promotional';


const Home = () => {
    const serviceData=useLoaderData()
    
    return (
        <div className=' bg-gray-100 text-black dark:bg-gray-900 dark:text-white'>
         <title>Home</title>
         <Banner></Banner>
         <ServiceCard serviceData={serviceData}></ServiceCard>
         <ServicesCategories></ServicesCategories>
         <ClientReview></ClientReview>
         <Promotional/>

        </div>
    );
};

export default Home;