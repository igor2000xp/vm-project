import { ReturnFavInterface } from '@shared/services/favorites.service';

export function chackDuplicateInArrayOfObj(arr: ReturnFavInterface[]) {
  const tempArr = arr.map((item) => JSON.stringify(item));
  const tempArr2 = [... new Set(tempArr)];

  return tempArr2.map((item) => JSON.parse(item));
}