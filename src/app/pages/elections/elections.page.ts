import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elections',
  templateUrl: './elections.page.html',
  styleUrls: ['./elections.page.scss'],
})
export class ElectionsPage implements OnInit {

  array = '';

  constructor() { 
    this.cargar();
  }

  cargar(){
    fetch("http://127.0.0.1:8000/verify/elections/")
    .then((respuesta) => {
      return respuesta.json();
    }) .then((respuesta) => {
      this.array = respuesta;
      console.log(this.array);
    })
    function $(Selector) {
      return document.querySelector(Selector);
    }
  }

  ngOnInit() {
  }
}
