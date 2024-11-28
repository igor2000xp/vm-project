import { CommonModule } from '@angular/common';
import { Component, Inject, signal } from '@angular/core';
import { ICONS_MAP } from '@core/tokens';
import { ButtonComponent } from '@shared/components/button/button.component';
import { ButtonType } from '@shared/enums/button-types.enum';
import { IconsMap } from '@shared/models/icons.model';

@Component({
  selector: 'app-fav-pictures',
  imports: [ButtonComponent, CommonModule],
  templateUrl: './fav-pictures.component.html',
  styleUrl: './fav-pictures.component.scss'
})
export class FavPicturesComponent {
  buttonType = ButtonType;
  favSignal = signal([]);

  constructor(@Inject(ICONS_MAP) public iconsMap: IconsMap) { }

  trackByFn() { }
}
