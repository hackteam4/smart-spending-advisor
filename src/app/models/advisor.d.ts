import {
  FEClassificationsLevel1,
  FEClassificationsLevel2,
} from './classifications.enum';

export interface Advisor {}

export interface PieChart {
  data: Number[];
}

// ******************************************************
// For BE / AI
// ******************************************************

export interface AIClassifiedTransaction {
  date: Date;
  detail1: string; // Orgianl detail from statement
  detail2: string; // If needed
  classfication: TransactionItem;
  amount: number; // Neg is outflow, pos is inflow
}

export enum AIClassfication {
  Salary,
  Rent_Income,
  Groceries,
  Takeout,
}
// To be completed

// ******************************************************
// For FE
// ******************************************************

export enum TransactionGroup {
  Income = 'Income',
  Expense = 'Expense',
  Asset = 'Asset',
  Liabilties = 'Liabilties',
}

export enum TransactionClass {
  Income_Salary,
  Income_Rent,
  Income_Other,
  Expense_Household,
  Expense_Personal,
  Asset_Property,
  Asset_Vehicle,
  Liabilties_Homeloan,
  Liabilties_AssetFinance,
}

export enum TransactionItems {
  Expense_Household_Rent,
  Expense_Household_Utilities,
  Expense_Household_Repairs_and_Maintenance,
  Expense_Personal_Grooming,
  Expense_Personal_Groceries,
  Asset_Property,
  Asset_Vehicle,
  Liabilties_Homeloan,
  Liabilties_AssetFinance,
}

export interface ClassifiedTransactions {
  [TransactionGroup.Income]: {
    [TransactionClass.Income_Salary]: AIClassifiedTransaction[];
    [TransactionClass.Income_Rent]: AIClassifiedTransaction[];
    [TransactionClass.Income_Other]: AIClassifiedTransaction[];
  };
  [TransactionGroup.Expense]: {
    [TransactionClass.Expense_Household]: {
      [TransactionItem.Expense_Household_Rent]: AIClassifiedTransaction[];
      [TransactionItem.Expense_Household_Utilities]: AIClassifiedTransaction[];
      [TransactionItem.Expense_Household_Repairs_and_Maintenance]: AIClassifiedTransaction[];
    };
    [TransactionClass.Expense_Personal]: {};
    [TransactionItem.Expense_Personal_Grooming]: AIClassifiedTransaction[];
    [TransactionItem.Expense_Personal_Groceries]: AIClassifiedTransaction[];
  };
}

export interface ClassificationsLayers {
  level1: FEClassificationsLevel1;
  level2?: FEClassificationsLevel2;
  level3?: TransactionItem;
}

export interface ClassificationsMap {
  [key: AIClassfication]: ClassificationsLayers;
}

export const AI_to_FE_ClassificationsMap: ClassificationsMap = {
  [AIClassfication.Salary]: {
    level1: FEClassificationsLevel1.Income,
    level2: FEClassificationsLevel2.Income_Salary,
  },
  [AIClassfication.Rent_Income]: {
    level1: FEClassificationsLevel1.Income,
    level2: FEClassificationsLevel2.Income_Rent,
  },
  [AIClassfication.Groceries]: {
    level1: FEClassificationsLevel1.Expense,
    level2: FEClassificationsLevel2.Expense_Personal,
  },
  [AIClassfication.Takeout]: {
    level1: FEClassificationsLevel1.Expense,
    level2: FEClassificationsLevel2.Expense_Personal,
  },
};
