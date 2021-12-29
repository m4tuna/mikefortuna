import { DOCUMENT } from '@angular/common';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-wrapper',
  templateUrl: './page-wrapper.component.html',
  styleUrls: ['./page-wrapper.component.scss']
})
export class PageWrapperComponent implements OnInit {
  public dark: boolean | undefined;
  showFiller = false;

  constructor(@Inject(DOCUMENT) private document: Document) { 
  }

  ngOnInit(): void {
    this.loadTheme();
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
