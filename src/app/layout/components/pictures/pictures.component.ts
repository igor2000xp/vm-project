// Example https://stackblitz.com/edit/stackblitz-starters-mdpftu
import { ChangeDetectionStrategy, Component, HostListener, inject, Inject, signal, WritableSignal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { GetPictureBanchService } from '@shared/services/get-picture-banch.service';
import { PictureObjInterface } from '../../models/picture.model';
import { map, of } from 'rxjs';
import { ScrollNearEndDirective } from '@core/directives/scroll-near-end.directive';
import { ButtonComponent } from '@shared/components/button/button.component';
import { ButtonType } from '@shared/enums/button-types.enum';
import { IconsMap } from '@shared/models/icons.model';
import { ICONS_MAP } from '@core/tokens';
import { FavButtonDirective } from '../../directive/fav-button.directive';
import { FavoritesService } from '@shared/services/favorites.service';

@Component({
  selector: 'app-pictures',
  imports: [CommonModule, MatIconModule, MatProgressSpinnerModule, ScrollNearEndDirective, ButtonComponent, FavButtonDirective],
  standalone: true,
  templateUrl: './picture.component.html',
  styleUrl: './picture.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PictureComponent {
  picSignal: WritableSignal<PictureObjInterface[]> = signal([]);
  isLoading: Boolean | undefined;
  buttonType = ButtonType;

  private getPictureBanch = inject(GetPictureBanchService);
  private favoriteService = inject(FavoritesService);

  constructor(
    // private getPictureBanch: GetPictureBanchService,
    @Inject(ICONS_MAP) public iconsMap: IconsMap
  ) {
    this.isLoading = true;
    const temp = this.getPictureBanch.getBanch().pipe(
      map((res) => {
        this.isLoading = res.isLoading;
        return res.items;
      })
    )
    const sig = signal(toSignal(temp));
    this.picSignal = sig() as WritableSignal<PictureObjInterface[]>;
  }

  getScreenArraySignal() {
    this.isLoading = true;
    this.getPictureBanch.getBanch();
  }

  onNearEndScroll() {
    this.isLoading = true;
    console.log(
      '%c [ScrollNearEndDirective]: emit',
      'color: #bada55; font-size: 20px'
    );
    this.getPictureBanch.getBanchByScrollingEnd(of('start'));
  }

  trackByFn(index: number, item: PictureObjInterface) {
    return `${index}=${item.index}=${item.url}`;
  }

  addToFivorite(pic: PictureObjInterface) {
    this.favoriteService.addFavorite(pic);
  }
  // @HostListener('window:scroll', [])
  // onScroll() {
  //   if (window.scrollY >= (document.body.offsetHeight) * 2) {
  //     const start$ = of('start')
  //     // this.getPictureBanch.getBanchScrolling(of('start'));
  //   }
  // }
}
