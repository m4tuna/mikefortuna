import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { posts } from '../../app-mock-data';

// export interface blogPostData [
  
// ]

@Component({
  selector: 'app-blog',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit, OnDestroy {
  public data = posts;
  currentProcess = 1;
  currentPost: any;

  constructor(private changeDetectorRef: ChangeDetectorRef,
    private route: ActivatedRoute) { 
      this.currentPost = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  ngOnChanges(): void {
    this.currentPost = this.route.snapshot.paramMap.get('id');
  }

  changeProcess(event: any) {
    this.currentProcess = event.value;
    console.log('OH  HWAI', event.value);
    this.changeDetectorRef.detectChanges();
  }
}
