import { TransactionItems } from '../models/advisor';

export const mockAIClassifiedTransaction = [
  {
    date: new Date(),
    detail1: 'A transation',
    detail2: 'More details',
    classfication: TransactionItems.Expense_Personal_Groceries,
    amount: 100,
  },
];
