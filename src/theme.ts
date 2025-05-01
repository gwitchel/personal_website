import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: 'transparent',
      paper: 'transparent',
    },
    text: {
      primary: '#3C2A21',
      secondary: '#4A3C3C',
    },
  },
  typography: {
    fontFamily: '"essonnes-text", serif',
    h1: {
      fontFamily: '"essonnes-display", serif',
      fontWeight: 700,
      fontStyle: 'normal',
    },
    h2: {
      fontFamily: '"essonnes-display", serif',
      fontWeight: 700,
      fontStyle: 'normal',
    },
    h3: {
      fontFamily: '"essonnes-display", serif',
      fontWeight: 700,
      fontStyle: 'normal',
    },
    h4: {
      fontFamily: '"essonnes-display", serif',
      fontWeight: 400,
      fontStyle: 'normal',
    },
    h5: {
      fontFamily: '"essonnes-display", serif',
      fontWeight: 400,
      fontStyle: 'normal',
    },
    h6: {
      fontFamily: '"essonnes-display", serif',
      fontWeight: 400,
      fontStyle: 'normal',
    },
    body1: {
      fontFamily: '"essonnes-text", serif',
      fontWeight: 400,
      fontStyle: 'normal',
    },
    body2: {
      fontFamily: '"essonnes-text", serif',
      fontWeight: 400,
      fontStyle: 'normal',
    },
    button: {
      fontFamily: '"essonnes-headline", serif',
      fontWeight: 700,
      fontStyle: 'normal',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          overflowX: 'hidden',
          backgroundColor: 'transparent',
          color: '#3C2A21',
        },
      },
    },
  },
});

export default theme; 