import { InjectionToken } from "@angular/core";
import { IconsMap } from "../shared/models/icons.model";

export const ICONS_MAP = new InjectionToken<IconsMap>('ICONS_MAP', {
  providedIn: 'root',
  factory: () => ({
    viewCount: 'visibility',
    favorite: 'favorite',
    commentCount: 'filter_none',
    arrow: 'arrow_back_ios',
    tune: 'tune',
    account: 'account_circle',
  }),
})
