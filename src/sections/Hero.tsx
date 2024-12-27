"use client";
import adrianaavatar from '@/assets/images/adrianaavatar.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import HeroOrbit from '@/components/HeroOrbit';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <div
      className='relative z-0 py-32 md:py-48 lg:py-60'
      id='home'
    >
      <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
        <div
          className='absolute inset-0 -z-30 overflow-x-clip opacity-5'
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className='hero-ring size-[670px]'></div>
        <div className='hero-ring size-[870px]'></div>
        <div className='hero-ring size-[1070px]'></div>
        <div className='hero-ring size-[1270px]'></div>
        <div className='hero-ring size-[1470px]'></div>

        <HeroOrbit
          size={630}
          rotation={-314}
          shouldOrbit
          orbitDuration='30s'
          shouldSpin
          spinDuration='3s'
        >
          <SparkleIcon className='size-8 text-light-pink/20' />
        </HeroOrbit>

        <HeroOrbit
          size={640}
          rotation={269}
          shouldOrbit
          orbitDuration='32s'
          shouldSpin
          spinDuration='3s'
        >
          <SparkleIcon className='size-5 text-light-pink/20' />
        </HeroOrbit>

        <HeroOrbit
          size={620}
          rotation={-41}
          shouldOrbit
          orbitDuration='16s'
        >
          <div className='size-2 rounded-full bg-light-pink/10' />
        </HeroOrbit>

        <HeroOrbit
          size={680}
          rotation={113}
          shouldOrbit
          orbitDuration='18s'
          shouldSpin
          spinDuration='3s'
        >
          <SparkleIcon className='size-10 text-light-pink/20' />
        </HeroOrbit>

        <HeroOrbit
          size={650}
          rotation={20}
          shouldOrbit
          orbitDuration='40s'
          shouldSpin
          spinDuration='6s'
        >
          <StarIcon className='text-dark-pink size-12' />
        </HeroOrbit>

        <HeroOrbit
          size={700}
          rotation={98}
          shouldOrbit
          orbitDuration='42s'
          shouldSpin
          spinDuration='6s'
        >
          <StarIcon className='text-red-pink size-8' />
        </HeroOrbit>

        <HeroOrbit
          size={650}
          rotation={-5}
          shouldOrbit
          orbitDuration='44s'
        >
          <div className='size-2 rounded-full bg-light-pink/10' />
        </HeroOrbit>

        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration='46s'
          shouldSpin
          spinDuration='3s'
        >
          <SparkleIcon className='size-14 text-light-pink/20' />
        </HeroOrbit>

        <HeroOrbit
          size={720}
          rotation={85}
          shouldOrbit
          orbitDuration='48s'
        >
          <div className='size-3 rounded-full bg-light-pink/10' />
        </HeroOrbit>

        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration='50s'
          shouldSpin
          spinDuration='6s'
        >
          <StarIcon className='size-28 text-burned-orange' />
        </HeroOrbit>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
      <div className='container animation-appear'>
        <div className='flex flex-col items-center'>
          <Image
            src={adrianaavatar}
            className='size-[150px]'
            alt='Woman avatar'
          />
          <div className='border-black-brown bg-black-brown inline-flex items-center gap-4 rounded-lg border px-4 py-1.5'>
            <div className='relative size-2.5 rounded-full bg-green-500'>
              <div className='animate-ping-large absolute inset-0 rounded-full bg-green-500'></div>
            </div>
            <div className='text-sm font-medium'>
              This Software Developer is Available
            </div>
          </div>
        </div>

        <div className='mx-auto max-w-lg'>
          <h1 className='mt-8 text-center font-serif text-3xl tracking-wide md:text-5xl'>
            Undoubtedly Good at Web Solutions
          </h1>
          <p className='mt-4 text-center text-white/60 md:text-lg'>
            Specialized in front-end development using TypeScript, ReactJS and
            NodeJS. Combining my passion for coding and 8 years in the US
            marketing industry to build exceptional user-centered solutions.
          </p>
        </div>

        <div className='mt-8 flex flex-col items-center justify-center gap-4 md:flex-row'>
          <button className='inline-flex h-12 items-center gap-2 rounded-xl border border-light-pink/15 px-6 z-10 hover:bg-light-brown/15 transition duration-600'>
            <a href="#projects" className='font-semibold'>Explore My Work</a>
            <ArrowDown className='size-4' />
          </button>
          <button className='border-dark-pink bg-dark-pink inline-flex h-12 items-center gap-2 rounded-xl border px-6 text-gray-900 z-10 hover:bg-dark-pink/80 transition duration-600'>
            <span>👋</span>
            <a href="#contact" className='font-semibold'>Let&apos;s Connect</a>
          </button>
        </div>
      </div>
      </motion.div>
    </div>
  );
};
