import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { PicturesComponent } from '../../components/pictures/pictures.component';

@Component({
  selector: 'app-main-photos',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    PicturesComponent,
  ],
  templateUrl: './main-photos.component.html',
  styleUrl: './main-photos.component.scss',
  standalone: true,
})
export class MainPhotosComponent {
  title = 'gallery-template';
}
