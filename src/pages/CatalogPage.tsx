import { Container,Typography,Grid } from "@mui/material";
import { ProductCard } from "../components/ProductCard";

const products = [
  { 
    id: 1, 
    title: 'WL21', 
    image: 'https://via.placeholder.com/400x220?text=Loader+WL21', 
    price: 'От 99 000 000 ₽',
    specs: [
      { label: 'Масса', value: '3 500 кг' },
      { label: 'Ковш', value: '4,15 м²'},
      { label: 'Высота разгрузки', value: '4,15 м' },
      { label: 'Грузоподъемность', value: '2 000 кг' }
    ]
  },
  { 
    id: 2, 
    title: 'ZX200', 
    image: 'https://via.placeholder.com/400x220?text=Hitachi+ZX200', 
    price: 'От 12 500 000 ₽',
    specs: [
      { label: 'Масса', value: '3 500 кг' },
      { label: 'Ковш', value: '4,15 м²'},
      { label: 'Высота разгрузки', value: '4,15 м' },
      { label: 'Грузоподъемность', value: '2 000 кг' }
    ]
  },
  { 
    id: 3, 
    title: 'WL21', 
    image: 'https://via.placeholder.com/400x220?text=Loader+WL21', 
    price: 'От 99 000 000 ₽',
    specs: [
      { label: 'Масса', value: '3 500 кг' },
      { label: 'Ковш', value: '4,15 м²'},
      { label: 'Высота разгрузки', value: '4,15 м' },
      { label: 'Грузоподъемность', value: '2 000 кг' }
    ]
  },
  { 
    id: 4, 
    title: 'ZX200', 
    image: 'https://via.placeholder.com/400x220?text=Hitachi+ZX200', 
    price: 'От 12 500 000 ₽',
    specs: [
      { label: 'Масса', value: '3 500 кг' },
      { label: 'Ковш', value: '4,15 м²'},
      { label: 'Высота разгрузки', value: '4,15 м' },
      { label: 'Грузоподъемность', value: '2 000 кг' }
    ]
  },
  { 
    id: 5, 
    title: 'WL21', 
    image: 'https://via.placeholder.com/400x220?text=Loader+WL21', 
    price: 'От 99 000 000 ₽',
    specs: [
      { label: 'Масса', value: '3 500 кг' },
      { label: 'Ковш', value: '4,15 м²'},
      { label: 'Высота разгрузки', value: '4,15 м' },
      { label: 'Грузоподъемность', value: '2 000 кг' }
    ]
  },
  { 
    id: 6, 
    title: 'ZX200', 
    image: 'https://via.placeholder.com/400x220?text=Hitachi+ZX200', 
    price: 'От 12 500 000 ₽',
    specs: [
      { label: 'Масса', value: '3 500 кг' },
      { label: 'Ковш', value: '4,15 м²'},
      { label: 'Высота разгрузки', value: '4,15 м' },
      { label: 'Грузоподъемность', value: '2 000 кг' }
    ]
  },
];

export const CatalogPage = () => {
  return (
    <Container maxWidth="lg" sx={{mt:1}}>
      <Typography variant="h2" component="h1" gutterBottom>
        Каталог спецтехники
      </Typography>

      <Grid container spacing={3} sx={{mt:1}}>
        {products.map((product) => (
          <Grid size={{xs:12, sm:6, md:4}} key={product.id}>
            <ProductCard
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              specs={product.specs}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};