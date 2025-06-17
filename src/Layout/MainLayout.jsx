import React from 'react';
import Navbar from '../Components/Header/Navbar';
import { Outlet, useNavigate } from 'react-router';
import Footer from '../Components/Footer/Footer';
import Loading from '../Pages/Loading/Loading';

const MainLayout = () => {
    const {state}=useNavigate()
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-290px)]'>
            {state=='loading'?<Loading></Loading>:<Outlet/>} 
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;