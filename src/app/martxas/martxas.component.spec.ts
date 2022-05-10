import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MartxasComponent } from './martxas.component';

describe('MartxasComponent', () => {
  let component: MartxasComponent;
  let fixture: ComponentFixture<MartxasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MartxasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MartxasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
