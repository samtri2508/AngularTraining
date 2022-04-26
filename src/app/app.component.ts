import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'secondapp';
  public total : number; 
  constructor() {
    this.total = 0;
  }

  getTotal(data: any): void {
    this.total = data.first+data.second;
  }

}
