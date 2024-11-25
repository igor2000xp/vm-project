import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PictureComponent } from '../picture/picture.component';

@Component({
  selector: 'app-picture-row',
  imports: [PictureComponent],
  standalone: true,
  templateUrl: './picture-row.component.html',
  styleUrl: './picture-row.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PictureRowComponent {

}
