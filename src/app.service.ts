import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getSoma(numero1: number, numero2: number): number {
    return numero1 + numero2;
  }
  getSub(numero1: number, numero2: number): number {
    return numero1 - numero2;
  }
  getDiv(numero1: number, numero2: number): number {
    return numero1 / numero2;
  }
  getMulti(numero1: number, numero2: number): number {
    return numero1 * numero2;
  }
  // getRaizQua(numero1: number): number {
  //   return Math.pow: numero1;
  // }
  getPorcentagem(numero1: number): number {
    return numero1 / 100;
  }
  // getPorcentagem(numero1: number): number {
  //   return numero1 / 100;
  // }
}
