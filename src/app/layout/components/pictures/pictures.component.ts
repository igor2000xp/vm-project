// Example https://stackblitz.com/edit/stackblitz-starters-mdpftu
import { ChangeDetectionStrategy, Component, inject, Inject, input, OnInit, signal, WritableSignal } from '@angular/core';
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
// import { FavButtonDirective } from '../../directive/fav-button.directive';
import { FavoritesService } from '@shared/services/favorites.service';
import { FavoriteButtonDirective } from '../../directives/favorite-button.directive';

@Component({
  selector: 'app-pictures',
  imports: [CommonModule, MatIconModule, MatProgressSpinnerModule, ScrollNearEndDirective, ButtonComponent, FavoriteButtonDirective],
  standalone: true,
  templateUrl: './pictures.component.html',
  styleUrl: './pictures.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PicturesComponent implements OnInit {
  picSignal: WritableSignal<PictureObjInterface[]> = signal([]);
  isLoading: Boolean | undefined;
  buttonType = ButtonType;
  isFavoriteSig: WritableSignal<boolean> = signal(false);
  color = "violet";
  // favColorSignal: WritableSignal<string> = signal('white');

  private getPictureBunch = inject(GetPictureBanchService);
  private fs = inject(FavoritesService);

  constructor(
    @Inject(ICONS_MAP) public iconsMap: IconsMap
  ) {
    this.isLoading = true;
    const temp = this.getPictureBunch.getBanch().pipe(
      map((res) => {
        this.isLoading = res.isLoading;
        return res.items;
      })
    )
    const sig = signal(toSignal(temp));
    this.picSignal = sig() as WritableSignal<PictureObjInterface[]>;
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.fs.init();
  }
  // ngOnInit(): void {
  //   // throw new Error('Method not implemented.');
  //   // this.isFavoriteSig.
  //   console.log('onInit');
  // }

  getScreenArraySignal() {
    this.isLoading = true;
    this.getPictureBunch.getBanch();
  }

  onNearEndScroll() {
    this.isLoading = true;
    console.log(
      '%c [ScrollNearEndDirective]: emit',
      'color: #bada55; font-size: 20px'
    );
    this.getPictureBunch.getBanchByScrollingEnd(of('start'));
  }

  trackByFn(index: number, item: PictureObjInterface) {
    return `${index}=${item.index}=${item.url}`;
  }

  addToFivorite(pic: PictureObjInterface) {
    // this.favColorSignal.set('red');
    // this.favColor = 'red';
    this.fs.addFavorite(pic);
  }
  // @HostListener('window:scroll', [])
  // onScroll() {
  //   if (window.scrollY >= (document.body.offsetHeight) * 2) {
  //     const start$ = of('start')
  //     // this.getPictureBunch.getBanchScrolling(of('start'));
  //   }
  // }

}
