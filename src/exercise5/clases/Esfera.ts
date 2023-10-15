import { IFiguras } from "../interfaces/IFiguras";

export class Esfera implements IFiguras {
  private _radio: number;
  private _area: number;
  private _volumen: number;

  public constructor(radio: number) {
    this._radio = radio;
    this.calcularArea();
    this.calcularVolumen();
  }

  public calcularArea(): void {
    this._area = Math.PI * 4 * this._radio;
  }

  public calcularVolumen(): void {
    this._volumen = (4 / 3) * Math.PI * Math.pow(this._radio, 3);
  }

  public get volumen(): number {
    return this._volumen;
  }

  public monstrarInformacion(): void {
    const mensaje = `radio: ${this._radio}
    area: ${this._area}
    volumen ${this._volumen}`;
    console.log(mensaje);
  }
}
