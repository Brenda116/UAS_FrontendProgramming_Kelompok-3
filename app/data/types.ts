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

export interface Voucher {
  id: number;
  title: string;
  description: string;
  code: string;
  discount: string;
  validUntil: string;
  color: string;
}