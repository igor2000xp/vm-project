/* Examples
https://stackblitz.com/run?file=src%2Fexample%2Fbutton-overview-example.ts
*/

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import { ICONS_MAP } from '../../../core/tokens';
import { IconsMap } from '../../models/icons.model';
import { ButtonType } from '../../enums/button-types.enum';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [CommonModule, MatIconModule, MatButtonModule, RouterModule],
  providers: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  btnType = ButtonType;

  @Input() buttonType: ButtonType = this.btnType.flat;

  @Input() buttonClass!: string;

  // @Input() routerLinkActive!: string;

  @Input() icon!: keyof typeof this.iconsMap;

  @Input() size!: number;

  @Input() isDisabled: boolean = false;

  constructor(@Inject(ICONS_MAP) public iconsMap: IconsMap) { }

}
