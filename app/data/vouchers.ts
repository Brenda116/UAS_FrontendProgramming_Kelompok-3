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
  }
];