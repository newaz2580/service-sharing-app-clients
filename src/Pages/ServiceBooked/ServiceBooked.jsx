import React, { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const ServiceBooked = () => {
    const data=useLoaderData()
    const { user } = useContext(AuthContext);
    // console.log(data,user)
   if(data.length >0 ){
    const booking=data.map(book=>book.currentUserEmail ===user.email)
    console.log(booking)
   }
    return (
        <div>
            
        </div>
    );
};

export default ServiceBooked;