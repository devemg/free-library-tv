import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISingleCard } from './single-card.model';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss']
})
export class SingleCardComponent implements OnInit {
  @Input() item: ISingleCard | undefined;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDetail(): void {
    if (this.item) {
      this.router.navigate(['details', this.item?.id]);
    } else {
      console.log('item is undefined');
    }
  }
}
