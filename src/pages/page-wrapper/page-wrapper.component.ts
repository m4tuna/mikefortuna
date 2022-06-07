import { DOCUMENT } from '@angular/common';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { ChangeDetectorRef, Component, Inject, Input, OnChanges, OnInit } from '@angular/core';
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
export class PageWrapperComponent implements OnInit, OnChanges {
  public speedValue = localStorage.getItem('speed') || '3';
  public sizeValue = localStorage.getItem('size') || '2';
  public densityValue = localStorage.getItem('density') || '3';
  public weightValue = localStorage.getItem('weight') || '3';
  public lightsValue = localStorage.getItem('dark') || 'dark';

  private _dark = false;

  @Input() set dark(value: boolean) {
     this._dark = value;
  }
  get dark(): boolean {
      return this._dark;
  }
  showFiller = false;
  fillerNav = nav;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _bottomSheet: MatBottomSheet,
    public cdr: ChangeDetectorRef) {
      this._initCssVars();
      this._defaultSettings();
  }

  ngOnInit(): void {
    this._loadTheme();
    if (localStorage.getItem('size') === '1' || localStorage.getItem('size') === '5') {
      this.document.body.classList.add('small-center');
    }
  }

  ngOnChanges(): void {
    this.cdr.markForCheck();
  }

  _initCssVars() {
    const styling: { name: string, value: string }[] = [
      { name: "--theme-speed", value: this.speedValue + 's'},
      { name: "--theme-size", value: this.sizeValue + 'rem' },
      { name: "--theme-density", value: this.densityValue + 'px' },
      { name: "--theme-weight", value: this.weightValue },
    ];
    
    let styleElement: HTMLElement = document.createElement( 'style' );
    let cssVariable: string = '';
    
    for ( let i = 0; i < styling.length; i++ ) {
      cssVariable += styling[i].name + ':' + styling[i].value + ';';
    }
    
    styleElement.innerText = ':root { ' + cssVariable + ' }';
    document.getElementsByTagName( 'head' )[0].appendChild( styleElement );
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetMenuComponent);
  }

  public flipIt() {
    this.dark = !this.dark;
    this._setDarkMode();
  }

  private _loadTheme() {
    if (localStorage.getItem('dark')) {
      this.dark = true;
      this.document.body.classList.add('dark');
    } else {
      this.dark = false;
      localStorage.removeItem('dark');
      this.document.body.classList.remove('dark');
    }
  }


  private _setDarkMode() {
    if (localStorage.getItem('dark')) {
      localStorage.removeItem('dark');
      this.dark = false;
      console.log(this.dark);
      this.document.body.classList.remove('dark');
    } else {
      localStorage.setItem('dark', 'yeet');
      this.dark = true;
      console.log(this.dark);
      this.document.body.classList.add('dark');
    }
  }

  _defaultSettings() {
    if (!localStorage.getItem('speed')) {
      localStorage.setItem('speed', '25');
    }

    if (!localStorage.getItem('size')) {
      localStorage.setItem('size', '3');
    }

    if (!localStorage.getItem('density')) {
      localStorage.setItem('density', '3');
    }

    if (!localStorage.getItem('weight')) {
      localStorage.setItem('weight', '3');
    }

    if (!localStorage.getItem('dark')) {
      localStorage.setItem('dark', 'yeet');
    }
  }


  email() {
    window.open('mailto:m4tuna@gmail.com?Subject=Contact+from+mikefortuna.com&Body=Hi+Mike,', '_blank');
  }

}
