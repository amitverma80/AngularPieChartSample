import { Component, QueryList, ViewChildren } from '@angular/core';
import { PieChartSampleComponent } from './pie-chart-sample/pie-chart-sample.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'PieSample';

  names = ['vas', 'sil'];

  @ViewChildren(PieChartSampleComponent) myPieChart!: QueryList<PieChartSampleComponent>;
  chart1: string="chart1";
  chart2: string="chart2";
  chart3: string="chart3";

  ngAfterViewInit() {
    this.myPieChart.forEach((element) => {
      element.loadChart();
    });
  }

  loadChart(){
    this.myPieChart.forEach((element) => {
      element.removeItemsWithName();
    });
    this.myPieChart.forEach((element) => {
      element.loadChart();
    });
  }
}
