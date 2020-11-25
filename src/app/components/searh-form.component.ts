import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimeHttpService } from '../anime-http.service';
import { AnimeDatabase } from '../anime.database';
import { SearchItem } from '../model';

@Component({
  selector: 'app-searh-form',
  templateUrl: './searh-form.component.html',
  styleUrls: ['./searh-form.component.css']
})
export class SearhFormComponent implements OnInit {
  
  searchForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private db: AnimeDatabase,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.searchForm = this.createFormGroup();
  }

  get title() { return this.searchForm.get('title') };
  get genre() { return this.searchForm.get('genre') };

  createFormGroup(): FormGroup {
    return this.fb.group({
      title: this.fb.control('', [ Validators.required ]),
      genre: this.fb.control('', [ Validators.required ] )
    });
  }

  async saveSearchCriteria() {
    const input: SearchItem = {
      title: this.title.value,
      genre: this.genre.value
    };
    
    await this.db.addSearchItem(input);
    this.goSearch();
  }

  goSearch() {
    this.router.navigate(['/search', this.genre.value, this.title.value]);
  }
}
