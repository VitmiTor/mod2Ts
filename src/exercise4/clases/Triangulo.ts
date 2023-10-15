import { Color } from "./Color";
import { FiguraGeometrica } from "./FiguraGeometrica";

export class Triangulo extends FiguraGeometrica {
  private _lado1: number;
  private _lado2: number;
  private _lado3: number;

  public constructor(
    colorRelleno: Color,
    colorBorde: Color,
    grosorLinea: number,
    tipo: string,
    lado1: number,
    lado2: number,
    lado3: number
  ) {
    super(colorRelleno, colorBorde, grosorLinea, tipo);
    this._lado1 = lado1;
    this._lado2 = lado2;
    this._lado3 = lado3;

    this.calcularArea();
    this.calcularPerimetro();
  }

  protected calcularPerimetro(): void {
    this._perimetro = this._lado1 + this._lado2 + this._lado3;
  }

  protected calcularArea(): void {
    const s = (this._lado1 + this._lado2 + this._lado3) / 2;
    this._area = Math.sqrt(
      s * (s - this._lado1) * (s - this._lado2) * (s - this._lado3)
    );
  }

  public imprimirInformacion(): void {
    const mensaje = `
    lado1: ${this._lado1}
    lado2: ${this._lado2}
    lado3: ${this._lado3}
    tipo: ${this._tipo}
    area: ${this._area}
    perimetro: ${this._perimetro}`;
    console.log(mensaje);
  }

  public get area(): number {
    return this._area;
  }
}
