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



// updated hai ye abhi 
// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);


//     const scrollToContact = () => {
//         setIsOpen(false);
//         const contactSection = document.getElementById('contact');
//         if (contactSection) {
//             contactSection.scrollIntoView({ behavior: 'smooth' });
//         }
//     };


//     const scrollToAbout = () => {
//         setIsOpen(false);
//         const aboutSection = document.getElementById('about');
//         if (aboutSection) {
//             aboutSection.scrollIntoView({ behavior: 'smooth' });
//         }
//     };




//     const scrollToHome = () => {
//         setIsOpen(false);
//         const homeSection = document.getElementById('home');
//         if (homeSection) {
//             homeSection.scrollIntoView({ behavior: 'smooth' });
//         }
//     };


//     const scrollToWork = () => {
//         setIsOpen(false);
//         const WorkSection = document.getElementById('work');
//         if (WorkSection) {
//             WorkSection.scrollIntoView({ behavior: 'smooth' });
//         }
//     };





//     return (
//         <nav className='bg-[rgba(26,11,46,1)] text-white h-16 fixed w-full z-50 top-0'>

//             {/* ------------------------------------------- */}
//             {/* 1. LAPTOP/DESKTOP VIEW (Ye Aapka Original Code Hai) */}
//             {/* 'hidden md:flex' ka matlab hai mobile me chupao, laptop me dikhao */}
//             {/* ------------------------------------------- */}
//             <ul className='hidden md:flex items-center justify-evenly pt-4'>
//                 <img src="./Logo.png" alt="" className='w-7 h-7 lg:ml-24 cursor-pointer' />

//                 <li onClick={scrollToHome} className='text-sm font-semibold cursor-pointer hover:text-purple-400 transition-colors'>Home</li>
//                 <li onClick={scrollToAbout} className='text-sm font-semibold cursor-pointer hover:text-purple-400 transition-colors'>About</li>
//                 <li
//                     onClick={scrollToWork}
//                     className='text-sm font-semibold cursor-pointer hover:text-purple-400 transition-colors'
//                 >
//                      Experience
//                 </li>

//                 <li
//                     onClick={scrollToContact}
//                     className='text-sm font-semibold cursor-pointer hover:text-purple-400 transition-colors'
//                 >
//                     Contact
//                 </li>
//             </ul>


//             {/* ------------------------------------------- */}
//             {/* 2. MOBILE/TABLET VIEW (New Code for Responsiveness) */}
//             {/* 'md:hidden' ka matlab hai laptop me chupao, mobile me dikhao */}
//             {/* ------------------------------------------- */}
//             <div className='md:hidden flex items-center justify-between px-6 h-full'>
//                 {/* Mobile Logo (No margin-left here) */}
//                 <img src="./Logo.png" alt="" className='w-7 h-7' />

//                 {/* Hamburger Button */}
//                 <button onClick={() => setIsOpen(!isOpen)} className='focus:outline-none'>
//                     {isOpen ? <X size={28} /> : <Menu size={28} />}
//                 </button>
//             </div>


//             {/* ------------------------------------------- */}
//             {/* 3. MOBILE MENU DROPDOWN (Click karne par khulega) */}
//             {/* ------------------------------------------- */}
//             {isOpen && (
//                 <div className='md:hidden absolute top-16 left-0 w-full bg-[#1a0b2e] border-b border-purple-500/20 shadow-xl'>
//                     <ul className='flex flex-col items-center py-6 space-y-6'>
//                         <li className='text-base font-semibold cursor-pointer hover:text-purple-400' onClick={() => setIsOpen(false)}>Home</li>
//                         <li className='text-base font-semibold cursor-pointer hover:text-purple-400' onClick={() => setIsOpen(false)}>About</li>
//                         <li className='text-base font-semibold cursor-pointer hover:text-purple-400' onClick={() => setIsOpen(false)}> Experience</li>
//                         <li
//                             className='text-base font-semibold cursor-pointer hover:text-purple-400'
//                             onClick={scrollToContact}
//                         >
//                             Contact
//                         </li>
//                     </ul>
//                 </div>
//             )}

//         </nav>
//     )
// }

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react'; // Sun aur Moon icon import kiye
import { useTheme } from '../context/ThemeContext';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isDarkMode, toggleTheme } = useTheme();


    // Scroll Functions (Same as before)
    const scrollToContact = () => { setIsOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); };
    const scrollToAbout = () => { setIsOpen(false); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); };
    const scrollToHome = () => { setIsOpen(false); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); };
    const scrollToWork = () => { setIsOpen(false); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }); };


    return (
        // Nav ka color bhi theme ke hisab se change hoga
        <nav className={`h-16  fixed w-full z-50 top-0 transition-colors duration-300 
            ${isDarkMode ? 'bg-[rgba(26,11,46,1)] text-white' : 'bg-white text-black shadow-md'}`}>

            {/* ------------------------------------------- */}
            {/* 1. LAPTOP/DESKTOP VIEW */}
            {/* ------------------------------------------- */}
            <div className='hidden md:flex items-center justify-between px-10 h-full'>

                {/* Logo Section */}
                <div className='flex items-center'>
                    <img src="./Logo.png" alt="" className={`w-7 h-7 cursor-pointer transition-all duration-300 
                        ${!isDarkMode ? 'invert brightness-125' : ''}`} />
                </div>

                {/* Menu Items (Centered using absolute or margin trick) */}
                <ul className='flex items-center gap-12'>
                    <li onClick={scrollToHome} className='text-sm font-semibold cursor-pointer hover:text-purple-400 transition-colors'>Home</li>
                    <li onClick={scrollToAbout} className='text-sm font-semibold cursor-pointer hover:text-purple-400 transition-colors'>About</li>
                    <li onClick={scrollToWork} className='text-sm font-semibold cursor-pointer hover:text-purple-400 transition-colors'>Experience</li>
                    <li onClick={scrollToContact} className='text-sm font-semibold cursor-pointer hover:text-purple-400 transition-colors'>Contact</li>
                </ul>

                {/* THEME TOGGLE BUTTON (Right Side) */}
                <button
                    onClick={toggleTheme}
                    className={`p-2 rounded-full transition-all duration-300 
                    ${isDarkMode ? 'bg-purple-900/40 hover:bg-purple-800' : 'bg-gray-200 hover:bg-gray-300'}`}
                >
                    {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-purple-900" />}
                </button>

            </div>


            {/* ------------------------------------------- */}
            {/* 2. MOBILE/TABLET VIEW */}
            {/* ------------------------------------------- */}
            <div className='md:hidden flex items-center justify-between px-6 h-full'>
                <img src="./Logo.png" alt="" className={`w-7 h-7 cursor-pointer transition-all duration-300 
                        ${!isDarkMode ? 'invert brightness-125' : ''}`} />

                <div className="flex items-center gap-4">
                    {/* Mobile Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-full transition-all 
                        ${isDarkMode ? 'bg-purple-900/40' : 'bg-gray-200'}`}
                    >
                        {isDarkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-purple-900" />}
                    </button>

                    {/* Hamburger Button */}
                    <button onClick={() => setIsOpen(!isOpen)} className='focus:outline-none'>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>


            {/* ------------------------------------------- */}
            {/* 3. MOBILE MENU DROPDOWN */}
            {/* ------------------------------------------- */}
            {isOpen && (
                <div className={`md:hidden absolute top-16 left-0 w-full border-b shadow-xl transition-colors duration-300
                    ${isDarkMode ? 'bg-[#1a0b2e] border-purple-500/20' : 'bg-white border-gray-200'}`}>

                    <ul className='flex flex-col items-center py-6 space-y-6'>
                        <li className='text-base font-semibold cursor-pointer hover:text-purple-400' onClick={scrollToHome}>Home</li>
                        <li className='text-base font-semibold cursor-pointer hover:text-purple-400' onClick={scrollToAbout}>About</li>
                        <li className='text-base font-semibold cursor-pointer hover:text-purple-400' onClick={scrollToWork}>Experience</li>
                        <li className='text-base font-semibold cursor-pointer hover:text-purple-400' onClick={scrollToContact}>Contact</li>
                    </ul>
                </div>
            )}

        </nav>
    )
}

export default Navbar;
