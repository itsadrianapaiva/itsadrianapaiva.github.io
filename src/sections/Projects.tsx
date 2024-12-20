import lightSaasLandingPage from '@/assets/images/light-saas-landing-page.png';
import aiStartupLandingPage from '@/assets/images/ai-startup-landing-page.png';
import dreammakersLandingPage from '@/assets/images/dreammakers-landing-page.png';
import Image from 'next/image';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';

const portfolioProjects = [
  {
    company: 'Independent Consultant',
    year: '2024',
    title: 'Dream Makers Business Landing Page',
    results: [
      { title: 'Enhanced user experience by 40%' },
      { title: 'Improved discoverability by 50%' },
      { title: 'Increased client prospection by 35%' },
    ],
    link: 'https://dreammakersconstruction.ca/',
    image: dreammakersLandingPage,
    stack: [
      { title: 'TypeScript' },
      { title: 'Next.js' },
      { title: 'Tailwind CSS' },
      { title: 'Node.js' },
    ],
  },
  {
    company: 'Independent Consultant',
    year: '2024',
    title: 'Light Saas Landing Page',
    results: [
      { title: 'Boosted sales by 20%' },
      { title: 'Expanded customer reach by 35%' },
      { title: 'Increased brand awareness by 15%' },
    ],
    link: 'https://youtu.be/7hi5zwO75yc',
    image: lightSaasLandingPage,
    stack: [
      { title: 'TypeScript' },
      { title: 'Next.js' },
      { title: 'Tailwind CSS' },
      { title: 'Framer Motion' },
    ],
  },
  {
    company: 'Independent Consultant',
    year: '2024',
    title: 'AI Startup Landing Page',
    results: [
      { title: 'Enhanced user experience by 40%' },
      { title: 'Improved site speed by 50%' },
      { title: 'Increased mobile traffic by 35%' },
    ],
    link: 'https://youtu.be/Z7I5uSRHMHg',
    image: aiStartupLandingPage,
    stack: [
      { title: 'TypeScript' },
      { title: 'React.js' },
      { title: 'Tailwind CSS' },
      { title: 'Cloudinary' },
    ],
  },
];

export const ProjectsSection = () => {
  return (
    <section className='pb-16 lg:py-24'>
      <div className='container'>
        <div className='flex justify-center'>
          <p className='to-intense-pink bg-gradient-to-r from-medium-pink bg-clip-text text-center font-semibold uppercase tracking-widest text-transparent'>
            Real-world Results
          </p>
        </div>
        <h2 className='mt-6 text-center font-serif text-3xl md:text-5xl'>
          Featured Projects
        </h2>
        <p className='mx-auto mt-4 max-w-md text-center text-white/60 md:text-lg lg:text-xl'>
          See how I transformed concepts into modern and engaging digital
          experiences.
        </p>

        <div className='mt-10 flex flex-col gap-20 md:mt-20'>
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="relative z-0 rounded-3xl bg-light-pink/10 px-8 pt-8 after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-3xl after:outline after:outline-2 after:-outline-offset-2 after:outline-light-pink/20 after:content-[''] md:px-10 md:pt-12 lg:pt-16 lg:px-20 overflow-hidden"
            >
              <div
                className='absolute inset-0 -z-10 opacity-5'
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>

              <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
                <div className="lg:pb-16">
                  <div className='to-intense-pink inline-flex gap-2 bg-gradient-to-r from-medium-pink bg-clip-text text-sm font-bold uppercase tracking-wide md:tracking-widest text-transparent md:gap-4'>
                    <span className="">{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className='mt-2 font-serif text-2xl md:mt-5 md:text-4xl'>
                    {project.title}
                  </h3>
                  <hr className='mt-4 border-t-2 border-light-pink/5 md:mt-5' />
                  <ul className='mt-4 flex flex-col gap-4 md:mt-5'>
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className='flex gap-2 text-sm text-white/50 md:text-base'
                      >
                        <CheckCircleIcon className='size-5 md:size-6' />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    target='_blank'
                  >
                    <button className='mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white font-semibold text-gray-950 md:w-auto md:px-6'>
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className='size-4' />
                    </button>
                  </a>
                </div>
                <div className="relative">
                <Image
                  className='-mb-4 mt-8 rounded-tl-2xl rounded-tr-2xl md:-mb-0 md:rounded-tl-3xl md:rounded-tr-3xl lg:mt-0 lg:absolute lg:h-[117%] lg:max-w-none lg:rounded-tr-none lg:rounded-br-3xl lg:w-auto'
                  src={project.image}
                  alt={project.title}
                />
                </div>
              </div>

              <div className='my-7 flex w-[18rem] flex-row flex-wrap items-center justify-start gap-2 md:mt-3 md:w-full lg:col-span-1 lg:w-[25rem] lg:-mt-6'>
                {project.stack.map((stack) => (
                  <span
                    key={stack.title}
                    className='flex-nowrap rounded-full bg-light-pink/10 px-4 py-1 text-xs tracking-tight md:text-sm md:tracking-wide lg:tracking-widest'
                  >
                    {stack.title}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
