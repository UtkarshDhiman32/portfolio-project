import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Skills = () => {
    const { isDarkMode } = useTheme();


    // 1. Top Static Icons (Tree Structure)
    const treeIcons = [
        { name: 'Android', src: '/icons/android-green.png' },
        { name: 'Flutter', src: '/icons/flutter.svg' },
        { name: 'Kotlin', src: '/icons/kotlin.svg' },
        { name: 'Java', src: '/icons/java.svg' },
        { name: 'Dart', src: '/icons/dart.svg' },
        { name: 'Github', src: '/icons/github.svg' },

    ];

    // 2. Orbiting Icons
    const ringIcons = [
        { name: 'AI', src: '/icons/linkedin.svg', deg: '0deg' },
        { name: 'Agentic', src: '/icons/google.svg', deg: '72deg' },
        { name: 'Optimization', src: '/icons/ai.svg', deg: '144deg' },
        { name: 'android', src: '/RingIcons/icons8-android.svg', deg: '216deg' },
        { name: 'dart', src: '/RingIcons/icons8-dart.svg', deg: '80deg' },
        { name: 'flutter', src: '/RingIcons/icons8-flutter.svg', deg: '288deg' },
        { name: 'github', src: '/RingIcons/icons8-github.svg', deg: '288deg' },
        { name: 'java', src: '/RingIcons/icons8-java-50.png', deg: '288deg' },
        { name: 'kotlin', src: '/RingIcons/icons8-kotlin.svg', deg: '288deg' },


        // { name: 'Clean Arch', src: '/icons/peacock.svg', deg: '216deg' },
        // { name: 'Css', src: '/icons/css.svg', deg: '80deg' },
        // { name: 'Js', src: '/icons/js.svg', deg: '288deg' },
        // { name: 'Bracket', src: '/icons/bracket.svg', deg: '288deg' },
        // { name: 'React', src: '/icons/react.svg', deg: '288deg' },
        // { name: 'xd', src: '/icons/xd.svg', deg: '288deg' },
        // { name: 'js2', src: '/icons/js2.svg', deg: '288deg' },
        // { name: 'figma', src: '/icons/figma.svg', deg: '288deg' },
    ];

    return (
        <div className={`relative min-h-screen  font-sans pt-20 px-4 overflow-hidden flex flex-col items-center ${isDarkMode ? 'bg-[#0F051D] text-white' : 'bg-gray-50 text-gray-900'}`}>

            {/* HEADER */}
            <div className="text-center max-w-3xl mx-auto space-y-2 mb-10 relative z-30">
                <h2 className="text-2xl md:text-4xl font-bold">
                    I'm currently looking to join a <span className="text-[#A362FF] font-['Preahvihear']">cross-functional</span> team
                </h2>
                <p className="text-gray-400 text-sm md:text-base">
                    Senior Mobile Developer specializing in App Optimization & AI Integration
                </p>
            </div>

            {/* MAIN CONTAINER */}
            <div className="relative w-full max-w-5xl h-[800px] flex flex-col items-center">

                {/* --- 1. STATIC ICONS (Top Tree) --- */}
                <div className="relative z-20 grid grid-cols-6 gap-x-4 gap-y-6 md:gap-x-8 w-full max-w-3xl place-items-center">
                    {treeIcons.map((icon, i) => (
                        <div key={i} className="relative group w-12 h-12 md:w-16 md:h-16 bg-[#1E0B36] rounded-full flex items-center justify-center border border-purple-500/20 shadow-lg hover:scale-110 hover:border-purple-400 transition-all duration-300 cursor-pointer">
                            <img src={icon.src} alt={icon.name} className="w-8 h-8 object-contain" />
                        </div>
                    ))}
                </div>

                {/* --- 2. CONNECTING LINES (SVG) --- */}

                {/* <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1000 800" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#8B5CF6', stopOpacity: 0.5 }} />
                            <stop offset="90%" style={{ stopColor: '#A855F7', stopOpacity: 0.8 }} />
                            <stop offset="100%" style={{ stopColor: '#A855F7', stopOpacity: 0 }} />
                        </linearGradient>
                    </defs>

                    {/* Lines */}
                <path d="M180 60 Q 500 400 500 550" stroke="url(#grad1)" strokeWidth="1.5" fill="none" opacity="0.6" />
                <path d="M310 60 Q 500 400 500 550" stroke="url(#grad1)" strokeWidth="1.5" fill="none" opacity="0.6" />
                <path d="M430 60 Q 500 400 500 550" stroke="url(#grad1)" strokeWidth="1.5" fill="none" opacity="0.6" />
                <path d="M560 60 Q 500 400 500 550" stroke="url(#grad1)" strokeWidth="1.5" fill="none" opacity="0.6" />
                <path d="M690 60 Q 500 400 500 550" stroke="url(#grad1)" strokeWidth="1.5" fill="none" opacity="0.6" />
                <path d="M820 60 Q 500 400 500 550" stroke="url(#grad1)" strokeWidth="1.5" fill="none" opacity="0.6" />


                {/* </svg> */}



                {/* ================= MOBILE SVG (Sirf Mobile pe dikhega) ================= */}
                {/* Iska viewBox maine 400x800 kiya hai taaki ye vertical screen pe fit aaye */}
                {/* <svg className="absolute top-0 left-0 w-full h-full md:hidden pointer-events-none z-10" viewBox="0 0 400 800" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <linearGradient id="gradMobile" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#8B5CF6', stopOpacity: 0.5 }} />
                            <stop offset="90%" style={{ stopColor: '#A855F7', stopOpacity: 0.8 }} />
                            <stop offset="100%" style={{ stopColor: '#A855F7', stopOpacity: 0 }} />
                        </linearGradient>
                    </defs>

                    {/* Lines (Mobile Coordinates: Start points 50-350, Converge at 200) */}
                <path d="M80 50 Q 200 400 200 550" stroke="url(#gradMobile)" strokeWidth="2" fill="none" opacity="0.6" />
                <path d="M130 50 Q 200 400 200 550" stroke="url(#gradMobile)" strokeWidth="2" fill="none" opacity="0.6" />
                <path d="M175 50 Q 200 400 200 550" stroke="url(#gradMobile)" strokeWidth="2" fill="none" opacity="0.6" />
                <path d="M225 50 Q 200 400 200 550" stroke="url(#gradMobile)" strokeWidth="2" fill="none" opacity="0.6" />
                <path d="M270 50 Q 200 400 200 550" stroke="url(#gradMobile)" strokeWidth="2" fill="none" opacity="0.6" />
                <path d="M320 50 Q 200 400 200 550" stroke="url(#gradMobile)" strokeWidth="2" fill="none" opacity="0.6" />
                {/* </svg>  */}




                {/* ================= MOBILE SVG (Optimized for ALL Phone Sizes) ================= */}
                <svg
                    className="absolute top-0 left-0 w-full h-full md:hidden pointer-events-none z-10"
                    viewBox="0 0 600 800"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient id="gradMobile" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#8B5CF6', stopOpacity: 0.5 }} />
                            <stop offset="90%" style={{ stopColor: '#A855F7', stopOpacity: 0.8 }} />
                            <stop offset="100%" style={{ stopColor: '#A855F7', stopOpacity: 0 }} />
                        </linearGradient>
                    </defs>

                    {/* Logic: ViewBox Width = 600. Center = 300.
       Icons are usually centered. So we avoid the edges (0 and 600).
       Start Points are distributed nicely between 10% and 90% of width.
       
       Line 1: 15% (X=90)
       Line 2: 29% (X=174)
       Line 3: 43% (X=258)
       Line 4: 57% (X=342)
       Line 5: 71% (X=426)
       Line 6: 85% (X=510)
    */}

                    {/* Line 1 (Far Left) */}
                    <path d="M55 50 Q 300 450 300 550" stroke="url(#gradMobile)" strokeWidth="3" fill="none" opacity="0.6" />

                    {/* Line 2 */}
                    <path d="M150 50 Q 300 450 300 550" stroke="url(#gradMobile)" strokeWidth="3" fill="none" opacity="0.6" />

                    {/* Line 3 (Near Left) */}
                    <path d="M250 50 Q 300 450 300 550" stroke="url(#gradMobile)" strokeWidth="3" fill="none" opacity="0.6" />

                    {/* Line 4 (Near Right) */}
                    <path d="M350 50 Q 300 450 300 550" stroke="url(#gradMobile)" strokeWidth="3" fill="none" opacity="0.6" />

                    {/* Line 5 */}
                    <path d="M450 50 Q 300 450 300 550" stroke="url(#gradMobile)" strokeWidth="3" fill="none" opacity="0.6" />

                    {/* Line 6 (Far Right) */}
                    <path d="M550 50 Q 300 450 300 550" stroke="url(#gradMobile)" strokeWidth="3" fill="none" opacity="0.6" />

                </svg>




                {/* ================= DESKTOP/TABLET SVG (Mobile pe hidden) ================= */}
                {/* Ye aapka ORIGINAL code hai, badi screens ke liye */}
                <svg className="hidden md:block absolute top-0 left-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1000 800" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <linearGradient id="gradDesktop" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#8B5CF6', stopOpacity: 0.5 }} />
                            <stop offset="90%" style={{ stopColor: '#A855F7', stopOpacity: 0.8 }} />
                            <stop offset="100%" style={{ stopColor: '#A855F7', stopOpacity: 0 }} />
                        </linearGradient>
                    </defs>

                    <path d="M180 60 Q 500 400 500 550" stroke="url(#gradDesktop)" strokeWidth="1.5" fill="none" opacity="0.6" />
                    <path d="M310 60 Q 500 400 500 550" stroke="url(#gradDesktop)" strokeWidth="1.5" fill="none" opacity="0.6" />
                    <path d="M430 60 Q 500 400 500 550" stroke="url(#gradDesktop)" strokeWidth="1.5" fill="none" opacity="0.6" />
                    <path d="M560 60 Q 500 400 500 550" stroke="url(#gradDesktop)" strokeWidth="1.5" fill="none" opacity="0.6" />
                    <path d="M690 60 Q 500 400 500 550" stroke="url(#gradDesktop)" strokeWidth="1.5" fill="none" opacity="0.6" />
                    <path d="M820 60 Q 500 400 500 550" stroke="url(#gradDesktop)" strokeWidth="1.5" fill="none" opacity="0.6" />
                </svg>

                {/* --- 3. UNIVERSE SECTION (Rotating Part) --- */}


                <div className="pt-16 absolute top-80 left-0 w-full h-[500px] flex justify-center items-center overflow-hidden">

                    {/* --- RESPONSIVE WRAPPER --- 
        Mobile pe size 60% (0.6) rahega, Tablet/Desktop pe 100% (1.0).
        Isse tumhara 270px radius mobile pe automatically adjust ho jayega.
    */}
                    <div className="relative flex justify-center items-center scale-[0.6] sm:scale-[0.75] md:scale-100 transition-transform duration-500">

                        {/* Background Glow */}
                        <div className="absolute w-[450px] h-[450px] bg-purple-600/20 rounded-full blur-[100px] -z-10"></div>

                        {/* TILT CONTAINER */}
                        <div className="relative w-[550px] h-[550px] flex justify-center items-center"
                            style={{ transform: 'rotateX(75deg)', transformStyle: 'preserve-3d' }}>

                            {/* SPINNING RING */}
                            <div className="absolute w-full h-full rounded-full border border-purple-500/40 animate-[spin_25s_linear_infinite] shadow-[0_0_30px_rgba(168,85,247,0.2)_inset]"
                                style={{ transformStyle: 'preserve-3d' }}>

                                {/* Icons on the Ring */}
                                {ringIcons.map((icon, i) => {
                                    const angle = (360 / ringIcons.length) * i;

                                    return (
                                        <div key={i}
                                            className="absolute w-12 h-12 md:w-10 md:h-10 flex items-center justify-center" // Mobile pe touch target thoda bada rakha hai
                                            style={{
                                                top: '50%', left: '50%',
                                                transform: `rotate(${angle}deg) translate(270px) rotate(-${angle}deg)`,
                                                transformStyle: 'preserve-3d'
                                            }}
                                        >
                                            {/* Counter Rotation for Icons */}
                                            <div className="w-full h-full flex items-center justify-center animate-[spin_25s_linear_infinite_reverse]"
                                                style={{ transform: 'rotateX(-75deg)' }}>
                                                <img src={icon.src} alt={icon.name} className="w-full h-full object-contain drop-shadow-[0_0_5px_rgba(168,85,247,0.5)]" />
                                            </div>
                                        </div>
                                    );
                                })}

                            </div>

                            {/* Static Inner Rings */}
                            <div className="absolute w-[70%] h-[70%] border border-purple-500/20 rounded-full"></div>
                            <div className="absolute w-[40%] h-[40%] border border-purple-500/10 rounded-full"></div>
                        </div>

                        {/* CENTRAL HUB (Sigma) */}
                        <div className="absolute z-30 w-28 h-28 bg-[#2A1255] rounded-full border-4 border-purple-500/30 shadow-[0_0_60px_#A855F7] flex items-center justify-center">
                            <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-pulse"></div>
                            <div className="text-5xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,1)]">
                                &Sigma;
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;