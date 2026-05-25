import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent1CompInznComponent } from './parent1-comp-inzn.component';

describe('Parent1CompInznComponent', () => {
  let component: Parent1CompInznComponent;
  let fixture: ComponentFixture<Parent1CompInznComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Parent1CompInznComponent]
    });
    fixture = TestBed.createComponent(Parent1CompInznComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
