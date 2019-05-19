import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importo NavController
@Component({
  selector: 'app-resultsview',
  templateUrl: './resultsview.page.html',
  styleUrls: ['./resultsview.page.scss'],
})
export class ResultsviewPage implements OnInit {

  constructor(
    private navCtrl: NavController // Constructor para usar NavController
  ) { 
    
  }

  // Método para ir a la pagina de elecciones presidenciales con una animacion
  goTopresidentialelectionview(id: string){
    this.navCtrl.navigateForward(`presidentialelectionview/${id}`)
  }

  ngOnInit() {
  }

}
