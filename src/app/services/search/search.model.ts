export interface SearchResultModel {
    numFound: number;
    start: number;
    numFoundExact: boolean;
    num_found: number;
    q: string;
    offset: any;
    docs: SearchItemModel[];
}
export interface SearchItemModel{
    key: string;
    type: string;
    title: string;
    title_suggest: string;
    has_fulltext: string;
    author_key: string[];
    place: string[];
    language: string[];
    cover_i: string;
    isbn: string[];
    author_name: string[];
    person: string[];
    subject: string[];
}