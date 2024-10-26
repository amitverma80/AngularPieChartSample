import { Component, QueryList, ViewChildren } from '@angular/core';
import { PieChartSampleComponent } from './pie-chart-sample/pie-chart-sample.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'PieSample';

  @ViewChildren(PieChartSampleComponent) myPieChart!: QueryList<PieChartSampleComponent>;
  chart1: string="chart1";
  chart2: string="chart2";
  chart3: string="chart3";

/**
 * After the view initializes, this method loads a chart for each component
 * in the `myPieChart` list. This ensures that all charts are rendered
 * appropriately once the view is ready.
 */
  ngAfterViewInit() {
    this.myPieChart.forEach((element) => {
      element.loadChart();
    });
  }

  /**
   * Destroys all existing charts and recreates them.
   *
   * This is necessary because ng2-charts is not designed to be destroyed and recreated.
   * If we just call `loadChart()` on each component, it will try to create a new chart
   * while the old one is still present, which will cause a memory leak.
   *
   * So we first destroy the old charts by calling `removeItemsWithName()`, and then
   * we create the new charts by calling `loadChart()`.
   */
  loadChart(){
    this.myPieChart.forEach((element) => {
      element.removeItemsWithName();
    });
    this.myPieChart.forEach((element) => {
      element.loadChart();
    });
  }
}
