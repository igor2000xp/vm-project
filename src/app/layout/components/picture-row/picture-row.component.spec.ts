import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureRowComponent } from './picture-row.component';

describe('PictureRowComponent', () => {
  let component: PictureRowComponent;
  let fixture: ComponentFixture<PictureRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PictureRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PictureRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
