import { Injectable } from '@angular/core';
import { ReturnPictureInterface } from '@shared/models/return-picture.model';
import { BehaviorSubject, debounceTime, delay, distinctUntilChanged, map, Observable, switchMap, take, tap, throttleTime } from 'rxjs';
import { DATA_FOLDER, pictureArray } from 'src/app/layout/data/picData';
import { PictureObjInterface } from 'src/app/layout/models/picture.model';
import { environment as env } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GetPictureBanchService {
  private picBanch: string[] = []; // It is to help you remember the current array of pictures.
  private banchSub = new BehaviorSubject<ReturnPictureInterface>({ isLoading: false, items: [] });

  constructor() { }

  getBanch(): Observable<ReturnPictureInterface> {
    // To select random items, picPortion is helpful to have access to the entire collection of images.
    const picPortion: string[] = this.getPicArray();

    for (let i = 0; i < env.NUMBER_PIC_ON_PAGE; i += 1) {
      const index = Math.floor(Math.random() * 50);
      this.picBanch.push(picPortion[index]);
    }
    const banch: PictureObjInterface[] = this.picBanch.map((item) => {
      let index = Math.floor(Math.random() * 10000);
      return { index, url: DATA_FOLDER + (item) }
    });

    this.banchSub.next({ isLoading: false, items: banch });
    return this.banchSub.asObservable().pipe(delay(1000));
  }

  private getPicArray() {
    return [...pictureArray];
  }

  getPicBanchArray() {
    return this.picBanch;
  }

  getBanchByScrollingEnd(start: Observable<string>) {
    start.pipe(
      debounceTime(1000),
      map((item) => {
        this.getBanch();
        return item;
      })
    ).subscribe();
  }
}
