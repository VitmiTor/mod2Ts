export class Videojuego {
  private _nombre: string;
  private _epoca: number;
  private _precio: number;
  private _duracion: number;
  private _genero: string;
  private _empresa: string;

  public constructor(
    nombre: string,
    epoca: number,
    precio: number,
    duracion: number,
    genero: string,
    empresa: string
  ) {
    this._nombre = nombre;
    this._epoca = epoca;
    this._precio = precio;
    this._duracion = duracion;
    this._genero = genero;
    this._empresa = empresa;
  }

  public mostrarInformacion(): void {
    console.log(`${this._nombre}`);
    console.log(`${this._epoca}`);
    console.log(`${this._precio}`);
    console.log(`${this._duracion}`);
    console.log(`${this._genero}`);
    console.log(`${this._empresa}`);
    console.log(`---------------`);
  }

  public get nombre(): string {
    return this._nombre;
  }
  public get empresa(): string {
    return this._empresa;
  }
}
