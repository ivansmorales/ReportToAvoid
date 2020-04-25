import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoradoComponent } from './valorado.component';

describe('ValoradoComponent', () => {
  let component: ValoradoComponent;
  let fixture: ComponentFixture<ValoradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValoradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValoradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
