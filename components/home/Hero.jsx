import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center text-white px-4 ">
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold mb-12 mt-16"
      >
        Frontier AI. In Your Hands.
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-xl md:text-2xl mb-12 mt-2"
      >
        Configurable AI for all builders.
      </motion.p>

      {/* Chat Input */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="w-full max-w-xl mb-12 relative"
      >
        <input
          type="text"
          placeholder="Talk to le Chat"
          className="w-full px-3 py-3 bg-white text-black placeholder-black/60 border border-white/20 focus:outline-none focus:border-white/40"
        />
        <button className="absolute right-4 top-1/2 -translate-y-1/2">
          {/* <Image
            src="/arrow-right.svg"
            alt="Send"
            width={24}
            height={24}
            className="text-white"
          /> */}
          <div className="bg-orange-600 p-0.5">
            <ArrowRight />
          </div>
        </button>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col md:flex-row gap-10"
      >
        <div className="border-b-2 border-white ">
          <Link
            href="#"
            className="py-3 text-lg border-white/20  transition-colors flex items-center gap-2"
          >
            Enterprise deployments
            {/* <Image
              src="/arrow-right.svg"
              alt=""
              width={16}
              height={16}
              className="text-white"
            /> */}
            <ArrowRight />
          </Link>
        </div>

        <div className="border-b-2 border-white">
          <Link
            href="#"
            className=" py-3 text-lg border-white/20  transition-colors flex items-center gap-2"
          >
            APIs on la Plateforme
            {/* <Image
              src="/arrow-right.svg"
              alt=""
              width={16}
              height={16}
              className="text-white"
            /> */}
            <ArrowRight />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
