import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presidentialelectionview',
  templateUrl: './presidentialelectionview.page.html',
  styleUrls: ['./presidentialelectionview.page.scss'],
})
export class PresidentialelectionviewPage implements OnInit {


  cargar(){
    fetch("http://127.0.0.1:9999/election/electoral")
    .then((respuesta) => {
      return respuesta.json();
    }) .then((respuesta) => {
      respuesta.forEach(function(element) {
        console.log(element[0])
      var ionselectoption = document.createElement("ion-select-input");
      ionselectoption.setAttribute("id","isp"+element[0]);
      ionselectoption.textContent=element[0];
      $("#ion-label1").appendChild(ionselectoption);
      console.log(element[0])
      });
    })
    function $(Selector) {
      return document.querySelector(Selector);
    }
}

  cargarperiod(){
  fetch("http://127.0.0.1:9999/election/electoral")
  .then((respuesta) => {
    return respuesta.json();
  }) .then((respuesta) => {
    respuesta.forEach(function(element) {
      console.log(element[1])
    var ionselectoption = document.createElement("ion-select-input");
    ionselectoption.setAttribute("id","isp"+element[1]);
    ionselectoption.textContent=element[1];
    $("#ion-label1").appendChild(ionselectoption);
    console.log(element[1])
    });
  })
  function $(Selector) {
    return document.querySelector(Selector);
  }
}

cargardescript(){
  fetch("http://127.0.0.1:9999/election/electoral")
  .then((respuesta) => {
    return respuesta.json();
  }) .then((respuesta) => {
    respuesta.forEach(function(element) {
      console.log(element[1])
    var ionselectoption = document.createElement("ion-select-input");
    ionselectoption.setAttribute("id","isp"+element[2]);
    ionselectoption.textContent=element[2];
    $("#ion-eleccion").appendChild(ionselectoption);
    console.log(element[2])
    });
  })
  function $(Selector) {
    return document.querySelector(Selector);
  }
}

cargarlugar(){
  fetch("http://127.0.0.1:9999/election/electoral")
  .then((respuesta) => {
    return respuesta.json();
  }) .then((respuesta) => {
    respuesta.forEach(function(element) {
      console.log(element[1])
    var ionselectoption = document.createElement("ion-select-input");
    ionselectoption.setAttribute("id","isp"+element[3]);
    ionselectoption.textContent=element[3];
    $("#ion-eleccion").appendChild(ionselectoption);
    console.log(element[3])
    });
  })
  function $(Selector) {
    return document.querySelector(Selector);
  }
}

cargarfechainicio(){
  fetch("http://127.0.0.1:9999/election/electoral")
  .then((respuesta) => {
    return respuesta.json();
  }) .then((respuesta) => {
    respuesta.forEach(function(element) {
      console.log(element[4])
    var ionselectoption = document.createElement("ion-select-input");
    ionselectoption.setAttribute("id","isp"+element[4]);
    ionselectoption.textContent=element[4];
    $("#ion-eleccion").appendChild(ionselectoption);
    console.log(element[4])
    });
  })
  function $(Selector) {
    return document.querySelector(Selector);
  }
}

cargarfechafin(){
  fetch("http://127.0.0.1:9999/election/electoral")
  .then((respuesta) => {
    return respuesta.json();
  }) .then((respuesta) => {
    respuesta.forEach(function(element) {
    var ionselectoption = document.createElement("ion-select-input");
    ionselectoption.setAttribute("id","isp"+element[5]);
    ionselectoption.textContent=element[5];
    $("#ion-eleccion").appendChild(ionselectoption);
    console.log(element[5])
    });
  })
  function $(Selector) {
    return document.querySelector(Selector);
  }
}

cargarGanador(){
  fetch("http://127.0.0.1:9999/election/electoral")
  .then((respuesta) => {
    return respuesta.json();
  }) .then((respuesta) => {
    respuesta.forEach(function(element) {
    var ionselectoption = document.createElement("ion-select-input");
    ionselectoption.setAttribute("id","isp"+element[6]);
    ionselectoption.textContent=element[6];
    $("#ion-eleccion").appendChild(ionselectoption);
    console.log(element[6])
    });
  })
  function $(Selector) {
    return document.querySelector(Selector);
  }
}
  constructor() { 
    this.cargar();
    this.cargarperiod();
    this.cargardescript();
    this.cargarlugar();
    this.cargarfechainicio();
    this.cargarfechafin();
    this.cargarGanador();
  }
  
  ngOnInit() {
  }

}
