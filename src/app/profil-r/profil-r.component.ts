import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-profil-r',
  templateUrl: './profil-r.component.html',
  styleUrls: ['./profil-r.component.css']
})
export class ProfilRComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
