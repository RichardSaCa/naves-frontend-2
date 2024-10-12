import { NaveEspacial } from "./naveEspacial.model";

export class NaveNoTripulda extends NaveEspacial {

  tipoCombustible: string;
  toneladasEmpuje: number;
  mision: string;

  constructor(idNaveEspacial: number, nombre: string, potencia: number, pais: string,peso: number,tipoCombustible: string, toneladasEmpuje: number, mision: string){
    super(idNaveEspacial, nombre, potencia, pais,peso);
    this.tipoCombustible = tipoCombustible;
    this.toneladasEmpuje = toneladasEmpuje;
    this.mision = mision;
  }
}
