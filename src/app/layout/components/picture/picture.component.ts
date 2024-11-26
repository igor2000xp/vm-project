import { ChangeDetectionStrategy, Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DATA_FOLDER, pictureArray } from '../../data/picData';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { PictureInterface } from '../../models/picture.model';
import { GetPictureBanchService } from 'src/app/shared/services/get-picture-banch.service';

@Component({
  selector: 'app-picture',
  imports: [CommonModule, MatIconModule],
  standalone: true,
  templateUrl: './picture.component.html',
  styleUrl: './picture.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PictureComponent implements OnInit {
  dataPicObj: PictureInterface[] = [];
  getPictureBanch = inject(GetPictureBanchService);
  picSignal = toSignal(this.getPictureBanch.getBanch(Object.values(this.dataPicObj)));

  getScreenArraySignal() {
    this.getPictureBanch.getBanch(Object.values(this.dataPicObj));
    console.log(this.picSignal());
  }

  ngOnInit(): void {
    this.getScreenArraySignal();
  }
}
