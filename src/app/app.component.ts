import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'training-day-two';


  appColorPanelValue = 'primary';

  appSubmitColor(value: string): void{
    this.appColorPanelValue = value;
  }

}



