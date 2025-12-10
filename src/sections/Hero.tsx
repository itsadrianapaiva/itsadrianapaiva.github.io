'use client';
import adrianaavatar from '@/assets/images/adrianaavatar.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import HeroOrbit from '@/components/HeroOrbit';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import { motion } from 'framer-motion';
import { ScrollLink } from '@/components/ScrollLink';

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
          <StarIcon className='size-12 text-dark-pink' />
        </HeroOrbit>

        <HeroOrbit
          size={700}
          rotation={98}
          shouldOrbit
          orbitDuration='42s'
          shouldSpin
          spinDuration='6s'
        >
          <StarIcon className='size-8 text-red-pink' />
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
        <div className='animation-appear container'>
          <div className='flex flex-col items-center'>
            <Image
              src={adrianaavatar}
              className='size-[150px]'
              alt='Woman avatar'
            />
            <div className='inline-flex items-center gap-4 rounded-lg border border-black-brown bg-black-brown px-4 py-1.5'>
              <div className='relative size-2.5 rounded-full bg-red-700'>
                <div className='absolute inset-0 animate-ping-large rounded-full bg-red-700'></div>
              </div>
              <div className='text-sm font-medium'>
                This Software Engineer is Not Available
              </div>
            </div>
          </div>

          <div className='mx-auto max-w-lg'>
            <h1 className='mt-8 text-center font-serif text-3xl tracking-wide md:text-5xl'>
              Undoubtedly Good at Designing Systems
            </h1>
            <p className='mt-4 text-center text-white/60 md:text-lg'>
              I design and implement backend architectures that power real products, from ecommerce platforms to AI driven solutions. I focus on clean systems, stable deployments, and measurable business impact.
            </p>
            <p className='md:text-normal mt-4 text-center text-white/60'>
              Currently working at Céu Construction Lda.
            </p>
          </div>

          <div className='mt-8 flex flex-col items-center justify-center gap-4 md:flex-row'>
            <ScrollLink
              targetId='projects'
              className='duration-600 z-10 inline-flex h-12 items-center gap-2 rounded-xl border border-light-pink/15 px-6 font-semibold transition hover:bg-light-brown/15'
            >
              Explore My Work
              <ArrowDown className='size-4' />
            </ScrollLink>
            <ScrollLink
              targetId='contact'
              className='duration-600 z-10 inline-flex h-12 items-center gap-2 rounded-xl border border-dark-pink bg-dark-pink px-6 font-semibold text-gray-900 transition hover:bg-dark-pink/80'
            >
              <span>👋</span>
              Let&apos;s Connect
            </ScrollLink>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
