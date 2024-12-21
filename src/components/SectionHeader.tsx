

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
    <div className='flex justify-center'>
          <p className='to-intense-pink bg-gradient-to-r from-medium-pink bg-clip-text text-center font-semibold uppercase tracking-widest text-transparent'>
            {eyebrow}
          </p>
        </div>
        <h2 className='mt-6 text-center font-serif text-3xl md:text-5xl'>
          {title}
        </h2>
        <p className='mx-auto mt-4 max-w-md text-center text-white/60 md:text-lg lg:text-xl'>
          {description}
        </p>
    </>
  )
}

export default SectionHeader
