import { motion } from "framer-motion";

export default function AnimatedArrow() {
  return (
    <motion.div
      className="w-6 h-6 text-orange-500"
      animate={{ x: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      →
    </motion.div>
  );
}
