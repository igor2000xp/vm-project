import { ChangeDetectionStrategy, Component, Inject, inject, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { FavPicturesComponent } from "../../components/fav-pictures/fav-pictures.component";
import { FavoritesService, ReturnFavInterface } from '@shared/services/favorites.service';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@shared/components/button/button.component';
import { ButtonType } from '@shared/enums/button-types.enum';
import { IconsMap } from '@shared/models/icons.model';
import { ICONS_MAP } from '@core/tokens';

@Component({
  selector: 'app-favorite',
  imports: [MatDividerModule, CommonModule, ButtonComponent],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoriteComponent implements OnInit {
  title = 'Favorite stars!';
  favoriteList: ReturnFavInterface[] = [];
  buttonType = ButtonType;

  favoriteService = inject(FavoritesService);

  constructor(@Inject(ICONS_MAP) public iconsMap: IconsMap) { }

  trackByPicId(index: number, pic: ReturnFavInterface) {
    return `${index}-${pic.id}`;
  }

  resetFivorite() {
    this.favoriteList = [];
    this.favoriteService.clearFavorite();
  }

  ngOnInit(): void {
    this.favoriteList = this.favoriteService.GetFavoriteList();
  }
}
