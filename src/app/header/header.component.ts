import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  title = 'Angular';
  subtitle = 'Angular Subtitle';
  theme = 'dark';

  colorPanelValue:any;

  constructor(private _globalService: GlobalService) { }

  ngOnInit(): void {
    this.title = this._globalService.toUpperCase(this._globalService.appTitle);
    this.subtitle = this._globalService.appSubtitle;
    // this.theme = this._globalService.appTheme;

    this._globalService.subjectName.subscribe(
      (name: any) => {
        this.title = name || this._globalService.toUpperCase(this._globalService.appTitle);
      }
    );

    this._globalService.themeColor.subscribe(
      (newColor: any) => {
        this.theme = newColor || this._globalService.toUpperCase(this._globalService.appTheme);
      }
    );
  }
}
