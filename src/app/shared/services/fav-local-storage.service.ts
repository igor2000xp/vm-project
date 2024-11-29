import { Injectable } from '@angular/core';
import { environment } from '@env/environment.development';
import { ReturnFavInterface } from './favorites.service';

@Injectable({
  providedIn: 'root'
})
export class FavLocalStorageService {
  getItemsFromFavoriteLocalStorage(): ReturnFavInterface[] {
    return JSON.parse(localStorage.getItem(environment.KEY_LOCAL_STORAGE) as string) || [];
  }

  writeNewFavLocalStorage(item: ReturnFavInterface[]): void {
    localStorage.setItem(environment.KEY_LOCAL_STORAGE, JSON.stringify(item));
  }

  removeItemFromFavoriteLocalStorage(id: string): ReturnFavInterface[] {
    let temp = this.getItemsFromFavoriteLocalStorage();
    temp = temp.filter((item) => item.id !== id);
    localStorage.setItem(environment.KEY_LOCAL_STORAGE, JSON.stringify(temp));

    return temp;
  }

  clearLocalStorageFavorite() {
    localStorage.removeItem(environment.KEY_LOCAL_STORAGE);
  }
}
