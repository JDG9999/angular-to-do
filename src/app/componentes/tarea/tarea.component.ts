import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PeticionesSOAPService } from 'src/app/servicios/peticiones-soap.service';
import { Tarea } from 'src/app/modelos/tarea';
import { ETareaEstado } from 'src/app/modelos/e-tarea-estado';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})
export class TareaComponent implements OnInit {

  @Input() tarea: Tarea;
  @Output() borrada = new EventEmitter<number>();

  constructor(
  ) {
  }

  ngOnInit() {

  }

  estaActiva() {
    return this.tarea.estado === ETareaEstado.ACTIVA;
  }

  borrar() {
    this.borrada.emit(this.tarea.id);
  }


}
