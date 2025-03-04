"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Get work done.",
      description:
        "Your personalized multilingual AI assistant, with web search, uploads, and data connectors.",
      btndesc: "Discover le Chat",
    },
    {
      title: "Code faster.",
      description: "Build faster with coding assistance across 80+ languages.",
      btndesc: "Code with le Chat",
    },
    {
      title: "Build AI-powered apps.",
      description: "Build and deploy custom AI solutions with frontier models.",
      btndesc: "Discover la Plateforme",
    },
  ];

  return (
    <section className="py-20 px-6 bg-headerbackground relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>

      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16 max-w-2xl flex flex-col items-center relative z-10"
        >
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-5xl mb-10 mt-10 inline-block">
              {feature.title}
            </h2>
            <p className="mb-20 text-2xl inline-block">{feature.description}</p>
            <button className="border bg-btnbg text-white p-2 flex gap-2 items-center">
              {feature.btndesc} <ArrowRight />
            </button>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
