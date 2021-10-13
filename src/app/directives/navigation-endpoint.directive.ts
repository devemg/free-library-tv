import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[navigation-endpoint]'
})
export class NavigationEndpointDirective {
  @HostListener('sn:enter-down') onMouseEnter() {
    console.log('enter up');
  }

  constructor() { }

}
