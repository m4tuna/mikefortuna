import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentProcess = 1;


  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
  }

  changeProcess(event: any) {
    this.currentProcess = event.value;
    console.log('OH  HWAI', event.value);
    this.changeDetectorRef.detectChanges();
  }
}
