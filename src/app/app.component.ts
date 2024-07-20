import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TransactionAggregatorService } from './services/transaction-aggregator/transaction-aggregator.service';
import { mockAIClassifiedTransaction } from './mocks/AIClassifiedTransaction';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent,
    RouterLink,
    DashboardComponent,
    ProfileComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    private transactionAggregatorService: TransactionAggregatorService
  ) {
    this.transactionAggregatorService.aggregateTransactions(
      mockAIClassifiedTransaction
    );
  }
  title = 'financial-spending-advisor';
}
