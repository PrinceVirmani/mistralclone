/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        footerbackground: "#FFF0C2",
        bar1: "#FFD900",
        bar2: "#FFAE00",
        bar3: "#FF8205",
        bar4: "#FA520F",
        bar5: "#E00400",
        headerbackground: "#FFFAEB",
        sectiontitle: "#FF8205",
        buttonbg: "#FFF0C2",
        btnbg: "#1F1F1F",
        parbg: "#FFF0C3",
      },
    },
  },
  plugins: [],
};
