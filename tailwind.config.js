module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme:{
      screens: {
        // NEW
        xs: "0px",
        sm: "361px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      colors:{
       moderateviolet:"#7541c8",
       lightviolet:"#a988dd",
       verydarkgrayishblue:"#48556a",
       verydarkishblue:"#19212e",
       lightgray:"#cfcfcf",
       lightgrayishblue:"#ecf2f8",
       white:"#ffffff",
       black:"#000000"
      },
      
    extend: {
      fontFamily: {
        'Barlow':['Barlow Semi Condensed','sans-serif']
     }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
