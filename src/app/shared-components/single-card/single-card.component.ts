import { Component, Input, OnInit } from '@angular/core';
import { ISingleCard } from './single-card.model';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss']
})
export class SingleCardComponent implements OnInit {
  @Input() item: ISingleCard | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
