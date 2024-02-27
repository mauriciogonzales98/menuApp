import { Component, OnInit } from '@angular/core';

interface Categorias {
  nombre: string,
  index: number
}

@Component({
  selector: 'sections',
  templateUrl: './sections.component.html'
})


export class Sections implements OnInit{

  public categoria: Categorias[] = [];

  ngOnInit() {
    this.initCategorias();
  }

  initCategorias() {
    this.categoria[0] = { nombre: "Pizzas", index: 0 }
    this.categoria[1] = { nombre: "Sanguches", index: 1 }
    this.categoria[2] = { nombre: "Pizzanesas", index: 2 }
  }

}
