"use client";
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import { motion } from 'framer-motion';

export const ContactSection = () => {
  return (
    <div
      className='py-16 pt-12 lg:py-24 lg:pt-20'
      id='contact'
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className='container'>
          <div className='relative overflow-hidden rounded-3xl bg-gradient-to-r from-white to-medium-pink px-10 py-8 text-center text-gray-900 md:text-left'>
            <div
              className='absolute inset-0 opacity-5'
              style={{ backgroundImage: `url(${grainImage.src})` }}
            ></div>
            <div className='flex flex-col items-center gap-8 md:flex-row md:gap-16 lg:justify-between'>
              <div>
                <h2 className='font-serif text-2xl md:text-3xl'>
                  Let's build something amazing together
                </h2>
                <p className='mt-2 text-sm md:text-base lg:max-w-md'>
                  Do you like what you see? Let's connect and discuss how I can
                  be a good fit for your team.
                </p>
              </div>
              <div className='z-0 flex flex-col gap-4'>
                <button className='duration-600 inline-flex h-12 w-max items-center gap-2 rounded-xl bg-red-pink/80 px-6 text-light-pink transition hover:bg-red-pink/60'>
                  <a
                    href='mailto:itsadrianapaiva@gmail.com'
                    className='font-semibold'
                  >
                    Contact Me
                  </a>
                  <ArrowUpRightIcon className='size-4' />
                </button>
                <button className='duration-600 inline-flex h-12 w-max items-center gap-2 rounded-xl bg-medium-brown px-6 text-light-pink transition hover:bg-medium-brown/85'>
                  <a
                    href='/resume.pdf'
                    download='Adriana_Paiva_Resume.pdf'
                    className='font-semibold'
                  >
                    My Resume
                  </a>
                  <ArrowUpRightIcon className='size-4' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
