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
  ejercicioSeleccionado:Ejercicio;

  constructor() {  }

  ngOnInit(): void {
  }

  onSelectEjercicio(ejercicio:Ejercicio):void{
    console.log("Ejercicio seleccionado="+ejercicio.id);
    this.ejercicioSeleccionado=ejercicio;
  }

}
