import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-xl">Split It</div>
                <div className='hidden sm:block'>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#" className="text-white hover:text-gray-300">Home</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-gray-300">About</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-gray-300">Services</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-gray-300">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className='block sm:hidden'>
                    {isOpen ? <CloseIcon className='text-white' onClick={() => setIsOpen(!isOpen)} /> : <MenuIcon className='text-white' onClick={() => setIsOpen(!isOpen)} />}
                </div>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col justify-center items-center">
                    <li>
                        <a href="#" className="text-white hover:text-gray-300">Home</a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-gray-300">About</a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-gray-300">Services</a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-gray-300">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
