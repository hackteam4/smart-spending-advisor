export interface RequestList {
  transactions: Request[];
}

export interface Request {
  description: string;
  transactionDate: Date;
  amount: number;
  balance: number;
}
