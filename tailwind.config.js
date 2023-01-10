module.exports = {
  purge: ["index.html", "./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
        
        // paddedRadius: {
        //   /* The number of spacings to generate */
        //   // numberOfSpacings: 64,
  
        //   /* The spacing that the other spacings are multiples of */
        //   // baseSpacing: "0.25rem",
  
        //   /* A spacigns object to use in place of numberOfSpacings and baseSpacing */
        //   // spacings: { '1': '0.25rem', '2': '0.5rem', '3': '0.75rem' }
  
        //   /* Whether negative versions should be generated */
        //   // generateNegative: false,
        // },

      },
  },
  
  plugins: [
    // Other plugins...
    require('tailwindcss-tables'
    // , 'tailwindcss-padded-radius')({
    //     cellPadding: '.75rem',  // default: .75rem
    //     tableBorderColor: '#dee2e6',  // default: #dee2e6
    //     tableStripedBackgroundColor: 'rgba(0,0,0,.05)',  // default: rgba(0,0,0,.05)
    //     tableHoverBackgroundColor: 'rgba(0,0,0,.075)',  // default: rgba(0,0,0,.075)
    //     tableBodyBorder: true, // default: true. If set to false, borders for the table body will be removed. Only works for normal tables (i.e. does not apply to .table-bordered)
    //     verticalAlign: 'top', // default: 'top'


    // }

    ),
    
  ],
  variants: {
    borderRadius: ["responsive"
    
    // , "paddedRadius"
  ],
  },
};
