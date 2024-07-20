import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs';
import {Transactions} from '../models/transactions';
import {IRequest} from '../models/request';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  httpClient = Inject(HttpClient);

  constructor() {
  }

  getTransactions(accountNumber: string) {
    this.httpClient.get(`https://coral-app-sat5a.ondigitalocean.app/za/pb/v1/accounts/${accountNumber}/transactions?fromDate=2020-11-01`).pipe(map((res: Transactions) => {
      const requestList: IRequest[] = [];
      for (const transaction of res.data.transactions) {

        requestList.push({
          amount: transaction.type === 'DEBIT' ? parseInt(transaction.amount) * -1 : parseInt(transaction.amount),
          transactionDate: transaction.transactionDate,
          description: transaction.description,
          balance: parseInt(transaction.runningBalance)
        });
      }
      return requestList
    }))
  }
}
