"use client";

import { ScrollLink } from "@/components/ScrollLink";

export const Header = () => {
  return (
    <div className='fixed top-3 flex w-full place-content-center z-10'>
      <nav className='flex gap-1 rounded-full border border-white/15 bg-white/10 p-0.5 backdrop-blur'>
        <ScrollLink
          targetId='home'
          className='nav-item'
        >
          Home
        </ScrollLink>
        <ScrollLink
          targetId='projects'
          className='nav-item'
        >
          Projects
        </ScrollLink>
        <ScrollLink
          targetId='about'
          className='nav-item'
        >
          About
        </ScrollLink>
        <ScrollLink
          targetId='contact'
          className='nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900'
        >
          Contact
        </ScrollLink>
      </nav>
    </div>
  );
};
