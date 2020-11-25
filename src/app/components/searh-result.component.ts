import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeHttpService } from '../anime-http.service';

@Component({
  selector: 'app-searh-result',
  templateUrl: './searh-result.component.html',
  styleUrls: ['./searh-result.component.css']
})
export class SearhResultComponent implements OnInit {

  title: string;
  genre: string;

  results = []

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: AnimeHttpService
  ) { }

  ngOnInit(): void {
    this.title = this.activatedRoute.snapshot.params['title'];
    this.genre = this.activatedRoute.snapshot.params['genre'];

    this.http.searchAnime(this.title, this.genre)
      .then(response => { 
        this.results = response.results;
        // console.log(this.results);
       });
  }
}
