import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavPicturesComponent } from './fav-pictures.component';

describe('FavPicturesComponent', () => {
  let component: FavPicturesComponent;
  let fixture: ComponentFixture<FavPicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavPicturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
