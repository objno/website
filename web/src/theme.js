const theme = {
  colors: {
    black: '#000e1a',
    white: '#fff',
    primary: '#EF422C',
    secondary: '#003399'
  },
  space: [0, '1.875rem', 60, 90],
  breakpoints: ['40em', '52em', '64em'],
  containerMaxWidth: '82.875rem'
};

theme.colors.background = theme.colors.black;
theme.colors.baseFontColor = theme.colors.white;

theme.mediaQueries = {
  small: `@media screen and (min-width: ${theme.breakpoints[0]})`,
  medium: `@media screen and (min-width: ${theme.breakpoints[1]})`,
  large: `@media screen and (min-width: ${theme.breakpoints[2]})`
};

export default theme;
