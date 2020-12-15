import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  theme = 'dark';

  colorPanelValue:any;

  constructor(private _globalService: GlobalService) { }

  ngOnInit(): void {

    this._globalService.themeColor.subscribe(
      (newColor: any) => {
        this.theme = newColor || this._globalService.toUpperCase(this._globalService.appTheme);
      }
    );

  }



}
