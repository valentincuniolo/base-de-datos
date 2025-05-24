import { Injectable } from '@nestjs/common';

export interface itrack {
  id:number;
  tittle:string;
  duration:number;
  artist:string;
}

export const tracks : itrack[] = [

 {
    id: 1,
    tittle: "Imagine",
    duration: 6,
    artist: "John Lennon"
  },

   {
    id: 2,
    tittle: "loca",
    duration: 7,
    artist: "ariana grande"
  },

   {
    id: 3,
    tittle: "marginale",
    duration: 5,
    artist: "paul scholles"
  }


  
  
]




@Injectable()
export class AppService {
  getTracks(): itrack[] {
    return tracks;
  }
}
