import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DATA_FOLDER, pictureArray } from '../../data/picData';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-picture',
  imports: [CommonModule, MatIconModule],
  standalone: true,
  templateUrl: './picture.component.html',
  styleUrl: './picture.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PictureComponent implements OnInit {
  dataPic: string[] = [];
  // DATA_FOLDER + pictureArray[0];

  getScreenArray() {
    for (let i = 0; i < 6; i += 1) {
      this.dataPic.push(DATA_FOLDER + pictureArray[i]);
    }
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.getScreenArray();
  }
}
