import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() projects: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.projects);
  }

}
