import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable } from 'rxjs';
import { DATA_FOLDER, pictureArray } from 'src/app/layout/data/picData';
import { PictureInterface } from 'src/app/layout/models/picture.model';
import { environment as env } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GetPictureBanchService {
  private picBanch: string[] = [];
  private banchSub = new BehaviorSubject<PictureInterface[]>([]);

  constructor() { }

  getBanch(banch: PictureInterface[]): Observable<PictureInterface[]> {
    this.getPicArray();
    this.checkItemNumber(banch);
    for (let i = 0; i < env.NUMBER_PIC_ON_PAGE; i += 1) {
      const index = Math.floor(Math.random() * 50);
      banch.push({ index, url: DATA_FOLDER + (this.picBanch[index]) });
    }
    this.banchSub.next(banch);
    return this.banchSub.asObservable().pipe(delay(3000));
  }

  private checkItemNumber(picBanch: PictureInterface[]) {
    if (picBanch.length > env.NUMBER_PIC_IN_BANCH) {
      picBanch = picBanch.slice(env.NUMBER_PIC_IN_BANCH);
    }
    return picBanch;
  }

  private getPicArray() {
    this.picBanch = [...pictureArray];
  }
}
