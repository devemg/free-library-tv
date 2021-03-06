import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItem } from './menu-item.model';
declare var SpatialNavigation: any;
@Component({
  selector: 'app-menu-tv',
  templateUrl: './menu-tv.component.html',
  styleUrls: ['./menu-tv.component.scss']
})
export class MenuTvComponent implements OnInit {
  menuItems: IMenuItem[] = [
    {
      icon: 'emoji_events',
      title: 'Sports',
      route:''
    },
    {
      icon: 'movie_creation',
      title: 'Bio',
      route: ''
    },
    {
      icon: 'home',
      title: 'Home',
      route: ''
    },
    {
      icon: 'star',
      title: 'To Read',
      route:''
    }, 
    {
      icon: 'settings_suggest',
      title: 'Settings',
      route: ''
    }
  ]; 
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick(value: string): void {
    console.log('click or enter on ', value);
  }

  onFocusMenu(): void {
    //console.log('FIX NEXT MOVEMENT WITH DOWN', this.router.url.includes('detail') ? '@details' : '@carousel');
    /*SpatialNavigation.set('menu',{
      leaveFor: {
        left: '',
        right: '',
        up: '',
        down: this.router.url.includes('detail') ? '@details' : '@carousel'
      }
    });*/
  }

}
