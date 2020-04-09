import { Component, OnInit } from '@angular/core';
import {Ejercicio} from '../ejercicio';
import {EjercicioService} from '../ejercicio.service'


@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {

  ejercicios:Ejercicio[];
  ejercicioSeleccionado:Ejercicio;

  constructor(private ejercicioService:EjercicioService) {
    console.log("----Componente Ejercicios CREADO ---");
  }


  getEjercicios():void{
    this.ejercicioService.getEjercicios().subscribe(ejercicios=>this.ejercicios=ejercicios)
  }

  ngOnInit(): void {
    console.log("----Componente Ejercicios[ngOnInit] ---");
    this.getEjercicios();
  }

  onSelectEjercicio(ejercicio:Ejercicio):void{
    console.log("Ejercicio seleccionado="+ejercicio.id);
    this.ejercicioSeleccionado=ejercicio;
  }

}
