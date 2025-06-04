import React from 'react';
import { useLoaderData } from 'react-router';
import ServiceCard from '../ServiceCard/ServiceCard';
import ServiceCategories from '../Service category/ServiceCategories';
import ServicesCategories from '../Services/ServiceCategories';



const Home = () => {
    const serviceData=useLoaderData()
    
   
    return (
        <div>
         <ServiceCard serviceData={serviceData}></ServiceCard>
         <ServiceCategories></ServiceCategories>
         <ServicesCategories></ServicesCategories>
        </div>
    );
};

export default Home;