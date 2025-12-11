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




import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "CIB on the Mobile",
      desc: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
      iconSrc: "/Group1.svg",
      glowColor: "bg-blue-500/40"
    },
    {
      id: 2,
      title: "CIB on the Mobile",
      desc: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
      iconSrc: "/Group1935.svg",
      glowColor: "bg-pink-500/40"
    },
    // Add more cards here...
  ];

  return (
    <div className="pt-20 pb-24 md:pb-32 lg:pb-20 relative min-h-screen bg-[#1a0b2e] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20">
      {/* CHANGES MADE HERE (Main Div Class):
         1. pb-24: Mobile ke liye niche 96px ki jagah di hai taaki card kate nahi.
         2. md:pb-32: Tablet ke liye aur zyada jagah (128px) di hai.
         3. lg:pb-20: Laptop ke liye waisa hi rakha hai jaisa pehle tha.
      */}

      {/* --- CENTRAL BACKGROUND GLOW --- */}
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-800/20 blur-[150px] rounded-full -z-10 pointer-events-none"></div>

      {/* SECTION HEADING */}
      <div className="mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl font-['Preahvihear'] text-center md:text-left md:ml-10 lg:ml-48 border-white pb-1">
          Work Experience
        </h2>
      </div>

      {/* CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10">

        {/* Background Glows for Grid */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-900/60 blur-[100px] rounded-full -z-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-purple-500/40 blur-[80px] rounded-full -z-10 pointer-events-none" />

        {experiences.map((item) => (
          <div
            key={item.id}
            className="relative bg-linear-to-b from-[#3a1c5e] to-[#2a0f45] border border-[#563085] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] rounded-3xl p-8 flex flex-col md:flex-row items-center md:items-start gap-6 hover:from-[#452270] hover:to-[#321355] transition-colors duration-300 group"
          >
            {/* 1. ICON CONTAINER */}
            <div className="relative shrink-0">
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full blur-2xl ${item.glowColor} opacity-70`}></div>
              <img
                src={item.iconSrc}
                alt={item.title}
                className="relative w-20 h-20 object-contain z-10 drop-shadow-lg"
              />
            </div>

            {/* 2. TEXT CONTENT */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>

              <button className="px-8 py-2.5 bg-[#693B93] hover:bg-[#7a4aa8] text-white text-[10px] font-bold tracking-widest cursor-pointer uppercase rounded-lg transition-colors shadow-md">
                Learn More
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Experience;