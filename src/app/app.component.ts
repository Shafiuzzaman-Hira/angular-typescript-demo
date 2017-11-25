import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  title: String;
  menuList: any;
  selected: any;
  subMenu: any;

  constructor() {
    this.title = 'Product';

    this.menuList = [
      {
        "name": "Dashboard",
        "icon": "fa fa-line-chart"
      },
      {
        "name": "Products",
        "icon": "fa fa-university",
        "subMenu": [
          {
            "name": "Product List",
            "link": "/productlist"
          },
          {
            "name": "New Product",
            "link": "/productform"
          }
        ]
      },
      {
        "name": "Profit Rates",
        "icon": "glyphicon glyphicon-grain",
        "subMenu": [
          {
            "name": "View",
            "link": "/profitrates"
          },
          {
            "name": "Create",
            "link": "/createrate"
          }
        ]
      },
    ];

  }

  select(item) {
    this.selected = (this.selected === item ? null : item);
  }
  isActive(item) {
    return this.selected === item;
  }
}
