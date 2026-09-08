export interface Category {
  id: number;
  title: string;
  image: string;
  to: string;
}

export const categoriesData: Category[] = [
  { id: 1, title: 'Фронтальные погрузчики', image: 'https://via.placeholder.com/300x200?text=Excavator', to: '/catalog' },
  { id: 2, title: 'Вилочные погрузчики', image: 'https://via.placeholder.com/300x200?text=Bulldozer', to: '/catalog' },
  { id: 3, title: 'Экскаваторы', image: 'https://via.placeholder.com/300x200?text=Loader', to: '/catalog' },
  { id: 4, title: 'Экскаваторы-погрузчики', image: 'https://via.placeholder.com/300x200?text=Dump+Truck', to: '/catalog' },
];