import { motion } from "framer-motion";
import Image from "next/image";

export default function Partners() {
  return (
    <section className="px-6 bg-headerbackground">
      <div className="gap-12 ml-28 items-center mr-28 bg-headerbackground">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="mr-28 flex items-center justify-between w-full bg-parbg p-8">
            <div className="grid grid-cols-1 gap-4">
              <h1>Announcements</h1>
              <p className="text-2xl">
                Announcing the all new le Chat: Your AI assistant for life and
                work.
              </p>
            </div>
            <div className="mt-32">Feb 6, 2025</div>
          </div>
        </motion.div>
      </div>
      <div className="mt-12 flex items-center justify-center relative">
        <img
          src="https://mistral.ai/_next/image?url=https%3A%2F%2Fcms.mistral.ai%2Fassets%2Fb4d6c9c2-98d4-4510-8b78-7ea7b2ac9fec&w=1920&q=75&dpl=dpl_MWC3pmndQQknJs8ULX6wdZNQa5hY"
          alt="img"
          width={1250}
          height={720}
          className="h-auto"
        />
        <div className="absolute text-white mt-52 text-2xl inline-block">
          Build the future of secure, private AI. Now seeking:
          <span className="text-2xl inline-block">
            Insatiably curious AI enthusiasts with an entrepreneurial spirit.
          </span>
        </div>
      </div>
      <h1 className="text-6xl flex items-center justify-center mt-16">
        The next chapter of AI is yours.
      </h1>

      <div className="flex items-center justify-center gap-12 text-2xl mt-10">
        <h1 className="border-b-2 border-black gap-3">
          Start building with Mistral AI
        </h1>
        <h1 className="border-b-2 border-black">Talk to an Expert</h1>
      </div>
    </section>
  );
}
