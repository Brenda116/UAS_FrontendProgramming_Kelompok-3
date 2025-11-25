import { MenuItem } from './types';

export const drinkMenu: MenuItem[] = [
  {
    id: 51, 
    name: 'Notte Signature Wine',
    description: 'A glass of red wine selected by our sommelier (Chianti Classico).',
    price: 110000,
    imageUrl: '/images/menu/Drinks/Notte Signature Wine.png',
    category: 'drinks',
    detailDesc: 'Selected directly from Tuscan vineyards, this wine features cherry and oak notes perfect for accompanying meat pizzas.',
    rating: 4.8,
    reviews: 45
  },
  {
    id: 52,
    name: 'Italian Lemonade',
    description: 'Fresh lemon soda with mint leaves and slices of Sorrento lemon.',
    price: 45000,
    isPromo: true,
    imageUrl: '/images/Menu/Drinks/Italian Lemonade.png',
    category: 'drinks',
    detailDesc: 'A refreshing non-alcoholic drink, made from imported lemons providing a natural sweet and sour taste.',
    rating: 4.7,
    reviews: 67
  },
  {
    id: 53,
    name: 'Espresso Romano',
    description: 'Single shot espresso with a slice of lemon peel.',
    price: 35000,
    isPromo: true,
    imageUrl: '/images/menu/Drinks/Espresso Romano.png',
    category: 'drinks',
    detailDesc: 'The Roman way to enjoy coffee. The acidity of the lemon balances the bitterness of the coffee for a clean finish.',
    rating: 4.5,
    reviews: 41
  },
  {
    id: 54,
    name: 'Iced Lemon Tea',
    description: 'House-brewed black tea infused with fresh lemon juice and a hint of mint.',
    price: 35000,
    imageUrl: '/images/menu/Drinks/Iced Lemon Tea.png', 
    category: 'drinks',
    detailDesc: 'A classic thirst quencher. We use premium tea leaves and real lemons, served over plenty of ice for a crisp finish.',
    rating: 4.6,
    reviews: 85
  },
  {
    id: 55,
    name: 'Acqua Minerale',
    description: 'Premium bottled still mineral water (500ml).',
    price: 25000,
    imageUrl: '/images/menu/Drinks/Acqua Minerale.png',
    category: 'drinks',
    detailDesc: 'Pure and refreshing mineral water to cleanse your palate between slices of pizza.',
    rating: 4.9,
    reviews: 120
  },
  {
    id: 56,
    name: 'San Pellegrino (Sparkling)',
    description: 'Italian sparkling mineral water with fine bubbles (500ml).',
    price: 30000,
    imageUrl: '/images/menu/Drinks/San Pellegrino (Sparkling).png', 
    category: 'drinks',
    detailDesc: 'Imported directly from Italy. The gentle carbonation makes it an excellent pairing for rich, cheesy dishes.',
    rating: 4.8,
    reviews: 90
  },
  {
    id: 57,
    name: 'Classic Cappuccino',
    description: 'Authentic Italian espresso topped with equal parts steamed milk and foam.',
    price: 40000,
    imageUrl: '/images/menu/Drinks/Classic Cappuccino.png',
    category: 'drinks',
    detailDesc: 'Prepared by our skilled baristas using a custom blend of Arabica beans. Perfect for a morning start or an afternoon pick-me-up.',
    rating: 4.7,
    reviews: 150
  },
  {
    id: 58,
    name: 'Soft Drinks',
    description: 'Choice of Coca-Cola, Sprite, or Fanta.',
    price: 25000,
    imageUrl: '/images/menu/Drinks/Soft Drinks.png', 
    category: 'drinks',
    detailDesc: 'Your favorite sodas served ice-cold with a slice of lemon.',
    rating: 4.5,
    reviews: 200
  }
];