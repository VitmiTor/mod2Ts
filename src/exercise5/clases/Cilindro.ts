import { IFiguras } from "../interfaces/IFiguras";

export class Cilindro implements IFiguras {
  private _radio: number;
  private _altura: number;
  private _area: number;
  private _volumen: number;

  public constructor(radio: number, altura: number) {
    this._radio = radio;
    this._altura = altura;
    this.calcularArea();
    this.calcularVolumen();
  }

  public calcularArea(): void {
    this._area = 2 * Math.PI * this._radio * (this._altura + this._radio);
  }

  public calcularVolumen(): void {
    this._volumen = Math.PI * Math.pow(this._radio, 2) * this._altura;
  }

  public get volumen(): number {
    return this._volumen;
  }

  public mostrarInformacion = (): void => {
    const mensaje = `radio: ${this._radio}
    altura: ${this._altura}
    area: ${this._area}
    volumen: ${this._volumen}`;
    console.log(mensaje);
  };
}
