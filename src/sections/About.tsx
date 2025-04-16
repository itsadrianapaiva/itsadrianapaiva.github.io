"use client";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import bookCover from "@/assets/images/book.jpg";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import PythonIcon from "@/assets/icons/python.svg";
import MongoDBIcon from "@/assets/icons/mongodb.svg";
import SQLIcon from "@/assets/icons/sql.svg";
import NextIcon from "@/assets/icons/nextjs.svg";
import TailwindIcon from "@/assets/icons/tailwindcss.svg";
import NodeIcon from "@/assets/icons/nodejs.svg";
import GitIcon from "@/assets/icons/gitIcon.svg";
import TypeScriptIcon from "@/assets/icons/typescriptIcon.svg";
import CloudIcon from "@/assets/icons/googlecloud.svg";
import mapImage from "@/assets/images/map.png";
import myMemoji from "@/assets/images/adriana-avatar-laptop.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "TypeScript",
    iconType: TypeScriptIcon,
  },
  {
    title: "Tailwind CSS",
    iconType: TailwindIcon,
  },
  {
    title: "Git",
    iconType: GitIcon,
  },
  {
    title: "GitHub",
    iconType: GitHubIcon,
  },
  {
    title: "Node.js",
    iconType: NodeIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Next.js",
    iconType: NextIcon,
  },
  {
    title: "Python",
    iconType: PythonIcon,
  },
  {
    title: "SQL",
    iconType: SQLIcon,
  },
  {
    title: "MongoDB",
    iconType: MongoDBIcon,
  },
  {
    title: "Cloud Services",
    iconType: CloudIcon,
  },
];

const hobbies = [
  {
    title: "Running",
    emoji: "🏃‍♀️",
    left: "5%",
    top: "5%",
  },
  {
    title: "Family Time",
    emoji: "👨‍👩‍👦",
    left: "50%",
    top: "1%",
  },
  {
    title: "Fashion",
    emoji: "👗",
    left: "58%",
    top: "45%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "1.5%",
    top: "30%",
  },
  {
    title: "Nature",
    emoji: "🍃",
    left: "38%",
    top: "25%",
  },
  {
    title: "Journaling",
    emoji: "📓",
    left: "5%",
    top: "68%",
  },
  {
    title: "K-dramas",
    emoji: "📺",
    left: "3%",
    top: "55%",
  },
  {
    title: "Traveling",
    emoji: "✈",
    left: "45%",
    top: "60%",
  },
  {
    title: "Video Game",
    emoji: "🎮",
    left: "45%",
    top: "80%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <div className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-5 md:gap-8 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="mx-auto mt-2 w-40 md:mt-0">
                <Image
                  src={bookCover}
                  alt="Book Cover"
                  className="h-full w-full translate-y-16 scale-150 object-cover md:translate-y-2 md:scale-110"
                />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools that I use to craft exceptional digital experiences."
              />
              <ToolboxItems
                items={toolboxItems}
                itemsWrapperClassName="animate-move-right [animation-duration:20s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-5 md:gap-8 lg:grid-cols-3">
            <Card className="flex h-[320px] flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Hobbies"
                description="Drag to explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="absolute inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-medium-pink to-intense-pink px-6 py-1.5"
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="w-max font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="relative h-[320px] md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map"
                className="h-full w-full object-cover"
              />
              <div className='absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full after:absolute after:inset-0 after:-translate-y-10 after:rounded-full after:outline after:outline-2 after:-outline-offset-2 after:outline-light-pink/30 after:content-[""]'>
                <div className="absolute -top-[28px] left-[16%] h-[3.5rem] w-[3.5rem] animate-ping rounded-full bg-gradient-to-r from-medium-pink to-intense-pink [animation-duration:2s]"></div>
                <Image
                  src={myMemoji}
                  alt="Memoji"
                  className="size-20 -translate-y-10 rounded-full"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
