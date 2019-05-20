import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Información de perfil',
      url: '/menu/profile',
      icon: 'ios-contact'
    },
    {
      title: 'Elecciones disponibles',
      url: '/menu/elections',
      icon: 'md-albums'
    }
  ]

  selectedPath = ''

  constructor(private router: Router) { 
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {
  }

}
