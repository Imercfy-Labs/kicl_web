export interface SalesPerson {
  id?: number;
  name: string;
  email: string;
  password?: string;
  phone: string;
  branch: string;
  territory: string;
  status: string;
  role_id?: number;
  branch_id?: number;
}

export interface CreateSalesPersonDto {
  name: string;
  email: string;
  password: string;
  phone: string;
  branch: string;
  territory: string;
  status: string;
}