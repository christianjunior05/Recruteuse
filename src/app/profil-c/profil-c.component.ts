import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-c',
  templateUrl: './profil-c.component.html',
  styleUrls: ['./profil-c.component.css']
})
export class ProfilCComponent implements OnInit {
  
  bmodif=true
  bregist=true

  constructor() { }

  ngOnInit(): void {
    document.getElementById('bmodif').addEventListener('click', () => {
      if (this.bmodif) {
        for (let i = 0; i < document.getElementsByClassName('modif').length; i++) {
          document.getElementsByClassName('modif').item(i).setAttribute('class', 'nmodif');        
          document.getElementsByClassName('nmodif').item(i).setAttribute('class', 'modif');
          document.getElementById('bregist').style.display="block";      
          document.getElementById('bmodif').style.display="none";      
        }  
      }
    });

    document.getElementById('bregist').addEventListener('click', () => {
      if (this.bmodif) {
        for (let i = 0; i < document.getElementsByClassName('modif').length; i++) {
          document.getElementsByClassName('nmodif').item(i).setAttribute('class', 'modif');        
          document.getElementsByClassName('modif').item(i).setAttribute('class', 'nmodif');
          document.getElementById('bregist').style.display="none";      
          document.getElementById('bmodif').style.display="block";      
        }  
      }
    })
  }

}

