import { Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";

export interface ProductSpec {
    label: string;
    value: string;
}

export interface ProductCardProps {
    id: number;
    title: string;
    image: string;
    price?: string;
    specs?: ProductSpec[];
}

export const ProductCard = ({id, title, image, price, specs}:ProductCardProps) => {
    return (
        <Card sx={{
                height:'100%',
                overflow: 'hidden',
                boxShadow: 'none',
                backgroundColor: 'white',
                borderRadius:'20px',
                '&:hover': {
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
                }
        }}>
            <CardMedia
                component="img"
                height="200"
                image={image}
                alt={title}
                sx={{transition: '0,3s ease-in-out'}}
            />
            <CardContent>
                <Typography variant="h4" component="div" style={{color: 'text.primary'}}>
                    {title}
                </Typography>

                {specs && (
                    <Box sx={{
                        columnCount: 2,
                    }}>
                        {specs.map((spec, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    mb: 1,
                                }}
                            >
                                <span style={{fontWeight: 500, fontSize: 13, lineHeight: 1.5, color: '#1B1F3B99'}}>{spec.label}</span>
                                <span style={{fontWeight: 500, fontSize: 15, lineHeight: 1.6, color: 'text.primary'}}>{spec.value}</span>
                            </Box>
                        ))}
                    </Box>
                )}

                {price && (
                    <Typography variant="h6" color="primary.main" sx={{mt:1}}>
                        {price}
                    </Typography>
                )}
                <Button variant="contained" color="primary" fullWidth sx={{borderRadius:3}}>
                    Подробнее
                </Button>
            </CardContent>
        </Card>
    );
};