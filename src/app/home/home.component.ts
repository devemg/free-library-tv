import { Component, OnInit } from '@angular/core';
import { DataAdapterService } from '../services/data-adapter/data-adapter.service';
import { SearchService } from '../services/search/search.service';
import { ISingleCard } from '../shared-components/single-card/single-card.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchq1List: ISingleCard[] = [];
  constructor(private searchService: SearchService, private adapter: DataAdapterService) { }

  ngOnInit(): void {
    this.searchService.search('').then((res) => {
      this.searchq1List = this.adapter.getSingleCardList(res);
    }); 
  }

}
