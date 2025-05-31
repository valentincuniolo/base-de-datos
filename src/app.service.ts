import { Injectable } from '@nestjs/common';

export interface itrack {
  id:number;
  tittle:string;
  duration:number;
  artist:string;
}

export const tracks : itrack[] = [

 

  
  
]




@Injectable()
export class AppService {
  getTracks(): itrack[] {
    return tracks;
  }
}
