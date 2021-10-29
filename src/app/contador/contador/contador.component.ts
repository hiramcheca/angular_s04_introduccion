import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html'
})
export class ContadorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  titulo: string = 'bases';
  numero: number = 10;
  base: number = 5;
  
  acumular(valor:number) {
    this.numero += valor;
  }


}
