/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.html",
    "./node_modules/flowbite/**/*.js"
  
  ], 
  theme: {
    colors : {
      getir : '#4C3398',
      getir_yazi : '#FFD300',
      getir_hover : '#5D3EBC',
      getir_second  : "#7849f7",
      getir_white : '#DCDCFF',
      campaign_color : "#FAFAFA",
      campaign_bg_color : "#FFFFFF"
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
