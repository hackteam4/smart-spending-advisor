import { TestBed } from '@angular/core/testing';

import { TransactionAggregatorService } from './transaction-aggregator.service';

describe('TransactionAggregatorService', () => {
  let service: TransactionAggregatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionAggregatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
