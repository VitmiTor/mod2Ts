import { Color } from "./Color";

export abstract class FiguraGeometrica {
  protected _colorRelleno: Color;
  protected _colorBorde: Color;
  protected _grosorLinea: number;
  protected _tipo: string;
  protected _area: number;
  protected _perimetro: number;

  public constructor(
    colorRelleno: Color,
    colorBorde: Color,
    grosorLinea: number,
    tipo: string
  ) {
    this._colorRelleno = colorRelleno;
    this._colorBorde = colorBorde;
    this._grosorLinea = grosorLinea;
    this._tipo = tipo;
  }

  protected abstract calcularPerimetro(): void;
  protected abstract calcularArea(): void;
}
