export interface SearchItem {
    id?: number;
    title: string;
    genre: string;
}

export interface SearchResult {
    title: string;
    imgUrl: string;
    synopsis: string;
    url: string;
}