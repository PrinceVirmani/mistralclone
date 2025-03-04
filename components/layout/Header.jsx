import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolledPastHero(window.scrollY >= window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (item) => {
    setActiveDropdown(item);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed w-full px-6 py-8 flex justify-between items-center z-50 transition-all duration-300 ${
        isScrolledPastHero
          ? "bg-headerbackground shadow-md text-black"
          : scrollY > 0
          ? "bg-white/10 backdrop-blur-md text-white"
          : "bg-transparent text-white"
      }`}
    >
      <Link href="/" className="relative w-10 h-10 mt-5 ml-24">
        <img
          src="https://mistral.ai/_next/image?url=%2Fimg%2FM-beige.svg&w=64&q=75&dpl=dpl_8ae8Z5ZvwAyhwSFL1wYbHJ91SHL9"
          alt="Mistral AI"
          className="object-contain"
        />
      </Link>

      <div className="hidden md:flex items-center space-x-4 mt-2 mr-16">
        <nav className="hidden md:flex items-center space-x-8">
          {["Products", "Solutions", "Research", "Resources", "Company"].map(
            (item) => (
              <div
                key={item}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="#"
                  className={`hover:opacity-80 transition-colors ${
                    isScrolledPastHero ? "text-black" : "text-white"
                  }`}
                >
                  {item}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-64 bg-white shadow-md py-4 text-black rounded-lg"
                    >
                      <div className="flex flex-col space-y-2 px-4">
                        <h3 className="font-semibold text-gray-700">
                          {item} Section
                        </h3>
                        <Link
                          href="#"
                          className="text-gray-500 hover:text-black"
                        >
                          Subitem 1
                        </Link>
                        <Link
                          href="#"
                          className="text-gray-500 hover:text-black"
                        >
                          Subitem 2
                        </Link>
                        <Link
                          href="#"
                          className="text-gray-500 hover:text-black"
                        >
                          Subitem 3
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          )}
        </nav>
        <Link
          href="#"
          className={`px-4 py-1.5 transition-colors ${
            isScrolledPastHero
              ? "bg-buttonbg/80 text-black hover:bg-buttonbg"
              : "bg-white/20 text-white hover:bg-white hover:text-black"
          }`}
        >
          Le Chat
        </Link>
        <Link
          href="#"
          className={`px-4 py-1.5 transition-colors ${
            isScrolledPastHero
              ? "bg-buttonbg/80 text-black hover:bg-buttonbg"
              : "bg-white/20 text-white hover:bg-white hover:text-black"
          }`}
        >
          Try the API
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden p-2">
        <span
          className={`block w-6 h-0.5 mb-1 transition-all ${
            isScrolledPastHero ? "bg-black" : "bg-white"
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 mb-1 transition-all ${
            isScrolledPastHero ? "bg-black" : "bg-white"
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 transition-all ${
            isScrolledPastHero ? "bg-black" : "bg-white"
          }`}
        ></span>
      </button>
    </motion.header>
  );
}
