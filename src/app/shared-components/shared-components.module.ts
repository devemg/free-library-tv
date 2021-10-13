import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalListComponent } from './horizontal-list/horizontal-list.component';
import { SingleCardComponent } from './single-card/single-card.component';



@NgModule({
  declarations: [
    HorizontalListComponent,
    SingleCardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HorizontalListComponent,
    SingleCardComponent
  ]
})
export class SharedComponentsModule { }
