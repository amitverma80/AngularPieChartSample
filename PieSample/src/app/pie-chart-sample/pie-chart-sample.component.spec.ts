import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartSampleComponent } from './pie-chart-sample.component';

describe('PieChartSampleComponent', () => {
  let component: PieChartSampleComponent;
  let fixture: ComponentFixture<PieChartSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartSampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieChartSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
