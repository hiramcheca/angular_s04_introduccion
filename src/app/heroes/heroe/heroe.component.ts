import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nombre: string = 'Ironman';
  edad: number = 45;

  obtenerNombre():string{
    return `${this.nombre} - ${this.edad}`;
  }

  get nombreCapitalizado():string{
    return this.nombre.toUpperCase();
  }

  cambiarNombre():void{
    this.nombre = 'Spiderman';
  }

  cambiarEdad():void{
    this.edad = 30;
  }

}
