import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastChartComponent } from './past-chart.component';

describe('PastChartComponent', () => {
  let component: PastChartComponent;
  let fixture: ComponentFixture<PastChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PastChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
