export abstract class Persona {
  protected _nombre: string;
  protected _apellido: string;
  private _edad: number;
  private _tipo: string;
  protected _exito: number;

  constructor(nombre: string, apellido: string, edad: number, tipo: string) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
    this._tipo = tipo;
  }

  public get tipo() {
    return this._tipo;
  }

  protected abstract calcularExito(): void;
}
