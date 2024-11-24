import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './shared/components/button/button.component';
import { ButtonType } from './shared/enums/button-types.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICONS_MAP } from './core/tokens';
import { IconsMap } from './shared/models/icons.model';
import { ButtonsName } from './shared/enums/button-names.enum';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ButtonComponent,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    // BrowserAnimationsModule,
    // BrowserModule
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-button';
  buttonType = ButtonType;
  btnName = ButtonsName;
  buttons: ButtonsName[] = Object.values(ButtonsName);
  form: FormGroup;
  tags: string[] = [''];
  userName = 'John';

  constructor(private fb: FormBuilder, @Inject(ICONS_MAP) public iconsMap: IconsMap) {
    this.form = this.fb.nonNullable.group({
      login: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required]],
    })
  }

  onSubmit(): void {
    if (this.form.valid) {
      //      this.authService.logIn(this.form.value)
      //      this.router.navigate(['main'])
    }
  }

  resetForm() { }
  toggleFilterBlock() { }
  logout() { }

  sortByWord(word: string) {
    // if (this.isOpened && this.hasSearchWord) {
    //   this.wordFilterService.setFilterWord(word)
    // }
  }

  sortByValue(param: ButtonsName) {
    // if (this.isOpened && this.hasSearchWord) {
    //   this.valueFilterService.setFilterWord(param)
    // }
  }
  getSortDirectionArrow(name: ButtonsName) {
    // if (!this.hasSearchWord) {
    //   return 'filter'
    // }
    // return this.filtersControllerService.getSortDirectionArrow(name)
    return '';
  }
}
