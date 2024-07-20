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
  classfication: TransactionItems;
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
      [TransactionItems.Expense_Household_Rent]: AIClassifiedTransaction[];
      [TransactionItems.Expense_Household_Utilities]: AIClassifiedTransaction[];
      [TransactionItems.Expense_Household_Repairs_and_Maintenance]: AIClassifiedTransaction[];
    };
    [TransactionClass.Expense_Personal]: {
      [TransactionItems.Expense_Personal_Grooming]: AIClassifiedTransaction[];
      [TransactionItems.Expense_Personal_Groceries]: AIClassifiedTransaction[];
    };
  };
}

export interface ClassificationsLayers {
  level1: TransactionGroup;
  level2?: TransactionClass;
  level3?: TransactionItems;
}

export interface ClassificationsMap {
  [key: string]: ClassificationsLayers;
}

export const AI_to_FE_ClassificationsMap: ClassificationsMap = {
  [AIClassfication.Salary]: {
    level1: TransactionGroup.Income,
    level2: TransactionClass.Income_Salary,
  },
  [AIClassfication.Rent_Income]: {
    level1: TransactionGroup.Income,
    level2: TransactionClass.Income_Rent,
  },
  [AIClassfication.Groceries]: {
    level1: TransactionGroup.Expense,
    level2: TransactionClass.Expense_Personal,
  },
  [AIClassfication.Takeout]: {
    level1: TransactionGroup.Expense,
    level2: TransactionClass.Expense_Personal,
  },
};
