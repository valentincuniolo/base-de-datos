import { Injectable } from '@nestjs/common';
import { Track } from './track.interface';

const BASE_URL = 'http://localhost:3030/tracks/';

@Injectable()
export class TrackService {
  async createtrack(track: Track): Promise<Track> {
    const idn = await this.setId();

    const newTrack: Track = {
      id: idn,
      tittle: track.tittle,
      duration: track.duration,
      artist: track.artist,
    };

    const res = await fetch(BASE_URL, {
      method: 'POST',
      body: JSON.stringify(newTrack),
      headers: {
        'content-type': 'application/json', // corregido
      },
    });

    const parsed = await res.json();
    return parsed;
  }

  private async setId(): Promise<number> {
    const tracks = await this.getTracks();
    const id = tracks.length > 0 ? tracks[tracks.length - 1].id + 1 : 1;
    return id;
  }

  async getTrackById(id: number): Promise<Track> {
    const res = await fetch(BASE_URL + id);
    const parsed = await res.json();
    return parsed;
  }

  async getTracks(): Promise<Track[]> {
    const res = await fetch(BASE_URL);
    const parsed = await res.json();
    return parsed;
  }
}