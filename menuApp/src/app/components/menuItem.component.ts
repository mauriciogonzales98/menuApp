import { Component, OnInit } from '@angular/core';

interface MenuItems {
  nombre: string,
  categoria: number,
  descripcion: string,
  precio: number,
}

@Component({
  selector: 'menuItems',
  templateUrl: './menuItem.component.html'
})

export class MenuItem implements OnInit {

  public menuitems: MenuItems[] = [];

  ngOnInit() {
    this.initMenuItems();
  }

  initMenuItems() {
    this.menuitems[0] = { nombre: "Muzza", categoria: 0, descripcion:"pizza muzzarella", precio: 1000 }
    this.menuitems[1] = { nombre: "Familiar", categoria: 1, descripcion: "sanguche familiar", precio: 750 }
    this.menuitems[2] = { nombre: "Pizzanesa de muzza", categoria: 2, descripcion: "pizzanesa muzzarella", precio: 1500 }
  }

}
