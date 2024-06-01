import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoyComponent } from './componest/soy/soy.component';
import { ProyectosComponent } from './componest/proyectos/proyectos.component';
import { ContactameComponent } from './componest/contactame/contactame.component';

const routes: Routes = [
  {path:'QuienSoy',component:SoyComponent},
  {path:'Proyectos', component:ProyectosComponent},
  {path:'Contactame', component:ContactameComponent},
  {path:'**',redirectTo:'QuienSoy'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
