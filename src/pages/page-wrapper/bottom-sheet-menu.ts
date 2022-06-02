import { DOCUMENT } from '@angular/common';
import {ChangeDetectorRef, Component, Inject, OnChanges} from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PageWrapperComponent } from './page-wrapper.component';

@Component({
  selector: 'bottom-sheet-menu',
  templateUrl: 'bottom-sheet-menu.html',
})
export class BottomSheetMenuComponent implements OnChanges {
  public speedValue = localStorage.getItem('speed');
  public sizeValue = localStorage.getItem('size');
  public densityValue = localStorage.getItem('density');
  public weightValue = localStorage.getItem('weight');
  public lightsValue = localStorage.getItem('dark');
  constructor(
    @Inject(DOCUMENT) private document: Document,
    public wrapper: PageWrapperComponent,
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetMenuComponent>, 
    private _snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef) {
  }

  ngOnChanges() {
    this.cdr.markForCheck();
  }

  toggleLights() {
    this.wrapper.flipIt();
    this.openSnackBar('Theme updated..');
  }

  setSpeed(event: any) {
    localStorage.setItem('speed', 50 / event.value + 's');
    this.speedValue = event.value;
    console.log(event.value);
    document.documentElement.style.setProperty(`--theme-speed`, 50 / event.value + 's');
    this.openSnackBar('Theme updated..');
  }

  setSize(event: any) {
    localStorage.setItem('size', event.value);
    this.sizeValue = event.value;
    console.log(event.value);
    document.documentElement.style.setProperty(`--theme-size`, event.value + 'rem');
    if (localStorage.getItem('size')) {
      if (localStorage.getItem('size') === '1' || localStorage.getItem('size') === '5') {
        this.document.body.classList.add('small-center');
      } else {
        this.document.body.classList.remove('small-center');
      }
    }
    this.openSnackBar('Theme updated..');
  }

  setDensity(event: any) {
    localStorage.setItem('density', event.value);
    this.densityValue = event.value;
    console.log(event.value);
    document.documentElement.style.setProperty(`--theme-density`, event.value + 'px');
    this.openSnackBar('Theme updated..');
  }

  setWeight(event: any) {
    localStorage.setItem('weight', event.value);
    console.log(event.value);
    this.weightValue = event.value;
    document.documentElement.style.setProperty(`--theme-weight`, event.value);
    this.openSnackBar('Theme updated..');
  }

  openSnackBar(message: string, action?: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      // here specify the position
      verticalPosition: 'top'
    });
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}