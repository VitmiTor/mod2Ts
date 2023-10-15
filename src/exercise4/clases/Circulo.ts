import { Color } from "./Color";
import { FiguraGeometrica } from "./FiguraGeometrica";

export class Circulo extends FiguraGeometrica {
  private _radio: number;

  public constructor(
    colorRelleno: Color,
    colorBorde: Color,
    grosorLinea: number,
    tipo: string,
    radio: number
  ) {
    super(colorRelleno, colorBorde, grosorLinea, tipo);
    this._radio = radio;
    this.calcularArea();
    this.calcularPerimetro();
  }

  protected calcularPerimetro(): void {
    this._perimetro = 2 * this._radio * Math.PI;
  }

  protected calcularArea(): void {
    this._area = Math.pow(this._radio, 2) * Math.PI;
  }

  public imprimirInformacion(): void {
    const mensaje = `
    radio: ${this._radio}
    tipo: ${this._tipo}
    area: ${this._area}
    perimetro: ${this._perimetro}`;
    console.log(mensaje);
  }

  public get area(): number {
    return this._area;
  }
}
