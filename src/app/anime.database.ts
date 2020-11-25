import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { SearchItem } from './model';

@Injectable()
export class AnimeDatabase extends Dexie {

    private query: Dexie.Table<SearchItem, number>;

    constructor() {
        super('AnimeSearchDB');

        // create schema
        this.version(1).stores({
            query: '++id, title' 
        });
        this.query = this.table('query');
    }

    async addSearchItem(q: SearchItem): Promise<any> {
        q.title = q.title.trim().toLowerCase();

        // check exisitng records
        const count = await this.query
            .where('title').equals(q.title)
            .and(doc => doc.genre == q.genre)
            .count();
        console.log('get count ', count);

        if(count <= 0) {
            return await this.query.add(q);
        }
    }

    async getSearchItemList(): Promise<SearchItem[]> {
        return await this.query.toArray();
    }
}