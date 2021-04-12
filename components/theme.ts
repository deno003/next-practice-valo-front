import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#424242',
      dark: '#1b1b1b',
      light: '#6d6d6d'
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#484848',
    },
    text: {
      primary:'#ffffff',
    }
  },
});

export default theme;