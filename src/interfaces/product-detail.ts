// TODO: get posible types of status and conditions
export interface ProductDetail {
  id: string;
  pictures: Array<Picture>;
  price: number;
  status: 'active' | 'inactive';
  title: string;
  condition: 'new' | 'used',
  sold_quantity: number
}

export interface Picture {
  id: String;
  url: string;
  secure_url: string;
  size: string;
  max_size: string
}