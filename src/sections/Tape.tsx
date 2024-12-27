import StarIcon from '@/assets/icons/star.svg';
import { Fragment } from 'react';

const words = [
  'Performant',
  'Accessible',
  'Secure',
  'Interactive',
  'Scalable',
  'User Friendly',
  'Responsive',
  'Maintainable',
  'Search Optimized',
  'Usable',
  'Reliable',
];

export const TapeSection = () => {
  return (
    <div className='overflow-x-clip py-16 lg:py-24'>
      <div className='-mx-1 -rotate-3 bg-gradient-to-r from-medium-pink to-red-pink'>
        <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_70%,transparent)]'>
          <div className='animate-move-left flex flex-none gap-4 py-3 pr-4 [animation-duration:30s]'>
            {...new Array(2).fill(0).map((_, index) => (
              <Fragment key={index}>
                {words.map((word) => (
                  <div
                    key={word}
                    className='inline-flex items-center gap-4'
                  >
                    <span className='text-sm font-extrabold uppercase text-gray-900'>
                      {word}
                    </span>
                    <StarIcon className='size-6 animate-spin text-gray-900 [animation-duration:30s]' />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
