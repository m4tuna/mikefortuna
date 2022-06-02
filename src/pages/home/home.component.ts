import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentProcess = 1;
  wordCloud = [
    {name: 'BEM', weight: 4 },
    {name: 'Redux', weight: 2 },
    {name: 'components', weight: 8 },
    {name: 'color', weight: 7 },
    {name: 'rest', weight: 2 },
    {name: 'HTML', weight: 5 },
    {name: 'design system', weight: 7 },
    {name: 'CSSGrid', weight: 5 },
    {name: 'LESS', weight: 4 },
    {name: 'User Interface', weight: 9 },
    {name: 'ci/cd', weight: 6 },
    {name: 'react', weight: 2 },
    {name: 'Angular', weight: 9 },
    {name: 'mongoDB', weight: 2 },
    {name: 'figma', weight: 4 },
    {name: 'typescript', weight: 6 },
    {name: 'ionic', weight: 7 },
    {name: 'Animation', weight: 3 },
    {name: 'typography', weight: 7 },
    {name: 'SCSS', weight: 9 },
    {name: 'vueJS', weight: 2 },
    {name: 'Flexbox', weight: 6 },
    {name: 'Atomic', weight: 8 },
    {name: 'CSS', weight: 7 },
    {name: 'nodeJS', weight: 3 },
    {name: 'theming', weight: 7 },
  ]


  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
  }

  changeProcess(event: any) {
    this.currentProcess = event.value;
    console.log('OH  HWAI', event.value);
    this.changeDetectorRef.detectChanges();
  }
}
