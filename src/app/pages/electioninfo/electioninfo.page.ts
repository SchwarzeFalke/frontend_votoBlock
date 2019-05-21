import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-electioninfo',
  templateUrl: './electioninfo.page.html',
  styleUrls: ['./electioninfo.page.scss'],
})
export class ElectioninfoPage implements OnInit {

  electionId = null;
  electionName = null;
  candidatesList = null;
  electionData = {
    candidacy: null,
    period: null,
    startDate: null
  }

  constructor(private activatedRoute: ActivatedRoute) {}

  loadElectionInfo(){
    fetch("http://127.0.0.1:8000/election?electionid=" + this.electionId)
      .then((respuesta) => {
        return respuesta.json();
      }) .then((respuesta) => {
        this.electionData.candidacy = respuesta[0][1];
        this.electionData.period = respuesta[0][3];
        this.electionData.startDate = respuesta[0][4];
        console.log(respuesta);
      })
      function $(Selector) {
        return document.querySelector(Selector);
    }
  }

  loadCandidatesList(){
    fetch("http://127.0.0.1:8000/verify/candidates?election_id=" + this.electionId)
      .then((respuesta) => {
        return respuesta.json();
      }) .then((respuesta) => {
        this.candidatesList = respuesta;
        console.log(this.candidatesList);
      })
      function $(Selector) {
        return document.querySelector(Selector);
    }
  }

  ngOnInit() {
    this.electionId = this.activatedRoute.snapshot.paramMap.get('id');
    this.electionName = this.activatedRoute.snapshot.paramMap.get('name');
    this.loadElectionInfo();
    this.loadCandidatesList();
  }

}
