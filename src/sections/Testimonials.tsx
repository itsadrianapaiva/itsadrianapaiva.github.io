import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import Card from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
   {
    name: "J.R.",
    position: "CEO @ Céu Construction",
    text: "I've been really impressed at Adriana's work on our production system. She is very organized and great at explaning technical decisions to non-technical people. She thinks systematically and her business knowledge was invaluable for the success of the project.",
    avatar: memojiAvatar5,
  },
  {
    name: "Kaitlyn Garcia",
    position: "Sr. Marketing Specialist @ Loud and Live",
    text: "Working with Adriana was a pleasure. Her expertise in software development brought our systems to life in a way we never imagined.",
    avatar: memojiAvatar2,
  },
  {
    name: "Gus Reis",
    position: "CEO @ Dream Makers Construction",
    text: "Adriana's ability to create seamless integrations is unmatched. Our platform has seen a significant increase in conversions since launching. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Pedro Polvora",
    position: "CEO @ P Quatro Construtora",
    text: "Adriana's work on our backoffice has been nothing short of exceptional. She's a talented developer who is also a great communicator. We highly recommend her.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Say About Me"
          description="Don't just take my word for it. See what my clients have to say about my work."
        />

        <div className="-my-4 mt-12 flex overflow-x-clip py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] lg:mt-20">
          <div className="flex flex-none animate-move-left gap-8 pr-8 [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs p-6 transition duration-300 hover:-rotate-3 md:max-w-md md:p-8"
                  >
                    <div className="flex items-center gap-4">
                      <div className="inline-flex size-14 flex-shrink-0 items-center justify-center rounded-full bg-light-pink/40">
                        <Image
                          className="max-h-full"
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm md:mt-6 md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
