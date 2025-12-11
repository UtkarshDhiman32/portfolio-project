import React from 'react';
import { Twitter, Linkedin, Instagram } from 'lucide-react'; 

const Footer = () => {
  return (
    <div id='contact' className='relative bg-[#0F051D] text-white font-sans py-20 px-6 overflow-hidden'>

      {/* Container to center content naturally */}
      <div className='max-w-4xl mx-auto space-y-10'>

        {/* Heading */}
        <h2 className='font-normal text-3xl font-[Preahvihear]'>Contact</h2>

        {/* Description */}
        <p className='font-normal text-lg font-[Preahvihear] text-gray-400 max-w-2xl leading-relaxed'>
          I'm currently looking to join a cross-functional team that values improving people's lives
          through accessible design. Or have a project in mind? Let's connect.
        </p>

        {/* Email & Socials Section */}
        <div className='space-y-4'>
          <p className='font-normal text-lg font-[Preahvihear] text-white'>
            ibrhaimmemon930@gmail.com
          </p>

          {/* Social Icons Row */}
          <div className='flex gap-6 mt-4'>
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
              href="#"
              className="hover:text-[#A362FF] transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>

            {/* Optional: Instagram */}
            <a
              href="#"
              className="hover:text-[#A362FF] transition-colors duration-300"
            >
              <Instagram size={24} />
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