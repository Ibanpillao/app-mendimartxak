import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltratrailsComponent } from './ultratrails.component';

describe('UltratrailsComponent', () => {
  let component: UltratrailsComponent;
  let fixture: ComponentFixture<UltratrailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltratrailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UltratrailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
