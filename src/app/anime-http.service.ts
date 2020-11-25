import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AnimeHttpService {

    constructor(private http: HttpClient) {}

    async searchAnime(title: string, genre: string): Promise<any> {
        return await this.http.get(`https://api.jikan.moe/v3/search/${genre}?q=${title}`).toPromise();
    }
}