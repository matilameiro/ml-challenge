export interface Product {
  id: string;
  permalink: string;
  price: number;
  title: string;
  thumbnail: string;
  shipping: Shipping;
  address: Address;
}

export interface Shipping {
  free_shipping: boolean
  logistic_type: string
  mode: string
  store_pick_up: boolean
}

export interface Address {
  city_id: string;
  city_name: string;
  state_id: string;
  state_name: string;
}