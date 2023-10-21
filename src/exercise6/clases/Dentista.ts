import { Persona } from "./Persona";

export class Dentista extends Persona {
  private _pacientesSinCaries: number;
  private _totalPacientes: number;
  private _consultorio: string;

  constructor(
    nombre: string,
    apellido: string,
    edad: number,
    tipo: string,
    pacientesSinCaries: number,
    totalPacientes: number,
    consultorio: string
  ) {
    super(nombre, apellido, edad, tipo);
    this._pacientesSinCaries = pacientesSinCaries;
    this._totalPacientes = totalPacientes;
    this._consultorio = consultorio;
    this.calcularExito();
  }

  protected calcularExito(): void {
    this._exito = (this._pacientesSinCaries / this._totalPacientes) * 100;
  }

  public get exito() {
    return this._exito;
  }

  public mostrarInformacion(){
    console.log(`Nombre: ${this._nombre} ${this._apellido}`)
    console.log(`Exito: ${this._exito}`)
  }
}
