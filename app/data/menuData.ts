export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: 'food' | 'drinks'; 
  isPromo?: boolean;
  detailDesc?: string;
  rating?: number;
  reviews?: number;
}

export const menuData: MenuItem[] = [
  // --- FOOD (PIZZA) ---
  {
    id: 1,
    name: 'Margherita Classico',
    description: 'San Marzano tomato sauce, buffalo mozzarella, fresh basil, and extra virgin olive oil.',
    price: 120000,
    imageUrl: '/images/Pizza.gif',
    category: 'food',
    detailDesc: 'Classic Neapolitan pizza honoring the colors of the Italian flag. Dough fermented for 48 hours for a light and crispy texture.',
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: 'Pepperoni Diavola',
    description: 'Tomato sauce, mozzarella, spicy beef pepperoni, and a sprinkle of chili flakes.',
    price: 145000,
    imageUrl: '/images/News.jpg',
    category: 'food',
    detailDesc: 'For spice lovers, Diavola offers the heat of Calabrian chili paired with the savory taste of premium beef pepperoni.',
    rating: 4.7,
    reviews: 89
  },
  {
    id: 3,
    name: 'Quattro Formaggi',
    description: 'A blend of four cheeses: Mozzarella, Gorgonzola, Parmesan, and Fontina.',
    price: 150000,
    imageUrl: '/images/News2.jpg',
    category: 'food',
    detailDesc: 'A cheese lover’s paradise. Without tomato sauce, this "bianca" pizza highlights the rich flavors of four of Italy’s best cheeses.',
    rating: 4.9,
    reviews: 56
  },
  {
    id: 4,
    name: 'Truffle Funghi',
    description: 'Cream base, assorted wild mushrooms, white truffle oil, and thyme.',
    price: 165000,
    imageUrl: '/images/News3.jpg',
    category: 'food',
    detailDesc: 'A luxurious dish with the distinctive aroma of truffle, combined with fresh porcini and champignon mushrooms.',
    rating: 5.0,
    reviews: 32
  },

  // --- DRINKS (BEVERAGES) ---
  {
    id: 5,
    name: 'Notte Signature Wine',
    description: 'A glass of red wine selected by our sommelier (Chianti Classico).',
    price: 110000,
    imageUrl: '/images/Media01.jpg',
    category: 'drinks',
    detailDesc: 'Selected directly from Tuscan vineyards, this wine features cherry and oak notes perfect for accompanying meat pizzas.',
    rating: 4.8,
    reviews: 45
  },
  {
    id: 6,
    name: 'Classic Negroni',
    description: 'Gin, Campari, and Sweet Vermouth with orange peel.',
    price: 95000,
    imageUrl: '/images/Media02.jpg',
    category: 'drinks',
    detailDesc: 'A classic Italian bittersweet aperitivo, perfect to enjoy before starting dinner.',
    rating: 4.6,
    reviews: 28
  },
  {
    id: 7,
    name: 'Italian Lemonade',
    description: 'Fresh lemon soda with mint leaves and slices of Sorrento lemon.',
    price: 45000,
    imageUrl: '/images/Media03.jpg',
    category: 'drinks',
    detailDesc: 'A refreshing non-alcoholic drink, made from imported lemons providing a natural sweet and sour taste.',
    rating: 4.7,
    reviews: 67
  },
  {
    id: 8,
    name: 'Espresso Romano',
    description: 'Single shot espresso with a slice of lemon peel.',
    price: 35000,
    imageUrl: '/images/News4.jpg',
    category: 'drinks',
    detailDesc: 'The Roman way to enjoy coffee. The acidity of the lemon balances the bitterness of the coffee for a clean finish.',
    rating: 4.5,
    reviews: 41
  },
];