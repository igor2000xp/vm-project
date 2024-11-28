import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePictureComponent } from './single-picture.component';

describe('SinglePictureComponent', () => {
  let component: SinglePictureComponent;
  let fixture: ComponentFixture<SinglePictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglePictureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
