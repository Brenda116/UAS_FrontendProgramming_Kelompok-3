import { Voucher } from './types';

export const voucherData: Voucher[] = [
  {
    id: 1,
    title: 'First Order Treat',
    description: 'Get a special welcome discount on your very first order with us.',
    code: 'WELCOME20',
    discount: '20% OFF',
    validUntil: 'Valid Forever',
    color: 'bg-blue-50 border-blue-200 text-blue-800'
  },
  {
    id: 2,
    title: 'Birthday Special',
    description: 'Celebrate your day! Free Tiramisu with any main course purchase.',
    code: 'HBDNOTTE',
    discount: 'FREE DESSERT',
    validUntil: 'Valid on Birthday Month',
    color: 'bg-pink-50 border-pink-200 text-pink-800'
  },
  {
    id: 3,
    title: 'Pizza Party',
    description: 'Buy any 2 large pizzas and get 1 Margherita Classico for free.',
    code: 'PIZZAPARTY',
    discount: 'BUY 2 GET 1',
    validUntil: 'Dec 31, 2025',
    color: 'bg-orange-50 border-orange-200 text-orange-800'
  },
  {
    id: 4,
    title: 'Student Saver',
    description: 'Show your valid student ID and enjoy a flat discount on pasta dishes.',
    code: 'STUDENT15',
    discount: '15% OFF',
    validUntil: 'Weekdays Only',
    color: 'bg-green-50 border-green-200 text-green-800'
  },

  {
    id: 5,
    title: 'Weekend Feast',
    description: 'Make your weekend special. Get a flat discount on all orders above Rp 500.000.',
    code: 'WEEKEND10',
    discount: '10% OFF',
    validUntil: 'Sat & Sun Only',
    color: 'bg-purple-50 border-purple-200 text-purple-800'
  },
  {
    id: 6,
    title: 'Lunch Hour Deal',
    description: 'Perfect for your break! Get a discount on all main courses between 11 AM - 2 PM.',
    code: 'LUNCH25',
    discount: '25% OFF',
    validUntil: 'Mon-Fri, 11AM-2PM',
    color: 'bg-yellow-50 border-yellow-200 text-yellow-800'
  },
  {
    id: 7,
    title: 'Wine Lovers Night',
    description: 'Purchase any two bottles of wine and get a complimentary cheese platter.',
    code: 'WINE4TWO',
    discount: 'FREE CHEESE',
    validUntil: 'Every Evening',
    color: 'bg-rose-50 border-rose-200 text-rose-800'
  },
  {
    id: 8,
    title: 'Family Big Feast',
    description: 'Gathering with a group? Enjoy a massive discount on orders over Rp 1.500.000.',
    code: 'FAMILYBIG',
    discount: 'Rp 150K OFF',
    validUntil: 'Any Day',
    color: 'bg-teal-50 border-teal-200 text-teal-800'
  },
  {
    id: 9, 
    title: 'Quick Bite Saver',
    description: 'Craving a quick snack? Get a direct discount on orders above Rp 250.000.',
    code: 'QUICK50',
    discount: 'Rp 50.000 OFF',
    validUntil: 'Limited Time',
    color: 'bg-indigo-50 border-indigo-200 text-indigo-800'
  }
];