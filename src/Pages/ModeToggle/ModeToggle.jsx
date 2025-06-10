import React, { useContext } from 'react';
import { IoSunnyOutline } from 'react-icons/io5';
import { AuthContext } from '../../Context/AuthContext';
import { FaMoon } from 'react-icons/fa';

const ModeToggle = () => {
    const {darkMode,setDarkMode}=useContext(AuthContext)
    return (
        <div className='ml-3'>
            <button onClick={()=>setDarkMode(!darkMode)}>{darkMode ? <IoSunnyOutline size={25} />:<FaMoon size={25} />}</button>
        </div>
    );
};

export default ModeToggle;