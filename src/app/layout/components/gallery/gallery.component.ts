import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PictureRowComponent } from '../picture-row/picture-row.component';

@Component({
  selector: 'app-gallery',
  imports: [PictureRowComponent],
  standalone: true,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent {

}
