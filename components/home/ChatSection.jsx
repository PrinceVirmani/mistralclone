import { motion } from "framer-motion";
import Image from "next/image";
import ImageCarousel from "../ui/ImageCarousle";
import { ArrowRight } from "lucide-react";

const data = [
  {
    title: "Customizable, from pre-training to the real world.",
    description:
      "World class, benchmark-setting open models to customize, distill, fine-tune, iterate, and build on.",
  },
  {
    title: "Private and portable.",
    description:
      "A comprehensive, enterprise-grade AI platform that can be deployed anywhere—on-premises, cloud, edge, devices, data centers, and more.",
  },
  {
    title: "Transparent and trustworthy.",
    description:
      "Strongest global contributor to open source AI and AI policy. Mistral AI is the world’s greenest and leading independent AI lab.",
  },
  {
    title: "Deeply engaged solutioning and value delivery.",
    description:
      "Hands-on assistance from the world’s best AI engineers and scientists across deployment, solutioning, safety, and beyond.",
  },
  {
    title: "Delightful interfaces.",
    description:
      "Bringing frontier intelligence to life with intuitive user experiences across life and work.",
  },
];

export default function ChatSection() {
  return (
    <div className="flex flex-col items-center justify-center bg-headerbackground p-4 md:p-6 shadow-md gap-4">
      {/* Banner */}
      <div className="w-3/4 bg-mistral-beige-deep md:flex mt-5">
        {/* Left Side - Logo */}
        <div className="md:size-[132px] relative flex flex-col justify-center items-center shrink-0 bg-buttonbg">
          <div className="h-[33px] w-full bg-bar1"></div>
          <div className="h-[33px] w-full bg-bar2"></div>
          <div className="h-[33px] w-full bg-bar3"></div>
          <div className="h-[33px] w-full bg-bar4"></div>
          <div className="h-[33px] w-full bg-bar5"></div>
          <img
            className="size-7/12 absolute"
            src="https://mistral.ai/_next/image?url=%2Fimg%2FM-beige.svg&w=64&q=75&dpl=dpl_8ae8Z5ZvwAyhwSFL1wYbHJ91SHL9"
            alt="logo"
          />
        </div>

        {/* Middle - Text & Buttons */}
        <div className="md:flex justify-between items-center p-6 gap-4 w-full bg-buttonbg">
          <h2 className="text-lg">
            Le Chat: Your AI assistant for life and work.
          </h2>
          <div className="flex mt-8 md:mt-0 justify-center md:justify-end items-center gap-4 mr-28">
            <img
              src="https://mistral.ai/_next/image?url=%2Fimg%2Fappstore.svg&w=128&q=75&dpl=dpl_8ae8Z5ZvwAyhwSFL1wYbHJ91SHL9"
              alt="appstore"
            />
            <img
              src="https://mistral.ai/_next/image?url=%2Fimg%2Fandroidstore.svg&w=128&q=75&dpl=dpl_8ae8Z5ZvwAyhwSFL1wYbHJ91SHL9"
              alt="androidstore"
            />
          </div>
        </div>
      </div>

      {/* Carousel images */}
      <div className="w-3/4">
        <ImageCarousel />
      </div>

      {/* Scrolling Section text up and down*/}
      <div className="w-3/4 mt-10 flex flex-col md:flex-row gap-8">
        {/* Left Column (Sticky Text) */}
        <div className="md:w-1/2 md:sticky md:top-20 self-start">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 mt-10 leading-tight">
            Your AI future belongs in your hands.
          </h1>
        </div>

        {/* Right Column (Data Items) */}
        <div className="md:w-1/2 space-y-8">
          {data.map((item, index) => (
            <div key={index}>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <div className="flex gap-4 items-start text-gray-600">
                <ArrowRight size={24} className="mt-1 text-black" />
                <p className="leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* scroll section  */}

      <div className="w-full mt-8 overflow-hidden text-3xl">
        <motion.div
          className="whitespace-nowrap flex gap-16 text-5xl font-semibold text-gray-800"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Repeat the text twice for seamless looping */}
          <span>
            One Plateform. Many uses. For all humans. One platform. Mistral AI.
          </span>
          <span>
            One Plateform. Many uses. For all humans. One platform. Mistral AI.
          </span>
          <span>
            One Plateform. Many uses. For all humans. One platform. Mistral AI.
          </span>
        </motion.div>
      </div>
    </div>
  );
}
