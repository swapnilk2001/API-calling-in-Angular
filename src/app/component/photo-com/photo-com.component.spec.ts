import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoComComponent } from './photo-com.component';

describe('PhotoComComponent', () => {
  let component: PhotoComComponent;
  let fixture: ComponentFixture<PhotoComComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoComComponent]
    });
    fixture = TestBed.createComponent(PhotoComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
