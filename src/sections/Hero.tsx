import adrianaavatar from '@/assets/images/adrianaavatar.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import HeroOrbit from '@/components/HeroOrbit';
import SparkleIcon from '@/assets/icons/sparkle.svg';

export const HeroSection = () => {
  return (
    <div className='relative z-0 py-32 md:py-48 lg:py-60'>
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
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
        size={800}
        rotation={-72}
      >
        <StarIcon className='size-28 text-burned-orange' />
      </HeroOrbit>

      <HeroOrbit
        size={550}
        rotation={20}
      >
        <StarIcon className='size-12 text-dark-pink' />
      </HeroOrbit>

      <HeroOrbit
        size={590}
        rotation={98}
      >
        <StarIcon className='size-8 text-red-pink' />
      </HeroOrbit>

      <HeroOrbit
        size={430}
        rotation={-14}
      >
        <SparkleIcon className='size-8 text-light-pink/20' />
      </HeroOrbit>

      <HeroOrbit
        size={440}
        rotation={79}
      >
        <SparkleIcon className='size-5 text-light-pink/20' />
      </HeroOrbit>

      <HeroOrbit
        size={530}
        rotation={113}
      >
        <SparkleIcon className='size-10 text-light-pink/20' />
      </HeroOrbit>

      <HeroOrbit
        size={710}
        rotation={144}
      >
        <SparkleIcon className='size-14 text-light-pink/20' />
      </HeroOrbit>

      <HeroOrbit
        size={720}
        rotation={85}
      >
        <div className='size-3 bg-light-pink/10 rounded-full' />
      </HeroOrbit>

      <HeroOrbit
        size={520}
        rotation={-41}
      >
        <div className='size-2 bg-light-pink/10 rounded-full' />
      </HeroOrbit>

      <HeroOrbit
        size={650}
        rotation={-5}
      >
        <div className='size-2 bg-light-pink/10 rounded-full' />
      </HeroOrbit>
      </div>

      <div className='container'>
        <div className='flex flex-col items-center'>
          <Image
            src={adrianaavatar}
            className='size-[150px]'
            alt='Woman avatar'
          />
          <div className='inline-flex items-center gap-4 rounded-lg border border-black-brown bg-black-brown px-4 py-1.5'>
            <div className='size-2.5 rounded-full bg-green-500'></div>
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
            Specialized in Frontend Development with TypeScript, ReactJS and NodeJS. Combining my passion for coding and marketing background to build exceptional user-centered solutions. Let&apos;s discuss your next project.
          </p>
        </div>

        <div className='mt-8 flex flex-col items-center justify-center gap-4 md:flex-row'>
          <button className='inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 px-6'>
            <span className='font-semibold'>Explore My Work</span>
            <ArrowDown className='size-4' />
          </button>
          <button className='inline-flex h-12 items-center gap-2 rounded-xl border border-dark-pink bg-dark-pink px-6 text-gray-900'>
            <span>👋</span>
            <span className='font-semibold'>Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
