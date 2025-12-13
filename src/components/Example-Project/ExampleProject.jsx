// import React from 'react'

// const ExampleProject = () => {

//     const data = [
//         {
//             id: 1,
//             title: 'Featued Project',
//             heading: 'Example Project',
//             content: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.Create and save new playlists of recommended tracks based on your existing playlists and more.'
//         },

//         {
//             id: 2,
//             title: 'Featued Project',
//             heading: 'Example Project',
//             content: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.Create and save new playlists of recommended tracks based on your existing playlists and more.'
//         },



//     ]


//     return (

//         <div className='pt-14 relative min-h-screen  bg-[#1a0b2e] text-white overflow-hidden font-sans'>
//             <h3 className='font-semibold text-lg text-purple-600 ml-80'>Featured Project</h3>
//             <h1 className='text-gray-500 font-semibold ml-80 text-4xl'>Example Project</h1>
//         </div>
//     )
// }

// export default ExampleProject




// import React from 'react'

// const ExampleProject = () => {

//     const data = [
//         {
//             id: 1,
//             title: 'Featured Project',
//             heading: 'Example Project',
//             content: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
//             img: '/example.svg'
//         },
//         {
//             id: 2,
//             title: 'Featured Project',
//             heading: 'Example Project',
//             content: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
//             img: '/example.svg'
//         },
//     ]

//     return (
//         <div className='pt-20 px-10 pb-20 relative min-h-screen bg-[#140a26] text-white overflow-hidden'>


//             <div className='mt-20 space-y-32'>
//                 {data.map((item, index) => (
//                     <div
//                         key={item.id}
//                         className={`flex items-center gap-10 w-full ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
//                     >

//                         {/* Image */}
//                         <div className='relative'>
//                             <div className="absolute inset-0 blur-3xl bg-purple-700 opacity-20 rounded-full"></div>
//                             <img src={item.img} alt="" className='relative rounded-lg w-[450px] shadow-xl' />
//                         </div>

//                         {/* Text */}
//                         <div className='max-w-md'>
//                             <p className='text-sm text-purple-400'>{item.title}</p>
//                             <h2 className='text-3xl font-bold mt-2'>{item.heading}</h2>
//                             <p className='mt-3 text-gray-400 leading-7'>{item.content}</p>
//                         </div>

//                     </div>
//                 ))}
//             </div>

//         </div>
//     )
// }

// export default ExampleProject

// shi hai ye wala 
// import React from 'react'

// const ExampleProject = () => {

//     const data = [
//         {
//             id: 1,
//             title: 'Featured Project',
//             heading: 'Example Project',
//             content: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
//             img: '/example.svg'
//         },
//         {
//             id: 2,
//             title: 'Featured Project',
//             heading: 'Example Project',
//             content: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
//             img: '/example.svg'
//         },
//     ]

//     return (
//         <div id='about' className='pt-20 px-10 pb-20 relative min-h-screen bg-[#140a26] text-white overflow-hidden'>

//             <div className='mt-20 space-y-32'>
//                 {data.map((item, index) => (
//                     <div
//                         key={item.id}
//                         // Yahan logic change kiya hai: Even index (0) pe reverse (Image Right), Odd pe normal (Image Left)
//                         className={`flex items-center gap-16 w-full justify-center ${index % 2 === 0 ? 'flex-row-reverse text-left' : 'flex-row text-right'}`}
//                     >

//                         {/* Image Section with Purple Border */}
//                         <div className='relative group'>
//                             {/* Glow Effect */}
//                             <div className="absolute inset-0 blur-3xl bg-purple-700 opacity-20 rounded-full -z-10"></div>

//                             {/* Purple Border Container mimicking Figma */}
//                             <div className="absolute -top-20  left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-900/40 rounded-full blur-[120px] " />
//                             <div className="absolute top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-[rgba(118, 60, 172, 1)] blur-[80px] rounded-full -z-10 pointer-events-none" />


//                             <div className='p-2 rounded-xl  backdrop-blur-sm'>

//                                 <img src="/border.svg" alt="" className='h-80 rounded-xl' />

//                                 <img
//                                     src={item.img}
//                                     alt=""
//                                     // className={`relative -mt-72 ml-16 rounded-lg w-[480px] h-[285px] object-cover shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] ${index % 2 !== 0 ? 'right-16 , mr-12' : 'text-right'}`}
//                                     className={`relative -mt-72 rounded-lg w-[480px] h-[285px] object-cover shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]  backdrop-blur-3xl
//         ${index % 2 === 0 ? 'ml-24 ' : 'ml-16 right-16 mr-12'}`}
//                                 />
//                             </div>
//                         </div>

//                         {/* Text Section */}
//                         <div className={`max-w-md flex flex-col ${index % 2 === 0 ? 'items-start' : 'items-end'}`}>
//                             <p className='text-lg text-purple-400 font-mono tracking-wider'>{item.title}</p>
//                             <h2 className='text-3xl font-bold mt-1 text-gray-100'>{item.heading}</h2>

//                             {/* Content Box */}
//                             <div className={` w-[670px] h-40 mt-6 p-6 rounded-lg bg-[#1C1C2D]/90 backdrop-blur-md  text-white leading-7 font-medium text-lg shadow-lg relative z-10 hover:shadow-xl transition-all ${index % 2 === 0 ? 'text-left,' : 'text-right'}`}>
//                                 {item.content}
//                             </div>
//                         </div>

//                     </div>
//                 ))}
//             </div>

//         </div>
//     )
// }

// export default ExampleProject


import React from 'react'
import { useTheme } from '../context/ThemeContext';

const ExampleProject = () => {

    const { isDarkMode } = useTheme();

    const data = [
        {
            id: 1,
            title: 'Featured Project',
            heading: 'Amino Move',
            content: 'Amino Move allows Amino Rewards members to earn FREE $AMO for improving their health and fitness. Claim your spot on the leaderboard by completing 10k steps a day and see how you rank against other Amino members.',
            img: '/example.svg'
        },
        {
            id: 2,
            title: 'Featured Project',
            heading: 'SmartBiz',
            content: 'SmartBiz by Amazon is an online store and website builder that allows businesses to set up their own e-commerce websites quickly. It provides features like integrated shipping, payments, and customizable design themes.',
            img: '/example.svg'
        },
    ]

    return (
        <div id='about' className={`pt-20 px-6 md:px-10 pb-20 relative min-h-screen overflow-hidden transition-colors duration-300
            ${isDarkMode ? 'bg-[#140a26] text-white' : 'bg-gray-50 text-gray-900'}`}>

            <div className='mt-10 md:mt-20 space-y-24 lg:space-y-32'>
                {data.map((item, index) => (
                    <div
                        key={item.id}
                        // LOGIC: Mobile pe Vertical (Column), Laptop (lg) pe Original Horizontal Zig-Zag
                        className={`flex flex-col items-center gap-10 lg:gap-16 w-full justify-center 
                        ${index % 2 === 0 ? 'lg:flex-row-reverse lg:text-left' : 'lg:flex-row lg:text-right'}`}
                    >

                        {/* Image Section */}
                        <div className='relative group w-full flex justify-center lg:block lg:w-auto'>

                            {/* Glow Effect */}
                            <div className="absolute inset-0 blur-3xl bg-purple-700 opacity-20 rounded-full -z-10"></div>

                            {/* Background Blobs - Adjusted for Mobile & Laptop */}
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-purple-900/40 rounded-full blur-[80px] lg:-top-20 lg:blur-[120px]" />
                            <div className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] bg-[rgba(118,60,172,1)] blur-[60px] lg:blur-[80px] rounded-full -z-10 pointer-events-none lg:top-20" />


                            <div className='p-2 rounded-xl backdrop-blur-sm relative'>

                                {/* Border Image: Mobile height (h-48), Laptop original height (h-80) */}
                                <img src="/border.svg" alt="" className='h-48 md:h-64 lg:h-80 rounded-xl mx-auto lg:mx-0' />

                                <img
                                    src={item.img}
                                    alt=""
                                    // LOGIC CHANGE:
                                    // Mobile: Center alignment (mx-auto), small size, adjusted negative margin.
                                    // Laptop (lg:): Bilkul wahi purana code (ml-24, right-16, w-[480px] etc.)
                                    className={`relative rounded-lg object-cover shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] backdrop-blur-3xl
                                    
                                    /* Mobile & Tablet Styles */
                                    -mt-36 w-[280px] h-40 md:-mt-52 md:w-[380px] md:h-[220px] mx-auto

                                    /* Laptop Styles (Original Preserved) */
                                    lg:-mt-72 lg:w-[480px] lg:h-[285px] lg:mx-0
                                    
                                    ${index % 2 === 0
                                            ? 'lg:ml-24'
                                            : 'lg:ml-16 lg:right-16 lg:mr-12'
                                        }`}
                                />
                            </div>
                        </div>

                        {/* Text Section */}
                        <div className={`w-full px-2 md:px-0 lg:max-w-md flex flex-col 
                            ${index % 2 === 0 ? 'items-center lg:items-start' : 'items-center lg:items-end'}`}>

                            <p className={`text-base  font-mono tracking-wider lg:text-lg ${isDarkMode ? 'text-purple-400' : 'text-purple-800'}`}>{item.title}</p>
                            <h2 className={`text-2xl font-bold mt-1  lg:text-3xl
                               ${isDarkMode ? 'text-gray-100' : 'text-gray-800'} `}>{item.heading}</h2>

                            {/* Content Box */}
                            {/* LOGIC: Mobile pe width full aur height auto. Laptop pe fixed width (670px) aur height (h-40). */}
                            <div className={`mt-6 p-6 rounded-lg bg-[#1C1C2D]/90 backdrop-blur-md text-white leading-7 font-medium shadow-lg relative z-10 hover:shadow-xl transition-all 
                                
                                /* Mobile Styles */
                                w-full h-auto text-center text-sm md:text-base

                                /* Laptop Styles */
                                lg:w-[670px] lg:h-40 lg:text-lg

                                ${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'}`}>
                                {item.content}
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default ExampleProject