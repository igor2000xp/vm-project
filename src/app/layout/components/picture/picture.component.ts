import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-picture',
  imports: [],
  standalone: true,
  templateUrl: './picture.component.html',
  styleUrl: './picture.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PictureComponent {

}
