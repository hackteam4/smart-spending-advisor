import { TransactionItems } from '../models/advisor';

export const mockAIClassifiedTransaction = [
  {
    date: new Date(),
    detail1: 'A transation',
    detail2: 'More details',
    classfication: TransactionItems.Expense_Personal_Groceries,
    amount: 100,
  },
  {
    date: new Date(),
    detail1: 'A transation',
    detail2: 'More details',
    classfication: TransactionItems.Asset_Property,
    amount: 2734,
  },
  {
    date: new Date(),
    detail1: 'A transation',
    detail2: 'More details',
    classfication: TransactionItems.Liabilties_AssetFinance,
    amount: 23,
  },
];
