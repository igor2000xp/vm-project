import { ChangeDetectionStrategy, Component, Inject, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ICONS_MAP } from '@core/tokens';
import { ButtonComponent } from '@shared/components/button/button.component';
import { ButtonType } from '@shared/enums/button-types.enum';
import { IconsMap } from '@shared/models/icons.model';
import { FavoritesService, ReturnFavInterface } from '@shared/services/favorites.service';

@Component({
  selector: 'app-single-pictures',
  imports: [ButtonComponent, RouterModule],
  templateUrl: './single-picture.component.html',
  styleUrl: './single-picture.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SinglePictureComponent implements OnInit {
  buttonType = ButtonType;
  photoId: string = '';
  favItemForView: ReturnFavInterface = { id: '', url: '' };

  route = inject(ActivatedRoute);
  favoriteService = inject(FavoritesService);
  router = inject(Router);

  constructor(@Inject(ICONS_MAP) public iconsMap: IconsMap) { }

  removeFav(): void {
    this.favoriteService.removeFav(this.photoId);
    this.router.navigateByUrl('/favorites');
  }

  ngOnInit(): void {
    this.photoId = this.route.snapshot.params['id'];
    const favList: ReturnFavInterface[] = this.favoriteService.getAllFavList();
    this.favItemForView = favList.filter((item) => item.id === this.photoId)[0];
  }
}
