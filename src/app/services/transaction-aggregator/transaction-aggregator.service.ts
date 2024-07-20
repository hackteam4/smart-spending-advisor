import { Injectable } from '@angular/core';
import {
  AIClassifiedTransaction,
  ClassifiedTransactions,
} from '../../models/advisor';

@Injectable({
  providedIn: 'root',
})
export class TransactionAggregatorService {
  constructor() {}

  aggregateTransactions(
    transactions: AIClassifiedTransaction[]
  ): ClassifiedTransactions {
    console.log(transactions);
    const classifiedTransactions = {} as ClassifiedTransactions;
    return classifiedTransactions;
  }
}
