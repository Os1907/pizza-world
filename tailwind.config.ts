import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        main:"#f46801",
        main2:"#f68634",
        main_shadow:"#f68634",
        body : "#f4f7fe",
        text:"#1c275a",
         text_light :"#a3aed0",
        textBorder:"#dee1e7",
        dark:"#0f0f0f",
        lightDark:"#151515",
      },
      borderRadius:{
        pixel:"28px",
        pixel2xl:"56px",
      },
      fontSize: {
        xs: '12px',
      },
      


      }
  },
  plugins: [],
};
export default config;
