import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss',
})
export class PieChartComponent implements OnInit {
  chart?: any;
  @Input() data?: Number[] = [300, 70, 200];
  @Input() title?: string = 'Performance';

  ngOnInit() {
    this.createchart();
  }

  createchart() {
    this.chart = new Chart('PieChart', {
      type: 'doughnut', //this denotes tha type of chart
      data: {
        // values on X-Axis
        // labels: ,
        datasets: [
          {
            label: 'My First Dataset',
            data: this.data,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
            ],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              display: false,
            },
            border: {
              display: false,
            },
            stacked: true,
          },
          y: {
            grid: {
              display: false,
            },
            border: {
              display: false,
            },
            ticks: {
              display: false,
            },
          },
        },
        plugins: {
          tooltip: {
            enabled: true,
          },
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              color: 'rgb(255, 99, 132)',
            },
          },
          title: {
            display: true,
            text: this.title,
            position: 'top',
            font: {
              weight: 500,
              size: 20,
              family: 'rubik',
              style: 'normal',
            },
          },
        },
      },
    });
  }
}
