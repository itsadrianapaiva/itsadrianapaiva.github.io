import dreammakersLandingPage from '@/assets/images/dreammakers-landing-page.png';
import Image from 'next/image';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import portfolioCodeImage from '@/assets/images/portfolioCodeImage.png';
import pquatro from '@/assets/images/pquatro.png';
import bravera from '@/assets/images/bravera.png';
import amr from '@/assets/images/amr.png';
import ceuconstruction from '@/assets/images/ceuconstruction.png';

interface PortfolioProjects {
  company: string;
  year: string;
  title: string;
  results: { title: string }[];
  link?: string;
  image?: any;
  stack: { title: string }[];
}

const portfolioProjects: PortfolioProjects[] = [
  {
    company: 'AMR Machinery Rental',
    year: '2025',
    title: 'Production Platform',
    results: [
      { title: 'Reduced manual admin work by 40%' },
      {
        title:
          'Reduced release time by ~50%',
      },
      {
        title:
          'Reduced production defects by ~30%',
      },
    ],
    link: 'https://amr-rentals.com',
    image: amr,
    stack: [
      { title: 'TypeScript' },
      { title: 'Node.js' },
      { title: 'PostgreSQL' },
      { title: 'Stripe API' },
    ],
  },
  {
    company: 'Céu Construction',
    year: '2025',
    title: 'Business Platform',
    results: [
      { title: 'Supported zero-downtime deployments' },
      { title: 'Reduced manual lead qualification time by 30%' },
    ],
    link: 'https://ceuconstruction.com',
    image: ceuconstruction,
    stack: [
      { title: 'TypeScript' },
      { title: 'Node.js' },
      { title: 'Github Actions' },
      { title: 'Netlify' },
    ],
  },
  {
    company: 'Bravera Creative',
    year: '2025',
    title: 'Marketing Agency Platform',
    results: [    ],
    link: 'https://braveracreative.com',
    image: bravera,
    stack: [
      { title: 'TypeScript' },
      { title: 'Supabase' },
      { title: 'Node.js' },
      { title: 'Resend' },
    ],
  },
  {
    company: 'P Quatro Construtora',
    year: '2024',
    title: 'Business Platform',
    results: [
    
    ],
    link: 'https://pquatroconstrutora.netlify.app',
    image: pquatro,
    stack: [
      { title: 'JavaScript' },
      { title: 'Next.js' },
    ],
  },
  {
    company: 'Dream Makers Construction',
    year: '2024',
    title: 'Business Platform',
    results: [
    ],
    link: 'https://dreammakersconstruction.ca/',
    image: dreammakersLandingPage,
    stack: [
      { title: 'TypeScript' },
      { title: 'Node.js' },
      { title: 'Cloudinary' },
    ],
  },
];

export const ProjectsSection = () => {
  return (
    <section
      className='pb-16 lg:py-24'
      id='projects'
    >
      <div className='container relative h-full'>
        <SectionHeader
          eyebrow='Real-world Results'
          title='Featured Projects'
          description='See how I transformed concepts into seamless integrations.'
        />

        <div className='mt-10 flex flex-col gap-20 md:mt-20'>
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className='px-8 pt-8 md:px-10 md:pt-12 lg:px-20 lg:pt-16'
              style={{
                position: 'sticky',
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
                <div className='lg:pb-16'>
                  <div className='inline-flex gap-2 bg-gradient-to-r from-medium-pink to-intense-pink bg-clip-text text-sm font-bold uppercase tracking-wide text-transparent md:gap-4 md:tracking-widest'>
                    <span className=''>{project.company}</span>
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
                  {project.link && (
                    <a
                      href={project.link}
                      target='_blank'
                    >
                      <button className='duration-600 mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white font-semibold text-gray-950 transition hover:bg-white/90 md:w-auto md:px-6'>
                        <span>Visit site</span>
                        <ArrowUpRightIcon className='size-4' />
                      </button>
                    </a>
                  )}
                </div>
                <div className='relative'>
                  {project.image && (
                    <Image
                      className='-mb-4 mt-8 rounded-tl-2xl rounded-tr-2xl md:-mb-0 md:rounded-tl-3xl md:rounded-tr-3xl lg:absolute lg:mt-0 lg:h-[117%] lg:w-auto lg:max-w-none lg:rounded-br-3xl lg:rounded-tr-none'
                      src={project.image}
                      alt={project.title}
                    />
                  )}
                </div>
              </div>

              <div className='my-7 flex w-[18rem] flex-row flex-wrap items-center justify-start gap-2 md:mt-3 md:w-full lg:col-span-1 lg:-mt-6 lg:w-[25rem]'>
                {project.stack.map((stack) => (
                  <span
                    key={stack.title}
                    className='flex-nowrap rounded-full bg-light-pink/10 px-4 py-1 text-xs tracking-tight md:text-sm md:tracking-wide lg:tracking-widest'
                  >
                    {stack.title}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
