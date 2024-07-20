export interface ResponseList {
  transactions: Response[];
}

export interface Response {
  description: string;
  transactionDate: Date;
  amount: number;
  balance: number;
  category: Category;
}

export enum Category {
  Fuel,
  Food,
  Retail,
  Health,
  Home,
  Other
}
