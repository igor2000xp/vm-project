import { ChangeDetectionStrategy, Component, Inject, inject, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { FavoritesService, ReturnFavInterface } from '@shared/services/favorites.service';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@shared/components/button/button.component';
import { ButtonType } from '@shared/enums/button-types.enum';
import { IconsMap } from '@shared/models/icons.model';
import { ICONS_MAP } from '@core/tokens';
import { RouterModule } from '@angular/router';
import { PictureItemComponent } from '../../components/picture-item/picture-item.component';

@Component({
  selector: 'app-favorite',
  imports: [MatDividerModule, CommonModule, ButtonComponent, RouterModule, PictureItemComponent],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoriteComponent implements OnInit {
  title = 'Favorite stars!';
  favoriteList: ReturnFavInterface[] = [];
  buttonType = ButtonType;
  isPictireListBlock: boolean = false;
  urlPic: string = '';

  favoriteService = inject(FavoritesService);

  constructor(@Inject(ICONS_MAP) public iconsMap: IconsMap) { }

  resetFivorite() {
    this.favoriteList = [];
    this.favoriteService.clearFavorite();
  }

  ngOnInit(): void {
    this.favoriteList = this.favoriteService.getAllFavList();
  }
}
