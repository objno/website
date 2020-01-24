const theme = {
  colors: {
    black: '#000e1a',
    white: '#fff',
    primary: '#EF422C',
    secondary: '#003399'
  },
  space: [0, '1rem', '1.875rem', 60, 90],
  breakpoints: ['40em', '52em', '64em'],
  containerMaxWidth: '1326px',
  radii: [0, '0.5rem'],
  /**
   * 1 = 12
   * 2 = 14
   * 3 = 16
   * 4 = 18
   * 5 = 22
   * 6 = 24
   * 7 = 28
   */
  fontSizes: [
    '0.75rem', // 12
    '0.875rem', // 14
    '1rem', // 16
    '1.125rem', // 18
    '1.375rem', // 22
    '1.5rem', // 24
    '1.75rem', // 28
  ]
};

theme.colors.background = theme.colors.black;
theme.colors.baseFontColor = theme.colors.white;

theme.mediaQueries = {
  small: `@media screen and (min-width: ${theme.breakpoints[0]})`,
  medium: `@media screen and (min-width: ${theme.breakpoints[1]})`,
  large: `@media screen and (min-width: ${theme.breakpoints[2]})`
};

export default theme;
