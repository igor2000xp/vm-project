import { Routes } from '@angular/router';
import { MainComponent } from './layout/pages/main/main.component';
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
    component: MainComponent,
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
