import { Injectable } from '@angular/core';
import {
  AI_to_FE_ClassificationsMap,
  AIClassifiedTransaction,
  ClassifiedTransactions,
  TransactionGroup,
} from '../../models/advisor';

@Injectable({
  providedIn: 'root',
})
export class TransactionAggregatorService {
  constructor() {}

  aggregateTransactions(
    transactions: AIClassifiedTransaction[]
  ): ClassifiedTransactions {
    const classifiedTransactions = {} as ClassifiedTransactions;

    transactions.forEach((transaction) => {
      const transGroup =
        AI_to_FE_ClassificationsMap[transaction.classfication].level1;
      const transClass =
        AI_to_FE_ClassificationsMap[transaction.classfication].level2;
      const transItem = transaction.classfication;

      console.log(transGroup, transClass, transItem);
      console.log(Object.keys(!classifiedTransactions));

      if (!Object.keys(classifiedTransactions).includes(transGroup)) {
        classifiedTransactions[transGroup] = {
          [transClass]: {
            [transItem]: [transaction],
          },
        };
      }
    });
    console.log(classifiedTransactions);

    return classifiedTransactions;
  }
}
