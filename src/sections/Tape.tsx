import StarIcon from '@/assets/icons/star.svg';

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
    <div className='py-16 lg:py-24 overflow-x-clip'>
      <div className='to-intense-pink -mx-1 -rotate-3 bg-gradient-to-r from-medium-pink'>
        <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_70%,transparent)]'>
          <div className='flex flex-none gap-4 py-3'>
            {words.map((word) => (
              <div
                key={word}
                className='inline-flex items-center gap-4'
              >
                <span className='text-sm font-extrabold uppercase text-gray-900'>
                  {word}
                </span>
                <StarIcon className='size-6 -rotate-12 text-gray-900' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
