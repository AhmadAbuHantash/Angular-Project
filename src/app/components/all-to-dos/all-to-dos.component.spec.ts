import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllToDosComponent } from './all-to-dos.component';

describe('AllToDosComponent', () => {
  let component: AllToDosComponent;
  let fixture: ComponentFixture<AllToDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllToDosComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllToDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
