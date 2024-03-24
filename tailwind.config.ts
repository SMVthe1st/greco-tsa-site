import withMT from "@material-tailwind/react/utils/withMT";
 
module.exports = withMT({
  content: [    
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: "#A2F6BE",
          100: "#6EE195",
          150: "#47B46C",
          200: "#339655",
        },
        white: {
          50: "#F6F6F6"
        },
        black: {
          50: "#16211B"
        }
      }
    },
  },
  plugins: [],
});


