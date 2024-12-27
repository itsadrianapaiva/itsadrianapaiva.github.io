"use client";
import { motion } from 'framer-motion';

const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className='flex justify-center'>
          <p className='bg-gradient-to-r from-medium-pink to-intense-pink bg-clip-text text-center font-semibold uppercase tracking-widest text-transparent'>
            {eyebrow}
          </p>
        </div>
        <h2 className='mt-6 text-center font-serif text-3xl md:text-5xl'>
          {title}
        </h2>
        <p className='mx-auto mt-4 max-w-md text-center text-white/60 md:text-lg lg:text-xl'>
          {description}
        </p>
      </motion.div>
    </>
  );
};

export default SectionHeader;
