import React from 'react';
import {useNavigate} from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/home/login');
    };
    return (
            
            <button onClick={handleLogout} className="text-2xl font-bold mb-4 text-center text-black px-4 py-2">Logout</button>
        
    );
};
export default Logout;