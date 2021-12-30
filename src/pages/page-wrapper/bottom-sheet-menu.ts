import {Component} from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
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
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetMenuComponent>, 
    public wrapper: PageWrapperComponent) {
  }

  toggleLights() {
    this.wrapper.flipIt();
  }

  setSpeed(event: any) {
    localStorage.setItem('speed', event.value);
    this.speedValue = event.value;
    console.log(event.value);
  }

  setSize(event: any) {
    localStorage.setItem('size', event.value);
    this.sizeValue = event.value;
    console.log(event.value);
  }

  setScale(event: any) {
    localStorage.setItem('scale', event.value);
    this.scaleValue = event.value;
    console.log(event.value);
  }

  setDensity(event: any) {
    localStorage.setItem('density', event.value);
    this.densityValue = event.value;
    console.log(event.value);
  }

  setWeight(event: any) {
    localStorage.setItem('weight', event.value);
    console.log(event.value);
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}