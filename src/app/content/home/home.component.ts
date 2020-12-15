import { Component, OnInit, OnDestroy } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  colorPanelValue:any;

  constructor(
    private _globalService: GlobalService
  ) { }

  ngOnInit(): void {
  }


  onClick() : void{
    // this.submitColor.emit(this.colorPanelValue);
    // this._globalService.appTheme = this.colorPanelValue;
    this._globalService.themeColor.next(this.colorPanelValue || 'dark');
  }

  ngOnDestroy(): void{
    this._globalService.themeColor.next('dark');
  }

}
