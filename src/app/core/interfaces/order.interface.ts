export interface OrderItem {
  product_id: number;
  quantity: number;
  price: number;
}

export interface Order {
  dealer_id: number;
  sales_officer_id: number;
  branch_id: number;
  items: OrderItem[];
}

export interface OrderSummary {
  order_id: number;
  created_at: string;
  dealer_name: string;
  dealer_id: number;
  credit_limit: number;
  sales_officer_name: string;
  products: {
    product_name: string;
    quantity: number;
    price: number;
  }[];
  total_amount: number;
}