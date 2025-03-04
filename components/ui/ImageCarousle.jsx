import { motion } from "framer-motion";
import Image from "next/image";

export default function ImageCarousel() {
  const images = [
    "/IBM.png",
    "/CMA.png",
    "/France.png",
    "/Mars.png",
    "/Harvey.png",
    "/Octo.png",
  ];

  // Duplicate the images array three times to ensure smooth infinite loop
  const carouselImages = [...images, ...images, ...images];

  return (
    <div className="relative w-full overflow-hidden h-36 md:h-28 lg:h-36 mb-10 mt-10">
      {/* Gradient Overlays */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/50 to-transparent pointer-events-none z-20" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/50 to-transparent pointer-events-none z-20" />

      {/* Continuous Carousel */}
      <motion.div
        className="flex"
        animate={{
          x: [0, "-33.33%"], // Move by one-third since we have 3 sets of images
        }}
        transition={{
          duration: 5, // Animation duration in seconds
          repeat: Infinity, // Repeat infinitely
          ease: "linear", // Linear movement for smooth scrolling
          repeatType: "loop", // Loop back seamlessly
        }}
      >
        {carouselImages.map((src, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-[200px] h-[100px] md:w-[300px] md:h-[150px] mx-4"
          >
            <Image
              src={src}
              alt={`Carousel image ${index + 1}`}
              layout="fill"
              objectFit="contain"
              className="select-none"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
