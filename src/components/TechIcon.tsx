const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;

  return (
    <>
      <Component className='size-10 fill-[url(#tech-icon-gradient)]' />
      <svg className='absolute size-0'>
        <linearGradient id='tech-icon-gradient'>
          <stop
            offset='0%'
            stopColor='rgb(255, 204, 210)'
          />
          <stop
            offset='100%'
            stopColor='rgb(216, 0, 50)'
          />
        </linearGradient>
      </svg>
    </>
  );
};

export default TechIcon;
