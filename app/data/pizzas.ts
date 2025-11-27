import { MenuItem } from './types';

export const pizzaMenu: MenuItem[] = [
  {
    id: 1,
    name: 'Margherita Classico',
    description: 'San Marzano tomato sauce, buffalo mozzarella, fresh basil, and extra virgin olive oil.',
    price: 120000,
    imageUrl: '/images/menu/Pizza/Margherita Classico.png',
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
    imageUrl: '/images/menu/Pizza/Pepperoni Diavola.png',
    category: 'food',
    isPromo: true, // Menu Promo
    detailDesc: 'For spice lovers, Diavola offers the heat of Calabrian chili paired with the savory taste of premium beef pepperoni.',
    rating: 4.7,
    reviews: 89
  },
  {
    id: 3,
    name: 'Quattro Formaggi',
    description: 'A blend of four cheeses: Mozzarella, Gorgonzola, Parmesan, and Fontina.',
    price: 150000,
    imageUrl: '/images/menu/Pizza/Quattro Formaggi.png',
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
    imageUrl: '/images/menu/Pizza/Truffle Funghi.png',
    category: 'food',
    detailDesc: 'A luxurious dish with the distinctive aroma of truffle, combined with fresh porcini and champignon mushrooms.',
    rating: 5.0,
    reviews: 32
  },
  {
    id: 5,
    name: 'Meat Lovers Italiano',
    description: 'Tomato base loaded with beef pepperoni, italian sausage, minced beef, and chicken ham.',
    price: 160000,
    imageUrl: '/images/menu/Pizza/Meat Lovers Italiano.png',
    category: 'food',
    detailDesc: 'A carnivore’s dream. We pile on four types of premium meats for a hearty and savory experience in every bite.',
    rating: 4.9,
    reviews: 210
  },
  {
    id: 6,
    name: 'Hawaiian Tropicale',
    description: 'Savory turkey ham paired with sweet, juicy pineapples and extra mozzarella cheese.',
    price: 135000,
    imageUrl: '/images/menu/Pizza/Hawaiian Tropicale.png', 
    category: 'food',
    isPromo: true, 
    detailDesc: 'A controversial but loved classic. The sweetness of the pineapple perfectly balances the savory ham and melted cheese.',
    rating: 4.6,
    reviews: 180
  },
  {
    id: 7,
    name: 'BBQ Chicken Smokey',
    description: 'Smoky BBQ sauce base topped with grilled chicken breast, red onions, and parsley.',
    price: 140000,
    imageUrl: '/images/menu/Pizza/BBQ Chicken Smokey.png', 
    category: 'food',
    detailDesc: 'Tangy and sweet BBQ sauce replaces the traditional tomato base, topped with tender grilled chicken for a bold flavor profile.',
    rating: 4.8,
    reviews: 150
  },
  {
    id: 8,
    name: 'Tuna & Corn Delight',
    description: 'Chunks of tuna, sweet corn kernels, onion slices, and a swirl of mayonnaise.',
    price: 130000,
    imageUrl: '/images/menu/Pizza/Tuna & Corn Delight.png',
    category: 'food',
    detailDesc: 'A light and savory favorite. The combination of tuna and sweet corn provides a delightful texture and taste that is widely loved.',
    rating: 4.7,
    reviews: 95
  },
  {
    id: 9,
    name: 'Super Supreme',
    description: 'The ultimate mix: Pepperoni, minced beef, mushrooms, green peppers, and black olives.',
    price: 155000,
    imageUrl: '/images/menu/Pizza/Super Supreme.png', 
    category: 'food',
    detailDesc: 'Can’t decide? Have it all. This pizza offers a perfect balance of meats and vegetables for a complete meal on a crust.',
    rating: 4.8,
    reviews: 140
  },
  {
    id: 10,
    name: 'Black Pepper Beef',
    description: 'Tender beef slices tossed in savory black pepper sauce, bell peppers, and onions.',
    price: 150000,
    imageUrl: '/images/menu/Pizza/Black Pepper Meat.png',
    category: 'food',
    detailDesc: 'A bold and savory choice. The peppery kick of the sauce complements the succulent beef slices and crunchy vegetables perfectly.',
    rating: 4.8,
    reviews: 115
  },
  {
    id: 11,
    name: 'Spicy Tuna Hot',
    description: 'Spicy tuna chunks, sliced red chilies, and onions on a tomato base with melted mozzarella.',
    price: 140000,
    isPromo: true,
    imageUrl: '/images/menu/Pizza/Spicy Tuna Hot.png',
    category: 'food',
    detailDesc: 'A fiery kick for seafood lovers. We use fresh chilies to give this tuna pizza a bold and spicy character.',
    rating: 4.8,
    reviews: 76
  }
];