import { PictureObjInterface } from 'src/app/layout/models/picture.model';

export interface ReturnPictureInterface {
  isLoading: boolean;
  items: PictureObjInterface[];
}