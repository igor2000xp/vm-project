import { Component, inject, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { FavPicturesComponent } from "../../components/fav-pictures/fav-pictures.component";
import { FavoritesService } from '@shared/services/favorites.service';

@Component({
  selector: 'app-favorite',
  imports: [MatDividerModule, FavPicturesComponent],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss'
})
export class FavoriteComponent implements OnInit {
  title = 'Favorite stars!';
  favoriteService = inject(FavoritesService);

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    // console.log(this.favoriteService.getAllPictureList());

  }
}
