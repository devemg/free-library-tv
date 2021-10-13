import { Component, OnInit } from '@angular/core';
import { DataAdapterService } from '../services/data-adapter/data-adapter.service';
import { SearchService } from '../services/search/search.service';
import { IHorizontalList } from '../shared-components/horizontal-list/horizontal-list.model';
declare var SpatialNavigation: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listCards: Array<IHorizontalList> = [];
  constructor(private searchService: SearchService, private adapter: DataAdapterService) { }

  ngOnInit(): void {
    this.searchService.search('hp').then((res) => {
      this.listCards.push({
        title: 'Harry Potter',
        items: this.adapter.getSingleCardList(res)
      });
    })
    .catch((err) => console.error(err)); 
    this.searchService.search('lor').then((res) => {
      this.listCards.push({
        title: 'Lord of Rings',
        items: this.adapter.getSingleCardList(res),
      });
    })
    .catch((err) => console.error(err)); 
    this.searchService.search('narnia').then((res) => {
      this.listCards.push({
        title: 'Narnia',
        items: this.adapter.getSingleCardList(res),
      });
    })
    .catch((err) => console.error(err)); 
    SpatialNavigation.focus('menu');
  }

}
