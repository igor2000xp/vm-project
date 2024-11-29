import { ChangeDetectionStrategy, Component, Inject, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ICONS_MAP } from '@core/tokens';
import { ButtonComponent } from '@shared/components/button/button.component';
import { ButtonType } from '@shared/enums/button-types.enum';
import { IconsMap } from '@shared/models/icons.model';
import { FavoritesService, ReturnFavInterface } from '@shared/services/favorites.service';

@Component({
  selector: 'app-single-pictures',
  imports: [ButtonComponent],
  templateUrl: './single-picture.component.html',
  styleUrl: './single-picture.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SinglePictureComponent implements OnInit {
  buttonType = ButtonType;
  photoId: string = '';
  favList: ReturnFavInterface[] = [];
  route = inject(ActivatedRoute);
  favoriteService = inject(FavoritesService);
  favItemForView: ReturnFavInterface = { id: '', url: '' };

  constructor(@Inject(ICONS_MAP) public iconsMap: IconsMap) { }

  removeFav() {
    // to do implenent remove fav  in FavoriteService

    // {id: "-1", url: "assets/pictures/926-200x300.jpg"} ??????????????
    this.favoriteService.removeFav(this.photoId);
    // to do navigate to Fav page

  }

  ngOnInit() {
    this.photoId = this.route.snapshot.params['id'];
    this.favList = this.favoriteService.getAllFavList();
    this.favItemForView = this.favList.filter((item) => item.id === this.photoId)[0];
  }
}
