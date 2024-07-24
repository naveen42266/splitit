import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';
const Navbar = () => {
    const navList = ['Home','Groups', 'Tips', 'Blogs', 'Support']
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    function handleRoute(path: string) {
        if(path == 'home'){
           router.push('/')
        }
        else{
            router.push("/" + path)
        }
    }
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-2xl">Split It</div>
                <div className='hidden md:block'>
                    <ul className="flex space-x-4">
                        {navList?.map((ele) => {
                            return (
                                <li key={ele}>
                                    <div className="text-white hover:text-gray-300" onClick={() => { handleRoute(ele?.toLowerCase()) }}>{ele}</div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className='block md:hidden'>
                    {isOpen ? <CloseIcon className='text-white' onClick={() => setIsOpen(!isOpen)} /> : <MenuIcon className='text-white' onClick={() => setIsOpen(!isOpen)} />}
                </div>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col justify-center items-center">
                    {navList?.map((ele) => {
                        return (
                            <li key={ele}>
                                <div className="text-white hover:text-gray-300" onClick={() => { handleRoute(ele?.toLowerCase()) }}>{ele}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
