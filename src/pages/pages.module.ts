import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/material/material.module';
import { BottomSheetMenuComponent } from './page-wrapper/bottom-sheet-menu';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule
  ],
  declarations: [PageWrapperComponent, BottomSheetMenuComponent],
  exports: [PageWrapperComponent, BottomSheetMenuComponent],
})
export class PageModule { }
