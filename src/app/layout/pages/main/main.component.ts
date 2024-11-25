import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { encapsulateStyle } from '@angular/compiler';

@Component({
  selector: 'app-main',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    HeaderComponent,
    GalleryComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  standalone: true,
  // encapsulation: ViewEncapsulation.Emulated,
})
export class MainComponent {
  title = 'gallery-template';
}
