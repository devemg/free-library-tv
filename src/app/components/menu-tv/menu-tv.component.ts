import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item.model';

@Component({
  selector: 'app-menu-tv',
  templateUrl: './menu-tv.component.html',
  styleUrls: ['./menu-tv.component.scss']
})
export class MenuTvComponent implements OnInit {
  menuItems: MenuItem[] = [
    {
      icon: 'emoji_events',
      title: 'Sports'
    },
    {
      icon: 'movie_creation',
      title: 'movies',
    },
    {
      icon: 'home',
      title: 'Home',
    },
    {
      icon: 'star',
      title: 'To Watch'
    }, 
    {
      icon: 'settings_suggest',
      title: 'Settings',
    }
  ]; 
  constructor() { }

  ngOnInit(): void {
  }

  onClick(value: string): void {
    console.log('click or enter on ', value);
  }

}
