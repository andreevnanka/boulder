import { Box, Container, Typography,Button,Grid,Card,CardContent,CardMedia } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const categories = [
  { id: 1, title: 'Фронтальные погрузчики', image: 'https://via.placeholder.com/300x200?text=Excavator' },
  { id: 2, title: 'Экскаваторы погрузчики', image: 'https://via.placeholder.com/300x200?text=Bulldozer' },
  { id: 3, title: 'Вилочные погрузчики', image: 'https://via.placeholder.com/300x200?text=Loader' },
  { id: 4, title: 'Навесное оборудование', image: 'https://via.placeholder.com/300x200?text=Dump+Truck' },
  { id: 5, title: 'Запчасти', image: 'https://via.placeholder.com/300x200?text=Crane' },
  { id: 6, title: 'Экскаваторы', image: 'https://via.placeholder.com/300x200?text=Grader' },
]

export const HomePage = () => {
  return (
    <Container maxWidth="lg">
        <Box sx={{bgcolor: 'primary.main', color: 'white', p: 22}}>
            <Typography variant="h3" component="h1" gutterBottom>
                Спецтехника из России
            </Typography>
            <Typography variant="h6" component="p" sx={{mb: 3}}>
                Мы делаем надежную технику для работы в суровых условиях
            </Typography>
            <Button variant="contained" color="secondary" size="large" component={RouterLink} to="/catalog">
                Узнать подробнее
            </Button>
        </Box>

        <Grid container spacing={2.5} sx={{mt:8}}>
            {categories.map((category) =>(
                <Grid size={{xs:12, sm:6, md:4}}  key={category.id}>
                    <Card sx={{
                        height:'100%',
                        overflow: 'hidden',
                        '&:hover': {
                            '& img': {
                                transform: 'translateX(5px)'
                            }
                        }
                    }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={category.image}
                            alt={category.title}
                            sx={{transition: '0,3s ease-in-out'}}
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {category.title}
                            </Typography>
                            <Button size="small" color="primary" sx={{mt:1}}>
                                Смотреть →
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </Container>
  );
};