import { Component, OnInit, Input } from '@angular/core';
import { Ejercicio } from '../ejercicio';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-ejercicio-detalle',
  templateUrl: './ejercicio-detalle.component.html',
  styleUrls: ['./ejercicio-detalle.component.css']
})
export class EjercicioDetalleComponent implements OnInit {

  @Input() ejercicio:Ejercicio;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getEjercicio;
  }

  getEjercicio():void{
    const id=+this.route.snapshot.paramMap.get('id');
  }

}
