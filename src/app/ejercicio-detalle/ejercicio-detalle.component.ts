import { Component, OnInit, Input } from '@angular/core';
import { Ejercicio } from '../ejercicio';

@Component({
  selector: 'app-ejercicio-detalle',
  templateUrl: './ejercicio-detalle.component.html',
  styleUrls: ['./ejercicio-detalle.component.css']
})
export class EjercicioDetalleComponent implements OnInit {

  @Input() ejercicio:Ejercicio;

  constructor() { }

  ngOnInit(): void {
  }

}
