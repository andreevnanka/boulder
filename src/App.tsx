import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';

import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { AboutPage } from './pages/AboutPage';
import { ContactsPage } from './pages/ContactsPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Создаем базовую тему MUI (позже мы добавим сюда кастомные цвета)
const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline сбрасывает стандартные отступы браузера и нормализует стили */}
      <CssBaseline />
      <BrowserRouter>
        <Header/>
        <Box component="main" sx={{p:3}}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            {/* Если пользователь введет несуществующий путь, попадет сюда */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;