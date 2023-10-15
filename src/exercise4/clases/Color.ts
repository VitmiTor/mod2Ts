export class Color {
  private _nombre: string;
  private _hexadecimal: string;

  constructor(nombre: string, hexadecimal: string) {
    this._nombre = nombre;
    this._hexadecimal = hexadecimal;
  }

  public get nombre(): string {
    return this._nombre;
  }
}
