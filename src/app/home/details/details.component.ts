import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataAdapterService } from 'src/app/services/data-adapter/data-adapter.service';
import { SearchService } from 'src/app/services/search/search.service';
import { IHorizontalList } from 'src/app/shared-components/horizontal-list/horizontal-list.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id: string = '';
  data: any;
  constructor(private activatedRoute: ActivatedRoute, private searchService: SearchService, private adaptor: DataAdapterService,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.searchService.getDetail(this.id).subscribe((res: any) => {
      console.log(res);
      this.data = res;
      /*this.covers = {
        title: '',
        items: res.covers.map((el: any) => ({
          id: '',
          title: '',
          image: el ? `${this.adaptor.URL_IMAGES}/id/${el}.jpg` : undefined,
        }))
      };*/
    });
  }

  goBack(): void {
    this.router.navigate(['../']);
  }
}
