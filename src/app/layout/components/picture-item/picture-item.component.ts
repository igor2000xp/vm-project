import { ChangeDetectionStrategy, Component, EventEmitter, Inject, inject, Input } from '@angular/core';
import { ButtonComponent } from '@shared/components/button/button.component';
import { FavButtonColor } from '@shared/enums/fav-button-color';
import { FavoriteButtonDirective } from '../../directives/favorite-button.directive';
import { FavoritesService } from '@shared/services/favorites.service';
import { ButtonType } from '@shared/enums/button-types.enum';
import { ICONS_MAP } from '@core/tokens';
import { IconsMap } from '@shared/models/icons.model';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-picture-item',
  imports: [ButtonComponent, FavoriteButtonDirective, RouterModule],
  templateUrl: './picture-item.component.html',
  styleUrl: './picture-item.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PictureItemComponent {
  @Input() url!: string;
  @Input() fav!: unknown;
  @Input() isPictireListBlock!: boolean;

  buttonType = ButtonType;
  color = "violet";
  colorChange = new EventEmitter<FavButtonColor>();
  photosUrl = '';

  fs = inject(FavoritesService);
  router = inject(Router);

  constructor(@Inject(ICONS_MAP) public iconsMap: IconsMap) { };

  addToFivorite(url: string) {
    this.fs.addFavorite(url);
  }

  onClick() {
    const arrPic = this.fs.getAllPictureList();
    const id = String(arrPic.indexOf(this.url));
    this.router.navigateByUrl('/photos/' + id);
  }

}
