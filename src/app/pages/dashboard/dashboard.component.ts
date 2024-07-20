import { Component, Inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AccountsService } from '../../services/accounts.service';
import { environment } from '../../../environments/environment.development';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { IRequest } from '../../models/request';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  data?: Observable<IRequest[]>;
  constructor(
    private authService: AuthService,
    private accountService: AccountsService
  ) {
    this.authService.postAuth().subscribe((res: any) => {
      environment.BEARER_TOKEN = res.access_token;
      this.data = this.accountService.getTransactions(
        '4675778129910189600000003'
      );
    });

    // accountService.getTransactions('4675778129910189600000003');
  }
}
