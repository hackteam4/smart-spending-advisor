import { Component, Inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AccountsService } from '../../services/accounts.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(authService: AuthService, accountService: AccountsService) {
    console.log("Working");
    
    authService.postAuth();

    // accountService.getTransactions('4675778129910189600000003');
  }
}
