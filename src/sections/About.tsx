import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';
import StarIcon from '@/assets/icons/star.svg';
import Image from 'next/image';
import bookCover from '@/assets/images/book.jpg';
import JavaScriptIcon from '@/assets/icons/square-js.svg';
import ReactIcon from '@/assets/icons/react.svg';
import GitHubIcon from '@/assets/icons/github.svg';
import PythonIcon from '@/assets/icons/python.svg';
import MongoDBIcon from '@/assets/icons/mongodb.svg';
import SQLIcon from '@/assets/icons/sql.svg';
import NextIcon from '@/assets/icons/nextjs.svg';
import TailwindIcon from '@/assets/icons/tailwindcss.svg';
import NodeIcon from '@/assets/icons/nodejs.svg';
import GitIcon from '@/assets/icons/gitIcon.svg';
import TypeScriptIcon from '@/assets/icons/typescriptIcon.svg';
import CloudIcon from '@/assets/icons/googlecloud.svg';
import TechIcon from '@/components/TechIcon';
import mapImage from '@/assets/images/map.png';
import myMemoji from '@/assets/images/adriana-avatar-laptop.png';

const toolboxItems = [
  {
    title: 'JavaScript',
    iconType: JavaScriptIcon,
  },
  {
    title: 'TypeScript',
    iconType: TypeScriptIcon,
  },
  {
    title: 'Tailwind CSS',
    iconType: TailwindIcon,
  },
  {
    title: 'Git',
    iconType: GitIcon,
  },
  {
    title: 'GitHub',
    iconType: GitHubIcon,
  },
  {
    title: 'Node.js',
    iconType: NodeIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Next.js',
    iconType: NextIcon,
  },
  {
    title: 'Python',
    iconType: PythonIcon,
  },
  {
    title: 'SQL',
    iconType: SQLIcon,
  },
  {
    title: 'MongoDB',
    iconType: MongoDBIcon,
  },
  {
    title: 'Cloud Services',
    iconType: CloudIcon,
  },
];

const hobbies = [
  {
    title: 'Running',
    emoji: '🏃‍♀️',
  },
  {
    title: 'Family Time',
    emoji: '👨‍👩‍👦',
  },
  {
    title: 'Fashion',
    emoji: '👗 ',
  },
  {
    title: 'Nature',
    emoji: '🍃',
  },
  {
    title: 'Photography',
    emoji: '📸',
  },
  {
    title: 'Journaling',
    emoji: '📓',
  },
  {
    title: 'Traveling',
    emoji: '✈',
  },
];

export const AboutSection = () => {
  return (
    <div className='py-20'>
      <div className='container'>
        <SectionHeader
          eyebrow='About Me'
          title='Glimpse Into My World'
          description='Learn more about who I am, what I do, and what inspires me.'
        />

        <div className='mt-20'>
          <Card className="h-[320px]">
            <div className='flex flex-col'>
              <div className='inline-flex items-center gap-2'>
                <StarIcon className='size-9 text-medium-pink' />
                <h3 className='font-serif text-3xl'>My Reads</h3>
              </div>
              <p className='mt-2 text-sm text-white/60'>
                Explore the books shaping my perspectives.
              </p>
            </div>
            <div className='mx-auto mt-8 w-40'>
              <Image
                src={bookCover}
                alt='Book Cover'
              />
            </div>
          </Card>
          <Card>
            <div>
              <StarIcon />
              <h3>My Toolbox</h3>
              <p>
                Explore the technologies and tools that I use to craft
                exceptional digital experiences.
              </p>
            </div>
            <div>
              {toolboxItems.map((item) => (
                <div key={item.title}>
                  <TechIcon component={item.iconType} />
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <div>
              <StarIcon />
              <h3>Beyond the Code</h3>
              <p>Explore my interests and hobbies beyond the digital realm.</p>
            </div>
            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image
              src={mapImage}
              alt='Map'
            />
            <Image
              src={myMemoji}
              alt='Memoji'
            />
          </Card>
        </div>
      </div>
    </div>
  );
};
