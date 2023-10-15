import { Esfera } from "../clases/Esfera";

export const crearArrayEsfera = (esferaJson: any): Esfera[] => {
  const arrayEsfera:Esfera[] = [];

  esferaJson.forEach((element: any) => {
    arrayEsfera.push(crearEsfera(element));
  });

  return arrayEsfera;
};

export const crearEsfera = (esferaJson: any): Esfera => {
  const radio = esferaJson["radio"];

  return new Esfera(radio);
};
