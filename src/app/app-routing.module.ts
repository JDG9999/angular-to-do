import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TareaComponent } from './componentes/tarea/tarea.component';
import { ListaTareasComponent } from './componentes/lista-tareas/lista-tareas.component';

const routes: Routes = [
  { path: 'lista-tareas', component: ListaTareasComponent },
  { path: '', redirectTo: '/lista-tareas', pathMatch: 'full' },
  { path: '**', redirectTo: '/lista-tareas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
