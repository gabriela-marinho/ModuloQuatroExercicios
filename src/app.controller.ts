import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('soma')
  getSoma(): number {
    return this.appService.getSoma(10, 10);
  }

  @Get('sub')
  getSub(): number {
    return this.appService.getSub(5, 2);
  }

  @Get('div')
  getDiv(): number {
    return this.appService.getDiv(10, 2);
  }

  @Get('multi')
  getMulti(): number {
    return this.appService.getMulti(10, 2);
  }

  // @Get('raiz')
  // getRaizQua(): number {
  //   return this.appService.getRaizQua(49);
  // }
  @Get('porcentagem')
  getPorcentagem(): number {
    return this.appService.getPorcentagem(10);
  }
}
