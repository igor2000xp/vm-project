import { Routes } from '@angular/router';
import { MainPhotosComponent } from './layout/pages/main-photos/main-photos.component';
import { FavoriteComponent } from './layout/pages/favorite/favorite.component';
import { SinglePictureComponent } from './layout/pages/single-picture/single-picture.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'photos',
    pathMatch: 'full',
  },
  {
    path: 'photos',
    component: MainPhotosComponent,
  },
  {
    path: 'photos/:id',
    component: SinglePictureComponent,
  },
  {
    path: 'favorites',
    component: FavoriteComponent,
  }
];
