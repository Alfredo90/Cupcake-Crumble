const values  = {
  "0": "0",
  "1": "1px",
  "2": "2px",
  "3": "3px",
  "4": "4px",
  "5": "5px",
  "6": "6px",
  "8": "8px",
  "10": "10px",
  "12": "12px",
  "14": "14px",
  "16": "16px",
  "18": "18px",
  "20": "20px",
  "24": "24px",
  "30": "30px",
  "32": "32px",
  "36": "36px",
  "38": "38px",
  "40": "40px",
  "48": "48px",
  "56": "56px",
  "64": "64px",
  "70": "70px",
  "80": "80px",
  "96": "96px",
  "100": "100px",
  "128": "128px",
  "136": "136px",
  "140": "140px",
  "150": "150px",
  "160": "160px",
  "175": "175px",
  "192": "192px",
  "200": "200px",
  "210": "210px",
  "250": "250px",
  "256": "256px",
  "262": "262px",
  "300": "300px",
  "335": "335px",
  "338": "338px",
  "350": "350px",
  "384": "384px",
  "390": "390px",
  "400": "400px",
  "420": "420px",
  "480": "480px",
  "500": "500px",
  "513": "513px",
  "560": "560px",
  "576": "576px",
  "600": "600px",
  "640": "640px",
  "675": "675px",
  "768": "768px",
  "half": "50%",
  "full": "100%",
  "100vw": "100vw",
  "100vh": "100vh"
}
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./src/**/**/*.js', './public/index.html'],
  theme: {
    theme: {
      screens: {
        'sm': '390px',
        // => @media (min-width: 576px) { ... }
  
        'md': '960px',
        // => @media (min-width: 960px) { ... }
  
        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      amber: colors.amber,
      black: colors.black,
      slate: colors.slate,
      white: colors.white,
      gray: colors.gray,
      green: colors.emerald,
      blue: colors.blue,
      cyan: colors.cyan,
      indigo: colors.indigo,
      teal: colors.teal,
      yellow: colors.yellow,
      violet: colors.violet,
      pink: colors.pink,
      purple: colors.purple,
      orange: colors.orange,
      sky: colors.sky,
      fuchisa: colors.fuchsia,
      rose: colors.rose
    },
    extend: {
      fontFamily: {
        'proxima-nova': ["Proxima Nova"],
        'salt': ['Rock salt', 'cursive'], 
        'lily': ['Lily Script One', 'cursive'],
        'ceviche': ['Ceviche One' ],              
      },
      width: values,
      height: values,
      borderRadius: {
        "5": "5px",
        "10": "10px",
        "20": "20px",
        "50%": "50%",
        "full": "9999px"
      },
      spacing: values,
      fontSize:values
    },
    backgroundImage: {
      'pic-one': "url('/src/assets/pics/pictureone.jpg')",
      'pic-two': "url('/src/assets/pics/picturetwo.jpg')",
      'pic-three': "url('/src/assets/pics/picturethree.jpg')",

    }
   
  },
  plugins: [],
}