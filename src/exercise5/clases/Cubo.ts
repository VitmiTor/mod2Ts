import { IFiguras } from "../interfaces/IFiguras";

export class Cubo implements IFiguras {
  private _lado: number;
  private _area: number;
  private _volumen: number;

  public constructor(lado: number) {
    this._lado = lado;
    this.calcularArea();
    this.calcularVolumen();
  }

  public calcularArea(): void {
    this._area = 6 * Math.pow(this._lado, 2);
  }

  public calcularVolumen(): void {
    this._volumen = Math.pow(this._lado, 3);
  }

  public get volumen(): number {
    return this._volumen;
  }

  public mostrarInformacion = () => {
    const mensaje = `lado: ${this._lado}
    area: ${this._area}
    volumen ${this._volumen}`;
    console.log(mensaje);
  };
}
