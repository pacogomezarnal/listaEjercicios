import { Component, OnInit } from '@angular/core';
import {Ejercicio} from '../ejercicio';
import {EJERCICIOS} from '../collection-ejercicios';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {

  ejercicios=EJERCICIOS;

  constructor() {  }

  ngOnInit(): void {
  }

  onSelectEjercicio(ejercicio:Ejercicio):void{
    console.log("Entro dentro de onSelectEjercio");

  }

}
