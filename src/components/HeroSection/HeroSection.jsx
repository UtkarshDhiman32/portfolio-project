// import React from 'react';

// const HeroSection = () => {
//     return (
//         <div className="pt-14 relative min-h-screen bg-[#1a0b2e] text-white overflow-hidden font-sans">

//             {/* 1. BACKGROUND GLOW EFFECT */}
//             {/* This creates that purple blur behind the image */}
//             <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-900/40 rounded-full blur-[120px]" />

//             {/* 2. MAIN CONTAINER */}
//             <div className="relative z-10 container mx-auto px-6 pt-20 flex flex-col items-center">

//                 {/* TOP SECTION: Avatar & Side Text */}
//                 <div className="flex flex-col md:flex-row items-center gap-10 mb-12">

//                     {/* Avatar Image */}


//                     <div className="relative flex justify-center items-center">
//                         {/* "Hello" Annotation Arrow - Optional absolute positioning */}
//                         <div className="absolute -top-12 -right-40 hidden md:block">
//                             <img src="/Arrow.png" alt="" className="pr-32 -mt-8" />
//                             <div className="relative ml-28 -mt-24">
//                                 <span className="text-white font-Preahvihear text-sm rotate-6">
//                                     Hello! I Am{" "}
//                                     <span className="font-bold text-purple-400">Pranjul Dhiman</span>
//                                 </span>
//                             </div>
//                             {/* (You can add an SVG arrow here later) */}
//                         </div>





//                         {/* Purple Glow Effect */}
//                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/60 blur-[100px] rounded-full -z-10 pointer-events-none" />


//                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-purple-500/40 blur-[80px] rounded-full -z-10 pointer-events-none" />

//                         {/* <div className="absolute inset-0 bg-linear-to-b from-purple-600/40 to-transparent blur-3xl -z-10 rounded-full scale-110" /> */}

//                         <img
//                             src="/profile.svg"
//                             alt="Avatar"
//                             className="w-64 h-64 object-contain hover:scale-105 transition-transform duration-300 cursor-pointer relative z-10"
//                         />
//                     </div>




//                     {/* Right Text: "Judges a book..." */}
//                     <div className="max-w-xs text-center md:text-left">
//                         <p className="text-white text-xl font-['Preahvihear'] mb-2 font-medium tracking-wide">
//                             A Designer who
//                             <hr className="w-36 border-white -mt-1.5" />
//                         </p>
//                         <h2 className="text-xl -mt-2 md:text-4xl font-bold leading-tight">
//                             Judges a book <br /> by its <span className="relative inline-block text-purple-400">
//                                 cover...
//                                 {/* Oval shape around 'cover' */}
//                                 <span className="absolute -inset-1 border-2 border-white/50 rounded-[50%] skew-x-[-35deg]" aria-hidden="true"></span>
//                             </span>
//                         </h2>
//                         <p className="text-sm text-white mt-2 whitespace-nowrap">
//                             Because if the cover does not impress you what else can?
//                         </p>
//                     </div>
//                 </div>

//                 {/* BOTTOM SECTION: Main Title & Description */}
//                 <div className="text-start ml-16  max-w-3xl space-y-6">
//                     <h1 className="text-5xl md:text-4xl font-bold tracking-tight">
//                         I'm a Software Engineer.
//                     </h1>

//                     <p className="text-xl md:text-lg font-normal font-['Preahvihear']  -mt-5 text-gray-300 ">
//                         Currently, I'm a Software Engineer at <span className="text-blue-500 font-semibold cursor-pointer">Facebook</span>,
//                     </p>

//                     <p className="text-white font-['Preahvihear']  leading-relaxed max-w-2xl mx-auto">
//                         A self-taught UI/UX designer, functioning in the industry for 3+ years now.
//                         I make meaningful and delightful digital products that create an equilibrium
//                         between user needs and business goals.
//                     </p>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default HeroSection;







// ok hai ye wala code 

// import React from 'react';
// import Lottie from "lottie-react";
// // import heroAnimation from '../../assets/developer.json'
// import mainAnimation from '../../assets/New_Language_Animation.json'
// // import main2 from '../../assets/Web Development Animation.json'
// import developer from '../../assets/ChaiCode.json'

// const HeroSection = () => {
//     return (
//         <div id="home" className="pt-32 relative min-h-screen bg-[#1a0b2e] text-white overflow-hidden font-sans ">

//             {/* 1. BACKGROUND GLOW EFFECT */}
//             {/* Mobile: w-[300px] | Desktop: w-[500px] (Same as before) */}
//             <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-900/40 rounded-full blur-[120px]" />

//             {/* 2. MAIN CONTAINER */}
//             <div className="relative z-10 container mx-auto px-6 pt-10 md:pt-20 flex flex-col items-center">

//                 {/* TOP SECTION: Avatar & Side Text */}
//                 {/* Mobile: Flex-Col (Stack) | Desktop: Flex-Row (Side by Side - Same as before) */}
//                 <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-10 mb-12 w-full">

//                     {/* --- AVATAR IMAGE SECTION --- */}
//                     <div className="relative flex justify-center items-center">

//                         {/* "Hello" Arrow - (Hidden on Mobile to save space, Visible on Desktop) */}
//                         <div className="absolute -top-12 -right-40 hidden md:block">
//                             <img src="/Arrow.png" alt="" className="pr-32 -mt-8" />
//                             <div className="relative ml-28 -mt-24">
//                                 <span className="text-white font-Preahvihear text-sm rotate-6">
//                                     Hello! I Am <span className="font-bold text-purple-400">Pranjul Dhiman</span>
//                                 </span>
//                             </div>
//                         </div>

//                         {/* Glow Effects (Responsive Sizing) */}
//                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-900/60 blur-[100px] rounded-full -z-10 pointer-events-none" />
//                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-purple-500/40 blur-[80px] rounded-full -z-10 pointer-events-none" />


//                         <div className="absolute top-24 -left-10 md:top-60 md:-left-64 w-60 h-60 md:w-[450px] md:h-[450px] pointer-events-none">
//                             <Lottie
//                                 animationData={developer}
//                                 loop={true}
//                                 autoplay={true}
//                             />
//                         </div>
//                         {/* Avatar */}
//                         <img
//                             src="/profile.svg"
//                             alt="Avatar"
//                             className="w-56 h-56 md:w-64 md:h-64 object-contain hover:scale-105 transition-transform duration-300 cursor-pointer relative z-10"
//                         />





//                     </div>

//                     {/* --- RIGHT TEXT: "Judges a book..." --- */}
//                     {/* Mobile: Text Center | Desktop: Text Left (Same as before) */}
//                     <div className="max-w-xs text-center md:text-left">

//                         <div className="text-white text-xl font-['Preahvihear'] mb-2 font-medium tracking-wide">
//                             A Designer who
//                             {/* HR Line: Center on Mobile (mx-auto), Left on Desktop (md:ml-0) */}
//                             <hr className="w-36 border-white -mt-1.5 mx-auto md:ml-0" />
//                         </div>

//                         <h2 className="text-3xl md:text-4xl font-bold leading-tight mt-2 md:mt-0">
//                             Judges a book <br /> by its <span className="relative inline-block text-purple-400">
//                                 cover...
//                                 <span className="absolute -inset-1 border-2 border-white/50 rounded-[50%] skew-x-[-35deg]" aria-hidden="true"></span>
//                             </span>
//                         </h2>

//                         <p className="text-sm text-white mt-4 md:mt-2 whitespace-normal md:whitespace-nowrap">
//                             Because if the cover does not impress you what else can?
//                         </p>
//                     </div>
//                 </div>

//                 {/* --- BOTTOM SECTION: Main Title & Bio --- */}
//                 {/* Mobile Fix: 'text-center' and 'px-4' removed 'ml-16'.
//                     Desktop Fix: 'md:text-left' and 'md:ml-16' (Restores your original Laptop layout)
//                 */}
//                 <div className="w-full text-center md:text-left md:ml-96 max-w-3xl space-y-6">

//                     <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
//                         I'm a Software Engineer.
//                     </h1>

//                     <p className="text-lg md:text-xl font-normal font-['Preahvihear'] -mt-2 md:-mt-5 text-gray-300">
//                         Currently, I'm a Software Engineer at <span className="text-blue-500 font-semibold cursor-pointer">Facebook</span>,
//                     </p>

//                     <p className="text-white font-['Preahvihear'] leading-relaxed max-w-2xl mx-auto md:mx-0">
//                         A self-taught UI/UX designer, functioning in the industry for 3+ years now.
//                         I make meaningful and delightful digital products that create an equilibrium
//                         between user needs and business goals.
//                     </p>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default HeroSection;




import React,{useState,useEffect} from 'react';
import Lottie from "lottie-react";
import developer from '../../assets/ChaiCode.json'
import { useTheme } from '../context/ThemeContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const HeroSection = () => {

    const { isDarkMode } = useTheme();

    const defaultBio = "A Senior Mobile Developer with 5+ years of experience in Flutter & Android. I lead development teams, ensure code quality, and translate complex client requirements into scalable, high-performance applications.";

    const [bio, setBio] = useState(defaultBio);

    useEffect(() => {
        const fetchBio = async () => {
            try {
                // Database path: portfolio_data -> hero_section
                const docRef = doc(db, "portfolio_data", "hero_section");
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    // Agar database me 'bio' field hai to update karo
                    if (data.bio) {
                        setBio(data.bio);
                        console.log("Bio updated from Database ✅");
                    }
                }
            } catch (error) {
                console.error("Error fetching bio, keeping default ❌", error);
            }
        };

        fetchBio();
    }, []);


    return (
        <div id="home" className={`pt-32 relative min-h-screen overflow-hidden font-sans transition-colors duration-300 
            ${isDarkMode ? 'bg-[#1a0b2e] text-white' : 'bg-white text-gray-900'}`}>

            {/* 1. BACKGROUND GLOW EFFECT */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-900/40 rounded-full blur-[120px]" />

            {/* 2. MAIN CONTAINER */}
            <div className="relative z-10 container mx-auto px-6 pt-10 md:pt-20 flex flex-col items-center">

                {/* TOP SECTION: Avatar & Side Text */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-10 mb-12 w-full">

                    {/* --- AVATAR IMAGE SECTION --- */}
                    <div className="relative flex justify-center items-center">

                        {/* "Hello" Arrow (Desktop Only) */}
                        <div className="absolute -top-12 -right-40 hidden md:block">
                            <img src="/Arrow.png" alt="" className="pr-32 -mt-8" />
                            <div className="relative ml-28 -mt-24">
                                <span className="text-white font-Preahvihear text-sm rotate-6">
                                    Hello! I Am <span className="font-bold text-purple-400">Pranjul Dhiman</span>
                                </span>
                            </div>
                        </div>

                        {/* Glow Effects */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-900/60 blur-[100px] rounded-full -z-10 pointer-events-none" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-purple-500/40 blur-[80px] rounded-full -z-10 pointer-events-none" />


                        {/* ========================================================== */}
                        {/* LOTTIE ANIMATION (Responsive Fix) */}
                        {/* Mobile: top-20, left-0, w-48 (Thoda chhota aur center ke paas)
                            Tablet (md): top-40, left-[-100px], w-72 (Side me shift)
                            Laptop (lg/xl): Aapka original logic restore kiya hai
                        */}

                        <div className="absolute pointer-events-none -z-10 opacity-90
                            
                            /* Mobile */
                            -top-28  -right-24 w-64 h-64   

                            /* Tablet */
                            md:top-64 md:-left-24 md:w-80 md:h-80 

                            /* Laptop (Original) */
                            lg:top-60 lg:-left-64 lg:w-[450px] lg:h-[450px] 
                        ">
                            <Lottie
                                animationData={developer}
                                loop={true}
                                autoplay={true}
                            />
                        </div>





                        {/* ========================================================== */}


                        {/* Avatar */}
                        <img
                            src="/profile.svg"
                            alt="Avatar"
                            className="pr-1 w-56 h-56 md:w-64 md:h-64 object-contain hover:scale-105 transition-transform duration-300 cursor-pointer relative z-10"
                        />
                    </div>

                    {/* --- RIGHT TEXT --- */}
                    <div className="max-w-xs text-center md:text-left">
                        <div className={` text-xl font-['Preahvihear'] mb-2 font-medium tracking-wide ${isDarkMode ? 'text-white' : 'text-gray-950'}`}>
                            A Developer who
                            <hr className="w-36 border-white -mt-1.5 mx-auto md:ml-0" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight mt-2 md:mt-0">
                            Builds bridges between <br /> ideas  and  <span className="relative inline-block text-purple-400">
                                reality...
                                <span className="absolute -inset-1 border-2 border-white/50 rounded-[50%] skew-x-[-35deg]" aria-hidden="true"></span>
                            </span>
                        </h2>
                        <p className={`text-sm  mt-4 md:mt-2 whitespace-normal md:whitespace-nowrap ${isDarkMode ? 'text-white' : 'text-gray-950'}`}>
                            Because if the cover does not impress you what else can?
                        </p>
                    </div>
                </div>

                {/* --- BOTTOM SECTION --- */}
                {/* <div className="w-full text-center md:text-left md:ml-96 pb-20 max-w-3xl space-y-6">
                    <h1 className="text-4xl md:text-4xl font-bold tracking-tight">
                        I'm a Software Engineer.
                    </h1>
                    <p className="text-lg md:text-xl font-normal font-['Preahvihear'] -mt-2 md:-mt-5 text-gray-300">
                        Currently, I'm a Software Engineer at <span className="text-blue-500 font-semibold cursor-pointer">Facebook</span>,
                    </p>
                    <p className="text-white font-['Preahvihear'] md:text-sm leading-relaxed max-w-2xl mx-auto md:mx-0">
                        A self-taught UI/UX designer, functioning in the industry for 3+ years now. I make meaningful and delightful digital products that create an equilibrium between user needs and business goals.
                    </p>
                </div> */}


                {/* --- BOTTOM SECTION: Main Title & Bio --- */}
                {/* CHANGE: 'md:ml-96' ko hata kar 'lg:ml-96' kiya. 
    Isse Tablet (md) par text left me rahega aur katega nahi, Laptop (lg) par wahi purani jagah aa jayega. */}
                <div className="w-full  text-center md:text-left  pb-10 max-w-3xl space-y-6">

                    <h1 className="text-4xl md:text-4xl md:pl-64  md:pt-6 font-bold tracking-tight">
                        I'm a Software Engineer.
                    </h1>

                    {/* <p className={`text-lg md:text-xl font-normal md:pl-64 font-['Preahvihear'] -mt-2 md:-mt-5  ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Currently, I'm a Software Engineer at <span className="text-blue-500 font-semibold cursor-pointer">Enfec Solutions</span>,
                    </p> */}

                    {/* Bio Paragraph */}
                    <p className="text-white font-['Preahvihear']  text-sm md:pt-28  md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0 lg:ml-32">
                        {bio}
                    </p>

                </div>


            </div>
        </div>
    );
};

export default HeroSection;