// Example https://stackblitz.com/edit/stackblitz-starters-mdpftu
import { ChangeDetectionStrategy, Component, HostListener, signal, WritableSignal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { GetPictureBanchService } from '@shared/services/get-picture-banch.service';
import { PictureObjInterface } from '../../models/picture.model';
import { map, of } from 'rxjs';
import { ScrollNearEndDirective } from '@core/directives/scroll-near-end.directive';

@Component({
  selector: 'app-picture',
  imports: [CommonModule, MatIconModule, MatProgressSpinnerModule, ScrollNearEndDirective],
  standalone: true,
  templateUrl: './picture.component.html',
  styleUrl: './picture.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PictureComponent {
  picSignal: WritableSignal<PictureObjInterface[]> = signal([]);
  isLoading: Boolean | undefined;

  constructor(private getPictureBanch: GetPictureBanchService) {
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

    console.log(
      '%c [ScrollNearEndDirective]: emit',
      'color: #bada55; font-size: 20px'
    );
    this.getPictureBanch.getBanchScrolling(of('start'));
  }

  // @HostListener('window:scroll', [])
  // onScroll() {
  //   if (window.scrollY >= (document.body.offsetHeight) * 2) {
  //     const start$ = of('start')
  //     // this.getPictureBanch.getBanchScrolling(of('start'));
  //   }
  // }
}
