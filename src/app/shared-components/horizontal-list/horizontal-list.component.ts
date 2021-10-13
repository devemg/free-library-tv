import { Component, Input, OnInit } from '@angular/core';
import { IHorizontalList } from './horizontal-list.model';

@Component({
  selector: 'app-horizontal-list',
  templateUrl: './horizontal-list.component.html',
  styleUrls: ['./horizontal-list.component.scss']
})
export class HorizontalListComponent implements OnInit {
  @Input() data : IHorizontalList | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
