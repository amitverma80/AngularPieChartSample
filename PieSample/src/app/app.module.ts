import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { PieChartSampleComponent } from './pie-chart-sample/pie-chart-sample.component';
@NgModule({
  declarations: [
    AppComponent,
    PieChartSampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaseChartDirective,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
