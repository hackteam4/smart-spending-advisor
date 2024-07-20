export interface Transactions {
  data: Data
  links: Links
  meta: Meta
}

export interface Data {
  transactions: Transaction[]
}

export interface Transaction {
  accountId: string
  type: string
  transactionType: string
  status: string
  description: string
  cardNumber: string
  postedOrder: string
  postingDate: string
  valueDate: string
  actionDate: string
  transactionDate: string
  amount: string
  runningBalance: string
}

export interface Links {
  self: string
}

export interface Meta {
  totalPages: number
}
