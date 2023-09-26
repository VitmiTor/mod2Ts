export class Videojuegos {
  _nombre;
  _epoca;
  _precio;
  _duracion;
  _genero;
  _empresa;

  constructor(
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

  static crearArray = (videojuegosJson: any): any => {
    const videojuegosArray = [];
    videojuegosJson.forEach((element) => {
      videojuegosArray.push(this.parsearVideojuegos(element));
    });
    return videojuegosArray;
  };

  static parsearVideojuegos = (videojuegosJson: any) => {
    return new this(
      videojuegosJson["nombre"],
      videojuegosJson["epoca"],
      videojuegosJson["precio"],
      videojuegosJson["duracion"],
      videojuegosJson["genero"],
      videojuegosJson["empresa"]
    );
  };

  mostrarInformacion() {
    console.log(`${this._nombre}`);
    console.log(`${this._epoca}`);
    console.log(`${this._precio}`);
    console.log(`${this._duracion}`);
    console.log(`${this._genero}`);
    console.log(`${this._empresa}`);
    console.log(`---------------`);
  }

  get nombre() {
    return this._nombre;
  }
  get empresa() {
    return this._empresa;
  }
}
