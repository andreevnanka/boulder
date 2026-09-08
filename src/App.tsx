import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { AboutPage } from './pages/AboutPage';
import { ContactsPage } from './pages/ContactsPage';
import { NotFoundPage } from './pages/NotFoundPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#202020',    
      dark: '#313131',     
      contrastText: '#FFFFFF', 
    },
    secondary: {
      main: '#FFFFFF29',     
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#191C30E6',
    },
    background: {
      default: '#FFFFFF',  
      paper: '#F6F6F6',    
    },
  },
  typography: {
    fontFamily: '"Manrope", sans-serif',
    h1: {fontWeight: 800, fontSize: 50, lineHeight: 1.12},
    h2: {fontWeight: 800, fontSize: 44, lineHeight: 1.9},
    h3: {fontWeight: 800, fontSize: 28, lineHeight: 1.14},
    h4: {fontWeight: 800, fontSize: 24, lineHeight: 1.16},
    h5: {fontWeight: 800, fontSize: 20, lineHeight: 1.2},
    button: { 
      textTransform: 'none', // Отключаем КАПСЛОК у кнопок
      fontWeight: 800,
      fontSize: 15,
      minHeight: 44,
      borderRadius: 12,
    },
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header/>
        <Box component="main" sx={{p:3}}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Box>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;