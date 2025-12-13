import React from 'react';
import { Twitter, Linkedin, Instagram } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <div id='contact' className={`relative  font-sans py-20 px-6 overflow-hidden transition-colors duration-300
    ${isDarkMode ? 'bg-[#0F051D] text-white' : 'bg-gray-50 text-gray-900'}
`}>

      {/* Container to center content naturally */}
      <div className='max-w-4xl mx-auto space-y-10'>

        {/* Heading */}
        <h2 className='font-normal text-3xl font-[Preahvihear]'>Contact</h2>

        {/* Description */}
        <p className={`font-normal text-lg font-[Preahvihear]  max-w-2xl leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-800'}`}>
          I'm currently looking to join a forward-thinking team to build scalable, high-performance mobile applications. Have a complex project or a team that needs technical leadership? Let's connect.
        </p>

        {/* Email & Socials Section */}
        <div className='space-y-4'>
          <p className='font-normal text-lg font-[Preahvihear] text-white'>
            pranjul.dhiman@gmail.com
          </p>

          {/* Social Icons Row */}
          <div className='flex gap-6 mt-8'>
            {/* Twitter Icon */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#A362FF] transition-colors duration-300"
            >
              <Twitter size={24} />
            </a>

            {/* Optional: LinkedIn */}
            <a
              href="https://www.linkedin.com/in/pranjul-dhiman-031a997a/" target='blank'
              className="hover:text-[#A362FF] transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>

          </div>
        </div>

      </div>

      {/* Optional: Background Glow at the bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />

    </div>
  )
}

export default Footer;