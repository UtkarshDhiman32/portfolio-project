// import React from 'react';

// const Experience = () => {
//   // Data for the 4 cards (You can change the text and colors here)
//   const experiences = [
//     {
//       id: 1,
//       title: "CIB on the Mobile",
//       desc: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
//       iconSrc: "/Group1.svg",
//       glowColor: "bg-blue-500/40" // Blue glow
//     },
//     {
//       id: 2,
//       title: "CIB on the Mobile",
//       desc: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
//       iconSrc: "/Group1935.svg", // Replace with your Lightbulb 3D icon
//       glowColor: "bg-pink-500/40" // Pink/Orange glow
//     },
//   ];

//   return (
//     <div className="pt-20  relative min-h-screen bg-[#1a0b2e] text-white overflow-hidden font-sans px-6 md:px-20">

//       {/* SECTION HEADING */}
//       <div className="mb-16">
//         <h2 className="ml-48 text-3xl md:text-4xl font-['Preahvihear'] inline-block  border-white pb-1">
//           Work Experience
//         </h2>
//       </div>

//       {/* CARDS GRID */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//         {experiences.map((item) => (
//           <div
//             key={item.id}
//             className="relative bg-[#2c1250] border border-purple-900/50 rounded-3xl p-8 flex flex-col md:flex-row items-center md:items-start gap-6 hover:bg-[#341a5b] transition-colors duration-300 group"
//           >
//             {/* 1. ICON CONTAINER with GLOW */}
//             <div className="relative shrink-0">
//               {/* Dynamic Glow behind the icon */}
//               <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full blur-2xl ${item.glowColor}`}></div>

//               {/* Icon Image */}
//               <img
//                 src={item.iconSrc}
//                 alt={item.title}
//                 className="relative w-20 h-20 object-contain z-10 drop-shadow-lg"
//               />
//             </div>

//             {/* 2. TEXT CONTENT */}
//             <div className="flex flex-col items-center md:items-start text-center md:text-left">
//               <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
//               <p className="text-gray-400 text-sm leading-relaxed mb-6">
//                 {item.desc}
//               </p>

//               <button className="px-8 py-2.5 bg-[#693B93] hover:bg-[#7a4aa8] text-white text-[10px] font-bold tracking-widest cursor-pointer uppercase rounded-lg transition-colors">
//                 Learn More
//               </button>
//             </div>

//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }

// export default Experience;




// import React from 'react';

// const Experience = () => {
//   // Data for the 4 cards (You can change the text and colors here)
//   const experiences = [
//     {
//       id: 1,
//       title: "CIB on the Mobile",
//       desc: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
//       iconSrc: "/Group1.svg",
//       glowColor: "bg-blue-500/40" // Blue glow
//     },
//     {
//       id: 2,
//       title: "CIB on the Mobile",
//       desc: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
//       iconSrc: "/Group1935.svg", // Replace with your Lightbulb 3D icon
//       glowColor: "bg-pink-500/40" // Pink/Orange glow
//     },
//     // Add more cards here if needed...
//   ];

//   return (
//     <div className="pt-20 relative min-h-screen bg-[#1a0b2e] text-white overflow-hidden font-sans px-6 md:px-20">

//       {/* --- NEW ADDITION: CENTRAL BACKGROUND GLOW EFFECT --- */}
//       {/* यह कार्ड्स के पीछे बीच में एक बड़ा पर्पल ग्लो बनाएगा */}
//       <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-800/20 blur-[150px] rounded-full -z-10 pointer-events-none"></div>


//       {/* SECTION HEADING */}
//       <div className="mb-16 relative z-10">
//         {/* ml-48 हटा दिया है ताकि छोटी स्क्रीन पर हेडिंग कटे नहीं, इसकी जगह text-center या flex यूज़ करें */}
//         <h2 className="text-3xl md:text-4xl font-['Preahvihear'] text-center md:text-left md:ml-48 border-white pb-1">
//           Work Experience
//         </h2>
//       </div>

//       {/* CARDS GRID */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10">
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-900/60 blur-[100px] rounded-full -z-10 pointer-events-none" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-purple-500/40 blur-[80px] rounded-full -z-10 pointer-events-none" />
//         {experiences.map((item) => (
//           <div
//             key={item.id}
//             // --- UPDATED CARD STYLING ---
//             // 1. bg-gradient-to-b... : ऊपर से नीचे ग्रेडिएंट बैकग्राउंड
//             // 2. border-[#563085] : थोड़ा हल्का बॉर्डर कलर
//             // 3. shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] : यह ऊपर की तरफ अंदरूनी चमक (inner highlight) बनाता है
//             className="relative bg-linear-to-b from-[#3a1c5e] to-[#2a0f45] border border-[#563085] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] rounded-3xl p-8 flex flex-col md:flex-row items-center md:items-start gap-6 hover:from-[#452270] hover:to-[#321355] transition-colors duration-300 group"
//           >
//             {/* 1. ICON CONTAINER with GLOW */}
//             <div className="relative shrink-0">
//               {/* Dynamic Glow behind the icon */}
//               <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full blur-2xl ${item.glowColor} opacity-70`}></div>

//               {/* Icon Image */}
//               <img
//                 src={item.iconSrc}
//                 alt={item.title}
//                 className="relative w-20 h-20 object-contain z-10 drop-shadow-lg"
//               />
//             </div>

//             {/* 2. TEXT CONTENT */}
//             <div className="flex flex-col items-center md:items-start text-center md:text-left">
//               <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
//               <p className="text-gray-400 text-sm leading-relaxed mb-6">
//                 {item.desc}
//               </p>

//               <button className="px-8 py-2.5 bg-[#693B93] hover:bg-[#7a4aa8] text-white text-[10px] font-bold tracking-widest cursor-pointer uppercase rounded-lg transition-colors shadow-md">
//                 Learn More
//               </button>

//             </div>

//           </div>

//         ))}
//       </div>

//     </div>
//   );
// }

// export default Experience;


// purana design hai ye shi wala 

// import React from 'react';
// import { useTheme } from '../context/ThemeContext';

// const Experience = () => {
//   const { isDarkMode } = useTheme();

//   const experiences = [
//     {
//       id: 1,
//       title: "CIB on the Mobile",
//       desc: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
//       iconSrc: "/Group1.svg",
//       glowColor: "bg-blue-500/40"
//     },
//     {
//       id: 2,
//       title: "CIB on the Mobile",
//       desc: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
//       iconSrc: "/Group1935.svg",
//       glowColor: "bg-pink-500/40"
//     },
//     // Add more cards here...
//   ];

//   return (
//     <div id='work' className={`pt-20 pb-24 md:pb-32 lg:pb-20 relative min-h-screen  overflow-hidden font-sans px-6 md:px-12 lg:px-20 
//       ${isDarkMode ? 'bg-[#1a0b2e] text-white' : 'bg-gray-50 text-gray-900'}`}>


//       {/* CHANGES MADE HERE (Main Div Class):
//          1. pb-24: Mobile ke liye niche 96px ki jagah di hai taaki card kate nahi.
//          2. md:pb-32: Tablet ke liye aur zyada jagah (128px) di hai.
//          3. lg:pb-20: Laptop ke liye waisa hi rakha hai jaisa pehle tha.
//       */}

//       {/* --- CENTRAL BACKGROUND GLOW --- */}
//       <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-800/20 blur-[150px] rounded-full -z-10 pointer-events-none"></div>

//       {/* SECTION HEADING */}
//       <div className="mb-16 relative z-10">
//         <h2 className="text-3xl md:text-4xl font-['Preahvihear'] text-center md:text-left md:ml-10 lg:ml-48 border-white pb-1">
//           Work Experience
//         </h2>
//       </div>

//       {/* CARDS GRID */}
//       <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10">

//         {/* Background Glows for Grid */}
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-900/60 blur-[100px] rounded-full -z-10 pointer-events-none" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-purple-500/40 blur-[80px] rounded-full -z-10 pointer-events-none" />

//         {experiences.map((item) => (
//           // <div
//           //   key={item.id}
//           //   className="relative bg-linear-to-b from-[#3a1c5e] to-[#2a0f45] border border-[#563085] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] rounded-3xl p-8 flex flex-col md:flex-row items-center md:items-start gap-6 hover:from-[#452270] hover:to-[#321355] transition-colors duration-300 group"
//           // >
//           <div
//             key={item.id}
//             // CHANGE: Card Background Logic Here
//             className={`relative rounded-3xl p-8 flex flex-col md:flex-row items-center md:items-start gap-6 transition-all duration-300 group shadow-lg

//                 ${isDarkMode
//                 ? 'bg-linear-to-b from-[#3a1c5e] to-[#2a0f45] border border-[#563085] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] hover:from-[#452270] hover:to-[#321355]'
//                 : 'bg-white border border-gray-200 hover:shadow-xl hover:-translate-y-1' // Light Mode Style
//               }`}
//           >
//             {/* 1. ICON CONTAINER */}
//             <div className="relative shrink-0">
//               <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full blur-2xl ${item.glowColor} opacity-70`}></div>
//               <img
//                 src={item.iconSrc}
//                 alt={item.title}
//                 className="relative w-20 h-20 object-contain z-10 drop-shadow-lg"
//               />
//             </div>

//             {/* 2. TEXT CONTENT */}
//             <div className="flex flex-col items-center md:items-start text-center md:text-left">
//               <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
//               <p className={` text-sm leading-relaxed mb-6 ${isDarkMode?'text-gray-400':'text-gray-800'}`}>
//                 {item.desc}
//               </p>

//               <button className="px-8 py-2.5 bg-[#693B93] hover:bg-[#7a4aa8] text-white text-[10px] font-bold tracking-widest cursor-pointer uppercase rounded-lg transition-colors shadow-md">
//                 Learn More
//               </button>
//             </div>

//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }

// export default Experience;



import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { MapPin, Calendar, Briefcase, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const { isDarkMode } = useTheme();

  const experiences = [
    {
      id: 1,
      role: "Senior Mobile Developer",
      company: "SoftRadix Technologies",
      period: "May 2021 - Aug 2024",
      location: "Mohali, India",
      logo: "/Group1.svg",
      skills: ["Solo Development", "Team Building", "KMP Expertise"],
      responsibilities: [
        "I utilized Android and Flutter to develop mobile apps. Worked with cross-functional teams to design and implement new features",

        "Provided feedback on code quality during code reviews to ensure adherence to best practices.",

        "Various Android applications, such as Herency, SmartBiz - Logistics, Smartbiz partner app, and Chikasha Keyboard, have been developed and maintained."
      ]
    },
    {
      id: 2,
      role: "Android Developer",
      company: "Doozycod Systems",
      period: "Feb 2019 - April 2021",
      location: "Mohali, India",
      logo: "/Group1.svg",
      skills: ["Solo Development", "Team Building", "KMP Expertise"],
      responsibilities: [
        "Designed and developed native Android applications for a variety of clients, focusing on functionality, usability, and performance.",

        "Collaborated with product managers, designers, and other developers to understand project requirements and translate them into technical specifications and implementation plans.",

      ]
    },
    // Add more...
  ];

  return (
    <div id='work' className={`pt-20 pb-20 relative min-h-screen font-sans px-4 md:px-10 lg:px-20 transition-colors duration-300
            ${isDarkMode ? 'bg-[#1a0b2e] text-white' : 'bg-gray-50 text-gray-900'}`}>

      {/* --- BACKGROUND GLOWS --- */}
      <div className={`absolute top-[20%] left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] blur-[120px] rounded-full pointer-events-none -z-10
                ${isDarkMode ? 'bg-purple-900/40' : 'bg-purple-200/50'}`} />
      <div className={`absolute bottom-[20%] right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] blur-[120px] rounded-full pointer-events-none -z-10
                ${isDarkMode ? 'bg-blue-900/20' : 'bg-blue-200/50'}`} />


      {/* --- HEADING --- */}
      <div className="mb-12 md:mb-16 relative z-10 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left font-['Preahvihear']">
          Work Experience
        </h2>
      </div>


      {/* --- CARDS CONTAINER --- */}
      <div className="space-y-8 md:space-y-10 max-w-7xl mx-auto relative z-10">

        {experiences.map((exp) => (
          <div
            key={exp.id}
            // MOBILE FIX: p-5 (Mobile) -> md:p-10 (Tablet/Laptop)
            className={`rounded-3xl p-5 md:p-10 transition-all duration-300 group
                            ${isDarkMode
                ? 'bg-linear-to-b from-[#3a1c5e] to-[#2a0f45] border border-[#563085] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] hover:from-[#452270] hover:to-[#321355]'
                : 'bg-white border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1'
              }`}
          >
            {/* MOBILE FIX: gap-6 (Kam gap) -> lg:gap-12 (Bada gap) */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">

              {/* === LEFT COLUMN: Role Info === */}
              {/* MOBILE FIX: space-y-4 (Compact) -> lg:space-y-6 (Relaxed) */}
              <div className="w-full lg:w-[35%] space-y-4 lg:space-y-6">
                <div className="flex items-center gap-3 md:gap-4">

                  {/* MOBILE FIX: Logo Size w-12 (Mobile) -> w-14 (Tablet+) */}
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center p-2 shrink-0
                                        ${isDarkMode ? 'bg-white/10 backdrop-blur-sm' : 'bg-gray-50 border border-gray-100'}`}>
                    <img src={exp.logo} alt="Logo" className="w-full h-full object-contain" />
                  </div>

                  <div>
                    {/* MOBILE FIX: Font size text-lg (Mobile) -> text-xl (Tablet+) */}
                    <h3 className="text-lg md:text-xl font-bold leading-tight">{exp.role}</h3>
                    <p className={`text-sm font-semibold mt-0.5 md:mt-1 ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                      {exp.company}
                    </p>
                  </div>
                </div>

                {/* Date & Location */}
                <div className="space-y-2 md:space-y-3">
                  <div className={`flex items-center gap-3 p-2.5 md:p-3 rounded-xl transition-colors
                                        ${isDarkMode ? 'bg-[#2a1454]/50 border border-white/5' : 'bg-gray-100 text-gray-700'}`}>
                    <Calendar size={16} className="text-purple-400 shrink-0 md:w-[18px] md:h-[18px]" />
                    <span className="text-xs md:text-sm font-medium opacity-90">{exp.period}</span>
                  </div>
                  <div className={`flex items-center gap-3 p-2.5 md:p-3 rounded-xl transition-colors
                                        ${isDarkMode ? 'bg-[#2a1454]/50 border border-white/5' : 'bg-gray-100 text-gray-700'}`}>
                    <MapPin size={16} className="text-purple-400 shrink-0 md:w-[18px] md:h-[18px]" />
                    <span className="text-xs md:text-sm font-medium opacity-90">{exp.location}</span>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider mb-2 md:mb-3 flex items-center gap-2 opacity-70">
                    <Briefcase size={14} /> Key Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className={`text-[10px] md:text-[11px] font-bold px-2.5 py-1 md:px-3 md:py-1.5 rounded-full border transition-colors
                                                ${isDarkMode
                          ? 'border-purple-400/30 bg-purple-500/20 text-purple-200'
                          : 'border-purple-200 bg-purple-50 text-purple-700'
                        }`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>


              {/* === RIGHT COLUMN: Responsibilities === */}
              {/* MOBILE FIX: pt-4 border-t (Mobile Separator) -> lg:pl-10 (Laptop Separator) */}
              <div className="w-full lg:w-[65%] border-t lg:border-t-0 lg:border-l border-gray-200/20 pt-5 lg:pt-0 lg:pl-10">
                <h4 className={`text-base md:text-lg font-bold mb-4 md:mb-6 flex items-center gap-2 
                                    ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  <span className="text-purple-500 text-lg md:text-xl">&lt;/&gt;</span>
                  Key Responsibilities
                </h4>

                <ul className="space-y-1">
                  {exp.responsibilities.map((point, index) => (
                    <li key={index}
                      // MOBILE FIX: p-2.5 (Less padding) -> md:p-4 (More padding)
                      className={`flex gap-3 items-start p-2.5 md:p-4 rounded-xl transition-colors duration-500 ease-in-out cursor-default
                                                ${isDarkMode
                          ? 'hover:bg-purple-900/30 hover:border hover:border-purple-500/30 border border-transparent'
                          : 'hover:bg-gray-100 border border-transparent hover:border-gray-200'
                        }`}
                    >
                      <CheckCircle2 size={18} className="text-purple-500 mt-0.5 shrink-0 md:w-5 md:h-5 transition-transform duration-500" />

                      <span className={`text-sm md:text-base leading-relaxed opacity-90 transition-colors duration-500
                                                ${isDarkMode ? 'text-gray-200 group-hover:text-white' : 'text-gray-700 group-hover:text-black'}`}>
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Experience;