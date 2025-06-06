import React from 'react';
import { motion } from "motion/react"
const Hero = () => {
   
    return (
        <section className="dark:bg-gray-800">
            <h1 className='text-5xl text-center font-bold py-9'>Service Sharing </h1>
	<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<motion.h1 
			
			 animate={{ 
				color:['#f42918','#f5d808 ','#1284f6','#17f10d'], 
				transition:{duration:4,repeat:Infinity}
			}}
			className="text-3xl font-bold leading-none sm:text-5xl">Home
				<span className="dark:text-violet-600">Repair</span>Service
			</motion.h1>
			<motion.p 
			initial={{ scale: 0 }}
			 animate={{ scale: 1,transition:{duration:3} }}
			className="mt-6 mb-8  text-5xl">
				Let the expert handle Your  house problems
			</motion.p>
			<div  className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded btn-primary btn">Feature</a>
				
			</div>
		</div>

		<div  className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<motion.img 
			animate={{y:[0,50,0]}}
			transition={{duration:5,repeat:Infinity}}
			src={`https://i.ibb.co/5gm1s7Y6/home.jpg`} alt="" className="object-contain h-60 sm:h-70 lg:h-80 xl:h-96 2xl:h-110" />
		</div>
	</div>
</section>
    );
};

export default Hero;