import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PageWrapperComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomeModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule],
  declarations: [],
})
export class PagesRoutingModule {}
