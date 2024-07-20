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
  Income_Salary = 'Income_Salary',
  Income_Rent = 'Income_Rent',
  Income_Other = 'Income_Other',
  Expense_Household = 'Expense_Household',
  Expense_Personal = 'Expense_Personal',
  Asset_Property = 'Asset_Property',
  Asset_Vehicle = 'Asset_Vehicle',
  Liabilties_Homeloan = 'Liabilties_Homeloan',
  Liabilties_AssetFinance = 'Liabilties_AssetFinance',
}

export enum TransactionItems {
  Income_Salary,
  Income_Rent,
  Income_Other,
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
  [key: string]: {
    [key: string]: { [key: string]: AIClassifiedTransaction[] };
  };
}

export interface ClassificationsLayers {
  level1: TransactionGroup;
  level2: TransactionClass;
  level3?: TransactionItems;
}

export interface ClassificationsMap {
  [key: string]: ClassificationsLayers;
}

export const AI_to_FE_ClassificationsMap: ClassificationsMap = {
  [TransactionItems.Income_Other]: {
    level1: TransactionGroup.Income,
    level2: TransactionClass.Income_Other,
  },
  [TransactionItems.Income_Rent]: {
    level1: TransactionGroup.Income,
    level2: TransactionClass.Income_Rent,
  },
  [TransactionItems.Income_Salary]: {
    level1: TransactionGroup.Income,
    level2: TransactionClass.Income_Salary,
  },
  [TransactionItems.Asset_Property]: {
    level1: TransactionGroup.Asset,
    level2: TransactionClass.Asset_Property,
  },
  [TransactionItems.Asset_Vehicle]: {
    level1: TransactionGroup.Asset,
    level2: TransactionClass.Asset_Vehicle,
  },
  [TransactionItems.Expense_Household_Rent]: {
    level1: TransactionGroup.Expense,
    level2: TransactionClass.Expense_Household,
  },
  [TransactionItems.Expense_Household_Repairs_and_Maintenance]: {
    level1: TransactionGroup.Expense,
    level2: TransactionClass.Expense_Household,
  },
  [TransactionItems.Expense_Household_Utilities]: {
    level1: TransactionGroup.Expense,
    level2: TransactionClass.Expense_Household,
  },
  [TransactionItems.Expense_Personal_Groceries]: {
    level1: TransactionGroup.Expense,
    level2: TransactionClass.Expense_Personal,
  },
  [TransactionItems.Liabilties_AssetFinance]: {
    level1: TransactionGroup.Liabilties,
    level2: TransactionClass.Liabilties_AssetFinance,
  },
  [TransactionItems.Liabilties_Homeloan]: {
    level1: TransactionGroup.Liabilties,
    level2: TransactionClass.Liabilties_Homeloan,
  },
};
