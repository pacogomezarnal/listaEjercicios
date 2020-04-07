import { Injectable } from '@angular/core';
import {Ejercicio} from './ejercicio';
import {EJERCICIOS} from './collection-ejercicios';

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {

  constructor() { }

  getEjercicios():Ejercicio[]{
    return EJERCICIOS;
  }
}
