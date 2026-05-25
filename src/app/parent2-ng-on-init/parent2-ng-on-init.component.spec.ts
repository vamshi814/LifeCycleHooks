import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent2NgOnInitComponent } from './parent2-ng-on-init.component';

describe('Parent2NgOnInitComponent', () => {
  let component: Parent2NgOnInitComponent;
  let fixture: ComponentFixture<Parent2NgOnInitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Parent2NgOnInitComponent]
    });
    fixture = TestBed.createComponent(Parent2NgOnInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
