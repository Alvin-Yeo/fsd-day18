import { Component, OnInit } from '@angular/core';
import { AnimeDatabase } from '../anime.database';
import { SearchItem } from '../model';

@Component({
  selector: 'app-searh-list',
  templateUrl: './searh-list.component.html',
  styleUrls: ['./searh-list.component.css']
})
export class SearhListComponent implements OnInit {

  searchList: SearchItem[];

  constructor(private db: AnimeDatabase) { }

  ngOnInit(): void {
    this.db.getSearchItemList()
      .then(result => { 
        this.searchList = result;
        // console.log(this.searchList);
      });
  }
}
