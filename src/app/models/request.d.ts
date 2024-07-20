export interface RequestList {
  transactions: IRequest[];
}

export interface IRequest {
  description: string;
  transactionDate: string;
  amount: number;
  balance: number;
}
