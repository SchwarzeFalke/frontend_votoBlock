import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importo NavController

@Component({
  selector: 'app-resultsview',
  templateUrl: './resultsview.page.html',
  styleUrls: ['./resultsview.page.scss'],
})
export class ResultsviewPage implements OnInit {



  cargar(){
      fetch("http://127.0.0.1:9999/election/period")
      .then((respuesta) => {
        return respuesta.json();
      }) .then((respuesta) => {
        respuesta.forEach(function(element) {
          console.log(element[0]);
        var ionselectoption = document.createElement("ion-select-option");
        ionselectoption.setAttribute("id","isp"+element[0]);
        ionselectoption.textContent=element[0];
        $("#ion-select1").appendChild(ionselectoption);
        });
      })
      function $(Selector) {
        return document.querySelector(Selector);
      }
  }

  cargar2(){
    fetch("http://127.0.0.1:9999/election/descript")
    .then((respuesta) => {
      return respuesta.json();
    }) .then((respuesta) => {
      respuesta.forEach(function(element) {
        console.log(element[0]);
      var ionselectoption = document.createElement("ion-select-option");
      ionselectoption.setAttribute("id","isp"+element[0]);
      ionselectoption.textContent=element[0];
      $("#ion-select2").appendChild(ionselectoption);
      });
    })
    function $(Selector) {
      return document.querySelector(Selector);
    }
  }

  cargar3(){
    fetch("http://127.0.0.1:9999/election/lugar")
    .then((respuesta) => {
      return respuesta.json();
    }) .then((respuesta) => {
      respuesta.forEach(function(element) {
        console.log(element[0]);
      var ionselectoption = document.createElement("ion-select-option");
      ionselectoption.setAttribute("id","isp"+element[0]);
      ionselectoption.textContent=element[0];
      $("#ion-select3").appendChild(ionselectoption);
      });
    })
    function $(Selector) {
      return document.querySelector(Selector);
    }
  }

  

  constructor(
    private navCtrl: NavController // Constructor para usar NavController
  ) { 
    console.log("hola");
    this.cargar();
    this.cargar2();
    this.cargar3();
  }

  // Método para ir a la pagina de elecciones presidenciales con una animacion
  goTopresidentialelectionview(id: string){
    this.navCtrl.navigateForward(`presidentialelectionview/${id}`)
  }


  ngOnInit() {
  }

}
