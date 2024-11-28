import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { FavPicturesComponent } from "../../components/fav-pictures/fav-pictures.component";

@Component({
  selector: 'app-favorite',
  imports: [MatDividerModule, FavPicturesComponent],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss'
})
export class FavoriteComponent {
  title = 'Favorite stars!'

}
