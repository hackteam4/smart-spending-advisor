import { Component } from '@angular/core';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { RouterOutlet } from '@angular/router';
import { PieChartComponent } from "../../components/pie-chart/pie-chart.component";
import { BarChartComponent } from "../../components/bar-chart/bar-chart.component";
import { PastChartComponent } from "../../components/past-chart/past-chart.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavigationComponent, RouterOutlet, PieChartComponent, BarChartComponent, PastChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
