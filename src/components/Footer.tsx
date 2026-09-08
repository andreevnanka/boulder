import { Box, Container, Typography, Link as MuiLink, Grid, IconButton, Button, TextField, Divider } from "@mui/material";
import { categoriesData } from "../data/categories";
const iconSx = {
    color: 'white',
    border: '1px solid rgba(255,255,255,0.2)',
    transition: '0.3s',
    '&:hover': { 
        bgcolor: 'primary.main', 
        borderColor: 'primary.main' 
    } 
};

const socialLinks=[
    {id:1, href:'https://t.me/your_channel', image:'https://via.placeholder.com/24x24?text=Telegram'},
    {id:2, href:'https://youtube.com', image:'https://via.placeholder.com/24x24text=YouTube'},
    {id:3, href:'https://wa.me/79990000000', image:'https://via.placeholder.com/24x24?text=VK'},
    {id:4, href:'https://wa.me/79990000000', image:'https://via.placeholder.com/24x24?text=Instagram'}
]


export const Footer= ()=> {
    return (
        <Box sx={{backgroundColor: '#232325', color:'white', borderTopLeftRadius: 32, borderTopRightRadius: 32}}>
            <Container maxWidth='lg' sx={{pb:{xs:'28px',lg:'32px'}, pt:{xs:'28px', lg:'80px'}}}>
                <Typography variant="h3" sx={{textAlign:'center'}}>Подпишитесь на нашу рассылку</Typography>
                <Typography variant="h3" sx={{textAlign:'center', color: '#FFFFFFB8', fontWeight: 500, fontSize: 17, lineHeight: 1.64}}>
                    Узнавайте о скидках и акциях раньше всех
                </Typography>
                <Box sx={{display: 'flex', gap:2, maxWidth: '512px', flexDirection: {xs: 'column', sm: 'row'}}}>
                    <TextField
                        variant="outlined"
                        placeholder="Ваш Email"
                        sx={{
                            flex: 1,
                            backgroundColor: 'secondary.main',
                            borderRadius: 3,
                            input: {color: 'white'},

                            '&:hover': {
                                borderColor: 'white'
                            }
                        }}
                    />
                    <Button variant="contained" color="secondary" size="large" sx={{borderRadius:3}} >Подписаться</Button>
                </Box>
            </Container>
            
            <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', marginX:'24px'}} />

            <Container maxWidth='lg'>
                <Grid container spacing={4}>
                    <Grid  sx={{xs: 12, md: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center',rowGap: 2}}>
                        <img src="https://via.placeholder.com/97x120?text=Boulder"></img>
                        <Box sx={{display:'flex', gap:1}}>
                            {socialLinks.map(({id, href, image})=>(
                                <IconButton
                                    key={id}
                                    component="a"
                                    href={href}
                                    target="_blank"
                                    sx={iconSx}
                                >
                                    <img src={image}></img>
                                </IconButton>
                            ))}
                        </Box>
                        <Button variant="contained" color="secondary" fullWidth sx={{borderRadius:3}}>Задайте нам вопрос</Button>
                    </Grid>

                    <Grid sx={{xs:6, md:4}}>
                        <Typography sx={{fontWeight: 800, fontSize: 17, lineHeight: 1.4,color: 'white'}}>Техника</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                            {categoriesData.map((category) => (
                                <MuiLink
                                    key={category.id}
                                    href={category.to}
                                    sx={{fontWeight: 500, fontSize: 15, lineHeight: 1.6, color: '#FFFFFFB8'}}
                                >
                                    {category.title}
                                </MuiLink>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            
            <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', marginX:'24px'}} />

            <Container sx={{display:'flex', justifyContent: 'space-between'}}>
                <Typography variant="caption" sx={{ opacity: 0.5 }}>
                    © 2026 BOULDER. Все права защищены.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Typography variant="caption" component="a" href="#" sx={{ opacity: 0.5, color: 'white', textDecoration: 'none', '&:hover': { opacity: 1 } }}>
                        Политика конфиденциальности
                    </Typography>
                    <Typography variant="caption" component="a" href="#" sx={{ opacity: 0.5, color: 'white', textDecoration: 'none', '&:hover': { opacity: 1 } }}>
                        Оферта
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};