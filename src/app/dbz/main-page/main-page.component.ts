import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzServices } from '../services/dbz.services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {

 

  personajes: Personaje[] = [
    {
      nombre: "Goku",
      poder: 11000
    },
    {
      nombre: "Vegeta",
      poder: 8500
    }
  ];

  
  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 2000
  }

  agregarNuevoPersonaje(argumento: Personaje){
    this.personajes.push(argumento);
  }

  constructor(private dbzServices: DbzServices){

  }
  
}
