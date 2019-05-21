import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  electoral_key = '';
  name = '';
  address = '';

  constructor() {
    this.cargar();
  }

  cargar(){
    fetch("http://127.0.0.1:8000/get_voter_information")
    .then((respuesta) => {
      return respuesta.json();
    }) .then((respuesta) => {
      this.electoral_key = respuesta[0][1] + respuesta[0][2];
      this.name = respuesta[0][0];
      this.address = respuesta[0][3];
    })
    function $(Selector) {
      return document.querySelector(Selector);
    }
  }

  ngOnInit() {
  }

}
