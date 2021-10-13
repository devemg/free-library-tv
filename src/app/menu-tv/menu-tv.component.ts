import { Component, OnInit } from '@angular/core';
import { IMenuItem } from './menu-item.model';

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
      route:'Drama'
    },
    {
      icon: 'movie_creation',
      title: 'Bio',
      route: 'bio'
    },
    {
      icon: 'home',
      title: 'Home',
      route: 'home'
    },
    {
      icon: 'star',
      title: 'To Read',
      route:'to-read'
    }, 
    {
      icon: 'settings_suggest',
      title: 'Settings',
      route: 'settings'
    }
  ]; 
  constructor() { }

  ngOnInit(): void {
  }

  onClick(value: string): void {
    console.log('click or enter on ', value);
  }

}
