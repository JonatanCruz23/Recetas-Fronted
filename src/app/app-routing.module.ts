import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './recetas/listado/listado.component';
import { RegistroComponent } from './recetas/registro/registro.component';

const routes: Routes = [
  {path:"",component:ListadoComponent},
  {path:"agregar",component: RegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
