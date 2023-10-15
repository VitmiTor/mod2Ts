import { Color } from "./Color";
import { FiguraGeometrica } from "./FiguraGeometrica";

export class Cuadrado extends FiguraGeometrica {
  private _lado: number;

  public constructor(
    colorRelleno: Color,
    colorBorde: Color,
    grosorLinea: number,
    tipo: string,
    lado: number
  ) {
    super(colorRelleno, colorBorde, grosorLinea, tipo);
    this._lado = lado;
    this.calcularArea();
    this.calcularPerimetro();
  }

  protected calcularPerimetro(): void {
    this._perimetro = 4 * this._lado;
  }

  protected calcularArea(): void {
    this._area = Math.pow(this._lado, 2);
  }

  public imprimirInformacion(): void {
    const mensaje = `
    lado: ${this._lado}
    tipo: ${this._tipo}
    area: ${this._area}
    perimetro: ${this._perimetro}`;
    console.log(mensaje);
  }

  public get area(): number {
    return this._area;
  }
}
