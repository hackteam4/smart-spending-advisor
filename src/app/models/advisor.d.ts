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
