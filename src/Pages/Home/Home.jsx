import React from 'react';
import { useLoaderData } from 'react-router';
import ServiceCard from '../ServiceCard/ServiceCard';


const Home = () => {
    const serviceData=useLoaderData()
    console.log(serviceData)
   
    return (
        <div>
         <ServiceCard serviceData={serviceData}></ServiceCard>
        </div>
    );
};

export default Home;