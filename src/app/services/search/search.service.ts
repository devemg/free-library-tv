import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { dummySearch } from './dummy-data';

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
  search(value: string) {
    return new Promise((resolve,reject) => {
      resolve(dummySearch);
    });
  }

}
