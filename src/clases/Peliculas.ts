export class Peliculas {
  private _nombre: string;
  private _epoca: number;
  private _duracion: number;
  private _genero: string;
  private _precioTicket: number;

  public constructor(
    nombre: string,
    epoca: number,
    duracion: number,
    genero: string,
    precioTicket: number
  ) {
    this._nombre = nombre;
    this._epoca = epoca;
    this._duracion = duracion;
    this._genero = genero;
    this._precioTicket = precioTicket;
  }

  public static crearArray = (peliculaJson: any): Peliculas[] => {
    const peliculaArray = [];
    peliculaJson.forEach((element: any) => {
      peliculaArray.push(this.parsearArray(element));
    });
    return peliculaArray;
  };

  public static parsearArray = (peliculaJson: any) => {
    return new this(
      peliculaJson["nombre"],
      peliculaJson["epoca"],
      peliculaJson["duracion"],
      peliculaJson["genero"],
      peliculaJson["precioTicket"]
    );
  };

  public mostrarInformacion = (): void => {
    console.log(`Pelicula: ${this._nombre}`);
    console.log(`epoca: ${this._epoca}`);
    console.log(`duracion: ${this._duracion}`);
    console.log(`genero: ${this._genero}`);
    console.log(`precioTicket: ${this._precioTicket}`);
    console.log("-------");
  };

  public get duracion(): number {
    return this._duracion;
  }
  public get genero(): string {
    return this._genero;
  }
}
