# How to create Pie Charts with Angular and Chart.js.

## Steps

### 1. Install Node latest version from

https://nodejs.org/en/download/prebuilt-installer

### 2. Install Angular latest version (Using CMD)

```
npm i @angular/cli
```

### 3. Check Angular version (Using CMD)

```
ng v
```

### This will appear like below.

![Screenshot for Angular CLI](/images/3.1.png)

### 4. Install VS Coode from https://code.visualstudio.com/

### 5. Open CMD in required directory and run below command

```
ng new 	<your_project_name>


Update setting according to your need. The current project has below settings.
a) 	? Would you like to add Angular routing? (y/N) - y
b)  Which stylesheet format would you like to use?
  CSS
> SCSS   [ https://sass-lang.com/documentation/syntax#scss                ]
  Sass   [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
  Less   [ http://lesscss.org
```

Open Project Folder in VS Code and run below command in terminal

```
ng s -o
```

This will run Angular appliction on **Port 4200**.

**Make sure that dependencies should be like below in package.json**

```
"dependencies": {
    "@angular/animations": "^18.2.8",
    "@angular/cdk": "^17.0.0",
    "@angular/common": "^18.2.8",
    "@angular/compiler": "^18.2.8",
    "@angular/core": "^18.2.8",
    "@angular/forms": "^18.2.8",
    "@angular/platform-browser": "^18.2.8",
    "@angular/platform-browser-dynamic": "^18.2.8",
    "@angular/router": "^18.2.8",
    "ng2-charts": "^6.0.1",
    "rxjs": "~7.5.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.14.10"
  }
```

### Install ng2-Chart library

```
npm install ng2-charts --save
npm install chart.js --save
```

### Create Child Component for pie Chart

```
ng g c pie-chart-sample
```

> pie-chart-sample.html
```
<div class="chart-container" id="chart-container">
  <canvas [id]="chartId">{{ myPieChart }}</canvas>
</div>

```

> pie-chart-sample.ts
```
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

  removeItemsWithName(): void {
    if (this.myPieChart) {
       let chart = this.myPieChart;
       chart.destroy();
    }
  }
  
  loadChart() {
    this.createChart();
  }

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

```

### Use appComponent as Parent 
> app.component.html
```
<button (click)="loadChart()">Refresh Chart</button>

<app-pie-chart-sample [chartId]="chart1"></app-pie-chart-sample>
<app-pie-chart-sample [chartId]="chart2"></app-pie-chart-sample>
<app-pie-chart-sample [chartId]="chart3"></app-pie-chart-sample>
```

> app.component.ts
```
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
```

> Run the application using below command
```
ng s -o
```
### This will appear like below.

![Screenshot for Angular CLI](/images/FinalChart.png)
