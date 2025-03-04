import { motion } from "framer-motion";

export default function AnimatedText({ text, delay = 0 }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className="gradient-text text-5xl md:text-7xl font-bold"
    >
      {text}
    </motion.div>
  );
}
