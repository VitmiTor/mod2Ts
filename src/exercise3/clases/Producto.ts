export class Producto {
  private _nombre: string;
  private _precio: number;
  private _stock: number;
  private _peso: number;
  private _perecible: boolean;
  private _volumen: number;

  public constructor(nombre: string, precio: number, stock: number, peso: number, perecible: boolean, volumen: number) {
    this._nombre = nombre;
    this._precio = precio;
    this._stock = stock;
    this._peso = peso;
    this._perecible = perecible;
    this._volumen = volumen;
  }

  public mostrarInformacion():void {
    console.log(`${this._nombre}`);
    console.log(`${this._precio}`);
    console.log(`${this._stock}`);
    console.log(`${this._peso}`);
    console.log(`${this._perecible}`);
    console.log(`${this._volumen}`);
  }

  public get nombre():string {
    return this._nombre;
  }

  public get stock():number {
    return this._stock;
  }

  public get precio():number {
    return this._precio;
  }
}
