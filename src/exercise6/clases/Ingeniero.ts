import { Persona } from "./Persona";

export class Ingeniero extends Persona {
  private _edificiosConstruidos: number;
  private _edificiosPlanificados: number;
  private _constructora: string;

  constructor(
    nombre: string,
    apellido: string,
    edad: number,
    tipo: string,
    edificiosConstruidos: number,
    edificiosPlanificados: number,
    constructora: string
  ) {
    super(nombre, apellido, edad, tipo);
    this._edificiosConstruidos = edificiosConstruidos;
    this._edificiosPlanificados = edificiosPlanificados;
    this._constructora = constructora;
    this.calcularExito();
  }

  protected calcularExito(): void {
    this._exito =
      (this._edificiosConstruidos / this._edificiosPlanificados) * 100;
  }

  public get exito() {
    return this._exito;
  }

  public mostrarInformacion() {
    console.log(`Nombre: ${this._nombre} ${this._apellido}`);
    console.log(`${this._exito}`);
  }
}
