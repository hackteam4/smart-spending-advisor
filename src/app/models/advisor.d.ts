export interface Advisor {}

export interface PieChart {
  data: Number[];
}

export interface ClassifiedTransaction {
  date: Date;
  detail1: string;
  detail2: string;
  classfication_level1: ClassificationsLevel1;
  classfication_level2: ClassificationsLevel2;
  classfication_level3: ClassificationsLevel3;
  amount: number; // Neg is outflow, pos is inflow
}

export enum ClassificationsLevel1 {
  Income,
  Expense,
  Asset,
  Liabilties,
}

export enum ClassificationsLevel2 {
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

export enum ClassificationsLevel3 {
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

export const TransactionClassificationsMap = {
  [ClassificationsLevel1.Income]: {
    [ClassificationsLevel2.Income_Salary]: null,
    [ClassificationsLevel2.Income_Rent]: null,
    [ClassificationsLevel2.Income_Other]: null,
  },
  [ClassificationsLevel1.Expense]: {
    [ClassificationsLevel2.Expense_Household]: [
      ClassificationsLevel3.Expense_Household_Rent,
      ClassificationsLevel3.Expense_Household_Utilities,
      ClassificationsLevel3.Expense_Household_Repairs_and_Maintenance,
    ],
    [ClassificationsLevel2.Expense_Personal]: [
      ClassificationsLevel3.Expense_Personal_Grooming,
      ClassificationsLevel3.Expense_Personal_Groceries,
    ],
  },
};
