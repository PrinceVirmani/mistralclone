import { motion } from "framer-motion";

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const sectionVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const sections = [
    {
      title: "Why Mistral",
      items: ["About us", "Our customers", "Careers", "Contact us"],
    },
    {
      title: "Explore",
      items: ["AI solutions", "Partners", "Research", "Documentation"],
    },
    {
      title: "Build",
      items: ["La Plateforme", "Le Chat", "Try the API"],
    },
    {
      title: "Legal",
      items: [
        "Terms of Service",
        "Privacy policy",
        "Data processing agreement",
        "Legal notice",
      ],
    },
  ];

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
      className="bg-footerbackground "
    >
      <div className="w-full mt-5 mx-auto bg-#FFF0C2">
        <div className="flex flex-col w-full  mb-8">
          <div className="h-12 w-full bg-footerbackground"></div>
          <div className="h-12 w-full bg-bar1"></div>
          <div className="h-12 w-full bg-bar2"></div>
          <div className="h-12 w-full bg-bar3"></div>
          <div className="h-12 w-full bg-bar4"></div>
          <div className="h-12 w-full bg-bar5"></div>
        </div>

        <div className="grid grid-cols-2">
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0 ml-40">
              {/* image logo */}
              <img
                src="https://mistral.ai/_next/image?url=%2Fimg%2Fappstore.svg&w=128&q=75&dpl=dpl_8ae8Z5ZvwAyhwSFL1wYbHJ91SHL9"
                alt="App Store"
              />
              <img
                src="https://mistral.ai/_next/image?url=%2Fimg%2Fandroidstore.svg&w=128&q=75&dpl=dpl_8ae8Z5ZvwAyhwSFL1wYbHJ91SHL9"
                alt="Google Play"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-12 ml-16 mt-8">
            {sections.map((section, index) => (
              <motion.section
                key={section.title}
                variants={sectionVariants}
                className="space-y-2"
              >
                <h3 className="text-sm font-semibold text-sectiontitle">
                  {section.title}
                </h3>
                <ul className="space-y-1 text-sm">
                  {section.items.map((item) => (
                    <motion.li
                      key={item}
                      whileHover={{ x: 5 }}
                      className="text-black hover:text-gray-900 cursor-pointer transition-colors"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.section>
            ))}
          </div>
          <div className="flex items-center justify-between mb-20 w-full">
            <div className="flex items-center justify-center ml-40">
              Mistral AI © 2025
            </div>
            <div className="flex items-center justify-center gap-10 mr-40">
              <img
                className="size-5"
                src="https://mistral.ai/_next/image?url=https%3A%2F%2Fcms.mistral.ai%2Fassets%2F9c3aec2e-9825-4691-8458-cf4bd48ceff5&w=48&q=75&dpl=dpl_8ae8Z5ZvwAyhwSFL1wYbHJ91SHL9"
                alt="X"
              />
              <img
                className="size-5"
                src="https://mistral.ai/_next/image?url=https%3A%2F%2Fcms.mistral.ai%2Fassets%2Fb68af65f-220d-4116-b522-fe9ab25c7f32&w=48&q=75&dpl=dpl_8ae8Z5ZvwAyhwSFL1wYbHJ91SHL9"
                alt="linekdin"
              />
              <img
                className="size-5"
                src="https://mistral.ai/_next/image?url=https%3A%2F%2Fcms.mistral.ai%2Fassets%2F0f8631ea-bfbc-4075-8f2e-c8f681076d7b&w=48&q=75&dpl=dpl_8ae8Z5ZvwAyhwSFL1wYbHJ91SHL9"
                alt="discord"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
