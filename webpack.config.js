const GoogleFontsPlugin = require('google-fonts-plugin')

module.exports = {
  plugins: {
    gfonts: new GoogleFontsPlugin({
      fonts: [
        {
          family: 'Roboto',
          variants: [ 200, 300, 400, 500, 600, 700 ]
        },
        {
          family: 'Nunito',
          variants: [ 200, 300, 400, 500, 600, 700 ]
        },
        {
          family: 'Nunito Sans',
          variants: [ 200, 300, 400, 500, 600, 700 ]
        },
        {
          family: 'Source Sans Pro',
          variants: [ 200, 300, 400, 500, 600, 700 ]
        },
        {
          family: 'Poppins',
          variants: [ 200, 300, 400, 500, 600, 700 ]
        },
      ],
      formats: ['ttf'],
    })
  }
}