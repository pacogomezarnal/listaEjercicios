import { Component, OnInit } from '@angular/core';
import {Ejercicio} from '../ejercicio';
import {EjercicioService} from '../ejercicio.service'

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  ejercicios:Ejercicio[];
  constructor(private ejercicioService:EjercicioService) { }

  ngOnInit(): void {
  }
  getEjercicios():void{
    this.ejercicioService.getEjercicios().subscribe(ejercicios=>this.ejercicios=ejercicios)
  }

}
