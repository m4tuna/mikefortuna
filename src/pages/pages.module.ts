import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/material/material.module';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule
  ],
  declarations: [PageWrapperComponent],
  exports: [PageWrapperComponent],
})
export class PageModule { }
