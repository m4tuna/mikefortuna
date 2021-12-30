import {Component} from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PageWrapperComponent } from './page-wrapper.component';

@Component({
  selector: 'bottom-sheet-menu',
  templateUrl: 'bottom-sheet-menu.html',
})
export class BottomSheetMenuComponent {
  public speedValue = localStorage.getItem('speed');
  public sizeValue = localStorage.getItem('size');
  public scaleValue = localStorage.getItem('scale');
  public densityValue = localStorage.getItem('density');
  public weightValue = localStorage.getItem('weight');
  public lightsValue = localStorage.getItem('dark');
  constructor(
    public wrapper: PageWrapperComponent,
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetMenuComponent>, 
    private _snackBar: MatSnackBar) {
  }

  toggleLights() {
    this.wrapper.flipIt();
    this.openSnackBar('Theme has been updated..');
  }

  setSpeed(event: any) {
    localStorage.setItem('speed', event.value);
    this.speedValue = event.value;
    console.log(event.value);
    this.openSnackBar('Theme has been updated..');
  }

  setSize(event: any) {
    localStorage.setItem('size', event.value);
    this.sizeValue = event.value;
    console.log(event.value);
    this.openSnackBar('Theme has been updated..');
  }

  setScale(event: any) {
    localStorage.setItem('scale', event.value);
    this.scaleValue = event.value;
    console.log(event.value);
    this.openSnackBar('Theme has been updated..');
  }

  setDensity(event: any) {
    localStorage.setItem('density', event.value);
    this.densityValue = event.value;
    console.log(event.value);
    this.openSnackBar('Theme has been updated..');
  }

  setWeight(event: any) {
    localStorage.setItem('weight', event.value);
    console.log(event.value);
    this.openSnackBar('Theme has been updated..');
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