import { Component, OnInit } from '@angular/core';
import {Ejercicio} from '../ejercicio';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {

  ejercicio: Ejercicio={
    id:1,
    name:"Flexiones"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
