import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-candidateinfo',
  templateUrl: './candidateinfo.page.html',
  styleUrls: ['./candidateinfo.page.scss'],
})
export class CandidateinfoPage implements OnInit {

  candidateId = null;
  candidateData = {
    name: null,
    candidacy: null,
    party: null,
    status: null
  }

  constructor(private activatedRoute: ActivatedRoute) { }

  loadCandidateInfo(){
    fetch("http://127.0.0.1:8000/candidate/information?electoral_key=" + this.candidateId)
      .then((respuesta) => {
        return respuesta.json();
      }) .then((respuesta) => {
        this.candidateData.name = respuesta[0][2] + ' ' + respuesta[0][5];
        this.candidateData.candidacy = respuesta[0][7];
        this.candidateData.party = respuesta[0][6];
        if(respuesta[0][8] == '1'){
          this.candidateData.status = "active";
        }
        else{
          this.candidateData.status = "Inactive";
        }
        console.log(respuesta);
      })
      function $(Selector) {
        return document.querySelector(Selector);
    }
  }

  ngOnInit() {
    this.candidateId = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadCandidateInfo();
  }

}
