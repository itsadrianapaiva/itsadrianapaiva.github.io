import lightSaasLandingPage from '@/assets/images/light-saas-landing-page.png';
import aiStartupLandingPage from '@/assets/images/ai-startup-landing-page.png';
import dreammakersLandingPage from '@/assets/images/dreammakers-landing-page.png';
import { div } from 'framer-motion/client';
import Image from 'next/image';

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
    <div>
      <div className='container'>
        <div className='flex justify-center'>
          <p className='to-intense-pink bg-gradient-to-r from-medium-pink bg-clip-text text-center font-semibold uppercase tracking-widest text-transparent'>
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6">Featured Projects</h2>
        <p className="text-center text-white/60 mt-4">
          See how I transformed concepts into modern and engaging digital
          experiences.
        </p>
        <div className="flex flex-col mt-10">
          {portfolioProjects.map((project) => (
            <div key={project.title} className="bg-light-pink/10 rounded-3xl relative z-0 after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-light-pink/20">
              <div className="flex">
                <div className="to-intense-pink bg-gradient-to-r from-medium-pink inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
                </div>
              </div>
              <div>
                <h3>{project.title}</h3>
                <hr />
                <ul>
                  {project.results.map((result) => (
                    <li key={result.title}>{result.title}</li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  target='_blank'
                >
                  <button>View Live Site</button>
                </a>

                <Image
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div>
                {project.stack.map((stack) => (
                  <span key={stack.title}>{stack.title}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
