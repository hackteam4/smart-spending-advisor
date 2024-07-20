import { Component } from '@angular/core';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { ProfileComponent } from '../../pages/profile/profile.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [DashboardComponent, ProfileComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {}
