import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PictureObjInterface } from 'src/app/layout/models/picture.model';
import { GetPictureBanchService } from './get-picture-banch.service';
import { DATA_FOLDER, pictureArray } from 'src/app/layout/data/picData';
import { chackDuplicateInArrayOfObj } from '@shared/helps/check-duplicate-arr-obj';

export interface ReturnFavInterface {
  id: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favArray: ReturnFavInterface[] = [];
  private allPictureList: string[] = [];
  private favBanchSub = new BehaviorSubject<ReturnFavInterface[]>([]);

  constructor(private getPictureBanchService: GetPictureBanchService) { }

  addFavorite(pic: PictureObjInterface) {
    if (!this.favArray.length) this.getAllPictureList();
    console.log(this.allPictureList[0]);

    const id = String(this.allPictureList.indexOf(pic.url));
    const favoriteItem: ReturnFavInterface = { id, url: pic.url };
    this.favArray.push(favoriteItem);
    this.favArray = chackDuplicateInArrayOfObj(this.favArray);

    // to do - create service local storage
    localStorage.setItem('favoriteList', JSON.stringify(this.favArray));

    console.log(this.favArray);
    return this.favArray;
  }

  private getAllPictureList() {
    // to do - create service local storage
    this.favArray = JSON.parse(localStorage.getItem('favoriteList') as string) || [... this.favArray];
    const arr = [...pictureArray];
    this.allPictureList = arr.map((item) => DATA_FOLDER + item);
    return this.allPictureList;
  }


  GetFavoriteList() {
    // to do may be Observable- Subject for signal()
    return this.favArray;
  }

}
