import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  FormControl, FormGroup,  ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-connexion-recruteur',
  templateUrl: './connexion-recruteur.component.html',
  styleUrls: ['./connexion-recruteur.component.css']
})
export class ConnexionRecruteurComponent implements OnInit {
  postUrl: string = '';
  rec: any;
  reactiveForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(private http : HttpClient,private router: Router) { this.rec= JSON.parse(localStorage.getItem('data'));}

  ngOnInit(): void {
  }
  postMethod() {
    
    let myFormData = new FormData();
    
    myFormData.append('email', this.reactiveForm.value.email);
    myFormData.append('password', this.reactiveForm.value.password);

    return this.http.post(this.postUrl, myFormData).subscribe(
      (response : any) =>{
        const rect= response.msg[0];
        localStorage.setItem("data",JSON.stringify(rect));
         
        
      },
      
      (error) => console.log(error)
    );
  }
  onSubmit() {
    console.log('resulat', this.reactiveForm.value);
    this.postMethod();
    this.router.navigate(['/profil-r']);
  }
 
}
