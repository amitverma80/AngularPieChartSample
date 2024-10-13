import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart-sample',
  templateUrl: './pie-chart-sample.component.html',
  styleUrls: ['./pie-chart-sample.component.scss'],
})
export class PieChartSampleComponent {
  public myPieChart: any;

  ngOnInit() {
    this.createChart();
  }

  createChart() {
    this.myPieChart = new Chart('MyChart', {
      type: 'pie', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: ['Car 1', 'Car 2', 'Car 3', 'Car 4', 'Car 5', 'Car 6', 'Car 7'],
        datasets: [
          {
            label: 'Car Sales Values',
            data: [300, 240, 100, 432, 253, 34, 100],
            backgroundColor: [
              'red',
              'pink',
              'green',
              'yellow',
              'orange',
              'blue',
              'purple',
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        aspectRatio: 5.5,
      },
    });
  }
}
