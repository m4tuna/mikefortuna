import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';

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
      {
        path: 'blog',
        loadChildren: () => import('../pages/blog/blog.module').then(m => m.BlogModule),
        children: [
          {
          path:  ':id',
          component:  BlogComponent,
          data: {some_data: '1'}
          },
        ]
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
