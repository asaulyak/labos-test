import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsFavoriteComponent } from './patients-favorite.component';

describe('PatientsFavoriteComponent', () => {
  let component: PatientsFavoriteComponent;
  let fixture: ComponentFixture<PatientsFavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsFavoriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
