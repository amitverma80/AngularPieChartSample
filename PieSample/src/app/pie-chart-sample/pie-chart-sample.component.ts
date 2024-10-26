import { Component, Input } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart-sample',
  templateUrl: './pie-chart-sample.component.html',
  styleUrls: ['./pie-chart-sample.component.scss'],
})
export class PieChartSampleComponent {
  myPieChart: any = [];
  @Input() chartId!: string;

  constructor() {}

  /**
   * Removes the chart with the given name if it exists.
   *
   * This is necessary because ng2-charts is not designed to be destroyed and recreated.
   * If we just call `loadChart()` on each component, it will try to create a new chart
   * while the old one is still present, which will cause a memory leak.
   *
   * So we first destroy the old charts by calling `removeItemsWithName()`, and then
   * we create the new charts by calling `loadChart()`.
   */
  removeItemsWithName(): void {
    if (this.myPieChart) {
       let chart = this.myPieChart;
       chart.destroy();
    }
  }


  /**
   * Creates a new chart. This is called by the parent component.
   *
   * We call `createChart()` instead of directly loading the chart here because
   * `createChart()` will be called again when the chart is refreshed.
   */
  loadChart() {
    this.createChart();
  }

  /**
   * Creates and initializes a pie chart using the Chart.js library.
   *
   * The chart is configured with a specific set of labels and datasets representing
   * car sales values. It uses distinct background colors for each segment and has
   * a hover offset effect.
   *
   * The chart is rendered in the HTML element associated with `chartId` and is
   * stored in the `myPieChart` property for future reference or manipulation.
   */
  createChart() {
    let chart = new Chart(this.chartId, {
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
        aspectRatio: 8.5,
      },
    });
    this.myPieChart = chart;
  }
}
