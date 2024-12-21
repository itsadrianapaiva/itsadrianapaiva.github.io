import memojiAvatar1 from '@/assets/images/memoji-avatar-1.png';
import memojiAvatar2 from '@/assets/images/memoji-avatar-2.png';
import memojiAvatar3 from '@/assets/images/memoji-avatar-3.png';
import memojiAvatar4 from '@/assets/images/memoji-avatar-4.png';
import memojiAvatar5 from '@/assets/images/memoji-avatar-5.png';
import SectionHeader from '@/components/SectionHeader';
import Image from 'next/image';
import grainImage from '@/assets/images/grain.jpg';
import Card from '@/components/Card';

const testimonials = [
  {
    name: 'Alex Turner',
    position: 'Marketing Manager @ TechStartups',
    text: "Adriana was instrumental in transforming our website into a powerful marketing tool. Her attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: 'Olivia Green',
    position: 'Head of Design @ GreenLeaf',
    text: 'Working with Adriana was a pleasure. Her expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.',
    avatar: memojiAvatar2,
  },
  {
    name: 'Gus Reis',
    position: 'CEO @ Dream Makers Construction',
    text: "Adriana's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: 'Emily Carter',
    position: 'Product Manager @ GlobalTech',
    text: "Adriana is a true frontend wizard. She took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: 'Michael Brown',
    position: 'Director of IT @ MegaCorp',
    text: "Adriana's work on our website has been nothing short of exceptional. She's a talented developer who is also a great communicator. We highly recommend her.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className='py-16 lg:py-24'>
      <div className='container'>
        <SectionHeader
          eyebrow='Happy Clients'
          title='What Clients Say About Me'
          description="Don't just take my word for it. See what my clients have to say about my work."
        />

        <div className='mt-16 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] lg:mt-24'>
          <div className='flex flex-none gap-8'>
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className='max-w-xs p-6 md:max-w-md md:p-8'
              >
                <div className='flex items-center gap-4'>
                  <div className='inline-flex size-14 flex-shrink-0 items-center justify-center rounded-full bg-light-pink/40'>
                    <Image
                      className='max-h-full'
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                  </div>
                  <div>
                    <div className='font-semibold'>{testimonial.name}</div>
                    <div className='text-sm text-white/40'>
                      {testimonial.position}
                    </div>
                  </div>
                </div>
                <p className='mt-4 text-sm md:mt-6 md:text-base'>
                  {testimonial.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
