import { computed, Directive, effect, ElementRef, EventEmitter, inject, Input, OnInit, Output, Renderer2, Signal, signal, WritableSignal } from '@angular/core';
import { ReturnPictureInterface } from '@shared/models/return-picture.model';
import { PictureObjInterface } from '../models/picture.model';
import { FavoritesService } from '@shared/services/favorites.service';
import { FavButtonColor } from '@shared/enums/fav-button-color';

@Directive({
  selector: '[appFavoriteButton]',
  standalone: true,
})
export class FavoriteButtonDirective implements OnInit {
  @Input() picUrl!: string;
  @Input() color!: string;
  @Output() colorChange = new EventEmitter<string>();

  currentColor: string = 'violet';

  el = inject(ElementRef);
  renderer = inject(Renderer2);
  fs = inject(FavoritesService);

  constructor() {
    const temp: Signal<FavButtonColor> = computed(() => {
      // return (this.fs.getAllFavSignal().filter((item) => item.url === this.picUrl)[0] || { id: '', url: '' }).id ? FavButtonColor.red : FavButtonColor.violet;
      const temp0 = this.fs.getAllFavSignal().filter((item) => item.url === this.picUrl)[0] || {
        id: '', url: ''
      }
      // console.log(temp0);
      return temp0.id ? FavButtonColor.red : FavButtonColor.violet;
    })
    effect(() => {
      // (temp() === 'red')? 'red' : 'violet' ;

      console.log(temp())
      this.colorChange.emit(temp());
    })
  }


  ngOnInit(): void {
    // const temp: Signal<FavButtonColor> = computed(() => {
    //   return (this.fs.getAllFavSignal().filter((item) => item.url === this.picUrl)[0] || { id: '', url: '' }).id ? FavButtonColor.red : FavButtonColor.violet;
    // })
    // effect(() => {
    //   // (temp() === 'red')? 'red' : 'violet' ;
    //   this.colorChange.emit(temp());
    // })
    // console.log(temp());
    // this.changeColor();

  }

  // private changeColor() {
  //   // this.renderer.
  // }

}
