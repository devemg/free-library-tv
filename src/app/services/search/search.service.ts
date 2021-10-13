import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { dummySearch } from './dummy-data';
import { ISearchResultModel } from './search.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  /**
   * Search by text 
   * No limit
   * 
   * @param value 
   * @returns 
   */
  search(value: string): Promise<ISearchResultModel> {
    return new Promise((resolve,reject) => {
      resolve(dummySearch);
    });
  }

}
