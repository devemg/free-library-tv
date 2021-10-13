import { Injectable } from '@angular/core';
import { hpSearch } from './dummy-data/harry-potter-search';
import { LORSearch } from './dummy-data/lord-of-rings';
import { narniaSearch } from './dummy-data/narnia-search';
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
      switch(value) {
        case 'hp': 
          resolve(hpSearch);
        break;
        case 'lor': 
          resolve(LORSearch);
        break;
        case 'narnia':
          resolve(narniaSearch);
        break;
        default: 
        reject('Data not found');
        break;
      }
    });
  }

}
