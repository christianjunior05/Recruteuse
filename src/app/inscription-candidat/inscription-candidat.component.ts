import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup,  ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription-candidat',
  templateUrl: './inscription-candidat.component.html',
  styleUrls: ['./inscription-candidat.component.css']
})
export class InscriptionCandidatComponent implements OnInit {
  postUrl: string = 'http://localhost/recrutement/candidat.php';
  product = [];
  reactiveForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    conf_password: new FormControl()
  });

  constructor( private http : HttpClient, private formBuilder: FormBuilder,private router: Router ) { }

  ngOnInit(): void {
  }
  postMethod() {
    let myFormData = new FormData();
    myFormData.append('name', this.reactiveForm.value.name);
    myFormData.append('email', this.reactiveForm.value.email);
    myFormData.append('password', this.reactiveForm.value.password);
    myFormData.append('conf_password', this.reactiveForm.value.conf_password);

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
