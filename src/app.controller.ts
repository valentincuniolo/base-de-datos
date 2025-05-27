import { Controller, Get } from '@nestjs/common';
import { AppService,itrack } from './app.service';

@Controller("api")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getTracks(): itrack[] {
    return this.appService.getTracks();
  }
}
