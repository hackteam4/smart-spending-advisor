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
  classfication: AIClassfication;
  amount: number; // Neg is outflow, pos is inflow
}

export enum AIClassfication {}
// To be completed

// ******************************************************
// For FE
// ******************************************************

export enum FEClassificationsLevel1 {
  Income,
  Expense,
  Asset,
  Liabilties,
}

export enum FEClassificationsLevel2 {
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

export enum FEClassificationsLevel3 {
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
  [ClassificationsLevel1.Income]: {
    [ClassificationsLevel2.Income_Salary]: AIClassifiedTransaction[];
    [ClassificationsLevel2.Income_Rent]: AIClassifiedTransaction[];
    [ClassificationsLevel2.Income_Other]: AIClassifiedTransaction[];
  };
  [ClassificationsLevel1.Expense]: {
    [ClassificationsLevel2.Expense_Household]: {
      [ClassificationsLevel3.Expense_Household_Rent]: AIClassifiedTransaction[];
      [ClassificationsLevel3.Expense_Household_Utilities]: AIClassifiedTransaction[];
      [ClassificationsLevel3.Expense_Household_Repairs_and_Maintenance]: AIClassifiedTransaction[];
    };
    [ClassificationsLevel2.Expense_Personal]: {};
    [ClassificationsLevel3.Expense_Personal_Grooming]: AIClassifiedTransaction[];
    [ClassificationsLevel3.Expense_Personal_Groceries]: AIClassifiedTransaction[];
  };
}
