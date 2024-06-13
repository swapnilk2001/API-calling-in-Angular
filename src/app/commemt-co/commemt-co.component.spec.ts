import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommemtCoComponent } from './commemt-co.component';

describe('CommemtCoComponent', () => {
  let component: CommemtCoComponent;
  let fixture: ComponentFixture<CommemtCoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommemtCoComponent]
    });
    fixture = TestBed.createComponent(CommemtCoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
