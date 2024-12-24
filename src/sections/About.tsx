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
import CardHeader from '@/components/CardHeader';
import ToolboxItems from '@/components/ToolboxItems';

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
    left: '5%',
    top: '5%',
  },
  {
    title: 'Family Time',
    emoji: '👨‍👩‍👦',
    left: '50%',
    top: '5%',
  },
  {
    title: 'Fashion',
    emoji: '👗',
    left: '58%',
    top: '45%',
  },
  {
    title: 'Photography',
    emoji: '📸',
    left: '1.5%',
    top: '35%',
  },
  {
    title: 'Nature',
    emoji: '🍃',
    left: '38%',
    top: '25%',
  },
  {
    title: 'Journaling',
    emoji: '📓',
    left: '5%',
    top: '65%',
  },
  {
    title: 'Traveling',
    emoji: '✈',
    left: '45%',
    top: '70%',
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

        <div className='mt-20 flex flex-col gap-8'>
          <Card className='h-[320px] p-6'>
            <CardHeader
              title='My Reads'
              description='Explore the books shaping my perspectives.'
            />
            <div className='mx-auto mt-8 w-40'>
              <Image
                src={bookCover}
                alt='Book Cover'
                className='h-full w-full translate-y-16 scale-150 object-cover'
              />
            </div>
          </Card>
          <Card className='h-[320px]'>
            <CardHeader
              title='My Toolbox'
              description='Explore the technologies and tools that I use to craft exceptional digital experiences.'
              className='px-6 pt-6'
            />
            <ToolboxItems
              items={toolboxItems}
              className='mt-6'
              itemsWrapperClassName='-translate-x-1/2'
            />
            <ToolboxItems
              items={toolboxItems}
              className='mt-6'
            />
          </Card>
          <Card className='flex h-[320px] flex-col'>
            <CardHeader
              title='My Hobbies'
              description='Explore my interests and hobbies beyond the digital realm.'
              className='px-6 py-6'
            />
            <div className='relative flex-1'>
              {hobbies.map((hobby) => (
                <div
                  key={hobby.title}
                  className='to-intense-pink absolute inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-medium-pink px-6 py-1.5'
                  style={{ left: hobby.left, top: hobby.top }}
                >
                  <span className='font-medium text-gray-950'>
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className='relative h-[320px]'>
            <Image
              src={mapImage}
              alt='Map'
              className='h-full w-full object-cover'
            />
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[""] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-light-pink/30 after:-translate-y-10'>
              <Image
                src={myMemoji}
                alt='Memoji'
                className="size-20 rounded-full -translate-y-10"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
