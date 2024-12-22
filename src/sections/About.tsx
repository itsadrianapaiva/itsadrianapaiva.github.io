import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';
import StarIcon from '@/assets/icons/star.svg';
import Image from 'next/image';
import bookCover from '@/assets/images/book.jpg';

const toolboxItems = [
  {
    title: 'JavaScript',
    icon: '',
  },
  {
    title: 'TypeScript',
    icon: '',
  },
  {
    title: 'Tailwind CSS',
    icon: '',
  },
  {
    title: 'Git',
    icon: '',
  },
  {
    title: 'Node.js',
    icon: '',
  },
  {
    title: 'React',
    icon: '',
  },
  {
    title: 'Next.js',
    icon: '',
  },
  {
    title: 'Python',
    icon: '',
  },

]

export const AboutSection = () => {
  return (
    <div className='pb-96'>
      <SectionHeader
        eyebrow='About Me'
        title='Glimpse Into My World'
        description='Learn more about who I am, what I do, and what inspires me.'
      />

      <div>
        <Card>
          <div>
          <StarIcon />
          <h3>My Reads</h3>
          <p>Explore the books shaping my perspectives.</p>
          </div>
          <Image src={bookCover} alt='Book Cover' />
        </Card>
        <Card>
          <div>
          <StarIcon />
          <h3>My Toolbox</h3>
          <p>Explore the technologies and tools that I use to craft exceptional digital experiences.</p>
          </div>
          <div>

          </div>
        </Card>
      </div>
    </div>
  );
};
