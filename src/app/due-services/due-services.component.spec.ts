import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DueServicesComponent } from './due-services.component';

describe('DueServicesComponent', () => {
  let component: DueServicesComponent;
  let fixture: ComponentFixture<DueServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DueServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DueServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
