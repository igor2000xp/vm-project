import { inject, Injectable, signal, WritableSignal } from '@angular/core';
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
  private favArraySignal: WritableSignal<ReturnFavInterface[]> = signal([]);
  private allPictureList: string[] = [];
  // to do go to Signals() in FavoriteComponenet
  favLocalStorageService = inject(FavLocalStorageService);
  getPictureBanchService = inject(GetPictureBanchService);

  init() {
    if (!this.favArray.length) {
      this.getAllFavList();
      this.getAllPictureList();
    }
  }


  addFavorite(url: string): void {
    if (!this.favArray.length) {
      this.getAllFavList();
      this.getAllPictureList();
    }

    const id = String(this.allPictureList.indexOf(url));
    const favoriteItem: ReturnFavInterface = { id, url };

    this.favArray.push(favoriteItem);
    this.favArraySignal.update((sig) => {
      sig.push(favoriteItem);
      sig = [...sig];
      return sig;
    });
    this.favArray = checkDuplicateInArrayOfObj(this.favArray);

    this.favLocalStorageService.writeNewFavLocalStorage(this.favArray);
  }

  getAllFavList(): ReturnFavInterface[] {
    if (!this.favArray.length) {
      this.favArray = this.favLocalStorageService.getItemsFromFavoriteLocalStorage();
      this.favArraySignal.set([...this.favArray]);
    }
    return this.favArray;
  }

  getAllFavSignal() {
    return this.favArraySignal();
  }

  getAllPictureList(): string[] {
    const arr = [...pictureArray];
    this.allPictureList = arr.map((item) => DATA_FOLDER + item);
    return this.allPictureList;
  }

  removeFav(id: string): void {
    this.favArray = this.favArray.filter((item) => item.id !== id);
    this.favArraySignal.set([...this.favArray]);
    this.favLocalStorageService.removeItemFromFavoriteLocalStorage(id);
  }

  clearFavorite(): void {
    this.favLocalStorageService.clearLocalStorageFavorite();
    this.favArray = [];
  }
}
