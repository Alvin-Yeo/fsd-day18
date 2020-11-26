import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { AnimeHttpService } from '../anime-http.service';

@Component({
  selector: 'app-searh-result',
  templateUrl: './searh-result.component.html',
  styleUrls: ['./searh-result.component.css']
})
export class SearhResultComponent implements OnInit {

  title: string;
  genre: string;

  results = [];

  canShare = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: AnimeHttpService,
    private webShare: NgNavigatorShareService
  ) { }

  ngOnInit(): void {
    this.canShare = this.webShare.canShare();

    this.title = this.activatedRoute.snapshot.params['title'];
    this.genre = this.activatedRoute.snapshot.params['genre'];

    this.http.searchAnime(this.title, this.genre)
      .then(response => { 
        this.results = response.results;
        // console.log(this.results);
       });
  }

  shareThis(index: number) {
    const r = this.results[index];
    this.webShare.share({
      title: r.title,
      text: r.synopsis,
      url: r.url
    })
    .catch(e => console.error('Webshare Error: ', e));
  }
}
