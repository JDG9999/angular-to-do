import { Responsable } from './responsable';

export class Tarea {
  id: number;
  titulo: string;
  responsable: Responsable;
  estado: string;
  tiempoRestante: number;
  descripcion: string;

  constructor(id: number, titulo: string, responsable: Responsable, estado: string, tiempoRestante: number, descripcion: string) {
    this.id = id;
    this.titulo = titulo;
    this.responsable = responsable;
    this.estado = estado;
    this.tiempoRestante = tiempoRestante;
    this.descripcion = descripcion;
  }
}
