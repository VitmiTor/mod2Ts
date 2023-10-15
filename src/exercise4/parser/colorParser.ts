import { Color } from "../clases/Color";

export const crearMapColores = (coloresJson: any): Map<string, Color> => {
  const colorMap = new Map<string, Color>();

  coloresJson.forEach((element: any) => {
    const color = crearColor(element);
    colorMap.set(color.nombre, color);
  });

  return colorMap;
};

const crearColor = (colorJson: any): Color => {
  const nombre = colorJson["nombre"];
  const hexadecimal = colorJson["hexadecimal"];

  return new Color(nombre, hexadecimal);
};
