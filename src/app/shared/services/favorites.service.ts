import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PictureObjInterface } from 'src/app/layout/models/picture.model';
import { GetPictureBanchService } from './get-picture-banch.service';
import { DATA_FOLDER, pictureArray } from 'src/app/layout/data/picData';

export interface ReturnFavInterface {
  id: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favArray: ReturnFavInterface[] = [];
  private favArraySet = new Set<ReturnFavInterface>();
  private allPictureList: string[] = [];
  private favBanchSub = new BehaviorSubject<ReturnFavInterface[]>([]);

  constructor(private getPictureBanchService: GetPictureBanchService) { }

  addFavorite(pic: PictureObjInterface) {
    const id = String(this.allPictureList.indexOf(pic.url));
    const favoriteItem: ReturnFavInterface = { id, url: pic.url };
    this.favArray = [... this.favArraySet.add(favoriteItem)];

    console.log(this.favArray);
    return this.favArray;
  }

  getAllPictureList() {
    const arr = [...pictureArray];
    this.allPictureList = arr.map((item) => DATA_FOLDER + item);
    return this.allPictureList;
  }


  GetFavoriteList() {
    // to do may be Observable- Subject for signal()
    return this.favArray;
  }

  // ngOnInit(): void {
  //   const arr = [...pictureArray];
  //   this.allPictureList = arr.map((item) => DATA_FOLDER + item);
  // }
}
