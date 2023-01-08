import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostComponent } from './blog-post.component';
import { BlogPostRoutingModule } from './blog-post.routing.module';
import { MaterialModule } from 'src/material/material.module';



@NgModule({
  declarations: [
    BlogPostComponent
  ],
  imports: [
    CommonModule,
    BlogPostRoutingModule,
    MaterialModule
  ]
})
export class BlogPostModule { }
