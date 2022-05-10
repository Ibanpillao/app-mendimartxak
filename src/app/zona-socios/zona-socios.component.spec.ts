import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaSociosComponent } from './zona-socios.component';

describe('ZonaSociosComponent', () => {
  let component: ZonaSociosComponent;
  let fixture: ComponentFixture<ZonaSociosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonaSociosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonaSociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
