import grainImage from '@/assets/images/grain.jpg';
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

const Card = ({
  className,
  children,
  ...other
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={twMerge(
        className,
        "relative z-0 overflow-hidden rounded-3xl bg-medium-brown after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-3xl after:outline after:outline-2 after:-outline-offset-2 after:outline-light-pink/20 after:content-['']"
      )}
      {...other}
    >
      <div
        className='absolute inset-0 -z-20 opacity-5'
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      {children}
    </div>
  );
};

export default Card;
