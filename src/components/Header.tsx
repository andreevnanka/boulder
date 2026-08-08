import { AppBar, Toolbar, Container, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const Header = () => {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ gap: 2 }}>
          {/* Вместо текста позже можно вставить картинку логотипа */}
          <Box sx={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'primary.main' }}>
            БОЛДЕР
          </Box>
          
          <Box sx={{ flexGrow: 1, display: 'flex', gap: 1 }}>
            <Button color="inherit" component={RouterLink} to="/">Главная</Button>
            <Button color="inherit" component={RouterLink} to="/catalog">Каталог</Button>
            <Button color="inherit" component={RouterLink} to="/about">О компании</Button>
            <Button color="inherit" component={RouterLink} to="/contacts">Контакты</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};