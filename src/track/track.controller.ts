import { Body, Controller, Get,Param, Post } from '@nestjs/common';
import { promises } from 'dns';
import { TrackService } from './track.service';
import { Track } from './track.interface';
import { tracks } from 'src/app.service';

@Controller("track")
export class TrackController {

 constructor(private readonly trackService: TrackService) {}

  @Get()
  getTracks(): Promise <Track[]> {
    return this.trackService.getTracks();
  }

@Get(':id')
  getTrackById(@Param('id')id: number):  Promise <Track> {
    return this.trackService.getTrackById(id);

  }
  @Post()
  createtrack(@Body() Body:Track):Promise <Track> {
    return this.trackService.createtrack(Body);

  }

}





