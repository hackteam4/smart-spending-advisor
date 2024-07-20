import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarChartComponent } from '../../components/bar-chart/bar-chart.component';
import { IntroCardComponent } from '../../components/intro-card/intro-card.component';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { PastChartComponent } from '../../components/past-chart/past-chart.component';
import { PieChartComponent } from '../../components/pie-chart/pie-chart.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NavigationComponent,
    RouterOutlet,
    PieChartComponent,
    BarChartComponent,
    PastChartComponent,
    IntroCardComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
