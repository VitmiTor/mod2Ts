import { Persona } from "./Persona";

export class Abogado extends Persona {
  private _juiciosGanados: number;
  private _juiciosParticipados: number;
  private _notaria: string;

  constructor(
    nombre: string,
    apellido: string,
    edad: number,
    tipo: string,
    juiciosGanados: number,
    juiciosParticipados: number,
    notaria: string
  ) {
    super(nombre, apellido, edad, tipo);
    this._juiciosGanados = juiciosGanados;
    this._juiciosParticipados = juiciosParticipados;
    this._notaria = notaria;
    this.calcularExito();
  }

  protected calcularExito(): void {
    this._exito = (this._juiciosGanados / this._juiciosParticipados) * 100;
  }

  public get exito() {
    return this._exito;
  }

  public mostrarInformacion(): void {
    console.log(`Nombre: ${this._nombre} ${this._apellido}`);
    console.log(`Exito: ${this._exito}`);
  }
}
