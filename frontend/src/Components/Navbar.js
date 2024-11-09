
import React, {useState} from 'react';





const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isaboutOpen,setIsaboutOpen] = useState(false);        ///extra line
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
        setIsaboutOpen(false);
    };
    const toggleAboutsection = () => {
        setIsaboutOpen(!isaboutOpen);
        setDropdownOpen(false);
    };
    return(
        <nav className='bg-gray-800 p-4'>
           <div className='flex justify-between items-center'>
            <h1 className='text-white text-2xl font-bold'>Task Manager</h1>
            <ul className='flex space-x-4'>
                <li className="relative">
                    <button onClick={toggleDropdown} href='/home' className="text-white hover:bg-blue-500 px-3 py-3 rounded focus:outline-none">Home</button>
                    {dropdownOpen && (
                        <ul className='absolute bg-black-100 right-0 mt-2 py-2 rounded-md shadow-lg z-50'>
                            <li className='hover:bg-black-300 px-4 py-2 cursor-pointer'>Login</li>
                            <li className='hover:bg-black-300 px-4 py-2 cursor-pointer'>Signup</li>
                            <li className='hover:bg-black-300 px-4 py-2 cursor-pointer'>Logout</li>
                        </ul>
                    )}
                </li>
                <li>
                    <button onClick={toggleAboutsection} href='/about' className='text-white hover:bg-blue-500 px-3 py-3 rounded focus:outline-none'>About</button>
                </li>
                <li>
                    <button onClick={toggleAboutsection} href='/contact' className='text-white hover:bg-blue-500 px-3 py-3 rounded focus:outline-none'>Contact</button>
                </li>
                <li>
                    <button onClick={toggleAboutsection} href='/tasks' className='text-white hover:bg-blue-500 px-3 py-3 rounded focus:outline-none'>Tasks</button>
                </li>
            </ul>
           </div>
        </nav>
    );
};    


export default Navbar;