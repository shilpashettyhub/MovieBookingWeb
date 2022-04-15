import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieratingpageComponent } from './movieratingpage.component';

describe('MovieratingpageComponent', () => {
  let component: MovieratingpageComponent;
  let fixture: ComponentFixture<MovieratingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieratingpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieratingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
