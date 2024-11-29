import { inject, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PictureObjInterface } from 'src/app/layout/models/picture.model';
import { GetPictureBanchService } from './get-picture-banch.service';
import { DATA_FOLDER, pictureArray } from 'src/app/layout/data/picData';
import { chackDuplicateInArrayOfObj as checkDuplicateInArrayOfObj } from '@shared/helps/check-duplicate-arr-obj';
import { FavLocalStorageService } from './fav-local-storage.service';

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
  // to do go to Signals() in FavoriteComponenet
  // private favBanchSub = new BehaviorSubject<ReturnFavInterface[]>([]);
  favLocalStorageService = inject(FavLocalStorageService);
  getPictureBanchService = inject(GetPictureBanchService);

  addFavorite(pic: PictureObjInterface): void {
    if (!this.favArray.length) {
      this.getAllFavList();
      this.getAllPictureList();
    }
    const id = String(this.allPictureList.indexOf(pic.url));
    const favoriteItem: ReturnFavInterface = { id, url: pic.url };

    this.favArray.push(favoriteItem);
    this.favArray = checkDuplicateInArrayOfObj(this.favArray);

    this.favLocalStorageService.writeNewFavLocalStorage(this.favArray);
  }

  getAllFavList(): ReturnFavInterface[] {
    if (!this.favArray.length) this.favArray = this.favLocalStorageService.getItemsFromFavoriteLocalStorage();
    return this.favArray;
  }

  getAllPictureList(): string[] {
    const arr = [...pictureArray];
    this.allPictureList = arr.map((item) => DATA_FOLDER + item);
    return this.allPictureList;
  }

  removeFav(id: string): void {
    this.favLocalStorageService.removeItemFromFavoriteLocalStorage(id);
  }

  clearFavorite(): void {
    this.favLocalStorageService.clearLocalStorageFavorite();
    this.favArray = [];
  }
}
