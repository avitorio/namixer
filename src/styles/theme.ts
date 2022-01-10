export default {
  grid: {
    container: '137rem',
    gutter: '3.2rem'
  },
  border: {
    radius: {
      small: '0.4rem',
      big: '0.8rem'
    }
  },
  font: {
    family:
      "Source Sans Pro, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      xxxlarge: '3.6rem',
      huge: '5.2rem'
    }
  },
  colors: {
    primary: '#E65A6D',
    primaryColor: {
      primary100: '#E65A6D1A',
      primary200: '#E65A6D33',
      primary300: '#E65A6D4D',
      primary400: '#E65A6D66',
      primary500: '#E65A6D80',
      primary600: '#E65A6D99',
      primary700: '#E65A6DB3',
      primary800: '#E65A6DCC',
      primary900: '#E65A6DE6',
      primary1000: '#E65A6D'
    },
    secondary: '#C9FCC1',
    secondaryColor: {
      secondary100: '#C9FCC11A',
      secondary200: '#C9FCC133',
      secondary300: '#C9FCC14D',
      secondary400: '#C9FCC166',
      secondary500: '#C9FCC180',
      secondary600: '#C9FCC199',
      secondary700: '#C9FCC1B3',
      secondary800: '#C9FCC1CC',
      secondary900: '#C9FCC1E6',
      secondary1000: '#C9FCC1'
    },
    mainBg: '#030517',
    lightBg: '#34C1FF66',
    matisse: '#1F688E',
    white: '#FAFAFA',
    black: '#030517',
    neutral1: '#2C3A4B',
    neutral: {
      white: '#FFFFFF',
      neutral100: '#F4F6F9',
      neutral200: '#EBEEF2',
      neutral300: '#DADEE3',
      neutral400: '#A5ABB3',
      neutral500: '#858C94',
      neutral600: '#6D7580',
      neutral700: '#545D69',
      neutral800: '#394452',
      neutral900: '#2C3A4B',
      black: '#09101D'
    },
    lightGray: '#EAEAEA',
    gray: '#8F8F8F',
    darkGray: '#2E2F42',
    red: '#FF6347',
    success: '#287D3C',
    error: '#DA1414',
    warning: '#B95000'
  },
  accentColors: {
    blue: '#2E8EF7',
    green: '#44cc44',
    orange: '#FFC371',
    pink: '#FF409A',
    purple: '#C341FF'
  },
  gradients: {
    lighterBlue: `linear-gradient(180deg, rgba(54, 200, 255, 0.06) 15.1%, rgba(196, 196, 196, 0) 63.54%)`,
    blue: `linear-gradient(222deg, #36CBFF -1.24%, #2E8EF7 111.42%);`,
    lightBlue: `linear-gradient(109deg, #FFFFFF 0%, #A3DEFD 101.14%);`,
    green: `linear-gradient(213deg, #16B4EB 4.85%, #23E73C 119.17%);`,
    orange: `linear-gradient(135deg, #FF5F6D 2%, #FFC371 100%);`,
    pink: `linear-gradient(136deg, #FF409A 8.34%, #C438EF 95.26%);`,
    purple: `linear-gradient(213.66deg, #8E31FD 4.85%, #C341FF 119.17%);`
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  },
  shadow: {
    fluffy: {
      elevation5: '0 15px 60px #0000001f;'
    }
  }
} as const
