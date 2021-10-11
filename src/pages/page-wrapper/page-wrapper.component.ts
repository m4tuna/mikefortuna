import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-wrapper',
  templateUrl: './page-wrapper.component.html',
  styleUrls: ['./page-wrapper.component.scss']
})
export class PageWrapperComponent implements OnInit {
  public dark = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.flipIt();
  }

  public flipIt() {
    this.dark = !this.dark;
    if (this.dark) {
      this.document.body.classList.remove('dark');
    } else {
      this.document.body.classList.add('dark');
    }
  }

  email() {
    window.open('mailto:m4tuna@gmail.com?Subject=Contact+from+mikefortuna.com&Body=Hi+Mike,', '_blank');
  }

}
