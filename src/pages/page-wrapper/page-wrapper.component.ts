import { DOCUMENT } from '@angular/common';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { nav } from 'src/app-mock-data';
import { BottomSheetMenuComponent } from './bottom-sheet-menu';

export interface navItem {
  name?: string;
  link?: string;
  url?: string;
  clickEvent?: Event;
}

@Component({
  selector: 'app-page-wrapper',
  templateUrl: './page-wrapper.component.html',
  styleUrls: ['./page-wrapper.component.scss']
})
export class PageWrapperComponent implements OnInit {
  public dark: boolean | undefined;
  showFiller = false;
  fillerNav = nav;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _bottomSheet: MatBottomSheet) { 
  }

  ngOnInit(): void {
    this.loadTheme();
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetMenuComponent);
  }

  public flipIt() {
    this.dark = !this.dark;
    this.setDarkMode();
  }

  public setDarkMode() {
    if (localStorage.getItem('dark')) {
      localStorage.removeItem('dark');
      this.document.body.classList.remove('dark');
    } else {
      localStorage.setItem('dark', 'yeet');
      this.document.body.classList.add('dark');
    }
  }

  public loadTheme() {
    if (localStorage.getItem('dark')) {
      this.dark = true;
      this.document.body.classList.add('dark');
    } else {
      this.dark = false;
      this.document.body.classList.remove('dark');
    }
  }

  email() {
    window.open('mailto:m4tuna@gmail.com?Subject=Contact+from+mikefortuna.com&Body=Hi+Mike,', '_blank');
  }

}
