export class Responsable {
  id: number;
  nombre: string;
  apellido: string;
  foto: string;

  constructor(id: number, nombreCompleto: string) {
    this.id = id;
    const nombres = nombreCompleto.split(' ');
    this.nombre = nombres[0];
    this.apellido = nombres[1];
  }

  public toString(): string {
    return this.nombre + ' ' + this.apellido;
  }

}
