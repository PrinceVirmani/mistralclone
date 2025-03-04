// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function GradientBackground({ children }) {
//   return (
//     <motion.div
//       className="relative min-h-screen w-full"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       {/* Background Image */}
//       <Image
//         src="/background.png"
//         alt="Background"
//         fill
//         priority
//         className="object-cover z-0"
//         quality={100}
//       />

//       {/* Overlay for better text readability */}
//       <div className="absolute inset-0 bg-black/30 z-10" />

//       {/* Content */}
//       <div className="relative z-20">{children}</div>
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";
import Image from "next/image";

export default function GradientBackground({ children }) {
  return (
    <motion.div
      className="relative min-h-screen w-full bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Mountain Background */}
      <Image
        src="/background.png"
        alt="Background"
        fill
        priority
        className="object-cover z-0"
        quality={100}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20">{children}</div>
    </motion.div>
  );
}
