// import React from 'react'

// const Navbar = () => {

//     const scrollToContact = () => {
//         const contactSection = document.getElementById('contact');
//         if (contactSection) {
//             contactSection.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     return (

//         <div className='bg-[rgba(26,11,46,1)] text-white  h-16'>

//             <ul className='flex items-center justify-evenly pt-4'>

//                 <img src="./Logo.png" alt="" className='w-7 h-7 ml-24' />

//                 <li className='text-sm font-semibold cursor-pointer  hover:text-purple-400 transition-colors'>Home</li>

//                 <li className='text-sm font-semibold cursor-pointer hover:text-purple-400 transition-colors'>About</li>

//                 <li
//                     onClick={scrollToContact}
//                     className='text-sm font-semibold cursor-pointer hover:text-purple-400 transition-colors'
//                 >
//                     Contact
//                 </li>

//             </ul>

//         </div>
//     )
// }

// export default Navbar




import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToContact = () => {
        setIsOpen(false);
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };


    const scrollToAbout = () => {
        setIsOpen(false);
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };




    const scrollToHome = () => {
        setIsOpen(false);
        const homeSection = document.getElementById('home');
        if (homeSection) {
            homeSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className='bg-[rgba(26,11,46,1)] text-white h-16 fixed w-full z-50 top-0'>

            {/* ------------------------------------------- */}
            {/* 1. LAPTOP/DESKTOP VIEW (Ye Aapka Original Code Hai) */}
            {/* 'hidden md:flex' ka matlab hai mobile me chupao, laptop me dikhao */}
            {/* ------------------------------------------- */}
            <ul className='hidden md:flex items-center justify-evenly pt-4'>
                <img src="./Logo.png" alt="" className='w-7 h-7 ml-24 cursor-pointer' />

                <li onClick={scrollToHome} className='text-sm font-semibold cursor-pointer hover:text-purple-400 transition-colors'>Home</li>
                <li onClick={scrollToAbout} className='text-sm font-semibold cursor-pointer hover:text-purple-400 transition-colors'>About</li>

                <li
                    onClick={scrollToContact}
                    className='text-sm font-semibold cursor-pointer hover:text-purple-400 transition-colors'
                >
                    Contact
                </li>
            </ul>


            {/* ------------------------------------------- */}
            {/* 2. MOBILE/TABLET VIEW (New Code for Responsiveness) */}
            {/* 'md:hidden' ka matlab hai laptop me chupao, mobile me dikhao */}
            {/* ------------------------------------------- */}
            <div className='md:hidden flex items-center justify-between px-6 h-full'>
                {/* Mobile Logo (No margin-left here) */}
                <img src="./Logo.png" alt="" className='w-7 h-7' />

                {/* Hamburger Button */}
                <button onClick={() => setIsOpen(!isOpen)} className='focus:outline-none'>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>


            {/* ------------------------------------------- */}
            {/* 3. MOBILE MENU DROPDOWN (Click karne par khulega) */}
            {/* ------------------------------------------- */}
            {isOpen && (
                <div className='md:hidden absolute top-16 left-0 w-full bg-[#1a0b2e] border-b border-purple-500/20 shadow-xl'>
                    <ul className='flex flex-col items-center py-6 space-y-6'>
                        <li className='text-base font-semibold cursor-pointer hover:text-purple-400' onClick={() => setIsOpen(false)}>Home</li>
                        <li className='text-base font-semibold cursor-pointer hover:text-purple-400' onClick={() => setIsOpen(false)}>About</li>
                        <li
                            className='text-base font-semibold cursor-pointer hover:text-purple-400'
                            onClick={scrollToContact}
                        >
                            Contact
                        </li>
                    </ul>
                </div>
            )}

        </nav>
    )
}

export default Navbar;