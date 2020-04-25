import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearReportesComponent } from './crear-reportes.component';

describe('CrearReportesComponent', () => {
  let component: CrearReportesComponent;
  let fixture: ComponentFixture<CrearReportesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearReportesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
