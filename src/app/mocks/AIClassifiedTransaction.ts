import { AIClassfication, TransactionItem } from '../models/advisor';

export const mockAIClassifiedTransaction = [
  {
    date: new Date(),
    detail1: 'A transation',
    detail2: 'More details',
    classfication: TransactionItem.Expense_Personal_Groceries,
    amount: 100,
  },
];
