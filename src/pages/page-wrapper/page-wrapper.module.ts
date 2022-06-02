import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageWrapperComponent } from './page-wrapper.component';
import { BottomSheetMenuComponent } from './bottom-sheet-menu';
import { MaterialModule } from 'src/material/material.module';
import { PagesRoutingModule } from '../pages-routing.module';


@NgModule({
  declarations: [
    BottomSheetMenuComponent,
    PageWrapperComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule
  ]
})
export class PageWrapperModule { }
