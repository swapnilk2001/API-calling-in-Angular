import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorComComponent } from './error-com.component';

describe('ErrorComComponent', () => {
  let component: ErrorComComponent;
  let fixture: ComponentFixture<ErrorComComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorComComponent]
    });
    fixture = TestBed.createComponent(ErrorComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
