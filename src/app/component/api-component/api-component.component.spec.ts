import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiComponentComponent } from './api-component.component';

describe('ApiComponentComponent', () => {
  let component: ApiComponentComponent;
  let fixture: ComponentFixture<ApiComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiComponentComponent]
    });
    fixture = TestBed.createComponent(ApiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
