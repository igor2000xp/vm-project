import { Routes } from '@angular/router';
import { MainComponent } from './layout/pages/main/main.component';
import { FavoriteComponent } from './layout/pages/favorite/favorite.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    component: MainComponent,
    pathMatch: 'full',
  },
  {
    path: 'favorites',
    component: FavoriteComponent,
  }
];
