import { Controller, Get,Param } from '@nestjs/common';
import { promises } from 'dns';
import { TrackService } from './track.service';
import { Track } from './track.interface';

@Controller("track")
export class TrackController {

 constructor(private readonly trackService: TrackService) {}

  @Get()
  getTracks(): Promise <Track[]> {
    return this.trackService.getTracks();
  }

@Get('tracks/:id')
  getTrackById(@Param('id')id: number):  Promise <Track> {
    return this.trackService.getTrackById(id);

  }


  

}





