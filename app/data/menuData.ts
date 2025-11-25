import { MenuItem } from './types';
import { pizzaMenu } from './pizzas';
import { drinkMenu } from './beverages';

export type { MenuItem };

export const menuData: MenuItem[] = [
  ...pizzaMenu,
  ...drinkMenu
];