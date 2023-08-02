import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription-recruteur',
  templateUrl: './inscription-recruteur.component.html',
  styleUrls: ['./inscription-recruteur.component.css']
})
export class InscriptionRecruteurComponent implements OnInit {
  postUrl: string = 'http://localhost/recrutement/recruteur.php';
  product = [];
  reactiveForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    photo: new FormControl(),
    fonction: new FormControl()
  });

  constructor( private http : HttpClient, private formBuilder: FormBuilder,private router: Router ) { }


  ngOnInit(): void {
  }
  postMethod() {
    let myFormData = new FormData();
    myFormData.append('name', this.reactiveForm.value.name);
    myFormData.append('email', this.reactiveForm.value.email);
    myFormData.append('password', this.reactiveForm.value.password);
    myFormData.append('photo', this.reactiveForm.value.photo);
    myFormData.append('fonction', this.reactiveForm.value.fonction);

    return this.http.post(this.postUrl, myFormData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
 
  

  onSubmit() {
    console.log('resulat', this.reactiveForm.value);
    this.postMethod();
    this.router.navigate(['/connexion-recruteur']);
  }

}
