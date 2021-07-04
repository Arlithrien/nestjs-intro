import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //@Put(), @Post(), @Delete(), @Patch()
  @Get()
  @Header('Content-Type', 'text/html')
  getHello(): {name: string} {
    //return this.appService.getHello();
    return {name: 'Max'};
  }
}
