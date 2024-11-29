import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturesComponent } from './pictures.component';

describe('PictureComponent', () => {
  let component: PicturesComponent;
  let fixture: ComponentFixture<PicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PicturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
