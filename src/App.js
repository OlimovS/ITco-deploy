import React from 'react';
import{ CssBaseline } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';

import Header from './components/Header.js';
import Introduction from './components/Introduction.js';
import Ourwork from './components/Ourwork.js';
import Clients from './components/Clients.js';
import About from './components/About.js';
import Choose from './components/Choose.js';
import Touch from './components/Touch.js';
import Footer from './components/Footer.js';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    secondary: {
      main: grey[50]
    },
  },
})

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header/>
        <Introduction/>
        <Ourwork />
        <Clients />
        <About />
        <Choose />
        <Touch />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
