import { ChangeDetectionStrategy, Component, Inject, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { ButtonType } from '@shared/enums/button-types.enum';
import { ICONS_MAP } from '@core/tokens';
import { IconsMap } from '@shared/models/icons.model';
import { Router, RouterModule } from '@angular/router';
// import { Observable } from 'rxjs';
// import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ButtonComponent,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    // AsyncPipe,
  ]
})
export class HeaderComponent {
  private breakpointObserver = inject(BreakpointObserver);
  buttonType = ButtonType;

  constructor(@Inject(ICONS_MAP) public iconsMap: IconsMap, router: Router) { }
}
