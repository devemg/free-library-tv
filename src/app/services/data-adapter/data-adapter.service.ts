import { Injectable } from '@angular/core';
import { ISingleCard } from 'src/app/shared-components/single-card/single-card.model';
import { ISearchResultModel } from '../search/search.model';

@Injectable({
  providedIn: 'root'
})
export class DataAdapterService {
  URL_IMAGES = 'http://covers.openlibrary.org/b'
  constructor() { }

  getSingleCardList(searchItems: ISearchResultModel): ISingleCard[] {
    return searchItems.docs.map((element) => ({
      id: element.isbn ? element.isbn[0] : '',
      image: `${this.URL_IMAGES}/id/${element.cover_i}.jpg`,
      title: element.title ? element.title : 'default title',
      size: '',
    }));
  }

}
