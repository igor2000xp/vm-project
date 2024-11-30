import { computed, Directive, effect, ElementRef, EventEmitter, inject, Input, OnInit, Output, Renderer2, Signal } from '@angular/core';
import { FavoritesService } from '@shared/services/favorites.service';
import { FavButtonColor } from '@shared/enums/fav-button-color';

@Directive({
  selector: '[appFavoriteButton]',
  standalone: true,
})
export class FavoriteButtonDirective {
  @Input() picUrl!: string;
  @Input() color!: string;
  @Output() colorChange = new EventEmitter<string>();

  currentColor: string = 'violet';

  el = inject(ElementRef);
  renderer = inject(Renderer2);
  fs = inject(FavoritesService);

  constructor() {
    const temp: Signal<FavButtonColor> = computed(() => {
      const temp0 = this.fs.getAllFavSignal().filter((item) => item.url === this.picUrl)[0] || {
        id: '', url: ''
      }
      return temp0.id ? FavButtonColor.red : FavButtonColor.violet;
    });
    effect(() => {
      this.colorChange.emit(temp());
    })
  }
}
