import { Component, Input, OnInit } from '@angular/core';
import { ISingleCard } from '../single-card/single-card.model';

@Component({
  selector: 'app-horizontal-list',
  templateUrl: './horizontal-list.component.html',
  styleUrls: ['./horizontal-list.component.scss']
})
export class HorizontalListComponent implements OnInit {
  @Input() data : ISingleCard[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
