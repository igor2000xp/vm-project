import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable } from 'rxjs';
import { DATA_FOLDER, pictureArray } from 'src/app/layout/data/picData';
import { PictureObjInterface } from 'src/app/layout/models/picture.model';
import { environment as env } from 'src/environments/environment.development';

interface ReturnInterface {
  isLoading: boolean;
  items: PictureObjInterface[];
}

@Injectable({
  providedIn: 'root'
})
export class GetPictureBanchService {
  picBanch: string[] = []; // It is to help you remember the current array of pictures.
  private banchSub = new BehaviorSubject<ReturnInterface>({ isLoading: false, items: [] });

  constructor() { }



  getBanch(): Observable<ReturnInterface> {
    // To select random items, picPortion is helpful to have access to the entire collection of images.
    const picPortion: string[] = this.getPicArray();
    this.picBanch = this.checkLengthAndCut(this.picBanch);

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

  private checkLengthAndCut(picBanch: string[]) {
    if (picBanch.length > env.NUMBER_PIC_IN_BANCH) {
      picBanch = picBanch.slice(env.NUMBER_PIC_ON_PAGE);
    }
    return picBanch;
  }

  private getPicArray() {
    return [...pictureArray];
  }
}
