import { Component, OnInit } from '@angular/core';
import { I18nPluralPipe } from '@angular/common';
import { Tarea } from 'src/app/modelos/tarea';
import { Responsable } from 'src/app/modelos/responsable';
import { ETareaEstado } from 'src/app/modelos/e-tarea-estado';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss']
})
export class ListaTareasComponent implements OnInit {

  itemPluralMapping = {
    tarea: {
      '=1': 'asignada',
      other: 'asignadas'
    }
  };

  fecha: Date;
  responsables: Responsable[];
  tareaId = 0;
  tareas: Tarea[];

  constructor() { }

  ngOnInit() {
    this.fecha = new Date();
    this.responsables = [
      new Responsable(1, 'Juanita Pérez'),
      new Responsable(2, 'Pedro Navaja')
    ];
    this.tareas = [
      new Tarea(++this.tareaId, 'Título de la tarea', this.responsables[0], ETareaEstado.ACTIVA, 720, 'Descripción de la tarea 1'),
      new Tarea(++this.tareaId, 'Título de la tarea', this.responsables[1], ETareaEstado.FINALIZADA, 0, 'Descripción de la tarea 2'),
    ];
  }

  agregarTarea() {
    this.tareas.push(
      new Tarea(++this.tareaId,
        'Título de la tarea',
        this.choose(this.responsables),
        ETareaEstado.ACTIVA,
        Math.ceil(Math.random() * 1440),
        `Descripción de la tarea ${this.tareaId}`
      )
    );
  }

  borrarTarea(tareaId) {
    this.tareas.splice(this.tareas.findIndex(t => t.id === tareaId), 1);
  }

  choose(choices) {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }

}
