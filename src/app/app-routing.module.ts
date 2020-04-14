import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EjerciciosComponent} from './ejercicios/ejercicios.component'
import {PanelComponent} from './panel/panel.component'

const routes: Routes = [
  {path:'ejercicios',component:EjerciciosComponent},
  {path:'panel',component:PanelComponent},
  {path:'',redirectTo:'/panel',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
